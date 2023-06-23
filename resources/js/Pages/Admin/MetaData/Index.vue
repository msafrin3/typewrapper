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
        title: 'Administrator',
        active: true
    },
    {
        title: 'Meta Data',
        active: false,
        link: route('admin.meta-data.index')
    }
];

const props = defineProps({
    metaDatas: Object,
    filters: Object
});
</script>

<template>
    <Head title="" />

    <AuthenticatedLayout>
        <ContentHeader title="Meta Data Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('admin.meta-data.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Meta</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.meta-data.index')" :filters="filters" :data="metaDatas">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Meta</th>
                            <th>Name</th>
                            <th>Group Helper</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(metadata, index) in metaDatas.data" :key="metadata.id">
                            <td>{{ iterationPaginated(metaDatas, index) }}</td>
                            <td>{{ metadata.meta.name }}</td>
                            <td>{{ metadata.name }}</td>
                            <td>{{ metadata.group_helper }}</td>
                            <td>{{ format(new Date(metadata.created_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <Link :href="route('admin.meta-data.edit', metadata)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill me-1"></i> Edit
                                    </Link>
                                    <button type="button" class="btn btn-danger btn-sm">
                                        <i class="ri-delete-bin-fill me-1"></i> Delete
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