import { reactive, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    errors: Object,
    metas: Object
  },
  setup(__props) {
    const breadcrumbs = [
      {
        title: "Administrator",
        active: true
      },
      {
        title: "Meta Data",
        active: false,
        link: route("admin.meta-data.index")
      },
      {
        title: "Create",
        active: true
      }
    ];
    let metadata = reactive({
      meta_id: null,
      name: null,
      group_helper: null
    });
    let submit = () => {
      router.post(route("admin.meta-data.store"), metadata, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Success!", response.props.response.success, "success");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Meta Data" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Create Meta Data",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Create Meta Data</h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Meta <span class="text-danger"${_scopeId}>*</span></label><select class="form-control"${_scopeId}><option value=""${_scopeId}>Select Meta</option><!--[-->`);
            ssrRenderList(__props.metas, (meta) => {
              _push2(`<option${ssrRenderAttr("value", meta.id)}${_scopeId}>${ssrInterpolate(meta.display_name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.meta_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.meta_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Meta Data Name <span class="text-danger"${_scopeId}>*</span></label><input type="text" class="form-control" placeholder="Enter Meta Data Name"${ssrRenderAttr("value", unref(metadata).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Group Helper</label><input type="text" class="form-control" placeholder="Enter Group helper"${ssrRenderAttr("value", unref(metadata).group_helper)}${_scopeId}></div></div><div class="card-footer"${_scopeId}><div class="d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success"${_scopeId}>Save</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.meta-data.index"),
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
                title: "Create Meta Data",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Create Meta Data")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Meta "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => unref(metadata).meta_id = $event
                          }, [
                            createVNode("option", { value: "" }, "Select Meta"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.metas, (meta) => {
                              return openBlock(), createBlock("option", {
                                key: meta.id,
                                value: meta.id
                              }, toDisplayString(meta.display_name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(metadata).meta_id]
                          ]),
                          __props.errors.meta_id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.meta_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Meta Data Name "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Meta Data Name",
                            "onUpdate:modelValue": ($event) => unref(metadata).name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(metadata).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "Group Helper"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Group helper",
                            "onUpdate:modelValue": ($event) => unref(metadata).group_helper = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(metadata).group_helper]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-footer" }, [
                        createVNode("div", { class: "d-grid gap-2" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn btn-success"
                          }, "Save"),
                          createVNode(unref(Link), {
                            href: _ctx.route("admin.meta-data.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/MetaData/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
