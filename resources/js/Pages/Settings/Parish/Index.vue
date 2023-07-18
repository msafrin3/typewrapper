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
        title: 'Setting',
        active: true
    },
    {
        title: 'Pengurusan Mukim',
        active: false,
        link: route('setting.parish.index')
    }
];

const props = defineProps({
    filters: Object,
    parishes: Object
});

let deleteParish = (parish) => {
    Swal.fire({
        title: "Adakah anda pasti untuk padam maklumat mukim ini?",
        html: '',
        showCancelButton: true,
        confirmButtonText: 'Padam',
        confirmButtonColor: 'Red'
    }).then((result) => {
        if(result.isConfirmed) {
            router.delete(route('setting.parish.destroy', parish), {
                onSuccess: (response) => {
                    if(response.props.response.success) {
                        Swal.fire('Berjaya!', response.props.response.success, 'success');
                    }
                }
            });
        }
    });
}
</script>

<template>
    <Head title="Pengurusan Mukim" />

    <AuthenticatedLayout>
        <ContentHeader title="Pengurusan Mukim" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('setting.parish.create')" class="btn btn-success">
                <i class="ri-add-circle-fill align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Mukim</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('setting.parish.index')" :filters="filters" :data="parishes">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Negeri</th>
                            <th>Daerah</th>
                            <th>Mukim</th>
                            <th>Tarikh Kemaskini</th>
                            <th>Tindakan</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(parish, index) in parishes.data" :key="parish.id">
                            <td>{{ iterationPaginated(parishes, index) }}</td>
                            <td>{{ parish.state.name }}</td>
                            <td>{{ parish.district.name }}</td>
                            <td>{{ parish.name }}</td>
                            <td>{{ format(new Date(parish.updated_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <Link :href="route('setting.parish.edit', parish)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Kemaskini
                                    </Link>
                                    <button type="button" class="btn btn-danger btn-sm" @click="deleteParish(parish)">
                                        <i class="ri-delete-bin-fill align-bottom me-1"></i> Padam
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