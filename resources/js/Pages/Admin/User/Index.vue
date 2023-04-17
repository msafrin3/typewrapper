<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Table from '@/Pages/Shared/Table.vue';
import { format } from 'date-fns';
import { getCurrentInstance } from 'vue';
import Swal from 'sweetalert2';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'User Management',
        active: true
    }
];

let props = defineProps({
    users: Object,
    filters: Object
});

let deleteUser = (user) => {
    Swal.fire({
        title: 'Are you sure want to delete this user?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: 'red'
    }).then((result) => {
        if(result.isConfirmed) {
            router.delete(route('admin.user.destroy', user), {
                onSuccess: (response) => {
                    if(response.props.response.success) {
                        Swal.fire('Success!', response.props.response.success, 'success');
                    }
                }
            });
        }
    });
}

let restoreUser = (user) => {
    Swal.fire({
        title: 'Restore User?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Restore',
        confirmButtonColor: '#0ab39c'
    }).then((result) => {
        if(result.isConfirmed) {
            router.post(route('admin.user.restore', user.id), {
                onSuccess: (response) => {
                    if(response.props.response.success) {
                        Swal.fire('Success!', response.props.response.success, 'success');
                    }
                }
            });
        }
    });
}
</script>

<template>
    <Head title="User Management" />

    <AuthenticatedLayout>
        <ContentHeader title="User Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('admin.user.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List User</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.user.index')" :filters="filters" :data="users">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Roles</th>
                            <th>Permissions</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(user, index) in users.data" :key="user.id" :class="{ 'table-danger': user.deleted_at != null }">
                            <td>{{ iterationPaginated(users, index) }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <ul>
                                    <li v-for="role in user.roles">{{ role.name }}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li v-for="permission in user.permissions">{{ permission.name }}</li>
                                </ul>
                            </td>
                            <!-- <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <span class="badge badge-soft-secondary fs-11" v-for="role in user.roles">{{ role.name }}</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <span class="badge badge-soft-secondary fs-11" v-for="permission in user.permissions">{{ permission.name }}</span>
                                </div>
                            </td> -->
                            <td>{{ format(new Date(user.created_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <Link :href="route('admin.user.edit', user)" class="link-success" v-if="user.deleted_at == null">
                                        <i class="ri-edit-2-line fs-17"></i>
                                    </Link>
                                    <a href="#" class="link-danger" @click="deleteUser(user)" v-if="user.deleted_at == null">
                                        <i class="ri-delete-bin-line fs-17"></i>
                                    </a>
                                    <a href="javascript:;" class="link-success" v-if="user.deleted_at != null" @click="restoreUser(user)">
                                        <i class="ri-repeat-2-line fs-17"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>