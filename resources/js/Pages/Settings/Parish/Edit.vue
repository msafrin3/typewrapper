<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Swal from 'sweetalert2';
import { onMounted, reactive } from 'vue';

const breadcrumbs = [
    {
        title: 'Settings',
        active: true
    },
    {
        title: 'Pengurusan Mukim',
        active: false,
        link: route('setting.parish.index')
    },
    {
        title: 'Kemaskini',
        active: true
    }
];

const props = defineProps({
    states: Object,
    districts: Object,
    errors: Object,
    parish: Object
});

let e_parish = reactive({
    state_id: props.parish.state_id,
    district_id: props.parish.district_id,
    name: props.parish.name
});

let filter = {}

let doFilter = () => {
    router.get(route('setting.parish.edit', props.parish), filter, {
        preserveState: true,
        replace: true
    })
}

let submit = () => {
    router.put(route('setting.parish.update', props.parish), e_parish, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
            }
        }
    });
}

onMounted(() => {
    filter.state_id = props.parish.state_id;
    doFilter();
});

</script>

<template>
    <Head title="Kemaskini Mukim" />

    <AuthenticatedLayout>
        <ContentHeader title="Kemaskini Mukim" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Kemaskini Mukim</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label>Negeri <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="e_parish.state_id" @change="filter.state_id = parish.state_id;doFilter()">
                                    <option value="">-- Pilih Negeri --</option>
                                    <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.state_id">{{ errors.state_id }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Daerah <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="e_parish.district_id">
                                    <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.district_id">{{ errors.district_id }}</span>
                            </div>
                            <div class="form-group">
                                <label>Mukim <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Masukkan nama mukim" v-model="e_parish.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success btn-sm">Simpan</button>
                            <Link :href="route('setting.parish.index')" class="btn btn-light btn-sm">Batal</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>