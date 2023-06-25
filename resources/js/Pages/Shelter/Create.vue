<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import * as leaflet from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, reactive, ref, watch } from 'vue';

const breadcrumbs = [
    {
        title: 'Pusat Pemindahan',
        active: false,
        link: route('shelter.index')
    },
    {
        title: 'Tambah Baru',
        active: true
    }
];

// 4.4594095,102.2309874

let initMap = () => {
    setTimeout(function() {
        const map = L.map('map').setView([4.4594095,102.2309874], 8);

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }, 500);
}

let search = ref();

watch(search, value => {
    setTimeout(function() {
        console.log(value);
    }, 2000);
});

</script>

<template>
    <Head title="Tambah Puast Pemindahan" />

    <AuthenticatedLayout>
        <ContentHeader title="Tambah Puast Pemindahan" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Tambah Pusat Pemindahan</h3>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Nama Pusat <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-9">
                                <input type="text" class="form-control" placeholder="Masukkan Nama Pusat Pemindahan">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jenis Pusat <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-7">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Negeri <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-6">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Daerah <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-6">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Mukim</label>
                            </div>
                            <div class="col-md-6">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Lokasi</label>
                            </div>
                            <div class="col-md-9">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Latitude">
                                    <input type="text" class="form-control" placeholder="Longitude">
                                    <button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#mapModal" @click="initMap">
                                        <i class="ri-map-pin-line fs-17"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Nama Pengurus PPS</label>
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">No Telefon</label>
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <!-- <div id="map" style="width:400px;height:400px"></div> -->
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

    <div id="mapModal" class="modal fade">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Modal Heading</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="position:relative">
                    <div class="form-group mb-3">
                        <input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="width:40%" v-model="search">
                    </div>
                    <div id="map" style="width:100%;height:600px"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary ">Save Changes</button>
                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>