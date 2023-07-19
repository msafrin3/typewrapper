<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ContentHeader from './Shared/ContentHeader.vue';

const breadcrumbs = [
    {
        title: 'Dashboard',
        active: true,
        link: route('dashboard')
    }
];
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <ContentHeader title="Dashboard" :breadcrumbs="breadcrumbs" />
    </AuthenticatedLayout>
</template>
