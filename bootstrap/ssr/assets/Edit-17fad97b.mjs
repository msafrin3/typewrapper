import { reactive, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-d8c5f04d.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import Swal from "sweetalert2";
import "leaflet/dist/leaflet.js";
/* empty css                   */const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    disaster: Object,
    types: Object,
    states: Object,
    districts: Object,
    parishes: Object,
    errors: Object,
    levels: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Pengurusan Bencana",
        active: false,
        link: route("disaster.index")
      },
      {
        title: "Tambah Baru",
        active: true
      }
    ];
    let i_latitude = props.disaster.latitude == null ? 4.4594095 : props.disaster.latitude;
    let i_longitude = props.disaster.longitude == null ? 102.2309874 : props.disaster.longitude;
    let i_zoom = props.disaster.latitude == null ? 8 : 18;
    let setLocation = (latitude, longitude) => {
      e_disaster.latitude = latitude;
      e_disaster.longitude = longitude;
    };
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
    let filter = {};
    let doFilter = () => {
      router.get(route("disaster.edit", props.disaster), filter, {
        preserveState: true,
        replace: true
      });
    };
    let submit = () => {
      router.post(route("disaster.update", props.disaster), e_disaster, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Berjaya!", response.props.response.success, "success");
          }
        }
      });
    };
    let marker;
    let icon = L.icon({
      iconUrl: "/images/marker-icon.png",
      shadowUrl: "/images/marker-shadow.png"
    });
    let initMap = () => {
      setTimeout(function() {
        const map = L.map("map").setView([i_latitude, i_longitude], i_zoom);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        const input = document.getElementById("searchbox");
        const options = {
          types: ["geocode"],
          componentRestrictions: {
            country: "my"
          }
        };
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        if (props.disaster.latitude != null) {
          marker = L.marker([props.disaster.latitude, props.disaster.longitude], {
            draggable: true,
            icon
          }).addTo(map);
          marker.on("dragend", function(event) {
            var lat = event.target.getLatLng().lat;
            var long = event.target.getLatLng().lng;
            setLocation(lat, long);
          });
        }
        autocomplete.addListener("place_changed", () => {
          if (marker != void 0) {
            map.removeLayer(marker);
          }
          const place = autocomplete.getPlace();
          var latitude = place.geometry.location.lat();
          var longitude = place.geometry.location.lng();
          setLocation(latitude, longitude);
          map.setView([latitude, longitude], 18);
          marker = L.marker([latitude, longitude], {
            draggable: true,
            icon
          }).addTo(map);
          marker.on("dragend", function(event) {
            var lat = event.target.getLatLng().lat;
            var long = event.target.getLatLng().lng;
            setLocation(lat, long);
          });
        });
      }, 500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Kemaskini Maklumat Bencana" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Kemaskini Maklumat Bencana",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-8"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Kemaskini Maklumat Bencana</h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Jenis Bencana <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-6"${_scopeId}><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.types, (type) => {
              _push2(`<option${ssrRenderAttr("value", type.id)}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.kategori_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.kategori_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Nama Bencana <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-9"${_scopeId}><input type="text" class="form-control" placeholder="Masukkan Nama Bencana"${ssrRenderAttr("value", unref(e_disaster).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label classs="form-label"${_scopeId}>Keterangan</label></div><div class="col-md-9"${_scopeId}><textarea rows="5" class="form-control" placeholder="Ketarangan Bencana"${_scopeId}>${ssrInterpolate(unref(e_disaster).description)}</textarea>`);
            if (__props.errors.description) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.description)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Level <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-4"${_scopeId}><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.levels, (level) => {
              _push2(`<option${ssrRenderAttr("value", level.id)}${_scopeId}>${ssrInterpolate(level.name)}</option>`);
            });
            _push2(`<!--]--></select></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Tarikh Mula &amp; Akhir <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-9"${_scopeId}><div class="input-group"${_scopeId}><input type="datetime-local" step="any" class="form-control" placeholder="Tarikh Mula"${ssrRenderAttr("value", unref(e_disaster).datetime_start)}${_scopeId}><input type="datetime-local" step="any" class="form-control" placeholder="Tarikh Akhir"${ssrRenderAttr("value", unref(e_disaster).datetime_end)}${_scopeId}></div></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Negeri <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-6"${_scopeId}><select class="form-control"${_scopeId}><option value=""${_scopeId}>-- Pilih Negeri --</option><!--[-->`);
            ssrRenderList(__props.states, (state) => {
              _push2(`<option${ssrRenderAttr("value", state.id)}${_scopeId}>${ssrInterpolate(state.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.state_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.state_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Daerah <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-6"${_scopeId}><select class="form-control"${_scopeId}><option value=""${_scopeId}>-- Pilih Daerah --</option><!--[-->`);
            ssrRenderList(__props.districts, (district) => {
              _push2(`<option${ssrRenderAttr("value", district.id)}${_scopeId}>${ssrInterpolate(district.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.district_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.district_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Mukim</label></div><div class="col-md-6"${_scopeId}><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.parishes, (parish) => {
              _push2(`<option${ssrRenderAttr("value", parish.id)}${_scopeId}>${ssrInterpolate(parish.name)}</option>`);
            });
            _push2(`<!--]--></select></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Lokasi</label></div><div class="col-md-9"${_scopeId}><div class="input-group"${_scopeId}><input type="text" class="form-control" placeholder="Latitude"${ssrRenderAttr("value", unref(e_disaster).latitude)}${_scopeId}><input type="text" class="form-control" placeholder="Longitude"${ssrRenderAttr("value", unref(e_disaster).longitude)}${_scopeId}><button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#mapModal"${_scopeId}><i class="ri-map-pin-fill fs-17"${_scopeId}></i></button></div></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Status <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-3"${_scopeId}><select class="form-control"${_scopeId}><option value="Aktif"${_scopeId}>Aktif</option><option value="Tidak Aktif"${_scopeId}>Tidak Aktif</option></select>`);
            if (__props.errors.status) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.status)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="card-footer"${_scopeId}><div class="d-flex gap-2 justify-content-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("disaster.show", __props.disaster),
              class: "btn btn-light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Batal`);
                } else {
                  return [
                    createTextVNode("Batal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="submit" class="btn btn-success"${_scopeId}>Simpan</button></div></div></form></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Kemaskini Maklumat Bencana",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-8" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Kemaskini Maklumat Bencana")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Jenis Bencana "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).kategori_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.types, (type) => {
                                return openBlock(), createBlock("option", {
                                  key: type.id,
                                  value: type.id
                                }, toDisplayString(type.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(e_disaster).kategori_id]
                            ]),
                            __props.errors.kategori_id ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.kategori_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Nama Bencana "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-9" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Masukkan Nama Bencana",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).name = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(e_disaster).name]
                            ]),
                            __props.errors.name ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { classs: "form-label" }, "Keterangan")
                          ]),
                          createVNode("div", { class: "col-md-9" }, [
                            withDirectives(createVNode("textarea", {
                              rows: "5",
                              class: "form-control",
                              placeholder: "Ketarangan Bencana",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).description = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(e_disaster).description]
                            ]),
                            __props.errors.description ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.description), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Level "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).level_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.levels, (level) => {
                                return openBlock(), createBlock("option", {
                                  value: level.id
                                }, toDisplayString(level.name), 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(e_disaster).level_id]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Tarikh Mula & Akhir "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-9" }, [
                            createVNode("div", { class: "input-group" }, [
                              withDirectives(createVNode("input", {
                                type: "datetime-local",
                                step: "any",
                                class: "form-control",
                                placeholder: "Tarikh Mula",
                                "onUpdate:modelValue": ($event) => unref(e_disaster).datetime_start = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(e_disaster).datetime_start]
                              ]),
                              withDirectives(createVNode("input", {
                                type: "datetime-local",
                                step: "any",
                                class: "form-control",
                                placeholder: "Tarikh Akhir",
                                "onUpdate:modelValue": ($event) => unref(e_disaster).datetime_end = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(e_disaster).datetime_end]
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Negeri "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).state_id = $event,
                              onChange: ($event) => {
                                unref(filter).state_id = unref(e_disaster).state_id;
                                unref(filter).district_id = null;
                                unref(filter).parish_id = null;
                                unref(doFilter)();
                              }
                            }, [
                              createVNode("option", { value: "" }, "-- Pilih Negeri --"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.states, (state) => {
                                return openBlock(), createBlock("option", {
                                  key: state.id,
                                  value: state.id
                                }, toDisplayString(state.name), 9, ["value"]);
                              }), 128))
                            ], 40, ["onUpdate:modelValue", "onChange"]), [
                              [vModelSelect, unref(e_disaster).state_id]
                            ]),
                            __props.errors.state_id ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.state_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Daerah "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-6" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).district_id = $event,
                              onChange: ($event) => {
                                unref(filter).district_id = unref(e_disaster).district_id;
                                unref(doFilter)();
                              }
                            }, [
                              createVNode("option", { value: "" }, "-- Pilih Daerah --"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.districts, (district) => {
                                return openBlock(), createBlock("option", {
                                  key: district.id,
                                  value: district.id
                                }, toDisplayString(district.name), 9, ["value"]);
                              }), 128))
                            ], 40, ["onUpdate:modelValue", "onChange"]), [
                              [vModelSelect, unref(e_disaster).district_id]
                            ]),
                            __props.errors.district_id ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.district_id), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, "Mukim")
                          ]),
                          createVNode("div", { class: "col-md-6" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).parish_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.parishes, (parish) => {
                                return openBlock(), createBlock("option", {
                                  key: parish.id,
                                  value: parish.id
                                }, toDisplayString(parish.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(e_disaster).parish_id]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, "Lokasi")
                          ]),
                          createVNode("div", { class: "col-md-9" }, [
                            createVNode("div", { class: "input-group" }, [
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Latitude",
                                "onUpdate:modelValue": ($event) => unref(e_disaster).latitude = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(e_disaster).latitude]
                              ]),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Longitude",
                                "onUpdate:modelValue": ($event) => unref(e_disaster).longitude = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(e_disaster).longitude]
                              ]),
                              createVNode("button", {
                                class: "btn btn-info",
                                type: "button",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#mapModal",
                                onClick: unref(initMap)
                              }, [
                                createVNode("i", { class: "ri-map-pin-fill fs-17" })
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Status "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-3" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(e_disaster).status = $event
                            }, [
                              createVNode("option", { value: "Aktif" }, "Aktif"),
                              createVNode("option", { value: "Tidak Aktif" }, "Tidak Aktif")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(e_disaster).status]
                            ]),
                            __props.errors.status ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.status), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-footer" }, [
                        createVNode("div", { class: "d-flex gap-2 justify-content-end" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("disaster.show", __props.disaster),
                            class: "btn btn-light"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Batal")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-success"
                          }, "Simpan")
                        ])
                      ])
                    ], 40, ["onSubmit"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="mapModal" class="modal fade"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Peta Lokasi</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" style="${ssrRenderStyle({ "position": "relative" })}"><div class="form-group mb-3"><input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="${ssrRenderStyle({ "width": "40%" })}"></div><div id="map" style="${ssrRenderStyle({ "width": "100%", "height": "600px" })}"></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Set Lokasi</button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Disaster/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
