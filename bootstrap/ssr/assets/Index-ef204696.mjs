import { getCurrentInstance, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import { format } from "date-fns";
import _sfc_main$3 from "./Table-a11fc6ff.mjs";
import "sweetalert2";
import "@inertiajs/inertia";
import "./Pagination-9748d461.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: Object,
    disasters: Object
  },
  setup(__props) {
    const app = getCurrentInstance();
    const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;
    const breadcrumbs = [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Pengurusan Bencana" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Pengurusan Bencana",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("disaster.create"),
              class: "btn btn-success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-add-circle-fill fs-15 align-bottom me-1"${_scopeId2}></i> Add New `);
                } else {
                  return [
                    createVNode("i", { class: "ri-add-circle-fill fs-15 align-bottom me-1" }),
                    createTextVNode(" Add New ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Senarai Bencana</h3></div><div class="card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "data-route": _ctx.route("disaster.index"),
              filters: __props.filters,
              data: __props.disasters
            }, {
              thead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tr${_scopeId2}><th${_scopeId2}>#</th><th${_scopeId2}>Jenis Bencana</th><th${_scopeId2}>Negeri</th><th${_scopeId2}>Daerah</th><th${_scopeId2}>Mukim</th><th${_scopeId2}>Nama</th><th${_scopeId2}>Tarikh</th><th${_scopeId2}>Status</th><th${_scopeId2}>Tindakan</th></tr>`);
                } else {
                  return [
                    createVNode("tr", null, [
                      createVNode("th", null, "#"),
                      createVNode("th", null, "Jenis Bencana"),
                      createVNode("th", null, "Negeri"),
                      createVNode("th", null, "Daerah"),
                      createVNode("th", null, "Mukim"),
                      createVNode("th", null, "Nama"),
                      createVNode("th", null, "Tarikh"),
                      createVNode("th", null, "Status"),
                      createVNode("th", null, "Tindakan")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.disasters.data, (disaster, index) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(unref(iterationPaginated)(__props.disasters, index))}</td><td${_scopeId2}>${ssrInterpolate(disaster.kategori.name)}</td><td${_scopeId2}>${ssrInterpolate(disaster.state.name)}</td><td${_scopeId2}>${ssrInterpolate(disaster.district.name)}</td><td${_scopeId2}>${ssrInterpolate(disaster.parish_id == null ? "" : disaster.parish.name)}</td><td${_scopeId2}>${ssrInterpolate(disaster.name)}</td><td${_scopeId2}>${ssrInterpolate(unref(format)(new Date(disaster.datetime_start), "yyyy-MM-dd HH:mm:ss"))}</td><td${_scopeId2}>${ssrInterpolate(disaster.status)}</td><td${_scopeId2}><div class="d-flex gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("disaster.show", disaster),
                      class: "btn btn-info btn-sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<i class="ri-eye-2-line align-bottom me-1"${_scopeId3}></i> Lihat `);
                        } else {
                          return [
                            createVNode("i", { class: "ri-eye-2-line align-bottom me-1" }),
                            createTextVNode(" Lihat ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<button type="button" class="btn btn-danger btn-sm"${_scopeId2}><i class="ri-delete-bin-line align-bottom me-1"${_scopeId2}></i> Delete </button></div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.disasters.data, (disaster, index) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.disasters, index)), 1),
                          createVNode("td", null, toDisplayString(disaster.kategori.name), 1),
                          createVNode("td", null, toDisplayString(disaster.state.name), 1),
                          createVNode("td", null, toDisplayString(disaster.district.name), 1),
                          createVNode("td", null, toDisplayString(disaster.parish_id == null ? "" : disaster.parish.name), 1),
                          createVNode("td", null, toDisplayString(disaster.name), 1),
                          createVNode("td", null, toDisplayString(unref(format)(new Date(disaster.datetime_start), "yyyy-MM-dd HH:mm:ss")), 1),
                          createVNode("td", null, toDisplayString(disaster.status), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("disaster.show", disaster),
                                class: "btn btn-info btn-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "ri-eye-2-line align-bottom me-1" }),
                                  createTextVNode(" Lihat ")
                                ]),
                                _: 2
                              }, 1032, ["href"]),
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
                title: "Pengurusan Bencana",
                breadcrumbs
              }),
              createVNode("div", { class: "mb-3" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("disaster.create"),
                  class: "btn btn-success"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "ri-add-circle-fill fs-15 align-bottom me-1" }),
                    createTextVNode(" Add New ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("h3", { class: "card-title mb-0" }, "Senarai Bencana")
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode(_sfc_main$3, {
                    "data-route": _ctx.route("disaster.index"),
                    filters: __props.filters,
                    data: __props.disasters
                  }, {
                    thead: withCtx(() => [
                      createVNode("tr", null, [
                        createVNode("th", null, "#"),
                        createVNode("th", null, "Jenis Bencana"),
                        createVNode("th", null, "Negeri"),
                        createVNode("th", null, "Daerah"),
                        createVNode("th", null, "Mukim"),
                        createVNode("th", null, "Nama"),
                        createVNode("th", null, "Tarikh"),
                        createVNode("th", null, "Status"),
                        createVNode("th", null, "Tindakan")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.disasters.data, (disaster, index) => {
                          return openBlock(), createBlock("tr", null, [
                            createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.disasters, index)), 1),
                            createVNode("td", null, toDisplayString(disaster.kategori.name), 1),
                            createVNode("td", null, toDisplayString(disaster.state.name), 1),
                            createVNode("td", null, toDisplayString(disaster.district.name), 1),
                            createVNode("td", null, toDisplayString(disaster.parish_id == null ? "" : disaster.parish.name), 1),
                            createVNode("td", null, toDisplayString(disaster.name), 1),
                            createVNode("td", null, toDisplayString(unref(format)(new Date(disaster.datetime_start), "yyyy-MM-dd HH:mm:ss")), 1),
                            createVNode("td", null, toDisplayString(disaster.status), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("disaster.show", disaster),
                                  class: "btn btn-info btn-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "ri-eye-2-line align-bottom me-1" }),
                                    createTextVNode(" Lihat ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Disaster/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
