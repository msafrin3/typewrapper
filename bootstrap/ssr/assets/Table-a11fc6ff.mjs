import { ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import "@inertiajs/inertia";
import Pagination from "./Pagination-9748d461.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    data: Object,
    filters: Object,
    dataRoute: String,
    links: Object
  },
  setup(__props) {
    const props = __props;
    let search = ref(props.filters.search);
    watch(search, (value) => {
      router.get(props.dataRoute, { search: value }, {
        preserveState: true,
        replace: true
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-lg-3 col-md-4 col-sm-12 form-group"><label>Carian</label><input type="text" class="form-control" id="search" placeholder="Carian..."${ssrRenderAttr("value", unref(search))}></div><div class="col-lg-2"><label> </label><br>`);
      if (unref(search)) {
        _push(`<button type="buttton" class="btn btn-outline-secondary"><i class="fa fa-times-circle fa-fw"></i> Reset</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><table class="table table-striped table-sm mt-3"><thead>`);
      ssrRenderSlot(_ctx.$slots, "thead", {}, null, _push, _parent);
      _push(`</thead>`);
      if (__props.data.data.length == 0) {
        _push(`<tbody><tr><td colspan="20" class="text-center"><i>No data available</i></td></tr></tbody>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</table>`);
      _push(ssrRenderComponent(Pagination, {
        links: __props.data.links
      }, null, _parent));
      _push(`<div class="mt-3">${ssrInterpolate("Showing " + __props.data.from + " to " + __props.data.to + " of " + __props.data.total + " entries")}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
