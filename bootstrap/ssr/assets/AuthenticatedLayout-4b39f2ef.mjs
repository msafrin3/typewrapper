import { ref, getCurrentInstance, onMounted, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _imports_0 = "/build/assets/logo-sm-8cbd73ca.png";
const _imports_1 = "/build/assets/logo-dark-679bf1c1.png";
const _imports_2 = "/build/assets/logo-light-3ce7ba8e.png";
const _imports_3 = "/build/assets/us-de148770.svg";
const _imports_4 = "/build/assets/spain-342fd958.svg";
const _imports_5 = "/build/assets/germany-3e55921f.svg";
const _imports_6 = "/build/assets/italy-c27d380a.svg";
const _imports_7 = "/build/assets/russia-89b081d5.svg";
const _imports_8 = "/build/assets/china-df88b207.svg";
const _imports_9 = "/build/assets/french-2f896d72.svg";
const _imports_10 = "/build/assets/ae-534fefed.svg";
const _imports_11 = "/build/assets/avatar-2-52cb265f.jpg";
const _imports_12 = "/build/assets/avatar-8-b7cb8a12.jpg";
const _imports_13 = "/build/assets/avatar-3-62d66768.jpg";
const _imports_14 = "/build/assets/avatar-6-81ca5a20.jpg";
const _imports_15 = "/build/assets/avatar-1-2e539fe5.jpg";
const _sfc_main = {
  __name: "AuthenticatedLayout",
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="layout-wrapper"><header id="page-topbar"><div class="layout-width"><div class="navbar-header"><div class="d-flex"><div class="navbar-brand-box horizontal-logo">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "logo logo-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" height="17"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "logo-sm" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  height: "22"
                })
              ]),
              createVNode("span", { class: "logo-lg" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "",
                  height: "17"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "logo logo-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" height="17"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "logo-sm" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  height: "22"
                })
              ]),
              createVNode("span", { class: "logo-lg" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "",
                  height: "17"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon"><span class="hamburger-icon"><span></span><span></span><span></span></span></button></div><div class="d-flex align-items-center"><div class="dropdown ms-1 topbar-head-dropdown header-item"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img id="header-lang-img"${ssrRenderAttr("src", _imports_3)} alt="Header Language" height="20" class="rounded"></button><div class="dropdown-menu dropdown-menu-end"><a href="javascript:void(0);" class="dropdown-item notify-item language py-2" data-lang="en" title="English"><img${ssrRenderAttr("src", _imports_3)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">English</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="sp" title="Spanish"><img${ssrRenderAttr("src", _imports_4)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">Española</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="gr" title="German"><img${ssrRenderAttr("src", _imports_5)} alt="user-image" class="me-2 rounded" height="18"> <span class="align-middle">Deutsche</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="it" title="Italian"><img${ssrRenderAttr("src", _imports_6)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">Italiana</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ru" title="Russian"><img${ssrRenderAttr("src", _imports_7)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">русский</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ch" title="Chinese"><img${ssrRenderAttr("src", _imports_8)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">中国人</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="fr" title="French"><img${ssrRenderAttr("src", _imports_9)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">français</span></a><a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ar" title="Arabic"><img${ssrRenderAttr("src", _imports_10)} alt="user-image" class="me-2 rounded" height="18"><span class="align-middle">Arabic</span></a></div></div><div class="ms-1 header-item d-none d-sm-flex"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"><i class="bx bx-moon fs-22"></i></button></div><div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><i class="bx bx-bell fs-22"></i><span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span class="visually-hidden">unread messages</span></span></button><div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown"><div class="dropdown-head bg-primary bg-pattern rounded-top"><div class="p-3"><div class="row align-items-center"><div class="col"><h6 class="m-0 fs-16 fw-semibold text-white"> Notifications </h6></div><div class="col-auto dropdown-tabs"><span class="badge badge-soft-light fs-13"> 4 New</span></div></div></div><div class="px-2 pt-2"><ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist"><li class="nav-item waves-effect waves-light"><a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true"> All (4) </a></li><li class="nav-item waves-effect waves-light"><a class="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false"> Messages </a></li><li class="nav-item waves-effect waves-light"><a class="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false"> Alerts </a></li></ul></div></div><div class="tab-content position-relative" id="notificationItemsTabContent"><div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel"><div data-simplebar style="${ssrRenderStyle({ "max-height": "300px" })}" class="pe-2"><div class="text-reset notification-item d-block dropdown-item position-relative"><div class="d-flex"><div class="avatar-xs me-3"><span class="avatar-title bg-soft-info text-info rounded-circle fs-16"><i class="bx bx-badge-check"></i></span></div><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic Optimization <span class="text-secondary">reward</span> is ready! </h6></a><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> Just 30 sec ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="all-notification-check01"><label class="form-check-label" for="all-notification-check01"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item position-relative"><div class="d-flex"><img${ssrRenderAttr("src", _imports_11)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6></a><div class="fs-13 text-muted"><p class="mb-1">Answered to your comment on the cash flow forecast&#39;s graph 🔔.</p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 48 min ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="all-notification-check02"><label class="form-check-label" for="all-notification-check02"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item position-relative"><div class="d-flex"><div class="avatar-xs me-3"><span class="avatar-title bg-soft-danger text-danger rounded-circle fs-16"><i class="bx bx-message-square-dots"></i></span></div><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-2 fs-13 lh-base">You have received <b class="text-success">20</b> new messages in the conversation </h6></a><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 2 hrs ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="all-notification-check03"><label class="form-check-label" for="all-notification-check03"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item position-relative"><div class="d-flex"><img${ssrRenderAttr("src", _imports_12)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6></a><div class="fs-13 text-muted"><p class="mb-1">We talked about a project on linkedin.</p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 4 hrs ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="all-notification-check04"><label class="form-check-label" for="all-notification-check04"></label></div></div></div></div><div class="my-3 text-center view-all"><button type="button" class="btn btn-soft-success waves-effect waves-light">View All Notifications <i class="ri-arrow-right-line align-middle"></i></button></div></div></div><div class="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab"><div data-simplebar style="${ssrRenderStyle({ "max-height": "300px" })}" class="pe-2"><div class="text-reset notification-item d-block dropdown-item"><div class="d-flex"><img${ssrRenderAttr("src", _imports_13)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6></a><div class="fs-13 text-muted"><p class="mb-1">We talked about a project on linkedin.</p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 30 min ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="messages-notification-check01"><label class="form-check-label" for="messages-notification-check01"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item"><div class="d-flex"><img${ssrRenderAttr("src", _imports_11)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6></a><div class="fs-13 text-muted"><p class="mb-1">Answered to your comment on the cash flow forecast&#39;s graph 🔔.</p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 2 hrs ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="messages-notification-check02"><label class="form-check-label" for="messages-notification-check02"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item"><div class="d-flex"><img${ssrRenderAttr("src", _imports_14)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6></a><div class="fs-13 text-muted"><p class="mb-1">Mentionned you in his comment on 📃 invoice #12501. </p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 10 hrs ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="messages-notification-check03"><label class="form-check-label" for="messages-notification-check03"></label></div></div></div></div><div class="text-reset notification-item d-block dropdown-item"><div class="d-flex"><img${ssrRenderAttr("src", _imports_12)} class="me-3 rounded-circle avatar-xs" alt="user-pic"><div class="flex-1"><a href="#!" class="stretched-link"><h6 class="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6></a><div class="fs-13 text-muted"><p class="mb-1">We talked about a project on linkedin.</p></div><p class="mb-0 fs-11 fw-medium text-uppercase text-muted"><span><i class="mdi mdi-clock-outline"></i> 3 days ago</span></p></div><div class="px-2 fs-15"><div class="form-check notification-check"><input class="form-check-input" type="checkbox" value="" id="messages-notification-check04"><label class="form-check-label" for="messages-notification-check04"></label></div></div></div></div><div class="my-3 text-center view-all"><button type="button" class="btn btn-soft-success waves-effect waves-light">View All Messages <i class="ri-arrow-right-line align-middle"></i></button></div></div></div><div class="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab"></div><div class="notification-actions" id="notification-actions"><div class="d-flex text-muted justify-content-center"> Select <div id="select-content" class="text-body fw-semibold px-1">0</div> Result <button type="button" class="btn btn-link link-danger p-0 ms-3" data-bs-toggle="modal" data-bs-target="#removeNotificationModal">Remove</button></div></div></div></div></div><div class="dropdown ms-sm-3 header-item topbar-user"><button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="d-flex align-items-center"><img class="rounded-circle header-profile-user"${ssrRenderAttr("src", _imports_15)} alt="Header Avatar"><span class="text-start ms-xl-2"><span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span></span></span></button><div class="dropdown-menu dropdown-menu-end"><h6 class="dropdown-header">Welcome Anna!</h6><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a><a class="dropdown-item" href="apps-chat.html"><i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Messages</span></a><a class="dropdown-item" href="apps-tasks-kanban.html"><i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Taskboard</span></a><a class="dropdown-item" href="pages-faqs.html"><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Help</span></a><div class="dropdown-divider"></div><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$5971.67</b></span></a><a class="dropdown-item" href="pages-profile-settings.html"><span class="badge bg-soft-success text-success mt-1 float-end">New</span><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Settings</span></a><a class="dropdown-item" href="auth-lockscreen-basic.html"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></a>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "dropdown-item",
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mdi mdi-logout text-muted fs-16 align-middle me-1"${_scopeId}></i> <span class="align-middle" data-key="t-logout"${_scopeId}>Logout</span>`);
          } else {
            return [
              createVNode("i", { class: "mdi mdi-logout text-muted fs-16 align-middle me-1" }),
              createTextVNode(),
              createVNode("span", {
                class: "align-middle",
                "data-key": "t-logout"
              }, "Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></header><div class="app-menu navbar-menu"><div class="navbar-brand-box">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "logo logo-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" height="17"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "logo-sm" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  height: "22"
                })
              ]),
              createVNode("span", { class: "logo-lg" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "",
                  height: "17"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "logo logo-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" height="17"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "logo-sm" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  height: "22"
                })
              ]),
              createVNode("span", { class: "logo-lg" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "",
                  height: "17"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover"><i class="ri-record-circle-line"></i></button></div><div id="scrollbar" data-simplebar="init" class="h-100" style="${ssrRenderStyle({ "overflow": "auto" })}"><div class="container-fluid"><div id="two-column-menu"></div><ul class="navbar-nav" id="navbar-nav"><li class="menu-title"><span data-key="t-menu">Menu</span></li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: ["nav-link menu-link", { "active": _ctx.$page.url.startsWith("/dashboard") }],
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="ri-dashboard-2-line"${_scopeId}></i> <span${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("i", { class: "ri-dashboard-2-line" }),
              createTextVNode(),
              createVNode("span", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (_ctx.$page.props.auth.user.can.includes("view-administrator")) {
        _push(`<li class="nav-item"><a class="nav-link menu-link" href="#menuadmin" data-bs-toggle="collapse" role="button"${ssrRenderAttr("aria-expanded", _ctx.$page.url.startsWith("/admin"))} aria-controls="menuadmin"><i class="ri-admin-line"></i> <span>Administrator</span></a><div class="${ssrRenderClass([{ "show": _ctx.$page.url.startsWith("/admin") }, "collapse menu-dropdown"])}" id="menuadmin"><ul class="nav nav-sm flex-column">`);
        if (_ctx.$page.props.auth.user.can.includes("view-user")) {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("admin.user.index"),
            class: ["nav-link", { "active": _ctx.$page.url.startsWith("/admin/user") }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` User Management `);
              } else {
                return [
                  createTextVNode(" User Management ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.can.includes("view-role")) {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("admin.role.index"),
            class: ["nav-link", { "active": _ctx.$page.url.startsWith("/admin/role") }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Role Management`);
              } else {
                return [
                  createTextVNode("Role Management")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.can.includes("view-permission")) {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("admin.permission.index"),
            class: ["nav-link", { "active": _ctx.$page.url.startsWith("/admin/permission") }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Permission Management`);
              } else {
                return [
                  createTextVNode(" Permission Management")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.can.includes("view-meta")) {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("admin.meta.index"),
            class: ["nav-link", { "active": _ctx.$page.url.startsWith("/admin/meta") }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Meta Management`);
              } else {
                return [
                  createTextVNode(" Meta Management")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.can.includes("view-meta-data")) {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("admin.meta-data.index"),
            class: ["nav-link", { "active": _ctx.$page.url.startsWith("/admin/meta-data") }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Meta Data Management`);
              } else {
                return [
                  createTextVNode(" Meta Data Management")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div><div class="sidebar-background"></div></div><div class="vertical-overlay"></div><div class="main-content"><div class="page-content"><div class="container-fluid">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><footer class="footer"><div class="container-fluid"><div class="row"><div class="col-sm-6"> 2023 © Velzon. </div><div class="col-sm-6"><div class="text-sm-end d-none d-sm-block"> Design &amp; Develop by Themesbrand </div></div></div></div></footer></div></div><button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top"><i class="ri-arrow-up-line"></i></button><div id="preloader"><div id="status"><div class="spinner-border text-primary avatar-sm" role="status"><span class="visually-hidden">Loading...</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
