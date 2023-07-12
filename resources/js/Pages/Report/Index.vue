<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { getCurrentInstance } from 'vue';
import { format } from 'date-fns';
import Table from '@/Pages/Shared/Table.vue';
import Swal from 'sweetalert2';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;
const breadcrumbs = [
    {
        title: 'Laporan & Statistik',
        active: true
    },
    {
        title: 'Laporan Terkini Bencana',
        active: true
    }
];

const props = defineProps({
    filters: Object
});
</script>

<template>
    <Head title="Laporan Terkini Bencana" />

    <AuthenticatedLayout>
        <ContentHeader title="Laporan Terkini Bencana" :breadcrumbs="breadcrumbs" />

        <!-- <div class="mb-3">
            <Link :href="" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div> -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Laporan Terkini Kejadian Bencana</h3>
            </div>
            <div class="card-body">
                <!-- <Table :data-route="" :filters="filters" :data="metas">
                    <template #thead>
                        <tr></tr>
                    </template>
                    <tbody></tbody>
                </Table> -->
            </div>
        </div>
    </AuthenticatedLayout>
</template>