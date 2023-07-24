import { reactive, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-d8c5f04d.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import "leaflet/dist/leaflet.js";
/* empty css                   */import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    types: Object,
    states: Object,
    districts: Object,
    parishes: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Pusat Pemindahan",
        active: false,
        link: route("shelter.index")
      },
      {
        title: "Tambah Baru",
        active: true
      }
    ];
    let shelter = reactive({
      name: null,
      shelter_type_id: props.types[0].id,
      state_id: null,
      district_id: null,
      parish_id: null,
      latitude: null,
      longitude: null,
      pic_name: null,
      pic_notel1: null
    });
    let filter = {};
    let doFilter = () => {
      router.get(route("shelter.create"), filter, {
        preserveState: true,
        replace: true
      });
    };
    let initMap = () => {
      setTimeout(function() {
        const map = L.map("map").setView([4.4594095, 102.2309874], 8);
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
        var marker;
        autocomplete.addListener("place_changed", () => {
          if (marker != void 0) {
            map.removeLayer(marker);
          }
          const place = autocomplete.getPlace();
          var latitude = place.geometry.location.lat();
          var longitude = place.geometry.location.lng();
          shelter.latitude = latitude;
          shelter.longitude = longitude;
          map.setView([latitude, longitude], 18);
          marker = L.marker([latitude, longitude], {
            draggable: true
          }).addTo(map);
          marker.on("dragend", function(event) {
            var lat = event.target.getLatLng().lat;
            var long = event.target.getLatLng().lng;
            shelter.latitude = lat;
            shelter.longitude = long;
          });
        });
      }, 500);
    };
    let submit = () => {
      router.post(route("shelter.store"), shelter, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Berjaya!", response.props.response.success, "success");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Tambah Puast Pemindahan" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Tambah Puast Pemindahan",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-8"${_scopeId}><form${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Tambah Pusat Pemindahan</h3></div><div class="card-body"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Nama Pusat <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-9"${_scopeId}><input type="text" class="form-control" placeholder="Masukkan Nama Pusat Pemindahan"${ssrRenderAttr("value", unref(shelter).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Jenis Pusat <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-7"${_scopeId}><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.types, (type) => {
              _push2(`<option${ssrRenderAttr("value", type.id)}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.shelter_type_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.shelter_type_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Negeri <span class="text-danger"${_scopeId}>*</span></label></div><div class="col-md-6"${_scopeId}><select class="form-control"${_scopeId}><option value=""${_scopeId}>-- Pilih Negeri --</option><!--[-->`);
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
            _push2(`<!--]--></select></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Lokasi</label></div><div class="col-md-9"${_scopeId}><div class="input-group"${_scopeId}><input type="text" class="form-control" placeholder="Latitude"${ssrRenderAttr("value", unref(shelter).latitude)}${_scopeId}><input type="text" class="form-control" placeholder="Longitude"${ssrRenderAttr("value", unref(shelter).longitude)}${_scopeId}><button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#mapModal"${_scopeId}><i class="ri-map-pin-fill fs-17"${_scopeId}></i></button></div></div></div><hr${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>Nama Pengurus PPS</label></div><div class="col-md-6"${_scopeId}><input type="text" class="form-control"${ssrRenderAttr("value", unref(shelter).pic_name)}${_scopeId}></div></div><div class="row mb-3"${_scopeId}><div class="col-md-3"${_scopeId}><label class="form-label"${_scopeId}>No Telefon</label></div><div class="col-md-4"${_scopeId}><input type="text" class="form-control"${ssrRenderAttr("value", unref(shelter).pic_notel1)}${_scopeId}></div></div></div><div class="card-footer"${_scopeId}><div class="d-flex gap-2 justify-content-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("shelter.index"),
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
            _push2(`<button type="submit" class="btn btn-success"${_scopeId}>Simpan</button></div></div></div></form></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Tambah Puast Pemindahan",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-8" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(unref(submit), ["prevent"])
                  }, [
                    createVNode("div", { class: "card" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h3", { class: "card-title mb-0" }, "Tambah Pusat Pemindahan")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Nama Pusat "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-9" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Masukkan Nama Pusat Pemindahan",
                              "onUpdate:modelValue": ($event) => unref(shelter).name = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(shelter).name]
                            ]),
                            __props.errors.name ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, [
                              createTextVNode("Jenis Pusat "),
                              createVNode("span", { class: "text-danger" }, "*")
                            ])
                          ]),
                          createVNode("div", { class: "col-md-7" }, [
                            withDirectives(createVNode("select", {
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(shelter).shelter_type_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.types, (type) => {
                                return openBlock(), createBlock("option", {
                                  key: type.id,
                                  value: type.id
                                }, toDisplayString(type.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(shelter).shelter_type_id]
                            ]),
                            __props.errors.shelter_type_id ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(__props.errors.shelter_type_id), 1)) : createCommentVNode("", true)
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
                              "onUpdate:modelValue": ($event) => unref(shelter).state_id = $event,
                              onChange: ($event) => {
                                unref(filter).state_id = unref(shelter).state_id;
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
                              [vModelSelect, unref(shelter).state_id]
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
                              "onUpdate:modelValue": ($event) => unref(shelter).district_id = $event,
                              onChange: ($event) => {
                                unref(filter).district_id = unref(shelter).district_id;
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
                              [vModelSelect, unref(shelter).district_id]
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
                              "onUpdate:modelValue": ($event) => unref(shelter).parish_id = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.parishes, (parish) => {
                                return openBlock(), createBlock("option", {
                                  key: parish.id,
                                  value: parish.id
                                }, toDisplayString(parish.name), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(shelter).parish_id]
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
                                "onUpdate:modelValue": ($event) => unref(shelter).latitude = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(shelter).latitude]
                              ]),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control",
                                placeholder: "Longitude",
                                "onUpdate:modelValue": ($event) => unref(shelter).longitude = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(shelter).longitude]
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
                        createVNode("hr"),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, "Nama Pengurus PPS")
                          ]),
                          createVNode("div", { class: "col-md-6" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(shelter).pic_name = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(shelter).pic_name]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3" }, [
                          createVNode("div", { class: "col-md-3" }, [
                            createVNode("label", { class: "form-label" }, "No Telefon")
                          ]),
                          createVNode("div", { class: "col-md-4" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              class: "form-control",
                              "onUpdate:modelValue": ($event) => unref(shelter).pic_notel1 = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(shelter).pic_notel1]
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-footer" }, [
                        createVNode("div", { class: "d-flex gap-2 justify-content-end" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("shelter.index"),
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
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="mapModal" class="modal fade"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modal Heading</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" style="${ssrRenderStyle({ "position": "relative" })}"><div class="form-group mb-3"><input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="${ssrRenderStyle({ "width": "40%" })}"></div><div id="map" style="${ssrRenderStyle({ "width": "100%", "height": "600px" })}"></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Set Lokasi</button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shelter/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
