<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Table from '@/Pages/Shared/Table.vue';

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
</script>

<template>
    <Head title="User Management" />

    <AuthenticatedLayout>
        <ContentHeader title="User Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <a href="#" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </a>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List User</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.user.index')" :filters="filters" :data="users">
                    <template #thead>
                        <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Roles</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(user, index) in users.data" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td></td>
                            <td>{{ user.created_at }}</td>
                            <td>
                                <div class="d-flex flex-wrap gap-2">
                                    <a href="#" class="link-success">
                                        <i class="ri-edit-2-line fs-17"></i>
                                    </a>
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