<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { onMounted, reactive } from 'vue';
import Choices from 'choices.js';
import MyChoice from '@/Pages/Shared/MyChoices.vue';
import Swal from 'sweetalert2';

const props = defineProps({
    roles: Object,
    permissions: Object,
    errors: Object
});

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'User Management',
        active: false,
        link: route('admin.user.index')
    },
    {
        title: 'Create User',
        active: true
    }
];

let user = reactive({
    name: null,
    email: null,
    roles: [],
    permissions: []
});

let submit = () => {
    router.post(route('admin.user.store'), user, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Success', response.props.response.success, 'success');
            }
        }
    });
}

let setRoles = (payload) => {
    user.roles = payload;
}

let setPermissions = (payload) => {
    user.permissions = payload;
}
</script>

<template>
    <Head title="Create User" />

    <AuthenticatedLayout>
        <ContentHeader title="Create User" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <form @submit.prevent="submit">
                        <div class="card-header">
                            <h3 class="card-title">Create User</h3>
                        </div>
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Enter Full Name" v-model="user.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>E-Mail</label>
                                <input type="email" class="form-control" placeholder="Enter Email Address" v-model="user.email">
                                <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Select Role(s)</label>
                                <MyChoice id="selectrole" placeholder="Select Role" type="multiple" v-model="user.roles" @get-value="setRoles">
                                    <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
                                </MyChoice>
                                <span class="text-danger" v-if="errors.roles">{{ errors.roles }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Select Permission(s)</label>
                                <MyChoice id="selectperm" placeholder="Select Permission" type="multiple" v-model="user.permissions" @get-value="setPermissions">
                                    <option v-for="permission in permissions" :key="permission.id" :value="permission.id">{{ permission.name }}</option>
                                </MyChoice>
                                <span class="text-danger" v-if="errors.permissions">{{ errors.permissions }}</span>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Save</button>
                            <Link :href="route('admin.user.index')" class="btn btn-light">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>