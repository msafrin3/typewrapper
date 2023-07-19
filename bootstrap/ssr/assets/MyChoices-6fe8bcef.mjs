import { onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import Choices from "choices.js";
const _sfc_main = {
  __name: "MyChoices",
  __ssrInlineRender: true,
  props: {
    placeholder: String,
    type: String,
    removeItemButton: {
      type: Boolean,
      default: true
    },
    id: String
  },
  emits: ["getValue"],
  setup(__props, { emit }) {
    const props = __props;
    onMounted(() => {
      new Choices($("#" + props.id)[0], {
        removeItems: true,
        removeItemButton: props.removeItemButton,
        placeholderValue: props.placeholder
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: "form-control",
        "data-choices": "",
        "data-choices-removeItem": "",
        [__props.type || ""]: true
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/MyChoices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
