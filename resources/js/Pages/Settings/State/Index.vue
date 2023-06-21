<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';

const breadcrumbs = [
    {
        title: 'Setting',
        active: true
    },
    {
        title: 'State Management',
        active: false,
        link: route('setting.state.index')
    }
];

</script>

<template>
    <Head title="State Management" />

    <AuthenticatedLayout>
        <ContentHeader title="State Management" :breadcrumbs="breadcrumbs" />
    </AuthenticatedLayout>
</template>