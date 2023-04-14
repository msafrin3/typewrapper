<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    title: String,
    breadcrumbs: Object
});

</script>

<template>
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0">{{ title }}</h4>

                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><Link :href="route('dashboard')">Home</Link></li>
                        <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb" class="breadcrumb-item">
                            <Link :href="breadcrumb.link" v-if="!breadcrumb.active">{{ breadcrumb.title }}</Link>
                            <span v-else>{{ breadcrumb.title }}</span>
                        </li>
                        <!-- <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                        <li class="breadcrumb-item active">Starter</li> -->
                    </ol>
                </div>

            </div>
        </div>
    </div>
    <!-- end page title -->
</template>