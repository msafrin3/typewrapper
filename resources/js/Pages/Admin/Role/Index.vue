<script setup>
import { Link, Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Table from '@/Pages/Shared/Table.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { getCurrentInstance } from 'vue';
import { format } from 'date-fns';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;

const props = defineProps({
    roles: Object,
    filters: Object
});

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Role Management',
        active: true
    }
];
</script>

<template>
    <Head title="Role Management" />

    <AuthenticatedLayout>
        <ContentHeader title="Role Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('admin.role.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Role</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.role.index')" :filters="filters" :data="roles">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Guard Name</th>
                            <th>Permissions</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(role, index) in roles.data" :key="role.id">
                            <td>{{ iterationPaginated(roles, index) }}</td>
                            <td>{{ role.name }}</td>
                            <td>{{ role.guard_name }}</td>
                            <td></td>
                            <td>{{ format(new Date(role.created_at), 'yyyy-MM-dd H:m:ss') }}</td>
                            <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <Link :href="route('admin.role.edit', role)" class="link-success">
                                        <i class="ri-edit-2-line fs-17"></i>
                                    </Link>
                                    <a href="#" class="link-danger">
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