import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./GuestLayout-da41a283.mjs";
import "./TextInput-15a5bf36.mjs";
import "./PrimaryButton-53db6204.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
      _push(`<div class="auth-page-wrapper pt-5"><div class="auth-one-bg-position auth-one-bg" id="auth-particles"><div class="bg-overlay"></div><div class="shape"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120"><path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path></svg></div></div><div class="auth-page-content"><div class="container"><div class="row"><div class="col-lg-12"><div class="text-center mt-sm-5 mb-4 text-white-50"><div><a href="index.html" class="d-inline-block auth-logo"><img src="/assets/images/logo-light.png" alt="" height="20"></a></div><p class="mt-3 fs-15 fw-medium">Premium Admin &amp; Dashboard Template</p></div></div></div><div class="row justify-content-center"><div class="col-md-8 col-lg-6 col-xl-5"><div class="card mt-4"><div class="card-body p-4"><div class="text-center mt-2"><h5 class="text-primary">Reset Password!</h5><p class="text-muted">Enter new password to sign in.</p></div><div class="p-2 mt-4"><form><div class="mb-3"><label for="email" class="form-label">E-mail</label><input type="text" class="form-control" id="email" placeholder="Enter Email"${ssrRenderAttr("value", unref(form).email)}><span class="text-danger">${ssrInterpolate(unref(form).errors.email)}</span></div><div class="mb-3"><label for="password" class="form-label">Password</label><input type="password" class="form-control" id="password"${ssrRenderAttr("value", unref(form).password)}><span class="text-danger">${ssrInterpolate(unref(form).errors.password)}</span></div><div class="mb-3"><label for="password_confirmation" class="form-label">Confirm Password</label><input type="password" class="form-control" id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)}><span class="text-danger">${ssrInterpolate(unref(form).errors.password_confirmation)}</span></div><div class="mt-4"><button class="btn btn-success w-100" type="submit">Reset Password</button></div></form></div></div></div></div></div></div></div><footer class="footer"><div class="container"><div class="row"><div class="col-lg-12"><div class="text-center"><p class="mb-0 text-muted">© 2023 Velzon. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand </p></div></div></div></div></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
