import { reactive, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-d8c5f04d.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    meta: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Administrator",
        active: true
      },
      {
        title: "Meta Management",
        active: false,
        link: route("admin.meta.index")
      },
      {
        title: "Create",
        active: true
      }
    ];
    let e_meta = reactive({
      name: props.meta.name,
      display_name: props.meta.display_name
    });
    console.log(props.meta);
    let submit = () => {
      router.put(route("admin.meta.update", props.meta), e_meta, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Success!", response.props.response.success, "success");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create New Meta" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Create New Meta",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Create Meta</h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Name</label><input type="text" class="form-control" placeholder="Enter Meta Name"${ssrRenderAttr("value", unref(e_meta).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group"${_scopeId}><label${_scopeId}>Display Name</label><input type="text" class="form-control" placeholder="Enter Display Meta Name"${ssrRenderAttr("value", unref(e_meta).display_name)}${_scopeId}>`);
            if (__props.errors.display_name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.display_name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="card-footer"${_scopeId}><div class="d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success"${_scopeId}>Save</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.meta.index"),
              class: "btn btn-light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Create New Meta",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Create Meta")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "Name"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Meta Name",
                            "onUpdate:modelValue": ($event) => unref(e_meta).name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(e_meta).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Display Name"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Display Meta Name",
                            "onUpdate:modelValue": ($event) => unref(e_meta).display_name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(e_meta).display_name]
                          ]),
                          __props.errors.display_name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.display_name), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "card-footer" }, [
                        createVNode("div", { class: "d-grid gap-2" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-success"
                          }, "Save"),
                          createVNode(unref(Link), {
                            href: _ctx.route("admin.meta.index"),
                            class: "btn btn-light"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["href"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Meta/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
