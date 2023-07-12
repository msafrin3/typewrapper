<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ContentHeader from '@/Pages/Shared/ContentHeader.vue';
import { format } from 'date-fns';
import * as leaflet from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { getCurrentInstance, onMounted, reactive,  } from 'vue';
import MyChoices from '@/Pages/Shared/MyChoices.vue';
import Swal from 'sweetalert2';

const app = getCurrentInstance();
const iteration = app.appContext.config.globalProperties.$iteration;

const props = defineProps({
    disaster: Object,
    tabActive: String,
    states: Object,
    districts: Object,
    parishes: Object,
    shelters: Object,
    disaster_shelters: Object,
    errors: Object
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

let d_filter = {};

let doFilter = () => {
    router.get(route('disaster.show', props.disaster), d_filter, {
        preserveState: true,
        replace: true
    });
}

let disaster_shelter = reactive({
    state_id: null,
    district_id: null,
    parish_id: null,
    shelter_id: null,
    total_keluarga: null,
    total_mangsa: null,
    total_kematian: null,
    dibuka_pada: null,
    ditutup_pada: null
});

let submit = () => {
    router.post(route('disaster.shelter.store', props.disaster), disaster_shelter, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
                $("#addPPSModal").modal('toggle');
            }
        }
    });
}

let e_disaster_shelter = reactive({
    state_id: null,
    district_id: null,
    parish_id: null,
    shelter_id: null,
    total_keluarga: null,
    total_mangsa: null,
    total_kematian: null,
    dibuka_pada: null,
    ditutup_pada: null
});

let e_shelter;

let editPPS = (shelter) => {
    e_shelter = shelter;

    e_disaster_shelter.state_id = shelter.shelter.state_id;
    e_disaster_shelter.district_id = shelter.shelter.district_id;
    e_disaster_shelter.parish_id = shelter.shelter.parish_id;
    e_disaster_shelter.shelter_id = shelter.shelter_id,
    e_disaster_shelter.total_keluarga = shelter.total_keluarga;
    e_disaster_shelter.total_mangsa = shelter.total_mangsa;
    e_disaster_shelter.total_kematian = shelter.total_kematian;
    e_disaster_shelter.dibuka_pada = shelter.dibuka_pada;
    e_disaster_shelter.ditutup_pada = shelter.ditutup_pada;

    d_filter.state_id = shelter.shelter.state_id;
    d_filter.district_id = shelter.shelter.district_id;
    d_filter.parish_id = shelter.shelter.parish_id;
    doFilter();
}

let updateDisasterShelter = () => {
    router.put(route('disaster.shelter.update', [props.disaster, e_shelter]), e_disaster_shelter, {
        onSuccess: (response) => {
            if(response.props.response.success) {
                Swal.fire('Berjaya!', response.props.response.success, 'success');
                $("#editPPSModal").modal('toggle');
            }
        }
    });
}

