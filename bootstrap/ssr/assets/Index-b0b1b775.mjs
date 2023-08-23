import { getCurrentInstance, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-fa2b58e3.mjs";
import _sfc_main$3 from "./Table-5e71e3ad.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import { format } from "date-fns";
import Swal from "sweetalert2";
import "@inertiajs/inertia";
import "./Pagination-35e34ca8.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    roles: Object,
    filters: Object
  },
  setup(__props) {
    const app = getCurrentInstance();
    const iterationPaginated = app.appContext.config.globalProperties.$iterationPaginated;
    const breadcrumbs = [
      {
        title: "Administrator",
        active: true
      },
      {
        title: "Role Management",
        active: true
      }
    ];
    let deleteRole = (role) => {
      Swal.fire({
        title: "Are you sure want to delete this role?",
        icon: "warning",
        html: "Important! User assigned with this role will revoked.",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("admin.role.destroy", role), {
            onSuccess: (response) => {
              if (response.props.response.success) {
                Swal.fire("Success!", response.props.response.success, "success");
              }
            }
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Role Management" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Role Management",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.role.create"),
              class: "btn btn-success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-add-circle-fill align-bottom me-1"${_scopeId2}></i> Add New `);
                } else {
                  return [
                    createVNode("i", { class: "ri-add-circle-fill align-bottom me-1" }),
                    createTextVNode(" Add New ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>List Role</h3></div><div class="card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "data-route": _ctx.route("admin.role.index"),
              filters: __props.filters,
              data: __props.roles
            }, {
              thead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tr${_scopeId2}><th${_scopeId2}>#</th><th${_scopeId2}>Name</th><th${_scopeId2}>Guard Name</th><th width="50%"${_scopeId2}>Permissions</th><th${_scopeId2}>Created At</th><th${_scopeId2}>Action</th></tr>`);
                } else {
                  return [
                    createVNode("tr", null, [
                      createVNode("th", null, "#"),
                      createVNode("th", null, "Name"),
                      createVNode("th", null, "Guard Name"),
                      createVNode("th", { width: "50%" }, "Permissions"),
                      createVNode("th", null, "Created At"),
                      createVNode("th", null, "Action")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.roles.data, (role, index) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(unref(iterationPaginated)(__props.roles, index))}</td><td${_scopeId2}>${ssrInterpolate(role.name)}</td><td${_scopeId2}>${ssrInterpolate(role.guard_name)}</td><td${_scopeId2}><div class="d-flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(role.permissions, (permission) => {
                      _push3(`<span class="badge badge-soft-secondary fs-11"${_scopeId2}>${ssrInterpolate(permission.name)}</span>`);
                    });
                    _push3(`<!--]--></div></td><td${_scopeId2}>${ssrInterpolate(unref(format)(new Date(role.created_at), "yyyy-MM-dd H:m:ss"))}</td><td${_scopeId2}><div class="d-flex flex-wrap gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("admin.role.edit", role),
                      class: "link-success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<i class="ri-edit-2-line fs-17"${_scopeId3}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "ri-edit-2-line fs-17" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<a href="#" class="link-danger"${_scopeId2}><i class="ri-delete-bin-line fs-17"${_scopeId2}></i></a></div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.roles.data, (role, index) => {
                        return openBlock(), createBlock("tr", {
                          key: role.id
                        }, [
                          createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.roles, index)), 1),
                          createVNode("td", null, toDisplayString(role.name), 1),
                          createVNode("td", null, toDisplayString(role.guard_name), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(role.permissions, (permission) => {
                                return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(permission.name), 1);
                              }), 256))
                            ])
                          ]),
                          createVNode("td", null, toDisplayString(unref(format)(new Date(role.created_at), "yyyy-MM-dd H:m:ss")), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("admin.role.edit", role),
                                class: "link-success"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "ri-edit-2-line fs-17" })
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("a", {
                                href: "#",
                                class: "link-danger",
                                onClick: ($event) => unref(deleteRole)(role)
                              }, [
                                createVNode("i", { class: "ri-delete-bin-line fs-17" })
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
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
                title: "Role Management",
                breadcrumbs
              }),
              createVNode("div", { class: "mb-3" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("admin.role.create"),
                  class: "btn btn-success"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "ri-add-circle-fill align-bottom me-1" }),
                    createTextVNode(" Add New ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("h3", { class: "card-title mb-0" }, "List Role")
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode(_sfc_main$3, {
                    "data-route": _ctx.route("admin.role.index"),
                    filters: __props.filters,
                    data: __props.roles
                  }, {
                    thead: withCtx(() => [
                      createVNode("tr", null, [
                        createVNode("th", null, "#"),
                        createVNode("th", null, "Name"),
                        createVNode("th", null, "Guard Name"),
                        createVNode("th", { width: "50%" }, "Permissions"),
                        createVNode("th", null, "Created At"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.roles.data, (role, index) => {
                          return openBlock(), createBlock("tr", {
                            key: role.id
                          }, [
                            createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.roles, index)), 1),
                            createVNode("td", null, toDisplayString(role.name), 1),
                            createVNode("td", null, toDisplayString(role.guard_name), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(role.permissions, (permission) => {
                                  return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(permission.name), 1);
                                }), 256))
                              ])
                            ]),
                            createVNode("td", null, toDisplayString(unref(format)(new Date(role.created_at), "yyyy-MM-dd H:m:ss")), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("admin.role.edit", role),
                                  class: "link-success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "ri-edit-2-line fs-17" })
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("a", {
                                  href: "#",
                                  class: "link-danger",
                                  onClick: ($event) => unref(deleteRole)(role)
                                }, [
                                  createVNode("i", { class: "ri-delete-bin-line fs-17" })
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
