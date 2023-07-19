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
        title: 'Pengurusan Daerah',
        active: false,
        link: route('setting.district.index')
    }
];

const props = defineProps({
    filters: Object,
    districts: Object
});

let deleteDistrict = (district) => {
    Swal.fire({
        title: "Adakah anda pasti untuk padam maklumat daerah?",
        html: '',
        showCancelButton: true,
        confirmButtonText: 'Padam',
        confirmButtonColor: 'Red'
    }).then((result) => {
        if(result.isConfirmed) {
            router.delete(route('setting.district.destroy', district), {
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
    <Head title="Pengurusan Daerah" />

    <AuthenticatedLayout>
        <ContentHeader title="Pengurusan Daerah" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('setting.district.create')" class="btn btn-success">
                <i class="ri-add-circle-fill align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">Senarai Daerah</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('setting.district.index')" :filters="filters" :data="districts">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Negeri</th>
                            <th>Daerah</th>
                            <th>Tarikh Kemaskini</th>
                            <th>Tindakan</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(district, index) in districts.data" :key="district.id">
                            <td>{{ iterationPaginated(districts, index) }}</td>
                            <td>{{ district.state.name }}</td>
                            <td>{{ district.name }}</td>
                            <td>{{ format(new Date(district.updated_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <Link :href="route('setting.district.edit', district)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Kemaskini
                                    </Link>
                                    <button type="button" class="btn btn-danger btn-sm" @click="deleteDistrict(district)">
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