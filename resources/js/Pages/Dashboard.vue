<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ContentHeader from './Shared/ContentHeader.vue';
import '../../../public/assets/css/dashboard.css';
import { onMounted } from 'vue';

const breadcrumbs = [
    {
        title: 'Dashboard',
        active: true,
        link: route('dashboard')
    }
];

const props = defineProps({
    summary: Object,
    summary_by_state: Object
});

onMounted(() => {
    var client = new XMLHttpRequest();
    client.open('GET', '../malaysia.svg');
    client.onreadystatechange = function() {
        $("#map").html(client.responseText);
    }
    client.send();

    setTimeout(function() {
        props.summary_by_state.forEach(element => {
            $("#state" + element.state_id).css({'fill': color(element.total_mangsa)});
        });
    }, 500);
});

let color = (total) => {
    if(total == 0) {
        return 'white';
    } else if(total > 0 && total <= 1000) {
        return 'yellow';
    } else if(total > 1000 && total <= 5000) {
        return 'orange';
    } else if(total > 5000) {
        return 'red';
    }
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <ContentHeader title="Dashboard" :breadcrumbs="breadcrumbs" />

        <div class="row">
            <div class="col-md-8">
                <div class="card full-height">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Peta Lokasi</h3>
                    </div>
                    <div class="card-body">
                        <div class="all-center">
                            <div id="map"></div>
                        </div>
                        <table class="table table-bordered table-sm">
                            <thead>
                                <tr style="background: #5f6b91;color: white;">
                                    <th>Negeri</th>
                                    <th>Daerah</th>
                                    <th>Keluarga</th>
                                    <th>Mangsa</th>
                                    <th>Kematian</th>
                                    <th>PPS Aktif</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="state in summary_by_state">
                                    <td>{{ state.state }}</td>
                                    <td align="center">{{ state.total_district }}</td>
                                    <td align="center">{{ state.total_keluarga.toLocaleString() }}</td>
                                    <td align="center">{{ state.total_mangsa.toLocaleString() }}</td>
                                    <td align="center">{{ state.total_kematian.toLocaleString() }}</td>
                                    <td align="center">{{ state.total_pps_aktif.toLocaleString() }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card full-height">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Summary</h3>
                    </div>
                    <div class="card-body">
                        <div class="row row-cols-1">
                            <div class="col mb-3">
                                <div class="flex">
                                    <div>
                                        <i class="las la-cloud-moon-rain fs-38 dashboard-icon"></i>
                                    </div>
                                    <div>
                                        <div class="nowrap"><b>JUMLAH BENCANA</b></div>
                                        <div class="fs-14">{{ summary.total_disaster.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_state.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_district.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_keluarga.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_mangsa.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_kematian.toLocaleString() }}</div>
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
                                        <div class="fs-14">{{ summary.total_pps_aktif.toLocaleString() }}</div>
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
