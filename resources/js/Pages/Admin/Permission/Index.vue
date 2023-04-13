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
        title: 'Permission Management',
        active: true
    }
];

let props = defineProps({
    permissions: Object,
    filters: Object
});
</script>

<template>
    <Head title="Permission Management" />

    <AuthenticatedLayout>
        <ContentHeader title="Permission Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <a href="#" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </a>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Permission</h3>
            </div>
            <div class="card-body"></div>
        </div>
    </AuthenticatedLayout>
</template>