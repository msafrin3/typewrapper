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
    filters: Object,
    reports: Object
});

let jana = {
    report_date: null
}

let generate = () => {
    router.post(route('report.store'), jana, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
                $("#modalGenerate").modal('toggle');
            }
        }
    });
}
</script>

<template>
    <Head title="Laporan Terkini Bencana" />

    <AuthenticatedLayout>
        <ContentHeader title="Laporan Terkini Bencana" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalGenerate">
                <i class="ri-add-circle-fill align-bottom me-1"></i> Jana Laporan
            </button>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Laporan Terkini Kejadian Bencana</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('report.index')" :filters="filters" :data="reports">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Tarikh Laporan</th>
                            <th>Dijana Oleh</th>
                            <th>Tindakan</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(report, index) in reports.data">
                            <td>{{ iterationPaginated(reports, index) }}</td>
                            <td>{{ format(new Date(report.report_date), 'yyyy-MM-dd HH:mm:ii') }}</td>
                            <td>{{ report.created_by.name }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <a :href="route('report.show', report)" class="btn btn-info btn-sm" target="_blank">
                                        <i class="ri-eye-2-line align-bottom me-1"></i> Lihat
                                    </a>
                                    <button type="button" class="btn btn-danger btn-sm">
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

    <div id="modalGenerate" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Jana Laporan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="generate">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Tarikh Laporan</label>
                            <input type="datetime-local" step="any" class="form-control" v-model="jana.report_date">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-success ">Jana</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>