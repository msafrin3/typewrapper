import { reactive, onMounted, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    states: Object,
    districts: Object,
    errors: Object,
    parish: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Settings",
        active: true
      },
      {
        title: "Pengurusan Mukim",
        active: false,
        link: route("setting.parish.index")
      },
      {
        title: "Kemaskini",
        active: true
      }
    ];
    let e_parish = reactive({
      state_id: props.parish.state_id,
      district_id: props.parish.district_id,
      name: props.parish.name
    });
    let filter = {};
    let doFilter = () => {
      router.get(route("setting.parish.edit", props.parish), filter, {
        preserveState: true,
        replace: true
      });
    };
    let submit = () => {
      router.put(route("setting.parish.update", props.parish), e_parish, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Berjaya!", response.props.response.success, "success");
          }
        }
      });
    };
    onMounted(() => {
      filter.state_id = props.parish.state_id;
      doFilter();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Kemaskini Mukim" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Kemaskini Mukim",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Kemaskini Mukim</h3></div><form${_scopeId}><div class="card-body"${_scopeId}><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Negeri <span class="text-danger"${_scopeId}>*</span></label><select class="form-control"${_scopeId}><option value=""${_scopeId}>-- Pilih Negeri --</option><!--[-->`);
            ssrRenderList(__props.states, (state) => {
              _push2(`<option${ssrRenderAttr("value", state.id)}${_scopeId}>${ssrInterpolate(state.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.state_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.state_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Daerah <span class="text-danger"${_scopeId}>*</span></label><select class="form-control"${_scopeId}><!--[-->`);
            ssrRenderList(__props.districts, (district) => {
              _push2(`<option${ssrRenderAttr("value", district.id)}${_scopeId}>${ssrInterpolate(district.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            if (__props.errors.district_id) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.district_id)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group"${_scopeId}><label${_scopeId}>Mukim <span class="text-danger"${_scopeId}>*</span></label><input type="text" class="form-control" placeholder="Masukkan nama mukim"${ssrRenderAttr("value", unref(e_parish).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="card-footer d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success btn-sm"${_scopeId}>Simpan</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("setting.parish.index"),
              class: "btn btn-light btn-sm"
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
                title: "Kemaskini Mukim",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Kemaskini Mukim")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Negeri "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => unref(e_parish).state_id = $event,
                            onChange: ($event) => {
                              unref(filter).state_id = __props.parish.state_id;
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
                            [vModelSelect, unref(e_parish).state_id]
                          ]),
                          __props.errors.state_id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.state_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Daerah "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => unref(e_parish).district_id = $event
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.districts, (district) => {
                              return openBlock(), createBlock("option", {
                                key: district.id,
                                value: district.id
                              }, toDisplayString(district.name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(e_parish).district_id]
                          ]),
                          __props.errors.district_id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.district_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, [
                            createTextVNode("Mukim "),
                            createVNode("span", { class: "text-danger" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Masukkan nama mukim",
                            "onUpdate:modelValue": ($event) => unref(e_parish).name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(e_parish).name]
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
                          class: "btn btn-success btn-sm"
                        }, "Simpan"),
                        createVNode(unref(Link), {
                          href: _ctx.route("setting.parish.index"),
                          class: "btn btn-light btn-sm"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Parish/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
