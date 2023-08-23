import { ref, getCurrentInstance, onMounted, useSSRContext, reactive, unref, withCtx, createVNode, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const _sfc_main$1 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    getCurrentInstance();
    onMounted(() => {
      checkWindowSize();
      $("#appScript").attr("src", window.location.origin + "/assets/js/app.js");
    });
    const checkWindowSize = () => {
      if (getWindowSize() == "sm") {
        $("body").addClass("twocolumn-panel");
      } else {
        $("body").removeClass("twocolumn-panel");
      }
    };
    const getWindowSize = () => {
      var size = $(window).width();
      if (size <= 768) {
        return "sm";
      } else {
        return "lg";
      }
    };
    $(window).resize(function() {
      checkWindowSize();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="layout-wrapper"><header id="page-topbar"><div class="layout-width"><div class="navbar-header"><div class="d-flex"><div class="navbar-brand-box horizontal-logo"><a href="index.html" class="logo logo-dark"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-dark.png" alt="" height="17"></span></a><a href="index.html" class="logo logo-light"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-light.png" alt="" height="17"></span></a></div><button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon"><span class="hamburger-icon"><span></span><span></span><span></span></span></button></div><div class="d-flex align-items-center"><div class="ms-1 header-item d-none d-sm-flex"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"><i class="bx bx-moon fs-22"></i></button></div><div class="dropdown ms-sm-3 header-item topbar-user"><button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="d-flex align-items-center"><img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar"><span class="text-start ms-xl-2"><span class="d-none d-xl-inline-block ms-1 fw-semibold user-name-text">Anna Adame</span><span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span></span></span></button><div class="dropdown-menu dropdown-menu-end"><h6 class="dropdown-header">Welcome Anna!</h6><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a><a class="dropdown-item" href="apps-chat.html"><i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Messages</span></a><a class="dropdown-item" href="apps-tasks-kanban.html"><i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Taskboard</span></a><a class="dropdown-item" href="pages-faqs.html"><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Help</span></a><div class="dropdown-divider"></div><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$5971.67</b></span></a><a class="dropdown-item" href="pages-profile-settings.html"><span class="badge bg-soft-success text-success mt-1 float-end">New</span><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Settings</span></a><a class="dropdown-item" href="auth-lockscreen-basic.html"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></a><a class="dropdown-item" href="auth-logout-basic.html"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a></div></div></div></div></div></header><div class="vertical-overlay"></div><div class="main-content"><div class="page-content"><div class="container-fluid">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><footer class="footer"><div class="container-fluid"><div class="row"><div class="col-sm-6"> 2023 © Velzon. </div><div class="col-sm-6"><div class="text-sm-end d-none d-sm-block"> Design &amp; Develop by Themesbrand </div></div></div></div></footer></div></div><button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top"><i class="ri-arrow-up-line"></i></button><div id="preloader"><div id="status"><div class="spinner-border text-primary avatar-sm" role="status"><span class="visually-hidden">Loading...</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    let limit_text = 70;
    let array_text = text.split(" ");
    let display_text = ref("");
    let count = 0;
    let index_active = 1;
    let correct = 0;
    let incorrect = 0;
    let input = reactive({
      value: null
    });
    let finished = ref(false);
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
      if (event.key == " ") {
        text2 = text2.trim();
        if (text2 === word) {
          setCorrect(index_active);
          correct++;
        } else {
          setWrong(index_active);
          incorrect++;
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
      correct = 0;
      incorrect = 0;
      count = 0;
      index_active = 1;
      renderWord(array_text);
      input.value = "";
      $(".form-control").focus();
      resetTimer();
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
      finished.value = true;
      alert("Your score is: " + correct + " wpm");
    };
    let shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
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
              _push2(`<div class="col-md-4"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title mb-0"${_scopeId}>Result</h3></div><div class="card-body"${_scopeId}><h1 class="text-center"${_scopeId}>${ssrInterpolate(unref(correct))} WPM</h1><div class="text-center"${_scopeId}><small${_scopeId}>(words per minute)</small></div><table class="table"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><th${_scopeId}>Correct Words</th><td align="right" class="text-success"${_scopeId}>${ssrInterpolate(unref(correct))}</td></tr><tr${_scopeId}><th${_scopeId}>Wrong Words</th><td align="right" class="text-danger"${_scopeId}>${ssrInterpolate(unref(incorrect))}</td></tr></tbody></table></div></div></div>`);
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
                      createVNode("h3", { class: "card-title mb-0" }, "Result")
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h1", { class: "text-center" }, toDisplayString(unref(correct)) + " WPM", 1),
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
                            }, toDisplayString(unref(correct)), 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("th", null, "Wrong Words"),
                            createVNode("td", {
                              align: "right",
                              class: "text-danger"
                            }, toDisplayString(unref(incorrect)), 1)
                          ])
                        ])
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
