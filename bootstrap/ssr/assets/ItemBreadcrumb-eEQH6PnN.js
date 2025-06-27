import { mergeProps, unref, useSSRContext, withCtx, renderSlot } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main$1 = {
  __name: "FooterApplicationLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const dataAtual = /* @__PURE__ */ new Date();
    const anoAtual = dataAtual.getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "pb-3" }, _attrs))}><div class="w-full px-6 mx-auto"><div class="flex flex-wrap items-center -mx-3 lg:justify-between"><div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none"><div class="text-sm leading-normal text-center text-slate-500 lg:text-left"> © 2014 - ${ssrInterpolate(unref(anoAtual))} Desenvolvido por <a href="https://e2adigital.com" class="font-semibold text-slate-700" target="_blank">E2A Soluções Digitais</a> - Versão 1.0.1 </div></div><div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none"><ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end"><li class="nav-item"><a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Termo de Uso</a></li><li class="nav-item"><a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Sobre</a></li><li class="nav-item"><a href="" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Dúvidas</a></li><li class="nav-item"><a href="" class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Licença</a></li></ul></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/FooterApplicationLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ItemBreadcrumb",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.active) {
        _push(`<li class="text-sm pr-2 capitalize leading-normal text-slate-700" aria-current="page">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</li>`);
      } else {
        _push(`<li class="leading-normal pr-2 text-sm">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "opacity-50 text-slate-700",
          href: __props.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</li>`);
      }
      if (!__props.active) {
        _push(`<li class="leading-normal pr-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Softui/Breadcrumb/ItemBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
