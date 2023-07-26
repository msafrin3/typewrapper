<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ContentHeader from './Shared/ContentHeader.vue';
import '../../../public/assets/css/dashboard.css';

const breadcrumbs = [
    {
        title: 'Dashboard',
        active: true,
        link: route('dashboard')
    }
];
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <ContentHeader title="Dashboard" :breadcrumbs="breadcrumbs" />

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">SUMMARY</h3>
                    </div>
                    <div class="card-body">
                        <div class="row row-cols-5">
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-cloud-moon-rain fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH BENCANA</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-compass fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>NEGERI</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-map-marked fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>DAERAH</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-users fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH KELUARGA</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-procedures fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH MANGSA</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-user-alt-slash fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH KEMATIAN</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-campground fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH PPS AKTIF</b></div>
                                        <div class="fs-14">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
