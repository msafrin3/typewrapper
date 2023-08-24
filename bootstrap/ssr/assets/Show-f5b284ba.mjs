import { unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./MainLayout-11b43999.mjs";
import "./avatar-1-fce6a0eb.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    result: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: "Wow I can type " + __props.result.correct + " WPM. How about you?"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-md-3"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Result</h3></div><div class="card-body"${_scopeId}><h1 class="text-center"${_scopeId}>${ssrInterpolate(__props.result.correct)} WPM</h1><div class="text-center"${_scopeId}><small${_scopeId}>(words per minute)</small></div><table class="table"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><th${_scopeId}>Correct Words</th><td align="right" class="text-success"${_scopeId}>${ssrInterpolate(__props.result.correct)}</td></tr><tr${_scopeId}><th${_scopeId}>Wrong Words</th><td align="right" class="text-danger"${_scopeId}>${ssrInterpolate(__props.result.incorrect)}</td></tr></tbody></table><div class="d-grid gap-2 mt-4"${_scopeId}><div${_scopeId}>Share your result with others: </div>`);
            _push2(ssrRenderComponent(unref(Link), { class: "btn btn-secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-facebook-circle-fill align-bottom fs-15"${_scopeId2}></i> Facebook`);
                } else {
                  return [
                    createVNode("i", { class: "ri-facebook-circle-fill align-bottom fs-15" }),
                    createTextVNode(" Facebook")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), { class: "btn btn-info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-twitter-fill align-bottom fs-15"${_scopeId2}></i> Twitter`);
                } else {
                  return [
                    createVNode("i", { class: "ri-twitter-fill align-bottom fs-15" }),
                    createTextVNode(" Twitter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-md-3" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Result")
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h1", { class: "text-center" }, toDisplayString(__props.result.correct) + " WPM", 1),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("small", null, "(words per minute)")
                      ]),
                      createVNode("table", { class: "table" }, [
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "Correct Words"),
                            createVNode("td", {
                              align: "right",
                              class: "text-success"
                            }, toDisplayString(__props.result.correct), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", null, "Wrong Words"),
                            createVNode("td", {
                              align: "right",
                              class: "text-danger"
                            }, toDisplayString(__props.result.incorrect), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "d-grid gap-2 mt-4" }, [
                        createVNode("div", null, "Share your result with others: "),
                        createVNode(unref(Link), { class: "btn btn-secondary" }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "ri-facebook-circle-fill align-bottom fs-15" }),
                            createTextVNode(" Facebook")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Link), { class: "btn btn-info" }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "ri-twitter-fill align-bottom fs-15" }),
                            createTextVNode(" Twitter")
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Type/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
