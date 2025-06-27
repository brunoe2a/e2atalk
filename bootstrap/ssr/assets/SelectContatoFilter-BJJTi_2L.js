import { mergeModels, useModel, ref, watch, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "SelectContatoFilter",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    options: {
      type: Array,
      required: true
    },
    selecao: {
      type: Object
    }
  }, {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const searchQuery = ref("");
    const isOpen = ref(false);
    const filteredOptions = ref([...props.options]);
    watch(() => props.options, (newOptions) => {
      filteredOptions.value = newOptions;
    });
    onMounted(() => {
      if (props.selecao) {
        model.value = props.selecao.id;
        searchQuery.value = props.selecao.name;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Selecione uma opção" class="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-md shadow-sm">`);
      if (isOpen.value && filteredOptions.value.length > 0) {
        _push(`<div class="w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto"><ul><!--[-->`);
        ssrRenderList(filteredOptions.value, (option) => {
          _push(`<li class="p-2 hover:bg-gray-200 cursor-pointer">${ssrInterpolate(option.name)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen.value && filteredOptions.value.length === 0) {
        _push(`<div class="w-full bg-white border border-gray-300 rounded-md mt-1 p-2 text-gray-500"> Nenhuma opção encontrada </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lista/Partials/SelectContatoFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
