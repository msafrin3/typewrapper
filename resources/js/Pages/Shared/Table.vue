<script setup>
import { reactive, ref, watch } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import Pagination from '@/Pages/Shared/Pagination.vue';

let props = defineProps({
    data: Object,
    filters: Object,
    dataRoute: String,
    links: Object,
});

let search = ref(props.filters.search);
watch(search, value => {
    router.get(props.dataRoute, { search: value }, {
        preserveState: true,
        replace: true
    });
    // Inertia.get(props.dataRoute, { search: value }, {
    //     preserveState: true,
    //     replace: true
    // });
});

</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 form-group">
                <label>Search</label>
                <input type="text" class="form-control" id="search" placeholder="Search anything..." v-model="search">
            </div>
            <div class="col-lg-2">
                <label>&nbsp;</label><br />
                <button type="buttton" class="btn btn-outline-secondary" v-if="search" @click="(search = null)"><i class="fa fa-times-circle fa-fw"></i> Reset</button>
            </div>
        </div>
        <table class="table table-striped mt-3">
            <thead>
                <slot name="thead" />
            </thead>
            <tbody v-if="data.data.length == 0">
                <tr>
                    <td colspan="20" class="text-center"><i>No data available</i></td>
                </tr>
            </tbody>
            <slot v-else />
        </table>
        <Pagination :links="data.links" />
        <div class="mt-3">
            {{ 'Showing ' + data.from + ' to ' + data.to + ' of ' + data.total + ' entries' }}
        </div>
    </div>
</template>