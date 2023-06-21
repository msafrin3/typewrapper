<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Table from '@/Pages/Shared/Table.vue';
import { getCurrentInstance } from 'vue';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

const app = getCurrentInstance();
const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Meta Management',
        active: false,
        link: route('admin.meta.index')
    }
];

const props = defineProps({
    metas: Object,
    filters: Object
});

let deleteMeta = (meta) => {
    Swal.fire({
        title: 'Are you sure want to delete this info?',
        html: '',
        showCancelButton: true,
        confirmButtonColor: 'red',
        confirmButtonText: 'Delete'
    }).then((result) => {
        if(result.isConfirmed) {
            router.delete(route('admin.meta.destroy', meta), {
                onSuccess: (response) => {
                    if(response.props.response.success) {
                        Swal.fire('Success!', response.props.response.success, 'success');
                    }
                }
            });
        }
    });
}
</script>

<template>
    <Head title="Meta Management" />

    <AuthenticatedLayout>
        <ContentHeader title="Meta Management" :breadcrumbs="breadcrumbs" />

        <div class="mb-3">
            <Link :href="route('admin.meta.create')" class="btn btn-success">
                <i class="ri-add-circle-fill fs-15 align-bottom me-1"></i> Add New
            </Link>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">List Meta</h3>
            </div>
            <div class="card-body">
                <Table :data-route="route('admin.meta.index')" :filters="filters" :data="metas">
                    <template #thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Display Name</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </template>
                    <tbody>
                        <tr v-for="(meta, index) in metas.data" :key="meta.id">
                            <td>{{ iterationPaginated(metas, index) }}</td>
                            <td>{{ meta.name }}</td>
                            <td>{{ meta.display_name }}</td>
                            <td>{{ format(new Date(meta.created_at), 'yyyy-MM-dd HH:mm:ss') }}</td>
                            <td>
                                <div class="d-flex gap-2">
                                    <Link :href="route('admin.meta.edit', meta)" class="btn btn-info btn-sm">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Edit
                                    </Link>
                                    <button type="button" class="btn btn-danger btn-sm" @click="deleteMeta(meta)">
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