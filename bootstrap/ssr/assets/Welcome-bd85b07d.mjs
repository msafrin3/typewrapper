import { ref, reactive, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    let limit_text = 70;
    let array_text = text.split(" ");
    let display_text = ref("");
    let count = 0;
    let index_active = 1;
    let correct = 0;
    let input = reactive({
      value: null
    });
    ref(false);
    let renderWord = (words) => {
      shuffle(words);
      words = words.splice(0, limit_text);
      words.forEach(function(value) {
        count++;
        display_text.value += '<div class="word me-2 px-2 py-1 mb-2 rounded-3 fs-18 word-' + count + '">' + value + "</div>";
      });
    };
    let setActive = (index) => {
      $(".word").removeClass("bg-light");
      $(".word-" + index).removeClass("text-success text-danger");
      $(".word-" + index).addClass("bg-light");
    };
    const timer = ref(10);
    const timerIsActive = ref("inactive");
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
      _push(`<div id="layout-wrapper" style="${ssrRenderStyle({ "background": "transparent" })}"><header id="page-topbar"><div class="layout-width"><div class="navbar-header"><div class="d-flex"><div class="navbar-brand-box horizontal-logo"><a href="index.html" class="logo logo-dark"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-dark.png" alt="" height="17"></span></a><a href="index.html" class="logo logo-light"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-light.png" alt="" height="17"></span></a></div><button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon"><span class="hamburger-icon"><span></span><span></span><span></span></span></button></div><div class="d-flex align-items-center"><div class="ms-1 header-item d-none d-sm-flex"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen"><i class="bx bx-fullscreen fs-22"></i></button></div><div class="ms-1 header-item d-none d-sm-flex"><button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"><i class="bx bx-moon fs-22"></i></button></div><div class="dropdown ms-sm-3 header-item topbar-user"><button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="d-flex align-items-center"><img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar"><span class="text-start ms-xl-2"><span class="d-none d-xl-inline-block ms-1 fw-semibold user-name-text">Anna Adame</span><span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span></span></span></button><div class="dropdown-menu dropdown-menu-end"><h6 class="dropdown-header">Welcome Anna!</h6><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a><a class="dropdown-item" href="apps-chat.html"><i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Messages</span></a><a class="dropdown-item" href="apps-tasks-kanban.html"><i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Taskboard</span></a><a class="dropdown-item" href="pages-faqs.html"><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Help</span></a><div class="dropdown-divider"></div><a class="dropdown-item" href="pages-profile.html"><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Balance : <b>$5971.67</b></span></a><a class="dropdown-item" href="pages-profile-settings.html"><span class="badge bg-soft-success text-success mt-1 float-end">New</span><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Settings</span></a><a class="dropdown-item" href="auth-lockscreen-basic.html"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Lock screen</span></a><a class="dropdown-item" href="auth-logout-basic.html"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a></div></div></div></div></div></header><div class="app-menu navbar-menu border-end"><div class="navbar-brand-box"><a href="index.html" class="logo logo-dark"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-dark.png" alt="" height="17"></span></a><a href="index.html" class="logo logo-light"><span class="logo-sm"><img src="assets/images/logo-sm.png" alt="" height="22"></span><span class="logo-lg"><img src="assets/images/logo-light.png" alt="" height="17"></span></a><button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover"><i class="ri-record-circle-line"></i></button></div><div id="scrollbar"><div class="container-fluid"><div id="two-column-menu"></div><ul class="navbar-nav" id="navbar-nav"><li class="menu-title"><span data-key="t-menu">Menu</span></li><li class="nav-item"><a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards"><i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span></a><div class="collapse menu-dropdown" id="sidebarDashboards"><ul class="nav nav-sm flex-column"><li class="nav-item"><a href="dashboard-analytics.html" class="nav-link" data-key="t-analytics"> Analytics </a></li><li class="nav-item"><a href="dashboard-crm.html" class="nav-link" data-key="t-crm"> CRM </a></li><li class="nav-item"><a href="index.html" class="nav-link" data-key="t-ecommerce"> Ecommerce </a></li><li class="nav-item"><a href="dashboard-crypto.html" class="nav-link" data-key="t-crypto"> Crypto </a></li><li class="nav-item"><a href="dashboard-projects.html" class="nav-link" data-key="t-projects"> Projects </a></li><li class="nav-item"><a href="dashboard-nft.html" class="nav-link" data-key="t-nft"> NFT</a></li><li class="nav-item"><a href="dashboard-job.html" class="nav-link"><span data-key="t-job">Job</span> <span class="badge badge-pill bg-success" data-key="t-new">New</span></a></li></ul></div></li></ul></div></div><div class="sidebar-background"></div></div><div class="vertical-overlay"></div><div class="main-content"><div class="page-content"><div class="container-fluid"><div class="row"><div class="col-12"><div class="page-title-box d-sm-flex align-items-center justify-content-between"><h4 class="mb-sm-0">Correct words: ${ssrInterpolate(unref(correct))}</h4><div class="page-title-right"><ol class="breadcrumb m-0"><li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li><li class="breadcrumb-item active">Starter</li></ol></div></div></div></div><div class="d-flex flex-wrap justify-content-center words-content">${unref(display_text)}</div><div class="d-flex gap-2"><input type="text" class="form-control fs-17" placeholder="Start typing..."${ssrRenderAttr("value", unref(input).value)}>`);
      if (timerIsActive.value == "inactive" || timerIsActive.value == "stop") {
        _push(`<div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17">01:00</div>`);
      } else {
        _push(`<div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17">00:${ssrInterpolate(timer.value.toString().padStart(2, "0"))}</div>`);
      }
      _push(`<button type="button" class="btn btn-secondary"><i class="ri-refresh-line"></i></button></div></div></div><footer class="footer border-top"><div class="container-fluid"><div class="row"><div class="col-sm-6"> 2023 © Velzon. </div><div class="col-sm-6"><div class="text-sm-end d-none d-sm-block"> Design &amp; Develop by Themesbrand </div></div></div></div></footer></div></div><button onclick="topFunction()" class="btn btn-primary btn-icon" id="back-to-top"><i class="ri-arrow-up-line"></i></button><div id="preloader"><div id="status"><div class="spinner-border text-primary avatar-sm" role="status"><span class="visually-hidden">Loading...</span></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
