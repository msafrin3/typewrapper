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

        <div class="card">
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
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>