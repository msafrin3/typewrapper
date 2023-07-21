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
const breadcrumbs = [];

const props = defineProps({
    filters: Object,
    disasters: Object
});
</script>

<template>
    <Head title="Pengurusan Bencana" />

    <AuthenticatedLayout>
        <ContentHeader title="Pengurusan Bencana" :breadcrumbs="breadcrumbs" />

        <div class="mb-3" v-if="$page.props.auth.user.can.includes('create-bencana')">
            <Link :href="route('disaster.create')" class="btn btn-success">
                <i class="ri-add-circle-fill align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Bencana</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('disaster.index')" :filters="filters" :data="disasters">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Jenis Bencana</th>
                            <th>Negeri</th>
                            <th>Daerah</th>
                            <th>Mukim</th>
                            <th>Nama</th>
                            <th>Tarikh</th>
                            <th>Status</th>
                            <th>Tindakan</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(disaster, index) in disasters.data">
                            <td>{{ iterationPaginated(disasters, index) }}</td>
                            <td>{{ disaster.kategori.name }}</td>
                            <td>{{ disaster.state.name }}</td>
                            <td>{{ disaster.district.name }}</td>
                            <td>{{ disaster.parish_id == null ? '' : disaster.parish.name }}</td>
                            <td>{{ disaster.name }}</td>
                            <td>{{ format(new Date(disaster.datetime_start), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>{{ disaster.status }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <!-- <Link :href="route('disaster.edit', disaster)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Edit
                                    </Link> -->
                                    <Link :href="route('disaster.show', disaster)" class="btn btn-info btn-sm">
                                        <i class="ri-eye-2-line align-bottom me-1"></i> Lihat
                                    </Link>
                                    <button type="button" class="btn btn-danger btn-sm" v-if="$page.props.auth.user.can.includes('delete-bencana')">
                                        <i class="ri-delete-bin-line align-bottom me-1"></i> Delete
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