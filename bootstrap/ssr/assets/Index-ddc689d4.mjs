import { getCurrentInstance, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import { format } from "date-fns";
import _sfc_main$3 from "./Table-3a5b73c4.mjs";
import "sweetalert2";
import "@inertiajs/inertia";
import "./Pagination-41b8050c.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: Object,
    reports: Object
  },
  setup(__props) {
    const app = getCurrentInstance();
    const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;
    const breadcrumbs = [
      {
        title: "Laporan & Statistik",
        active: true
      },
      {
        title: "Laporan Terkini Bencana",
        active: true
      }
    ];
    let jana = {
      report_date: null
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Laporan Terkini Bencana" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Laporan Terkini Bencana",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-3"${_scopeId}><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalGenerate"${_scopeId}><i class="ri-add-circle-fill align-bottom me-1"${_scopeId}></i> Jana Laporan </button></div><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Senarai Laporan Terkini Kejadian Bencana</h3></div><div class="card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "data-route": _ctx.route("report.index"),
              filters: __props.filters,
              data: __props.reports
            }, {
              thead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tr${_scopeId2}><th${_scopeId2}>#</th><th${_scopeId2}>Tarikh Laporan</th><th${_scopeId2}>Dijana Oleh</th><th${_scopeId2}>Tindakan</th></tr>`);
                } else {
                  return [
                    createVNode("tr", null, [
                      createVNode("th", null, "#"),
                      createVNode("th", null, "Tarikh Laporan"),
                      createVNode("th", null, "Dijana Oleh"),
                      createVNode("th", null, "Tindakan")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.reports.data, (report, index) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(unref(iterationPaginated)(__props.reports, index))}</td><td${_scopeId2}>${ssrInterpolate(unref(format)(new Date(report.report_date), "yyyy-MM-dd HH:mm:ss"))}</td><td${_scopeId2}>${ssrInterpolate(report.created_by.name)}</td><td${_scopeId2}><div class="d-flex gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("report.show", report))} class="btn btn-info btn-sm" target="_blank"${_scopeId2}><i class="ri-eye-2-line align-bottom me-1"${_scopeId2}></i> Lihat </a><a${ssrRenderAttr("href", _ctx.route("report.show", { "report": report, "download": true }))} class="btn btn-success btn-sm" target="_blank"${_scopeId2}><i class="ri-download-2-line align-bottom me-1"${_scopeId2}></i> Muat Turun </a><button type="button" class="btn btn-danger btn-sm"${_scopeId2}><i class="ri-delete-bin-line align-bottom me-1"${_scopeId2}></i> Delete </button></div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.reports.data, (report, index) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.reports, index)), 1),
                          createVNode("td", null, toDisplayString(unref(format)(new Date(report.report_date), "yyyy-MM-dd HH:mm:ss")), 1),
                          createVNode("td", null, toDisplayString(report.created_by.name), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode("a", {
                                href: _ctx.route("report.show", report),
                                class: "btn btn-info btn-sm",
                                target: "_blank"
                              }, [
                                createVNode("i", { class: "ri-eye-2-line align-bottom me-1" }),
                                createTextVNode(" Lihat ")
                              ], 8, ["href"]),
                              createVNode("a", {
                                href: _ctx.route("report.show", { "report": report, "download": true }),
                                class: "btn btn-success btn-sm",
                                target: "_blank"
                              }, [
                                createVNode("i", { class: "ri-download-2-line align-bottom me-1" }),
                                createTextVNode(" Muat Turun ")
                              ], 8, ["href"]),
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
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Laporan Terkini Bencana",
                breadcrumbs
              }),
              createVNode("div", { class: "mb-3" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-success",
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#modalGenerate"
                }, [
                  createVNode("i", { class: "ri-add-circle-fill align-bottom me-1" }),
                  createTextVNode(" Jana Laporan ")
                ])
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("h3", { class: "card-title mb-0" }, "Senarai Laporan Terkini Kejadian Bencana")
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode(_sfc_main$3, {
                    "data-route": _ctx.route("report.index"),
                    filters: __props.filters,
                    data: __props.reports
                  }, {
                    thead: withCtx(() => [
                      createVNode("tr", null, [
                        createVNode("th", null, "#"),
                        createVNode("th", null, "Tarikh Laporan"),
                        createVNode("th", null, "Dijana Oleh"),
                        createVNode("th", null, "Tindakan")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.reports.data, (report, index) => {
                          return openBlock(), createBlock("tr", null, [
                            createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.reports, index)), 1),
                            createVNode("td", null, toDisplayString(unref(format)(new Date(report.report_date), "yyyy-MM-dd HH:mm:ss")), 1),
                            createVNode("td", null, toDisplayString(report.created_by.name), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode("a", {
                                  href: _ctx.route("report.show", report),
                                  class: "btn btn-info btn-sm",
                                  target: "_blank"
                                }, [
                                  createVNode("i", { class: "ri-eye-2-line align-bottom me-1" }),
                                  createTextVNode(" Lihat ")
                                ], 8, ["href"]),
                                createVNode("a", {
                                  href: _ctx.route("report.show", { "report": report, "download": true }),
                                  class: "btn btn-success btn-sm",
                                  target: "_blank"
                                }, [
                                  createVNode("i", { class: "ri-download-2-line align-bottom me-1" }),
                                  createTextVNode(" Muat Turun ")
                                ], 8, ["href"]),
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
                        }), 256))
                      ])
                    ]),
                    _: 1
                  }, 8, ["data-route", "filters", "data"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="modalGenerate" class="modal fade" tabindex="-1" aria-labelledby="myModalLabel" style="${ssrRenderStyle({ "display": "none" })}" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Jana Laporan</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form><div class="modal-body"><div class="form-group"><label>Tarikh Laporan</label><input type="datetime-local" step="any" class="form-control"${ssrRenderAttr("value", unref(jana).report_date)}></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-success">Jana</button></div></form></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Report/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
