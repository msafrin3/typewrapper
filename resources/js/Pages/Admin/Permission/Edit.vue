<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { reactive } from 'vue';
import Swal from 'sweetalert2';

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Permission management',
        active: false,
        link: route('admin.permission.index')
    },
    {
        title: 'Edit Permission',
        active: true
    }
];

let props = defineProps({
    permission: Object,
    errors: Object
});

let e_permission = reactive({
    name: props.permission.name
});

let submit = () => {
    router.put(route('admin.permission.update', props.permission), e_permission, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Success!', response.props.response.succes, 'success');
            }
        }
    });
}
</script>

<template>
    <Head title="Create Permission" />

    <AuthenticatedLayout>
        <ContentHeader title="Create Permission" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Create New Permission</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group">
                                <label class="form-label">Permission Name</label>
                                <input type="text" class="form-control" placeholder="Enter Permission Name" v-model="e_permission.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Save</button>
                            <Link :href="route('admin.permission.index')" class="btn btn-light">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>