import { onMounted, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-d8c5f04d.mjs";
import { Head } from "@inertiajs/vue3";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
const dashboard = "";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    summary: Object,
    summary_by_state: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Dashboard",
        active: true,
        link: route("dashboard")
      }
    ];
    onMounted(() => {
      var client = new XMLHttpRequest();
      client.open("GET", "../malaysia.svg");
      client.onreadystatechange = function() {
        $("#map").html(client.responseText);
      };
      client.send();
      setTimeout(function() {
        props.summary_by_state.forEach((element) => {
          $("#state" + element.state_id).css({ "fill": color(element.total_mangsa) });
        });
      }, 500);
    });
    let color = (total) => {
      if (total == 0) {
        return "white";
      } else if (total > 0 && total <= 1e3) {
        return "yellow";
      } else if (total > 1e3 && total <= 5e3) {
        return "orange";
      } else if (total > 5e3) {
        return "red";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Dashboard",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row"${_scopeId}><div class="col-md-8"${_scopeId}><div class="card full-height"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Peta Lokasi</h3></div><div class="card-body"${_scopeId}><div class="all-center"${_scopeId}><div id="map"${_scopeId}></div></div><table class="table table-bordered table-sm"${_scopeId}><thead${_scopeId}><tr style="${ssrRenderStyle({ "background": "#5f6b91", "color": "white" })}"${_scopeId}><th${_scopeId}>Negeri</th><th${_scopeId}>Daerah</th><th${_scopeId}>Keluarga</th><th${_scopeId}>Mangsa</th><th${_scopeId}>Kematian</th><th${_scopeId}>PPS Aktif</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.summary_by_state, (state) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(state.state)}</td><td align="center"${_scopeId}>${ssrInterpolate(state.total_district)}</td><td align="center"${_scopeId}>${ssrInterpolate(state.total_keluarga.toLocaleString())}</td><td align="center"${_scopeId}>${ssrInterpolate(state.total_mangsa.toLocaleString())}</td><td align="center"${_scopeId}>${ssrInterpolate(state.total_kematian.toLocaleString())}</td><td align="center"${_scopeId}>${ssrInterpolate(state.total_pps_aktif.toLocaleString())}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div><div class="col-md-4"${_scopeId}><div class="card full-height"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Summary</h3></div><div class="card-body"${_scopeId}><div class="row row-cols-1"${_scopeId}><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-cloud-moon-rain fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>JUMLAH BENCANA</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_disaster.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-compass fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>NEGERI</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_state.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-map-marked fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>DAERAH</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_district.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-users fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>JUMLAH KELUARGA</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_keluarga.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-procedures fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>JUMLAH MANGSA</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_mangsa.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-user-alt-slash fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>JUMLAH KEMATIAN</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_kematian.toLocaleString())}</div></div></div></div><div class="col mb-3"${_scopeId}><div class="flex"${_scopeId}><div${_scopeId}><i class="las la-campground fs-38 dashboard-icon"${_scopeId}></i></div><div${_scopeId}><div class="nowrap"${_scopeId}><b${_scopeId}>JUMLAH PPS AKTIF</b></div><div class="fs-14"${_scopeId}>${ssrInterpolate(__props.summary.total_pps_aktif.toLocaleString())}</div></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Dashboard",
                breadcrumbs
              }),
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-md-8" }, [
                  createVNode("div", { class: "card full-height" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Peta Lokasi")
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "all-center" }, [
                        createVNode("div", { id: "map" })
                      ]),
                      createVNode("table", { class: "table table-bordered table-sm" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { style: { "background": "#5f6b91", "color": "white" } }, [
                            createVNode("th", null, "Negeri"),
                            createVNode("th", null, "Daerah"),
                            createVNode("th", null, "Keluarga"),
                            createVNode("th", null, "Mangsa"),
                            createVNode("th", null, "Kematian"),
                            createVNode("th", null, "PPS Aktif")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.summary_by_state, (state) => {
                            return openBlock(), createBlock("tr", null, [
                              createVNode("td", null, toDisplayString(state.state), 1),
                              createVNode("td", { align: "center" }, toDisplayString(state.total_district), 1),
                              createVNode("td", { align: "center" }, toDisplayString(state.total_keluarga.toLocaleString()), 1),
                              createVNode("td", { align: "center" }, toDisplayString(state.total_mangsa.toLocaleString()), 1),
                              createVNode("td", { align: "center" }, toDisplayString(state.total_kematian.toLocaleString()), 1),
                              createVNode("td", { align: "center" }, toDisplayString(state.total_pps_aktif.toLocaleString()), 1)
                            ]);
                          }), 256))
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-md-4" }, [
                  createVNode("div", { class: "card full-height" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Summary")
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row row-cols-1" }, [
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-cloud-moon-rain fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "JUMLAH BENCANA")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_disaster.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-compass fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "NEGERI")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_state.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-map-marked fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "DAERAH")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_district.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-users fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "JUMLAH KELUARGA")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_keluarga.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-procedures fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "JUMLAH MANGSA")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_mangsa.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-user-alt-slash fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "JUMLAH KEMATIAN")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_kematian.toLocaleString()), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col mb-3" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              createVNode("i", { class: "las la-campground fs-38 dashboard-icon" })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "nowrap" }, [
                                createVNode("b", null, "JUMLAH PPS AKTIF")
                              ]),
                              createVNode("div", { class: "fs-14" }, toDisplayString(__props.summary.total_pps_aktif.toLocaleString()), 1)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
