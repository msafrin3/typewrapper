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
        title: 'Settings',
        active: true
    },
    {
        title: 'State Management',
        active: false,
        link: route('setting.state.index')
    }
];

const props = defineProps({
    filters: Object,
    states: Object
});
</script>

<template>
    <Head title="" />

    <AuthenticatedLayout>
        <ContentHeader title="" :breadcrumbs="breadcrumbs" />

        <!-- <div class="mb-3">
            <Link :href="route('setting.state.create')" class="btn btn-success">
                <i class="ri-add-circle-fill align-bottom me-1"></i> Add New
            </Link>
        </div> -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Meta</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('setting.state.index')" :filters="filters" :data="states">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Negeri</th>
                            <th>Tarikh Kemaskini</th>
                            <th>Tindakan</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(state, index) in states.data" :key="state.id">
                            <td>{{ iterationPaginated(states, index) }}</td>
                            <td>{{ state.name }}</td>
                            <td>{{ format(new Date(state.updated_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <Link :href="route('setting.state.edit', state)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Edit
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>