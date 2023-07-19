<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { reactive, onMounted } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
    meta: Object,
    errors: Object
});

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Meta Management',
        active: false,
        link: route('admin.meta.index')
    },
    {
        title: 'Create',
        active: true
    }
];

let e_meta = reactive({
    name: props.meta.name,
    display_name: props.meta.display_name
});

console.log(props.meta);

let submit = () => {
    router.put(route('admin.meta.update', props.meta), e_meta, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Success!', response.props.response.success, 'success');
            }
        }
    });
}

</script>

<template>
    <Head title="Create New Meta" />

    <AuthenticatedLayout>
        <ContentHeader title="Create New Meta" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Create Meta</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Meta Name" v-model="e_meta.name">
                                <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
                            </div>
                            <div class="form-group">
                                <label>Display Name</label>
                                <input type="text" class="form-control" placeholder="Enter Display Meta Name" v-model="e_meta.display_name">
                                <span v-if="errors.display_name" class="text-danger">{{ errors.display_name }}</span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-success">Save</button>
                                <Link :href="route('admin.meta.index')" class="btn btn-light">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>