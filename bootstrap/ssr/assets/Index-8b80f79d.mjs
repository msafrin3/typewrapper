import { ref, reactive, onMounted, unref, withCtx, createVNode, createTextVNode, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./MainLayout-11b43999.mjs";
import Swal from "sweetalert2";
import "./avatar-1-fce6a0eb.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    result: Object
  },
  setup(__props) {
    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    let limit_text = 70;
    let array_text = text.split(" ");
    let display_text = ref("");
    let count = 0;
    let index_active = 1;
    let input = reactive({
      value: null
    });
    let finished = ref(false);
    let data = reactive({
      result_id: null,
      count: 0,
      correct: 0,
      incorrect: 0
    });
    let renderWord = (words) => {
      shuffle(words);
      words = words.splice(0, limit_text);
      words.forEach(function(value) {
        count++;
        display_text.value += '<div class="word me-2 px-2 py-1 mb-2 rounded-3 fs-18 word-' + count + '">' + value + "</div>";
      });
    };
    let checking = (event) => {
      if (timerIsActive.value == "inactive") {
        startTimer();
      }
      var word = $(".word-" + index_active).text();
      var text2 = input.value;
      if (text2 == null || text2 == "") {
        setActive(index_active);
      }
      if (word.match(text2) == null) {
        setWrong(index_active);
      } else {
        setActive(index_active);
      }
      if (event.key === " ") {
        text2 = text2.trim();
        if (text2 === word) {
          setCorrect(index_active);
          data.correct++;
        } else {
          console.log("wrong");
          setWrong(index_active);
          data.incorrect++;
        }
        index_active++;
        input.value = "";
        if (index_active == limit_text + 1) {
          count = 0;
          index_active = 1;
          display_text = ref("");
          renderWord(array_text);
          $(".word").removeClass("text-danger text-success");
        }
        setActive(index_active);
        data.count++;
      }
    };
    let setActive = (index) => {
      $(".word").removeClass("bg-light");
      $(".word-" + index).removeClass("text-success text-danger");
      $(".word-" + index).addClass("bg-light");
    };
    let setCorrect = (index) => {
      $(".word-" + index).removeClass("text-danger");
      $(".word-" + index).addClass("text-success");
    };
    let setWrong = (index) => {
      $(".word-" + index).removeClass("text-success");
      $(".word-" + index).addClass("text-danger");
    };
    let reset = () => {
      $(".words-content").html("");
      display_text.value = "";
      data.count = 0;
      data.correct = 0;
      data.incorrect = 0;
      count = 0;
      index_active = 1;
      renderWord(array_text);
      input.value = "";
      $(".form-control").focus();
      resetTimer();
      finished.value = false;
    };
    const timer = ref(10);
    const timerIsActive = ref("inactive");
    let intervalId;
    const startTimer = () => {
      timerIsActive.value = "active";
      intervalId = setInterval(() => {
        timer.value--;
        if (timer.value == 0) {
          recordResult();
        }
      }, 1e3);
    };
    const resetTimer = () => {
      timer.value = 10;
      timerIsActive.value = "inactive";
      clearInterval(intervalId);
    };
    let recordResult = () => {
      resetTimer();
      timerIsActive.value = "stop";
      $(".words-content").html("");
      saveResult();
    };
    let shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    let saveResult = () => {
      router.post(route("type.store"), data, {
        onSuccess: (response) => {
          finished.value = true;
          if (response.props.response.success) {
            Swal.fire("Congratulation!", "Your score is " + data.correct + " WPM", "success");
            data.result_id = response.props.response.success;
          }
        }
      });
    };
    onMounted(() => {
      renderWord(array_text);
      setTimeout(function() {
        setActive(index_active);
      }, 500);
      $(".form-control").focus();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="page-title-box d-sm-flex align-items-center justify-content-between"${_scopeId}><h4 class="mb-sm-0"${_scopeId}>Improve Your Typing Speed</h4><div class="page-title-right"${_scopeId}><ol class="breadcrumb m-0"${_scopeId}><li class="breadcrumb-item"${_scopeId}><a href="javascript: void(0);"${_scopeId}>Pages</a></li><li class="breadcrumb-item active"${_scopeId}>Starter</li></ol></div></div></div></div><div class="d-flex flex-wrap justify-content-center words-content"${_scopeId}>${unref(display_text)}</div><div class="d-flex gap-2"${_scopeId}><input type="text" class="form-control fs-17" placeholder="Start typing..."${ssrRenderAttr("value", unref(input).value)}${_scopeId}>`);
            if (timerIsActive.value == "inactive" || timerIsActive.value == "stop") {
              _push2(`<div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17"${_scopeId}>01:00</div>`);
            } else {
              _push2(`<div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17"${_scopeId}>00:${ssrInterpolate(timer.value.toString().padStart(2, "0"))}</div>`);
            }
            _push2(`<button type="button" class="btn btn-secondary"${_scopeId}><i class="ri-refresh-line"${_scopeId}></i></button></div><div class="row mt-4"${_scopeId}>`);
            if (unref(finished)) {
              _push2(`<div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Result: ${ssrInterpolate(unref(data).result_id)}</h3></div><div class="card-body"${_scopeId}><h1 class="text-center"${_scopeId}>${ssrInterpolate(unref(data).correct)} WPM</h1><div class="text-center"${_scopeId}><small${_scopeId}>(words per minute)</small></div><table class="table"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><th${_scopeId}>Correct Words</th><td align="right" class="text-success"${_scopeId}>${ssrInterpolate(unref(data).correct)}</td></tr><tr${_scopeId}><th${_scopeId}>Wrong Words</th><td align="right" class="text-danger"${_scopeId}>${ssrInterpolate(unref(data).incorrect)}</td></tr></tbody></table><div class="d-grid gap-2 mt-4"${_scopeId}><div${_scopeId}>Share your result with others: </div>`);
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
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode("div", { class: "page-title-box d-sm-flex align-items-center justify-content-between" }, [
                    createVNode("h4", { class: "mb-sm-0" }, "Improve Your Typing Speed"),
                    createVNode("div", { class: "page-title-right" }, [
                      createVNode("ol", { class: "breadcrumb m-0" }, [
                        createVNode("li", { class: "breadcrumb-item" }, [
                          createVNode("a", { href: "javascript: void(0);" }, "Pages")
                        ]),
                        createVNode("li", { class: "breadcrumb-item active" }, "Starter")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                class: "d-flex flex-wrap justify-content-center words-content",
                innerHTML: unref(display_text)
              }, null, 8, ["innerHTML"]),
              createVNode("div", { class: "d-flex gap-2" }, [
                withDirectives(createVNode("input", {
                  type: "text",
                  class: "form-control fs-17",
                  placeholder: "Start typing...",
                  "onUpdate:modelValue": ($event) => unref(input).value = $event,
                  onKeyup: unref(checking)
                }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                  [vModelText, unref(input).value]
                ]),
                timerIsActive.value == "inactive" || timerIsActive.value == "stop" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17"
                }, "01:00")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17"
                }, "00:" + toDisplayString(timer.value.toString().padStart(2, "0")), 1)),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: unref(reset)
                }, [
                  createVNode("i", { class: "ri-refresh-line" })
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "row mt-4" }, [
                unref(finished) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "col-md-4"
                }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("h3", { class: "card-title mb-0" }, "Result: " + toDisplayString(unref(data).result_id), 1)
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h1", { class: "text-center" }, toDisplayString(unref(data).correct) + " WPM", 1),
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
                            }, toDisplayString(unref(data).correct), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", null, "Wrong Words"),
                            createVNode("td", {
                              align: "right",
                              class: "text-danger"
                            }, toDisplayString(unref(data).incorrect), 1)
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
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Type/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
