<script setup>
import { reactive, ref, watch } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';

let props = defineProps({
    data: Object,
    filters: Object,
    dataRoute: String,
    links: Object,
});

let search = ref(props.filters.search);
watch(search, value => {
    router.get('/admin/user', { search: value }, {
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
            <div class="col-lg-2 col-md-3 col-sm-12 form-group">
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
        <div class="btn-group">
            <Component 
                v-for="link in links"
                :key="link.id"
                :is="link.url ? 'Link' : 'span'" 
                :href="link.url" 
                v-html="link.label" 
                class="btn"
                :class="{ 'disabled': !link.url, 'btn-primary': link.active, 'btn-light': !link.active }"
            />
        </div>
        <div>
            {{ 'Showing ' + data.from + ' to ' + data.to + ' of ' + data.total + ' entries' }}
        </div>
    </div>
</template>