import { reactive, unref, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-4b39f2ef.mjs";
import Swal from "sweetalert2";
import _sfc_main$3 from "./MyChoices-6fe8bcef.mjs";
import "choices.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    permissions: Object
  },
  setup(__props) {
    const breadcrumbs = [
      {
        title: "Administrator",
        active: true
      },
      {
        title: "Role management",
        active: false,
        link: route("admin.role.index")
      },
      {
        title: "Create Role",
        active: true
      }
    ];
    let role = reactive({
      name: null,
      permissions: []
    });
    let submit = () => {
      router.post(route("admin.role.store"), role, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Success!", response.props.response.succes, "success");
          }
        }
      });
    };
    let setPermissions = (payload) => {
      role.permissions = payload;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Role" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Create Role",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-sm-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title"${_scopeId}>Create New Role</h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label"${_scopeId}>Role Name</label><input type="text" class="form-control" placeholder="Enter Role Name"${ssrRenderAttr("value", unref(role).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mt-3"${_scopeId}><label class="form-label"${_scopeId}>Select Permission(s)</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "selectpermission",
              placeholder: "Select Permission",
              type: "multiple",
              onGetValue: unref(setPermissions)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.permissions, (permission) => {
                    _push3(`<option${ssrRenderAttr("value", permission.id)}${_scopeId2}>${ssrInterpolate(permission.name)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
                      return openBlock(), createBlock("option", {
                        key: permission.id,
                        value: permission.id
                      }, toDisplayString(permission.name), 9, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="card-footer d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success"${_scopeId}>Save</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.role.index"),
              class: "btn btn-light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Create Role",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-sm-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title" }, "Create New Role")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", { class: "form-label" }, "Role Name"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Role Name",
                            "onUpdate:modelValue": ($event) => unref(role).name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(role).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mt-3" }, [
                          createVNode("label", { class: "form-label" }, "Select Permission(s)"),
                          createVNode(_sfc_main$3, {
                            id: "selectpermission",
                            placeholder: "Select Permission",
                            type: "multiple",
                            onGetValue: unref(setPermissions)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
                                return openBlock(), createBlock("option", {
                                  key: permission.id,
                                  value: permission.id
                                }, toDisplayString(permission.name), 9, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["onGetValue"])
                        ])
                      ]),
                      createVNode("div", { class: "card-footer d-grid gap-2" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-success"
                        }, "Save"),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.role.index"),
                          class: "btn btn-light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Back")
                          ]),
                          _: 1
                        }, 8, ["href"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
