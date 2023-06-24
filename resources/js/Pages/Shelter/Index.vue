<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { getCurrentInstance } from 'vue';
import { format } from 'date-fns';
import Table from '@/Pages/Shared/Table.vue';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;
const breadcrumbs = [
    {
        title: 'Pusat Pemindahan',
        active: false,
        link: route('shelter.index')
    }
];

const props = defineProps({
    filters: Object,
    shelters: Object
});
</script>

<template>
    <Head title="Pusat Pemindanan" />

    <AuthenticatedLayout>
        <ContentHeader title="Pusat Pemindahan" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('shelter.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Pusat Pemindahan Berdaftar</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('shelter.index')" :filters="filters" :data="shelters">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Nama PPS</th>
                            <th>Negeri</th>
                            <th>Daerah</th>
                            <th>Mukim</th>
                            <th>Jenis</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(shelter, index) in shelters">
                            <td>{{ iterationPaginated(shelters,index) }}</td>
                            <td>{{ shelter.name }}</td>
                            <td>{{ shelter.state.name }}</td>
                            <td>{{ shelter.district.name }}</td>
                            <td>{{ shelter.parish.name }}</td>
                            <td>{{ shelter.shelterType.name }}</td>
                            <td>
                                <div class="d-flex grap-2">
                                    <Link :href="route('shelter.edit', shelter)" class="btn btn-info">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Edit
                                    </Link>
                                    <button type="button" class="btn btn-danger">
                                        <i class="ri-delete-bin-fill align-bottom me-1"></i> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>