<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import Swal from 'sweetalert2';
import * as leaflet from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { reactive } from 'vue';

const breadcrumbs = [
    {
        title: 'Pengurusan Bencana',
        active: false,
        link: route('disaster.index')
    },
    {
        title: 'Tambah Baru',
        active: true
    }
];

const props = defineProps({
    disaster: Object,
    types: Object,
    states: Object,
    districts: Object,
    parishes: Object,
    errors: Object,
    levels: Object
});

let i_latitude = props.disaster.latitude == null ? 4.4594095 : props.disaster.latitude;
let i_longitude = props.disaster.longitude == null ? 102.2309874 : props.disaster.longitude;
let i_zoom = props.disaster.latitude == null ? 8 : 18;

let setLocation = (latitude, longitude) => {
    e_disaster.latitude = latitude;
    e_disaster.longitude = longitude;
}

let e_disaster = reactive({
    kategori_id: props.disaster.kategori_id,
    name: props.disaster.name,
    description: props.disaster.description,
    level_id: props.disaster.level_id,
    datetime_start: props.disaster.datetime_start,
    datetime_end: props.disaster.datetime_end,
    state_id: props.disaster.state_id,
    district_id: props.disaster.district_id,
    parish_id: props.disaster.parish_id,
    latitude: props.disaster.latitude,
    longitude: props.disaster.longitude,
    status: props.disaster.status
});

let filter = {}

let doFilter = () => {
    router.get(route('disaster.edit', props.disaster), filter, {
        preserveState: true,
        replace: true
    });
}

let submit = () => {
    router.post(route('disaster.update', props.disaster), e_disaster, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
            }
        }
    });
}

let marker;

let initMap = () => {
    setTimeout(function() {
        const map = L.map('map').setView([i_latitude, i_longitude], i_zoom);

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const input = document.getElementById('searchbox');
        const options = {
            types: ["geocode"],
            componentRestrictions: {
                country: "my"
            }
        };
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        
        // place marker
        if(props.disaster.latitude != null) {
            marker = L.marker([props.disaster.latitude, props.disaster.longitude], {
                draggable: true
            }).addTo(map);
            marker.on('dragend', function(event) {
                var lat = event.target.getLatLng().lat;
                var long = event.target.getLatLng().lng;
                setLocation(lat, long);
            });
        }
        autocomplete.addListener("place_changed", () => {
            // remove marker
            if(marker != undefined) {
                map.removeLayer(marker);
            }
            // get the geometry location
            const place = autocomplete.getPlace();
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();
            setLocation(latitude, longitude);
            // fit bound
            map.setView([latitude, longitude], 18);

            // set the marker
            marker = L.marker([latitude, longitude], {
                draggable: true
            }).addTo(map);
            marker.on('dragend', function(event) {
                var lat = event.target.getLatLng().lat;
                var long = event.target.getLatLng().lng;
                setLocation(lat, long);
            });
        });
    }, 500);
}

</script>

<template>
    <Head title="Kemaskini Maklumat Bencana" />

    <AuthenticatedLayout>
        <ContentHeader title="Kemaskini Maklumat Bencana" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Kemaskini Maklumat Bencana</h3>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Jenis Bencana <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="e_disaster.kategori_id">
                                        <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.kategori_id">{{ errors.kategori_id }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Nama Bencana <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" placeholder="Masukkan Nama Bencana" v-model="e_disaster.name">
                                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label classs="form-label">Keterangan</label>
                                </div>
                                <div class="col-md-9">
                                    <textarea rows="5" class="form-control" placeholder="Ketarangan Bencana" v-model="e_disaster.description"></textarea>
                                    <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Level <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control" v-model="e_disaster.level_id">
                                        <option v-for="level in levels" :value="level.id">{{ level.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Tarikh Mula & Akhir <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-9">
                                    <div class="input-group">
                                        <input type="datetime-local" step="any" class="form-control" placeholder="Tarikh Mula" v-model="e_disaster.datetime_start">
                                        <input type="datetime-local" step="any" class="form-control" placeholder="Tarikh Akhir" v-model="e_disaster.datetime_end">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Negeri <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="e_disaster.state_id" @change="filter.state_id = e_disaster.state_id;filter.district_id = null;filter.parish_id = null;doFilter();">
                                        <option value="">-- Pilih Negeri --</option>
                                        <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.state_id">{{ errors.state_id }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Daerah <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="e_disaster.district_id" @change="filter.district_id = e_disaster.district_id;doFilter();">
                                        <option value="">-- Pilih Daerah --</option>
                                        <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.district_id">{{ errors.district_id }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Mukim</label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="e_disaster.parish_id">
                                        <option v-for="parish in parishes" :key="parish.id" :value="parish.id">{{ parish.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Lokasi</label>
                                </div>
                                <div class="col-md-9">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Latitude" v-model="e_disaster.latitude">
                                        <input type="text" class="form-control" placeholder="Longitude" v-model="e_disaster.longitude">
                                        <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#mapModal" @click="initMap">
                                            <i class="ri-map-pin-fill fs-17"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Status <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control" v-model="e_disaster.status">
                                        <option value="Aktif">Aktif</option>
                                        <option value="Tidak Aktif">Tidak Aktif</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.status">{{ errors.status }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex gap-2 justify-content-end">
                                <Link :href="route('disaster.index')" class="btn btn-light">Batal</Link>
                                <button type="submit" class="btn btn-success">Simpan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

    <div id="mapModal" class="modal fade">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Peta Lokasi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="position:relative">
                    <div class="form-group mb-3">
                        <input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="width:40%">
                    </div>
                    <div id="map" style="width:100%;height:600px"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Set Lokasi</button>
                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>