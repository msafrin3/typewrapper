<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';

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
</script>

<template>
    <Head title="User Management" />

    <AuthenticatedLayout>
        <ContentHeader title="User Management" :breadcrumbs="breadcrumbs" />
    </AuthenticatedLayout>
</template>