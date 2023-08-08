import { getCurrentInstance, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-4b39f2ef.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import _sfc_main$3 from "./Table-5e71e3ad.mjs";
import { format } from "date-fns";
import Swal from "sweetalert2";
import "@inertiajs/inertia";
import "./Pagination-35e34ca8.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Object,
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
        title: "User Management",
        active: true
      }
    ];
    let deleteUser = (user) => {
      Swal.fire({
        title: "Are you sure want to delete this user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete(route("admin.user.destroy", user), {
            onSuccess: (response) => {
              if (response.props.response.success) {
                Swal.fire("Success!", response.props.response.success, "success");
              }
            }
          });
        }
      });
    };
    let restoreUser = (user) => {
      Swal.fire({
        title: "Restore User?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Restore",
        confirmButtonColor: "#0ab39c"
      }).then((result) => {
        if (result.isConfirmed) {
          router.post(route("admin.user.restore", user.id), {
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
      _push(ssrRenderComponent(unref(Head), { title: "User Management" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "User Management",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-3"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.can.includes("create-user")) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("admin.user.create"),
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
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>List User</h3></div><div class="card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "data-route": _ctx.route("admin.user.index"),
              filters: __props.filters,
              data: __props.users
            }, {
              thead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tr${_scopeId2}><th${_scopeId2}>#</th><th${_scopeId2}>Name</th><th${_scopeId2}>E-Mail</th><th${_scopeId2}>Roles</th><th${_scopeId2}>Permissions</th><th${_scopeId2}>Created At</th><th${_scopeId2}>Action</th></tr>`);
                } else {
                  return [
                    createVNode("tr", null, [
                      createVNode("th", null, "#"),
                      createVNode("th", null, "Name"),
                      createVNode("th", null, "E-Mail"),
                      createVNode("th", null, "Roles"),
                      createVNode("th", null, "Permissions"),
                      createVNode("th", null, "Created At"),
                      createVNode("th", null, "Action")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.users.data, (user, index) => {
                    _push3(`<tr class="${ssrRenderClass({ "table-danger": user.deleted_at != null })}"${_scopeId2}><td${_scopeId2}>${ssrInterpolate(unref(iterationPaginated)(__props.users, index))}</td><td${_scopeId2}>${ssrInterpolate(user.name)}</td><td${_scopeId2}>${ssrInterpolate(user.email)}</td><td${_scopeId2}><div class="d-flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(user.roles, (role) => {
                      _push3(`<span class="badge badge-soft-secondary fs-11"${_scopeId2}>${ssrInterpolate(role.name)}</span>`);
                    });
                    _push3(`<!--]--></div></td><td${_scopeId2}><div class="d-flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(user.permissions, (permission) => {
                      _push3(`<span class="badge badge-soft-secondary fs-11"${_scopeId2}>${ssrInterpolate(permission.name)}</span>`);
                    });
                    _push3(`<!--]--></div></td><td${_scopeId2}>${ssrInterpolate(unref(format)(new Date(user.created_at), "yyyy-MM-dd HH:mm:ss"))}</td><td${_scopeId2}><div class="d-flex flex-wrap gap-2"${_scopeId2}>`);
                    if (user.deleted_at == null) {
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("admin.user.edit", user),
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
                    } else {
                      _push3(`<!---->`);
                    }
                    if (user.deleted_at == null) {
                      _push3(`<a href="#" class="link-danger"${_scopeId2}><i class="ri-delete-bin-line fs-17"${_scopeId2}></i></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (user.deleted_at != null) {
                      _push3(`<a href="javascript:;" class="link-success"${_scopeId2}><i class="ri-repeat-2-line fs-17"${_scopeId2}></i></a>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user, index) => {
                        return openBlock(), createBlock("tr", {
                          key: user.id,
                          class: { "table-danger": user.deleted_at != null }
                        }, [
                          createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.users, index)), 1),
                          createVNode("td", null, toDisplayString(user.name), 1),
                          createVNode("td", null, toDisplayString(user.email), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(user.roles, (role) => {
                                return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(role.name), 1);
                              }), 256))
                            ])
                          ]),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(user.permissions, (permission) => {
                                return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(permission.name), 1);
                              }), 256))
                            ])
                          ]),
                          createVNode("td", null, toDisplayString(unref(format)(new Date(user.created_at), "yyyy-MM-dd HH:mm:ss")), 1),
                          createVNode("td", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              user.deleted_at == null ? (openBlock(), createBlock(unref(Link), {
                                key: 0,
                                href: _ctx.route("admin.user.edit", user),
                                class: "link-success"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "ri-edit-2-line fs-17" })
                                ]),
                                _: 2
                              }, 1032, ["href"])) : createCommentVNode("", true),
                              user.deleted_at == null ? (openBlock(), createBlock("a", {
                                key: 1,
                                href: "#",
                                class: "link-danger",
                                onClick: ($event) => unref(deleteUser)(user)
                              }, [
                                createVNode("i", { class: "ri-delete-bin-line fs-17" })
                              ], 8, ["onClick"])) : createCommentVNode("", true),
                              user.deleted_at != null ? (openBlock(), createBlock("a", {
                                key: 2,
                                href: "javascript:;",
                                class: "link-success",
                                onClick: ($event) => unref(restoreUser)(user)
                              }, [
                                createVNode("i", { class: "ri-repeat-2-line fs-17" })
                              ], 8, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ])
                        ], 2);
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
                title: "User Management",
                breadcrumbs
              }),
              createVNode("div", { class: "mb-3" }, [
                _ctx.$page.props.auth.user.can.includes("create-user") ? (openBlock(), createBlock(unref(Link), {
                  key: 0,
                  href: _ctx.route("admin.user.create"),
                  class: "btn btn-success"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "ri-add-circle-fill align-bottom me-1" }),
                    createTextVNode(" Add New ")
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("h3", { class: "card-title mb-0" }, "List User")
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode(_sfc_main$3, {
                    "data-route": _ctx.route("admin.user.index"),
                    filters: __props.filters,
                    data: __props.users
                  }, {
                    thead: withCtx(() => [
                      createVNode("tr", null, [
                        createVNode("th", null, "#"),
                        createVNode("th", null, "Name"),
                        createVNode("th", null, "E-Mail"),
                        createVNode("th", null, "Roles"),
                        createVNode("th", null, "Permissions"),
                        createVNode("th", null, "Created At"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user, index) => {
                          return openBlock(), createBlock("tr", {
                            key: user.id,
                            class: { "table-danger": user.deleted_at != null }
                          }, [
                            createVNode("td", null, toDisplayString(unref(iterationPaginated)(__props.users, index)), 1),
                            createVNode("td", null, toDisplayString(user.name), 1),
                            createVNode("td", null, toDisplayString(user.email), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(user.roles, (role) => {
                                  return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(role.name), 1);
                                }), 256))
                              ])
                            ]),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(user.permissions, (permission) => {
                                  return openBlock(), createBlock("span", { class: "badge badge-soft-secondary fs-11" }, toDisplayString(permission.name), 1);
                                }), 256))
                              ])
                            ]),
                            createVNode("td", null, toDisplayString(unref(format)(new Date(user.created_at), "yyyy-MM-dd HH:mm:ss")), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                user.deleted_at == null ? (openBlock(), createBlock(unref(Link), {
                                  key: 0,
                                  href: _ctx.route("admin.user.edit", user),
                                  class: "link-success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "ri-edit-2-line fs-17" })
                                  ]),
                                  _: 2
                                }, 1032, ["href"])) : createCommentVNode("", true),
                                user.deleted_at == null ? (openBlock(), createBlock("a", {
                                  key: 1,
                                  href: "#",
                                  class: "link-danger",
                                  onClick: ($event) => unref(deleteUser)(user)
                                }, [
                                  createVNode("i", { class: "ri-delete-bin-line fs-17" })
                                ], 8, ["onClick"])) : createCommentVNode("", true),
                                user.deleted_at != null ? (openBlock(), createBlock("a", {
                                  key: 2,
                                  href: "javascript:;",
                                  class: "link-success",
                                  onClick: ($event) => unref(restoreUser)(user)
                                }, [
                                  createVNode("i", { class: "ri-repeat-2-line fs-17" })
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ])
                          ], 2);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
