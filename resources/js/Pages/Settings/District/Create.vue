<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Swal from 'sweetalert2';
import { reactive } from 'vue';

const breadcrumbs = [
    {
        title: 'Settings',
        active: true
    },
    {
        title: 'Pengurusan Daerah',
        active: false,
        link: route('setting.district.index')
    },
    {
        title: 'Tambah Baru',
        active: true
    }
];

const props = defineProps({
    states: Object,
    errors: Object
});

let district = reactive({
    state_id: 1,
    name: null
});

let submit = () => {
    router.post(route('setting.district.store'), district, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
            }
        }
    });
}

</script>

<template>
    <Head title="Tambah Baru Daerah" />

    <AuthenticatedLayout>
        <ContentHeader title="Tambah Baru Daerah" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0"></h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label>Pilih Negeri <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="district.state_id">
                                    <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.state_id">{{ errors.state_id }}</span>
                            </div>
                            <div class="form-group">
                                <label>Daerah <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="district.name" placeholder="Masukkan Nama Daerah">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Simpan</button>
                            <Link :href="route('setting.district.index')" class="btn btn-light">Batal</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>