// =============== map setting ==============

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
                                            <th width="30%">Tajuk</th>
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
                                        <tr>
                                            <th>Status</th>
                                            <td>:</td>
                                            <td>{{ disaster.status }}</td>
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
                        <div class="text-end">
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addPPSModal">
                                <i class="ri-add-circle-fill align-bottom me-1"></i> Daftar Baru
                            </button>
                        </div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Daerah</th>
                                    <th>Pusat Pemindahan</th>
                                    <th>Jumlah Keluarga</th>
                                    <th>Jumlah Mangsa</th>
                                    <th>Jumlah Kematian</th>
                                    <th>Dibuka Pada</th>
                                    <th>Ditutup Pada</th>
                                    <th>Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(shelter, index) in disaster_shelters" :key="shelter.id">
                                    <td>{{ iteration(disaster_shelters, index) }}</td>
                                    <td>{{ shelter.shelter.district.name }}</td>
                                    <td>{{ shelter.shelter.name }}</td>
                                    <td class="text-center">{{ shelter.total_keluarga.toLocaleString() }}</td>
                                    <td class="text-center">{{ shelter.total_mangsa.toLocaleString() }}</td>
                                    <td class="text-center">{{ shelter.total_kematian.toLocaleString() }}</td>
                                    <td>{{ format(new Date(shelter.dibuka_pada), 'yyyy-MM-dd HH:mm:ii') }}</td>
                                    <td>{{ shelter.ditutup_pada == null ? '-' : format(new Date(shelter.ditutup_pada), 'yyyy-MM-dd HH:mm:ii') }}</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#editPPSModal" @click="editPPS(shelter)">
                                                <i class="ri-edit-2-fill align-bottom me-1"></i> Kemaskini
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm">
                                                <i class="ri-delete-bin-line align-bottom me-1"></i> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane" id="tab3" role="tabpanel">
                        <div id="map" style="width:100%;height:600px"></div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

    <div id="addPPSModal" class="modal fade" aria-labelledby="myModalLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Daftar Maklumat PPS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submit">
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Negeri</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="disaster_shelter.state_id" @change="d_filter.state_id = disaster_shelter.state_id;doFilter()">
                                    <option value="">-- Pilih Negeri --</option>
                                    <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Daerah</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="disaster_shelter.district_id" @change="d_filter.district_id = disaster_shelter.district_id;doFilter()">
                                    <option value="">-- Pilih Daerah --</option>
                                    <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Mukim</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="disaster_shelter.parish_id" @change="d_filter.parish_id = disaster_shelter.parish_id;doFilter()">
                                    <option value="">-- Pilih Mukim --</option>
                                    <option v-for="parish in parishes" :key="parish.id" :value="parish.id">{{ parish.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Pusat Pemindahan <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="disaster_shelter.shelter_id">
                                    <option v-for="shelter in shelters" :key="shelter.id" :value="shelter.id">{{ shelter.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.shelter_id">{{ errors.shelter_id }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Keluarga</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="disaster_shelter.total_keluarga">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Mangsa</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="disaster_shelter.total_mangsa">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Kematian</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="disaster_shelter.total_kematian">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Tarikh Dibuka <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-4">
                                <input type="datetime-local" step="any" class="form-control" v-model="disaster_shelter.dibuka_pada">
                                <span class="text-danger" v-if="errors.dibuka_pada">{{ errors.dibuka_pada }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Tarikh Ditutup</label>
                            </div>
                            <div class="col-md-4">
                                <input type="datetime-local" step="any" class="form-control" v-model="disaster_shelter.ditutup_pada">
                            </div>
                        </div>
                        <!-- <h5 class="mt-4 mb-4">Maklumat Pengurus Pusat Pemindahan</h5>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Nama Pengurus</label>
                            </div>
                            <div class="col-md-9">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">No. Telefon</label>
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jawatan</label>
                            </div>
                            <div class="col-md-7">
                                <input type="text" class="form-control">
                            </div>
                        </div> -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-primary ">Simpan</button>
                    </div>
                </form>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="editPPSModal" class="modal fade" aria-labelledby="myModalLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Kemaskini Maklumat PPS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="updateDisasterShelter">
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Negeri</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="e_disaster_shelter.state_id" @change="d_filter.state_id = e_disaster_shelter.state_id;doFilter()">
                                    <option value="">-- Pilih Negeri --</option>
                                    <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Daerah</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="e_disaster_shelter.district_id" @change="d_filter.district_id = e_disaster_shelter.district_id;doFilter()">
                                    <option value="">-- Pilih Daerah --</option>
                                    <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Mukim</label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="e_disaster_shelter.parish_id" @change="d_filter.parish_id = e_disaster_shelter.parish_id;doFilter()">
                                    <option value="">-- Pilih Mukim --</option>
                                    <option v-for="parish in parishes" :key="parish.id" :value="parish.id">{{ parish.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Pusat Pemindahan <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-9">
                                <select class="form-control" v-model="e_disaster_shelter.shelter_id">
                                    <option v-for="shelter in shelters" :key="shelter.id" :value="shelter.id">{{ shelter.name }}</option>
                                </select>
                                <span class="text-danger" v-if="errors.shelter_id">{{ errors.shelter_id }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Keluarga</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="e_disaster_shelter.total_keluarga">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Mangsa</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="e_disaster_shelter.total_mangsa">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Jumlah Kematian</label>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control" v-model="e_disaster_shelter.total_kematian">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Tarikh Dibuka <span class="text-danger">*</span></label>
                            </div>
                            <div class="col-md-4">
                                <input type="datetime-local" step="any" class="form-control" v-model="e_disaster_shelter.dibuka_pada">
                                <span class="text-danger" v-if="errors.dibuka_pada">{{ errors.dibuka_pada }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">
                                <label class="form-label">Tarikh Ditutup</label>
                            </div>
                            <div class="col-md-4">
                                <input type="datetime-local" step="any" class="form-control" v-model="e_disaster_shelter.ditutup_pada">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-success ">Kemaskini</button>
                    </div>
                </form>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>