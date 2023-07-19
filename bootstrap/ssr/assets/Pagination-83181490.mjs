import { Link } from "@inertiajs/vue3";
import { getCurrentInstance, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
getCurrentInstance();
const _sfc_main = {
  components: {
    Link
  },
  props: {
    links: Array
  },
  data() {
    return {
      currentProtocol: ""
    };
  },
  mounted() {
    this.currentProtocol = window.location.protocol;
    console.log("currentProtocol: ", this.currentProtocol);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="btn-group"><!--[-->`);
  ssrRenderList($props.links, (link) => {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.url ? "Link" : "span"), {
      key: link.id,
      href: $data.currentProtocol == "https:" ? link.url.replace("http:", "https:") : link.url,
      class: ["btn", { "disabled": !link.url, "btn-primary": link.active, "btn-light": !link.active }]
    }, null), _parent);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as default
};
