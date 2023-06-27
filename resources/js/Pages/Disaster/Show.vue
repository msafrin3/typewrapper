<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { format } from 'date-fns';
import * as leaflet from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

const props = defineProps({
    disaster: Object,
    tabActive: String
});

const breadcrumbs = [
    {
        title: 'Pengurusan Bencana',
        active: false,
        link: route('disaster.index')
    },
    {
        title: 'Maklumat Terperinci Bencana',
        active: true
    }
];

let map;
let i_latitude = props.disaster.latitude == null ? 4.4594095 : props.disaster.latitude;
let i_longitude = props.disaster.longitude == null ? 102.2309874 : props.disaster.longitude;
let i_zoom = props.disaster.latitude == null ? 8 : 18;

let marker;

let initMap = () => {
    setTimeout(function() {
        if(map != undefined) { map.remove(); }
        map = L.map('map').setView([i_latitude, i_longitude], i_zoom);

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        if(props.disaster.latitude != null) {
            marker = L.marker([i_latitude, i_longitude]).addTo(map);
        }
    }, 500);
}

</script>

<template>
    <Head title="Maklumat Terperinci Bencana" />

    <AuthenticatedLayout>
        <ContentHeader :title="disaster.name" :breadcrumbs="breadcrumbs" />

        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-border-top nav-border-top-primary mb-3" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#tab1" role="tab" aria-selected="true">
                            <i class="ri-thunderstorms-fill align-middle me-1"></i> Maklumat Bencana
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab2" role="tab" aria-selected="false" tabindex="-1">
                            <i class="ri-home-heart-line me-1 align-middle"></i> Pusat Pemindahan
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab3" role="tab" aria-selected="false" tabindex="-1" @click="initMap()">
                            <i class="ri-map-pin-fill me-1 align-middle"></i> Peta Lokasi
                        </a>
                    </li>
                </ul>
                <div class="tab-content text-muted">
                    <div class="tab-pane active show" id="tab1" role="tabpanel">
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <th>Tajuk</th>
                                            <td>:</td>
                                            <td>{{ disaster.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Keterangan</th>
                                            <td>:</td>
                                            <td>{{ disaster.description }}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Bencana</th>
                                            <td>:</td>
                                            <td>{{ disaster.kategori.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Level</th>
                                            <td>:</td>
                                            <td>{{ disaster.level.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Negeri</th>
                                            <td>:</td>
                                            <td>{{ disaster.state.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Daerah</th>
                                            <td>:</td>
                                            <td>{{ disaster.district.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Mukim</th>
                                            <td>:</td>
                                            <td>{{ disaster.parish_id == null ? '-' : disaster.parish.name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Tarikh Mula</th>
                                            <td>:</td>
                                            <td>{{ format(new Date(disaster.datetime_start), 'yyyy-MM-dd HH:mm:ii') }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <div class="text-end">
                                    <Link :href="route('disaster.edit', disaster)" class="btn btn-success">
                                        <i class="ri-edit-2-fill align-bottom me-1"></i> Kemaskini Bencana
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="tab2" role="tabpanel">
                        <h6>Use a color palette</h6>
                        <p class="mb-0">
                            Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in <a href="javascript:void(0);" class="text-decoration-underline"><b>Graphic Design</b></a> is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                        </p>
                    </div>
                    <div class="tab-pane" id="tab3" role="tabpanel">
                        <div id="map" style="width:100%;height:600px"></div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>