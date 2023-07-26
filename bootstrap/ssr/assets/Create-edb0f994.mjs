import { reactive, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-d8c5f04d.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    states: Object,
    errors: Object
  },
  setup(__props) {
    const breadcrumbs = [
      {
        title: "Settings",
        active: true
      },
      {
        title: "Pengurusan Daerah",
        active: false,
        link: route("setting.district.index")
      },
      {
        title: "Tambah Baru",
        active: true
      }
    ];
    let district = reactive({
      state_id: 1,
      name: null
    });
    let submit = () => {
      router.post(route("setting.district.store"), district, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Berjaya!", response.props.response.success, "success");
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Tambah Baru Daerah" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Tambah Baru Daerah",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}></h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Pilih Negeri <span class="text-danger"${_scopeId}>*</span></label><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.states, (state) => {
              _push2(`<option${ssrRenderAttr("value", state.id)}${_scopeId}>${ssrInterpolate(state.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.state_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.state_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group"${_scopeId}><label${_scopeId}>Daerah <span class="text-danger"${_scopeId}>*</span></label><input type="text" class="form-control"${ssrRenderAttr("value", unref(district).name)} placeholder="Masukkan Nama Daerah"${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="card-footer d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success"${_scopeId}>Simpan</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("setting.district.index"),
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
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Tambah Baru Daerah",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" })
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Pilih Negeri "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => unref(district).state_id = $event
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.states, (state) => {
                              return openBlock(), createBlock("option", {
                                key: state.id,
                                value: state.id
                              }, toDisplayString(state.name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(district).state_id]
                          ]),
                          __props.errors.state_id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.state_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, [
                            createTextVNode("Daerah "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => unref(district).name = $event,
                            placeholder: "Masukkan Nama Daerah"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(district).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "card-footer d-grid gap-2" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-success"
                        }, "Simpan"),
                        createVNode(unref(Link), {
                          href: _ctx.route("setting.district.index"),
                          class: "btn btn-light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Batal")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/District/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};