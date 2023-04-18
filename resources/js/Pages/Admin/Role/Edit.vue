<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { reactive, onMounted } from 'vue';
import Swal from 'sweetalert2';
import MyChoices from '@/Pages/Shared/MyChoices.vue';

const breadcrumbs = [
    {
        title: 'Administrator',
        active: true
    },
    {
        title: 'Role management',
        active: false,
        link: route('admin.role.index')
    },
    {
        title: 'Create Role',
        active: true
    }
];

let props = defineProps({
    errors: Object,
    role: Object,
    _permissions: Object
});

let e_role = reactive({
    name: props.role.name,
    permissions: []
});

onMounted(() => {
    props.role.permissions.forEach(function (value) {
        e_role.permissions.push(value.id);
        $("#formCheck" + value.id).prop("checked", true);
    });
    console.log(e_role);
});

let submit = () => {
    router.put(route('admin.role.update', props.role), e_role, {
        onSuccess: (response) => {
            if (response.props.response.success) {
                Swal.fire('Success!', response.props.response.succes, 'success');
            }
        }
    });
}

let setPermissions = (payload) => {
    e_role.permissions = payload;
}

props.role.permissions.forEach(function(value) {
    e_role.permissions.push(value.id);
});
</script>

<template>
    <Head title="Create Role" />

    <AuthenticatedLayout>
        <ContentHeader title="Create Role" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Create New Role</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="form-group">
                                <label class="form-label">Role Name</label>
                                <input type="text" class="form-control" placeholder="Enter Role Name" v-model="e_role.name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label class="form-label">Select Permission(s)</label>
                                <MyChoices id="selectpermission" placeholder="Select Permission" type="multiple" @get-value="setPermissions">
                                    <option v-for="permission in _permissions" :key="permission.id" :value="permission.id" :selected="e_role.permissions.includes(permission.id)">{{ permission.name }}</option>
                                </MyChoices>
                            </div>
                        </div>
                        <div class="card-footer d-grid gap-2">
                            <button type="submit" class="btn btn-success">Save</button>
                            <Link :href="route('admin.role.index')" class="btn btn-light">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>