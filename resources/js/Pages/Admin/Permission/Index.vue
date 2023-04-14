<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Table from '@/Pages/Shared/Table.vue';
import { getCurrentInstance } from 'vue';
import Swal from 'sweetalert2';
import { format, formatDistance } from 'date-fns';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Permission Management',
        active: true
    }
];

let props = defineProps({
    permissions: Object,
    filters: Object
});

let deletePermission = (d_permission) => {
    Swal.fire({
        title: 'Are you sure want to delete this permission?',
        icon: 'warning',
        html: '',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: 'red'
    }).then((result) => {
        if(result.isConfirmed) {
            router.delete(route('admin.permission.destroy', d_permission), {
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
    <Head title="Permission Management" />

    <AuthenticatedLayout>
        <ContentHeader title="Permission Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('admin.permission.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Permission</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.permission.index')" :filters="filters" :data="permissions">
                    <template #thead>
                        <tr>
                            <td>#</td>
                            <th>Name</th>
                            <th>Guard Name</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(permission, index) in permissions.data" :key="permission.id">
                            <td>{{ iterationPaginated(permissions, index) }}</td>
                            <td>{{ permission.name }}</td>
                            <td>{{ permission.guard_name }}</td>
                            <td>{{ format(new Date(permission.created_at), 'yyyy-MM-dd H:m:ss') }}</td>
                            <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <Link :href="route('admin.permission.edit', permission)" class="link-success">
                                        <i class="ri-edit-2-line fs-17"></i>
                                    </Link>
                                    <a href="#" class="link-danger" @click="deletePermission(permission)">
                                        <i class="ri-delete-bin-line fs-17"></i>
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