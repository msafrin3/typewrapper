<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { reactive } from 'vue';
import Swal from 'sweetalert2';

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Meta Data',
        active: false,
        link: route('admin.meta-data.index')
    },
    {
        title: 'Edit',
        active: true
    }
];

const props = defineProps({
    errors: Object,
    metas: Object,
    metaData: Object
});

let e_metadata = reactive({
    meta_id: props.metaData.meta_id,
    name: props.metaData.name,
    group_helper: props.metaData.group_helper
});

let submit = () => {
    router.put(route('admin.meta-data.update', props.metaData), e_metadata, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Success!', response.props.response.success, 'success');
            }
        }
    });
}

</script>

<template>
    <Head title="Edit Meta Data" />

    <AuthenticatedLayout>
        <ContentHeader title="Edit Meta Data" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Edit Meta Data</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label>Meta <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="e_metadata.meta_id">
                                    <option value="">Select Meta</option>
                                    <option v-for="meta in metas" :key="meta.id" :value="meta.id">{{ meta.display_name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.meta_id">{{ errors.meta_id }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Meta Data Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Enter Meta Data Name" v-model="e_metadata.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Group Helper</label>
                                <input type="text" class="form-control" placeholder="Enter Group helper" v-model="e_metadata.group_helper">
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-success">Save</button>
                                <Link :href="route('admin.meta-data.index')" class="btn btn-light">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>