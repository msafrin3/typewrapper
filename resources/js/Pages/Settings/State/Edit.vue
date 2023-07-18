<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { reactive } from 'vue';
import Swal from 'sweetalert2';

const breadcrumbs = [
    {
        title: 'Settings',
        active: true
    },
    {
        title: 'State Management',
        active: false,
        link: route('setting.state.index')
    },
    {
        title: 'Kemaskini',
        active: true
    }
];

const props = defineProps({
    state: Object
});

let e_state = reactive({
    name: props.state.name
});

let submit = () => {
    router.put(route('setting.state.update', props.state), e_state, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
            }
        }
    });
}

</script>

<template>
    <Head title="Kemaskini Negeri" />

    <AuthenticatedLayout>
        <ContentHeader title="Kemaskini Negeri" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Kemaskini Negeri</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Negeri</label>
                                <input type="text" class="form-control" v-model="e_state.name">
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Simpan</button>
                            <Link :href="route('setting.state.index')" class="btn btn-light">Batal</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>