import { getCurrentInstance, reactive, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import { format } from "date-fns";
import "leaflet/dist/leaflet.js";
/* empty css                   */import "./MyChoices-6fe8bcef.mjs";
import "sweetalert2";
import "choices.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    disaster: Object,
    tabActive: String,
    states: Object,
    districts: Object,
    parishes: Object,
    shelters: Object,
    disaster_shelters: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const app = getCurrentInstance();
    const iteration = app.appContext.config.globalProperties.$iteration;
    const number_format = app.appContext.config.globalProperties.$number_format;
    const breadcrumbs = [
      {
        title: "Pengurusan Bencana",
        active: false,
        link: route("disaster.index")
      },
      {
        title: "Maklumat Terperinci Bencana",
        active: true
      }
    ];
    let d_filter = {};
    let doFilter = () => {
      router.get(route("disaster.show", props.disaster), d_filter, {
        preserveState: true,
        replace: true
      });
    };
    let disaster_shelter = reactive({
      state_id: null,
      district_id: null,
      parish_id: null,
      shelter_id: null,
      total_keluarga: 0,
      total_mangsa: 0,
      total_kematian: 0,
      dibuka_pada: null,
      ditutup_pada: null
    });
    let e_disaster_shelter = reactive({
      state_id: null,
      district_id: null,
      parish_id: null,
      shelter_id: null,
      total_keluarga: 0,
      total_mangsa: 0,
      total_kematian: 0,
      dibuka_pada: null,
      ditutup_pada: null
    });
    let editPPS = (shelter) => {
      e_disaster_shelter.state_id = shelter.shelter.state_id;
      e_disaster_shelter.district_id = shelter.shelter.district_id;
      e_disaster_shelter.parish_id = shelter.shelter.parish_id;
      e_disaster_shelter.shelter_id = shelter.shelter_id, e_disaster_shelter.total_keluarga = shelter.total_keluarga;
      e_disaster_shelter.total_mangsa = shelter.total_mangsa;
      e_disaster_shelter.total_kematian = shelter.total_kematian;
      e_disaster_shelter.dibuka_pada = shelter.dibuka_pada;
      e_disaster_shelter.ditutup_pada = shelter.ditutup_pada;
      d_filter.state_id = shelter.shelter.state_id;
      d_filter.district_id = shelter.shelter.district_id;
      d_filter.parish_id = shelter.shelter.parish_id;
      doFilter();
    };
    let map;
    let i_latitude = props.disaster.latitude == null ? 4.4594095 : props.disaster.latitude;
    let i_longitude = props.disaster.longitude == null ? 102.2309874 : props.disaster.longitude;
    let i_zoom = props.disaster.latitude == null ? 8 : 18;
    let initMap = () => {
      setTimeout(function() {
        if (map != void 0) {
          map.remove();
        }
        map = L.map("map").setView([i_latitude, i_longitude], i_zoom);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        if (props.disaster.latitude != null) {
          var icon = L.icon({
            iconUrl: "/images/marker-icon.png",
            shadowUrl: "/images/marker-shadow.png"
          });
          L.marker([i_latitude, i_longitude], { icon }).addTo(map);
        }
      }, 500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Maklumat Terperinci Bencana" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: __props.disaster.name,
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="card"${_scopeId}><div class="card-body"${_scopeId}><ul class="nav nav-tabs nav-border-top nav-border-top-primary mb-3" role="tablist"${_scopeId}><li class="nav-item" role="presentation"${_scopeId}><a class="nav-link active" data-bs-toggle="tab" href="#tab1" role="tab" aria-selected="true"${_scopeId}><i class="ri-thunderstorms-fill align-middle me-1"${_scopeId}></i> Maklumat Bencana </a></li><li class="nav-item" role="presentation"${_scopeId}><a class="nav-link" data-bs-toggle="tab" href="#tab2" role="tab" aria-selected="false" tabindex="-1"${_scopeId}><i class="ri-home-heart-line me-1 align-middle"${_scopeId}></i> Pusat Pemindahan </a></li><li class="nav-item" role="presentation"${_scopeId}><a class="nav-link" data-bs-toggle="tab" href="#tab3" role="tab" aria-selected="false" tabindex="-1"${_scopeId}><i class="ri-map-pin-fill me-1 align-middle"${_scopeId}></i> Peta Lokasi </a></li></ul><div class="tab-content text-muted"${_scopeId}><div class="tab-pane active show" id="tab1" role="tabpanel"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6"${_scopeId}><table class="table table-sm table-borderless"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><th width="30%"${_scopeId}>Tajuk</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Keterangan</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.description)}</td></tr><tr${_scopeId}><th${_scopeId}>Jenis Bencana</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.kategori.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Level</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.level.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Negeri</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.state.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Daerah</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.district.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Mukim</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.parish_id == null ? "-" : __props.disaster.parish.name)}</td></tr><tr${_scopeId}><th${_scopeId}>Tarikh Mula</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(unref(format)(new Date(__props.disaster.datetime_start), "yyyy-MM-dd HH:mm:ss"))}</td></tr><tr${_scopeId}><th${_scopeId}>Status</th><td${_scopeId}>:</td><td${_scopeId}>${ssrInterpolate(__props.disaster.status)}</td></tr></tbody></table></div><div class="col-md-6"${_scopeId}><div class="text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("disaster.edit", __props.disaster),
              class: "btn btn-success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-edit-2-fill align-bottom me-1"${_scopeId2}></i> Kemaskini Bencana `);
                } else {
                  return [
                    createVNode("i", { class: "ri-edit-2-fill align-bottom me-1" }),
                    createTextVNode(" Kemaskini Bencana ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="tab-pane" id="tab2" role="tabpanel"${_scopeId}><div class="text-end"${_scopeId}><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addPPSModal"${_scopeId}><i class="ri-add-circle-fill align-bottom me-1"${_scopeId}></i> Daftar Baru </button></div><table class="table table-bordered mt-3"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>#</th><th${_scopeId}>Daerah</th><th${_scopeId}>Pusat Pemindahan</th><th${_scopeId}>Jumlah Keluarga</th><th${_scopeId}>Jumlah Mangsa</th><th${_scopeId}>Jumlah Kematian</th><th${_scopeId}>Dibuka Pada</th><th${_scopeId}>Ditutup Pada</th><th${_scopeId}>Tindakan</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.disaster_shelters, (shelter, index) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(unref(iteration)(__props.disaster_shelters, index))}</td><td${_scopeId}>${ssrInterpolate(shelter.shelter.district.name)}</td><td${_scopeId}>${ssrInterpolate(shelter.shelter.name)}</td><td class="text-center"${_scopeId}>${ssrInterpolate(unref(number_format)(shelter.total_keluarga))}</td><td class="text-center"${_scopeId}>${ssrInterpolate(unref(number_format)(shelter.total_mangsa))}</td><td class="text-center"${_scopeId}>${ssrInterpolate(unref(number_format)(shelter.total_kematian))}</td><td${_scopeId}>${ssrInterpolate(unref(format)(new Date(shelter.dibuka_pada), "yyyy-MM-dd HH:mm:ss"))}</td><td${_scopeId}>${ssrInterpolate(shelter.ditutup_pada == null ? "-" : unref(format)(new Date(shelter.ditutup_pada), "yyyy-MM-dd HH:mm:ss"))}</td><td${_scopeId}><div class="d-flex gap-2"${_scopeId}><button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#editPPSModal"${_scopeId}><i class="ri-edit-2-fill align-bottom me-1"${_scopeId}></i> Kemaskini </button><button type="button" class="btn btn-danger btn-sm"${_scopeId}><i class="ri-delete-bin-line align-bottom me-1"${_scopeId}></i> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="tab-pane" id="tab3" role="tabpanel"${_scopeId}><div id="map" style="${ssrRenderStyle({ "width": "100%", "height": "600px" })}"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: __props.disaster.name,
                breadcrumbs
              }, null, 8, ["title"]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("ul", {
                    class: "nav nav-tabs nav-border-top nav-border-top-primary mb-3",
                    role: "tablist"
                  }, [
                    createVNode("li", {
                      class: "nav-item",
                      role: "presentation"
                    }, [
                      createVNode("a", {
                        class: "nav-link active",
                        "data-bs-toggle": "tab",
                        href: "#tab1",
                        role: "tab",
                        "aria-selected": "true"
                      }, [
                        createVNode("i", { class: "ri-thunderstorms-fill align-middle me-1" }),
                        createTextVNode(" Maklumat Bencana ")
                      ])
                    ]),
                    createVNode("li", {
                      class: "nav-item",
                      role: "presentation"
                    }, [
                      createVNode("a", {
                        class: "nav-link",
                        "data-bs-toggle": "tab",
                        href: "#tab2",
                        role: "tab",
                        "aria-selected": "false",
                        tabindex: "-1"
                      }, [
                        createVNode("i", { class: "ri-home-heart-line me-1 align-middle" }),
                        createTextVNode(" Pusat Pemindahan ")
                      ])
                    ]),
                    createVNode("li", {
                      class: "nav-item",
                      role: "presentation"
                    }, [
                      createVNode("a", {
                        class: "nav-link",
                        "data-bs-toggle": "tab",
                        href: "#tab3",
                        role: "tab",
                        "aria-selected": "false",
                        tabindex: "-1",
                        onClick: ($event) => unref(initMap)()
                      }, [
                        createVNode("i", { class: "ri-map-pin-fill me-1 align-middle" }),
                        createTextVNode(" Peta Lokasi ")
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "tab-content text-muted" }, [
                    createVNode("div", {
                      class: "tab-pane active show",
                      id: "tab1",
                      role: "tabpanel"
                    }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("table", { class: "table table-sm table-borderless" }, [
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("th", { width: "30%" }, "Tajuk"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Keterangan"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.description), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Jenis Bencana"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.kategori.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Level"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.level.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Negeri"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.state.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Daerah"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.district.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Mukim"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.parish_id == null ? "-" : __props.disaster.parish.name), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Tarikh Mula"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(unref(format)(new Date(__props.disaster.datetime_start), "yyyy-MM-dd HH:mm:ss")), 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("th", null, "Status"),
                                createVNode("td", null, ":"),
                                createVNode("td", null, toDisplayString(__props.disaster.status), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("div", { class: "text-end" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("disaster.edit", __props.disaster),
                              class: "btn btn-success"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "ri-edit-2-fill align-bottom me-1" }),
                                createTextVNode(" Kemaskini Bencana ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "tab-pane",
                      id: "tab2",
                      role: "tabpanel"
                    }, [
                      createVNode("div", { class: "text-end" }, [
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-success",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#addPPSModal"
                        }, [
                          createVNode("i", { class: "ri-add-circle-fill align-bottom me-1" }),
                          createTextVNode(" Daftar Baru ")
                        ])
                      ]),
                      createVNode("table", { class: "table table-bordered mt-3" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "#"),
                            createVNode("th", null, "Daerah"),
                            createVNode("th", null, "Pusat Pemindahan"),
                            createVNode("th", null, "Jumlah Keluarga"),
                            createVNode("th", null, "Jumlah Mangsa"),
                            createVNode("th", null, "Jumlah Kematian"),
                            createVNode("th", null, "Dibuka Pada"),
                            createVNode("th", null, "Ditutup Pada"),
                            createVNode("th", null, "Tindakan")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.disaster_shelters, (shelter, index) => {
                            return openBlock(), createBlock("tr", {
                              key: shelter.id
                            }, [
                              createVNode("td", null, toDisplayString(unref(iteration)(__props.disaster_shelters, index)), 1),
                              createVNode("td", null, toDisplayString(shelter.shelter.district.name), 1),
                              createVNode("td", null, toDisplayString(shelter.shelter.name), 1),
                              createVNode("td", { class: "text-center" }, toDisplayString(unref(number_format)(shelter.total_keluarga)), 1),
                              createVNode("td", { class: "text-center" }, toDisplayString(unref(number_format)(shelter.total_mangsa)), 1),
                              createVNode("td", { class: "text-center" }, toDisplayString(unref(number_format)(shelter.total_kematian)), 1),
                              createVNode("td", null, toDisplayString(unref(format)(new Date(shelter.dibuka_pada), "yyyy-MM-dd HH:mm:ss")), 1),
                              createVNode("td", null, toDisplayString(shelter.ditutup_pada == null ? "-" : unref(format)(new Date(shelter.ditutup_pada), "yyyy-MM-dd HH:mm:ss")), 1),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "btn btn-info btn-sm",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#editPPSModal",
                                    onClick: ($event) => unref(editPPS)(shelter)
                                  }, [
                                    createVNode("i", { class: "ri-edit-2-fill align-bottom me-1" }),
                                    createTextVNode(" Kemaskini ")
                                  ], 8, ["onClick"]),
                                  createVNode("button", {
                                    type: "button",
                                    class: "btn btn-danger btn-sm"
                                  }, [
                                    createVNode("i", { class: "ri-delete-bin-line align-bottom me-1" }),
                                    createTextVNode(" Delete ")
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "tab-pane",
                      id: "tab3",
                      role: "tabpanel"
                    }, [
                      createVNode("div", {
                        id: "map",
                        style: { "width": "100%", "height": "600px" }
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="addPPSModal" class="modal fade" aria-labelledby="myModalLabel" aria-modal="true" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Daftar Maklumat PPS</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form><div class="modal-body"><div class="row mb-3"><div class="col-md-3"><label class="form-label">Negeri</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Negeri --</option><!--[-->`);
      ssrRenderList(__props.states, (state) => {
        _push(`<option${ssrRenderAttr("value", state.id)}>${ssrInterpolate(state.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Daerah</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Daerah --</option><!--[-->`);
      ssrRenderList(__props.districts, (district) => {
        _push(`<option${ssrRenderAttr("value", district.id)}>${ssrInterpolate(district.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Mukim</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Mukim --</option><!--[-->`);
      ssrRenderList(__props.parishes, (parish) => {
        _push(`<option${ssrRenderAttr("value", parish.id)}>${ssrInterpolate(parish.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Pusat Pemindahan <span class="text-danger">*</span></label></div><div class="col-md-9"><select class="form-control"><!--[-->`);
      ssrRenderList(__props.shelters, (shelter) => {
        _push(`<option${ssrRenderAttr("value", shelter.id)}>${ssrInterpolate(shelter.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (__props.errors.shelter_id) {
        _push(`<span class="text-danger">${ssrInterpolate(__props.errors.shelter_id)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Keluarga</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(disaster_shelter).total_keluarga)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Mangsa</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(disaster_shelter).total_mangsa)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Kematian</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(disaster_shelter).total_kematian)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Tarikh Dibuka <span class="text-danger">*</span></label></div><div class="col-md-4"><input type="datetime-local" step="any" class="form-control"${ssrRenderAttr("value", unref(disaster_shelter).dibuka_pada)}>`);
      if (__props.errors.dibuka_pada) {
        _push(`<span class="text-danger">${ssrInterpolate(__props.errors.dibuka_pada)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Tarikh Ditutup</label></div><div class="col-md-4"><input type="datetime-local" step="any" class="form-control"${ssrRenderAttr("value", unref(disaster_shelter).ditutup_pada)}></div></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-primary">Simpan</button></div></form></div></div></div><div id="editPPSModal" class="modal fade" aria-labelledby="myModalLabel" aria-modal="true" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Kemaskini Maklumat PPS</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form><div class="modal-body"><div class="row mb-3"><div class="col-md-3"><label class="form-label">Negeri</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Negeri --</option><!--[-->`);
      ssrRenderList(__props.states, (state) => {
        _push(`<option${ssrRenderAttr("value", state.id)}>${ssrInterpolate(state.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Daerah</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Daerah --</option><!--[-->`);
      ssrRenderList(__props.districts, (district) => {
        _push(`<option${ssrRenderAttr("value", district.id)}>${ssrInterpolate(district.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Mukim</label></div><div class="col-md-9"><select class="form-control"><option value="">-- Pilih Mukim --</option><!--[-->`);
      ssrRenderList(__props.parishes, (parish) => {
        _push(`<option${ssrRenderAttr("value", parish.id)}>${ssrInterpolate(parish.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Pusat Pemindahan <span class="text-danger">*</span></label></div><div class="col-md-9"><select class="form-control"><!--[-->`);
      ssrRenderList(__props.shelters, (shelter) => {
        _push(`<option${ssrRenderAttr("value", shelter.id)}>${ssrInterpolate(shelter.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (__props.errors.shelter_id) {
        _push(`<span class="text-danger">${ssrInterpolate(__props.errors.shelter_id)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Keluarga</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(e_disaster_shelter).total_keluarga)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Mangsa</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(e_disaster_shelter).total_mangsa)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Jumlah Kematian</label></div><div class="col-md-4"><input type="number" class="form-control"${ssrRenderAttr("value", unref(e_disaster_shelter).total_kematian)}></div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Tarikh Dibuka <span class="text-danger">*</span></label></div><div class="col-md-4"><input type="datetime-local" step="any" class="form-control"${ssrRenderAttr("value", unref(e_disaster_shelter).dibuka_pada)}>`);
      if (__props.errors.dibuka_pada) {
        _push(`<span class="text-danger">${ssrInterpolate(__props.errors.dibuka_pada)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row mb-3"><div class="col-md-3"><label class="form-label">Tarikh Ditutup</label></div><div class="col-md-4"><input type="datetime-local" step="any" class="form-control"${ssrRenderAttr("value", unref(e_disaster_shelter).ditutup_pada)}></div></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-success">Kemaskini</button></div></form></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Disaster/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
