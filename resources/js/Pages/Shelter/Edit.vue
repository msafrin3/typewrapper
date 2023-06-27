<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import * as leaflet from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, reactive, ref, watch } from 'vue';
import Swal from 'sweetalert2';

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

const props = defineProps({
    errors: Object,
    types: Object,
    states: Object,
    districts: Object,
    parishes: Object,
    shelter: Object
});

let e_shelter = reactive({
    name: props.shelter.name,
    shelter_type_id: props.shelter.shelter_type_id,
    state_id: props.shelter.state_id,
    district_id: props.shelter.district_id,
    parish_id: props.shelter.parish_id,
    latitude: props.shelter.latitude,
    longitude: props.shelter.longitude,
    pic_name: props.shelter.pic_name,
    pic_notel1: props.shelter.pic_notel1
});

let filter = {}

let doFilter = () => {
    router.get(route('shelter.edit', props.shelter), filter, {
        preserveState: true,
        replace: true
    });
}

let m_latitude = 4.4594095;
let m_longitude = 102.2309874;
let m_zoom = 8;

let initMap = () => {
    setTimeout(function() {
        var i_latitude = props.shelter.latitude == null ? m_latitude : props.shelter.latitude;
        var i_longitude = props.shelter.longitude == null ? m_longitude : props.shelter.longitude;
        var i_zoom = props.shelter.latitude == null ? m_zoom : 18;
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
        var marker;
        // place marker
        if(props.shelter.latitude != null) {
            marker = L.marker([props.shelter.latitude, props.shelter.longitude], {
                draggable: true
            }).addTo(map);
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
            e_shelter.latitude = latitude;
            e_shelter.longitude = longitude;
            // fit bound
            map.setView([latitude, longitude], 18);

            // set the marker
            marker = L.marker([latitude, longitude], {
                draggable: true
            }).addTo(map);
            
        });
        marker.on('dragend', function(event) {
            var lat = event.target.getLatLng().lat;
            var long = event.target.getLatLng().lng;
            e_shelter.latitude = lat;
            e_shelter.longitude = long;
        });

        
    }, 500);
}

let submit = () => {
    router.put(route('shelter.update', props.shelter), e_shelter, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
            }
        }
    });
}

</script>

<template>
    <Head title="Kemaskini Puast Pemindahan" />

    <AuthenticatedLayout>
        <ContentHeader title="Kemaskini Puast Pemindahan" :breadcrumbs="breadcrumbs" />

        <div class="row justify-content-center">
            <div class="col-md-8">
                <form @submit.prevent="submit">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title mb-0">Kemaskini Pusat Pemindahan</h3>
                        </div>
                        <div class="card-body">
                            <!-- <input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="width:40%"> -->
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Nama Pusat <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" placeholder="Masukkan Nama Pusat Pemindahan" v-model="e_shelter.name">
                                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Jenis Pusat <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-7">
                                    <select class="form-control" v-model="e_shelter.shelter_type_id">
                                        <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors.shelter_type_id">{{ errors.shelter_type_id }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">Negeri <span class="text-danger">*</span></label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="e_shelter.state_id" @change="filter.state_id = e_shelter.state_id;filter.district_id = null;filter.parish_id = null;doFilter();">
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
                                    <select class="form-control" v-model="e_shelter.district_id" @change="filter.district_id = e_shelter.district_id;doFilter();">
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
                                    <select class="form-control" v-model="e_shelter.parish_id">
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
                                        <input type="text" class="form-control" placeholder="Latitude" v-model="e_shelter.latitude">
                                        <input type="text" class="form-control" placeholder="Longitude" v-model="e_shelter.longitude">
                                        <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#mapModal" @click="initMap">
                                            <i class="ri-map-pin-fill fs-17"></i>
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
                                    <input type="text" class="form-control" v-model="e_shelter.pic_name">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label class="form-label">No Telefon</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" v-model="e_shelter.pic_notel1">
                                </div>
                            </div>
    
                            <!-- <div id="map" style="width:400px;height:400px"></div> -->
                        </div>
                        <div class="card-footer">
                            <div class="d-flex gap-2 justify-content-end">
                                <Link :href="route('shelter.index')" class="btn btn-light">Batal</Link>
                                <button type="submit" class="btn btn-success">Simpan</button>
                            </div>
                        </div>
                    </div>
                </form>
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