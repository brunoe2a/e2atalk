import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import "./ApplicationLogo-CUNc9et3.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"${_scopeId}><li class="leading-normal text-sm"${_scopeId}><a class="opacity-50 text-slate-700" href="javascript:;"${_scopeId}>Pages</a></li><li class="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-[&#39;/&#39;]" aria-current="page"${_scopeId}>Dashboard</li></ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Dashboard</h6>`);
          } else {
            return [
              createVNode("ol", { class: "flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16" }, [
                createVNode("li", { class: "leading-normal text-sm" }, [
                  createVNode("a", {
                    class: "opacity-50 text-slate-700",
                    href: "javascript:;"
                  }, "Pages")
                ]),
                createVNode("li", {
                  class: "text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']",
                  "aria-current": "page"
                }, "Dashboard")
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Dashboard")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Today&#39;s Money</p><h5 class="mb-0 font-bold"${_scopeId}> $53,000 <span class="leading-normal text-sm font-weight-bolder text-lime-500"${_scopeId}>+55%</span></h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"${_scopeId}><i class="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"${_scopeId}></i></div></div></div></div></div></div><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Today&#39;s Users</p><h5 class="mb-0 font-bold"${_scopeId}> 2,300 <span class="leading-normal text-sm font-weight-bolder text-lime-500"${_scopeId}>+3%</span></h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"${_scopeId}><i class="ni leading-none ni-world text-lg relative top-3.5 text-white"${_scopeId}></i></div></div></div></div></div></div><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>New Clients</p><h5 class="mb-0 font-bold"${_scopeId}> +3,462 <span class="leading-normal text-red-600 text-sm font-weight-bolder"${_scopeId}>-2%</span></h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"${_scopeId}><i class="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"${_scopeId}></i></div></div></div></div></div></div><div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Sales</p><h5 class="mb-0 font-bold"${_scopeId}> $103,430 <span class="leading-normal text-sm font-weight-bolder text-lime-500"${_scopeId}>+5%</span></h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"${_scopeId}><i class="ni leading-none ni-cart text-lg relative top-3.5 text-white"${_scopeId}></i></div></div></div></div></div></div></div><div class="flex flex-wrap mt-6 -mx-3"${_scopeId}><div class="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="max-w-full px-3 lg:w-1/2 lg:flex-none"${_scopeId}><div class="flex flex-col h-full"${_scopeId}><p class="pt-2 mb-1 font-semibold"${_scopeId}>Built by developers</p><h5 class="font-bold"${_scopeId}>Soft UI Dashboard</h5><p class="mb-12"${_scopeId}>From colors, cards, typography to complex elements, you will find the full documentation.</p><a class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="javascript:;"${_scopeId}> Read More <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"${_scopeId}></i></a></div></div><div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none"${_scopeId}><div class="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl"${_scopeId}><img src="/soft-ui/assets/img/shapes/waves-white.svg" class="absolute top-0 hidden w-1/2 h-full lg:block" alt="waves"${_scopeId}><div class="relative flex items-center justify-center h-full"${_scopeId}><img class="relative z-20 w-full pt-6" src="/soft-ui/assets/img/illustrations/rocket-white.png" alt="rocket"${_scopeId}></div></div></div></div></div></div></div><div class="w-full max-w-full px-3 lg:w-5/12 lg:flex-none"${_scopeId}><div class="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4"${_scopeId}><div class="relative h-full overflow-hidden bg-cover rounded-xl" style="${ssrRenderStyle({ "background-image": "url('/soft-ui/assets/img/ivancik.jpg')" })}"${_scopeId}><span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"${_scopeId}></span><div class="relative z-10 flex flex-col flex-auto h-full p-4"${_scopeId}><h5 class="pt-2 mb-6 font-bold text-white"${_scopeId}>Work with the rockets</h5><p class="text-white"${_scopeId}>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p><a class="mt-auto mb-0 font-semibold leading-normal text-white group text-sm" href="javascript:;"${_scopeId}> Read More <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"${_scopeId}></i></a></div></div></div></div></div><div class="flex flex-wrap mt-6 -mx-3"${_scopeId}><div class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none"${_scopeId}><div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="py-4 pr-1 mb-4 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl"${_scopeId}><div${_scopeId}><canvas id="chart-bars" height="170"${_scopeId}></canvas></div></div><h6 class="mt-6 mb-0 ml-2"${_scopeId}>Active Users</h6><p class="ml-2 leading-normal text-sm"${_scopeId}>(<span class="font-bold"${_scopeId}>+23%</span>) than last week</p><div class="w-full px-6 mx-auto max-w-screen-2xl rounded-xl"${_scopeId}><div class="flex flex-wrap mt-0 -mx-3"${_scopeId}><div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0"${_scopeId}><div class="flex mb-2"${_scopeId}><div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900"${_scopeId}><svg width="10px" height="10px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><title${_scopeId}>document</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero"${_scopeId}><g transform="translate(1716.000000, 291.000000)"${_scopeId}><g transform="translate(154.000000, 300.000000)"${_scopeId}><path class="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"${_scopeId}></path><path class="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"${_scopeId}></path></g></g></g></g></svg></div><p class="mt-1 mb-0 font-semibold leading-tight text-xs"${_scopeId}>Users</p></div><h4 class="font-bold"${_scopeId}>36K</h4><div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div><div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0"${_scopeId}><div class="flex mb-2"${_scopeId}><div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900"${_scopeId}><svg width="10px" height="10px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><title${_scopeId}>spaceship</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero"${_scopeId}><g transform="translate(1716.000000, 291.000000)"${_scopeId}><g transform="translate(4.000000, 301.000000)"${_scopeId}><path class="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"${_scopeId}></path><path class="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"${_scopeId}></path><path class="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"${_scopeId}></path><path class="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"${_scopeId}></path></g></g></g></g></svg></div><p class="mt-1 mb-0 font-semibold leading-tight text-xs"${_scopeId}>Clicks</p></div><h4 class="font-bold"${_scopeId}>2m</h4><div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div><div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0"${_scopeId}><div class="flex mb-2"${_scopeId}><div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400 text-neutral-900"${_scopeId}><svg width="10px" height="10px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><title${_scopeId}>credit-card</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero"${_scopeId}><g transform="translate(1716.000000, 291.000000)"${_scopeId}><g transform="translate(453.000000, 454.000000)"${_scopeId}><path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"${_scopeId}></path><path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"${_scopeId}></path></g></g></g></g></svg></div><p class="mt-1 mb-0 font-semibold leading-tight text-xs"${_scopeId}>Sales</p></div><h4 class="font-bold"${_scopeId}>435$</h4><div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div><div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0"${_scopeId}><div class="flex mb-2"${_scopeId}><div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400 text-neutral-900"${_scopeId}><svg width="10px" height="10px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><title${_scopeId}>settings</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero"${_scopeId}><g transform="translate(1716.000000, 291.000000)"${_scopeId}><g transform="translate(304.000000, 151.000000)"${_scopeId}><polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"${_scopeId}></polygon><path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"${_scopeId}></path><path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"${_scopeId}></path></g></g></g></g></svg></div><p class="mt-1 mb-0 font-semibold leading-tight text-xs"${_scopeId}>Items</p></div><h4 class="font-bold"${_scopeId}>43</h4><div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-1/2 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div></div></div></div></div></div><div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none"${_scopeId}><div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"${_scopeId}><div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0"${_scopeId}><h6${_scopeId}>Sales overview</h6><p class="leading-normal text-sm"${_scopeId}><i class="fa fa-arrow-up text-lime-500"${_scopeId}></i><span class="font-semibold"${_scopeId}>4% more</span> in 2021 </p></div><div class="flex-auto p-4"${_scopeId}><div${_scopeId}><canvas id="chart-line" height="300"${_scopeId}></canvas></div></div></div></div></div><div class="flex flex-wrap my-6 -mx-3"${_scopeId}><div class="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none"${_scopeId}><div class="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"${_scopeId}><div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0"${_scopeId}><div class="flex flex-wrap mt-0 -mx-3"${_scopeId}><div class="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none"${_scopeId}><h6${_scopeId}>Projects</h6><p class="mb-0 leading-normal text-sm"${_scopeId}><i class="fa fa-check text-cyan-500"${_scopeId}></i><span class="ml-1 font-semibold"${_scopeId}>30 done</span> this month </p></div><div class="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none"${_scopeId}><div class="relative pr-6 lg:float-right"${_scopeId}><a dropdown-trigger class="cursor-pointer" aria-expanded="false"${_scopeId}><i class="fa fa-ellipsis-v text-slate-400"${_scopeId}></i></a><p class="hidden transform-dropdown-show"${_scopeId}></p><ul dropdown-menu class="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-[&#39;\\f0d8&#39;]"${_scopeId}><li class="relative"${_scopeId}><a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;"${_scopeId}>Action</a></li><li class="relative"${_scopeId}><a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;"${_scopeId}>Another action</a></li><li class="relative"${_scopeId}><a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;"${_scopeId}>Something else here</a></li></ul></div></div></div></div><div class="flex-auto p-6 px-0 pb-2"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70"${_scopeId}>Companies</th><th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70"${_scopeId}>Members</th><th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70"${_scopeId}>Budget</th><th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70"${_scopeId}>Completion</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-xd.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="xd"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Soft UI XD Version</h6></div></div></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-1.jpg" class="w-full rounded-full" alt="team1"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Ryan Tompson <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-2.jpg" class="w-full rounded-full" alt="team2"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Romina Hadid <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-3.jpg" class="w-full rounded-full" alt="team3"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Alexander Smith <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="team4"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Jessica Doe <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> $14,000 </span></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>60%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div></td></tr><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-atlassian.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="atlassian"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Add Progress Track</h6></div></div></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-2.jpg" class="w-full rounded-full" alt="team5"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Romina Hadid <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="team6"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Jessica Doe <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> $3,000 </span></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>10%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div></td></tr><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-slack.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="team7"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Fix Platform Errors</h6></div></div></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-3.jpg" class="w-full rounded-full" alt="team8"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Romina Hadid <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-1.jpg" class="w-full rounded-full" alt="team9"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Jessica Doe <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> Not set </span></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>100%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div></td></tr><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-spotify.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="spotify"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Launch our Mobile App</h6></div></div></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="user1"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Ryan Tompson <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-3.jpg" class="w-full rounded-full" alt="user2"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Romina Hadid <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="user3"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Alexander Smith <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-1.jpg" class="w-full rounded-full" alt="user4"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Jessica Doe <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> $20,500 </span></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>100%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div></div></td></tr><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-jira.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="jira"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Add the New Pricing Page</h6></div></div></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="user5"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Ryan Tompson <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> $500 </span></td><td class="p-2 align-middle bg-transparent border-b whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>25%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"${_scopeId}></div></div></div></td></tr><tr${_scopeId}><td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img src="/soft-ui/assets/img/small-logos/logo-invision.svg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="invision"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 leading-normal text-sm"${_scopeId}>Redesign New Online Shop</h6></div></div></td><td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap"${_scopeId}><div class="mt-2 avatar-group"${_scopeId}><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-1.jpg" class="w-full rounded-full" alt="user6"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Ryan Tompson <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom"${_scopeId}><img src="/soft-ui/assets/img/team-4.jpg" class="w-full rounded-full" alt="user7"${_scopeId}></a><div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip"${_scopeId}> Jessica Doe <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[&#39;&#39;]" data-popper-arrow${_scopeId}></div></div></div></td><td class="p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap"${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}> $2,000 </span></td><td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap"${_scopeId}><div class="w-3/4 mx-auto"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="font-semibold leading-tight text-xs"${_scopeId}>40%</span></div></div><div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"${_scopeId}></div></div></div></td></tr></tbody></table></div></div></div></div><div class="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none"${_scopeId}><div class="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border"${_scopeId}><div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0"${_scopeId}><h6${_scopeId}>Orders overview</h6><p class="leading-normal text-sm"${_scopeId}><i class="fa fa-arrow-up text-lime-500"${_scopeId}></i><span class="font-semibold"${_scopeId}>24%</span> this month </p></div><div class="flex-auto p-4"${_scopeId}><div class="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[&#39;&#39;] before:lg:-ml-px"${_scopeId}><div class="relative mb-4 mt-0 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>$2400, Design changes</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>22 DEC 7:20 PM</p></div></div><div class="relative mb-4 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>New order #1832412</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>21 DEC 11 PM</p></div></div><div class="relative mb-4 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>Server payments for April</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>21 DEC 9:34 PM</p></div></div><div class="relative mb-4 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>New card added for order #4395133</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>20 DEC 2:20 AM</p></div></div><div class="relative mb-4 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>Unlock packages for development</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>18 DEC 4:54 AM</p></div></div><div class="relative mb-0 after:clear-both after:table after:content-[&#39;&#39;]"${_scopeId}><span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"${_scopeId}><i class="relative z-10 text-transparent ni leading-none ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"${_scopeId}></i></span><div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto"${_scopeId}><h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700"${_scopeId}>New order #9583120</h6><p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400"${_scopeId}>17 DEC</p></div></div></div></div></div></div></div><footer class="pt-4"${_scopeId}><div class="w-full px-6 mx-auto"${_scopeId}><div class="flex flex-wrap items-center -mx-3 lg:justify-between"${_scopeId}><div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none"${_scopeId}><div class="leading-normal text-center text-sm text-slate-500 lg:text-left"${_scopeId}> © 2024 made with <i class="fa fa-heart"${_scopeId}></i> by <a href="https://www.creative-tim.com" class="font-semibold text-slate-700" target="_blank"${_scopeId}>Creative Tim</a> for a better web. </div></div><div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none"${_scopeId}><ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end"${_scopeId}><li class="nav-item"${_scopeId}><a href="https://www.creative-tim.com" class="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500" target="_blank"${_scopeId}>Creative Tim</a></li><li class="nav-item"${_scopeId}><a href="https://www.creative-tim.com/presentation" class="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500" target="_blank"${_scopeId}>About Us</a></li><li class="nav-item"${_scopeId}><a href="https://creative-tim.com/blog" class="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500" target="_blank"${_scopeId}>Blog</a></li><li class="nav-item"${_scopeId}><a href="https://www.creative-tim.com/license" class="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500" target="_blank"${_scopeId}>License</a></li></ul></div></div></div></footer></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Today's Money"),
                              createVNode("h5", { class: "mb-0 font-bold" }, [
                                createTextVNode(" $53,000 "),
                                createVNode("span", { class: "leading-normal text-sm font-weight-bolder text-lime-500" }, "+55%")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500" }, [
                              createVNode("i", { class: "ni leading-none ni-money-coins text-lg relative top-3.5 text-white" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Today's Users"),
                              createVNode("h5", { class: "mb-0 font-bold" }, [
                                createTextVNode(" 2,300 "),
                                createVNode("span", { class: "leading-normal text-sm font-weight-bolder text-lime-500" }, "+3%")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500" }, [
                              createVNode("i", { class: "ni leading-none ni-world text-lg relative top-3.5 text-white" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "New Clients"),
                              createVNode("h5", { class: "mb-0 font-bold" }, [
                                createTextVNode(" +3,462 "),
                                createVNode("span", { class: "leading-normal text-red-600 text-sm font-weight-bolder" }, "-2%")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500" }, [
                              createVNode("i", { class: "ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Sales"),
                              createVNode("h5", { class: "mb-0 font-bold" }, [
                                createTextVNode(" $103,430 "),
                                createVNode("span", { class: "leading-normal text-sm font-weight-bolder text-lime-500" }, "+5%")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500" }, [
                              createVNode("i", { class: "ni leading-none ni-cart text-lg relative top-3.5 text-white" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap mt-6 -mx-3" }, [
                  createVNode("div", { class: "w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                          createVNode("div", { class: "max-w-full px-3 lg:w-1/2 lg:flex-none" }, [
                            createVNode("div", { class: "flex flex-col h-full" }, [
                              createVNode("p", { class: "pt-2 mb-1 font-semibold" }, "Built by developers"),
                              createVNode("h5", { class: "font-bold" }, "Soft UI Dashboard"),
                              createVNode("p", { class: "mb-12" }, "From colors, cards, typography to complex elements, you will find the full documentation."),
                              createVNode("a", {
                                class: "mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500",
                                href: "javascript:;"
                              }, [
                                createTextVNode(" Read More "),
                                createVNode("i", { class: "fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none" }, [
                            createVNode("div", { class: "h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl" }, [
                              createVNode("img", {
                                src: "/soft-ui/assets/img/shapes/waves-white.svg",
                                class: "absolute top-0 hidden w-1/2 h-full lg:block",
                                alt: "waves"
                              }),
                              createVNode("div", { class: "relative flex items-center justify-center h-full" }, [
                                createVNode("img", {
                                  class: "relative z-20 w-full pt-6",
                                  src: "/soft-ui/assets/img/illustrations/rocket-white.png",
                                  alt: "rocket"
                                })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 lg:w-5/12 lg:flex-none" }, [
                    createVNode("div", { class: "border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4" }, [
                      createVNode("div", {
                        class: "relative h-full overflow-hidden bg-cover rounded-xl",
                        style: { "background-image": "url('/soft-ui/assets/img/ivancik.jpg')" }
                      }, [
                        createVNode("span", { class: "absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80" }),
                        createVNode("div", { class: "relative z-10 flex flex-col flex-auto h-full p-4" }, [
                          createVNode("h5", { class: "pt-2 mb-6 font-bold text-white" }, "Work with the rockets"),
                          createVNode("p", { class: "text-white" }, "Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first."),
                          createVNode("a", {
                            class: "mt-auto mb-0 font-semibold leading-normal text-white group text-sm",
                            href: "javascript:;"
                          }, [
                            createTextVNode(" Read More "),
                            createVNode("i", { class: "fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" })
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap mt-6 -mx-3" }, [
                  createVNode("div", { class: "w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none" }, [
                    createVNode("div", { class: "border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "py-4 pr-1 mb-4 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl" }, [
                          createVNode("div", null, [
                            createVNode("canvas", {
                              id: "chart-bars",
                              height: "170"
                            })
                          ])
                        ]),
                        createVNode("h6", { class: "mt-6 mb-0 ml-2" }, "Active Users"),
                        createVNode("p", { class: "ml-2 leading-normal text-sm" }, [
                          createTextVNode("("),
                          createVNode("span", { class: "font-bold" }, "+23%"),
                          createTextVNode(") than last week")
                        ]),
                        createVNode("div", { class: "w-full px-6 mx-auto max-w-screen-2xl rounded-xl" }, [
                          createVNode("div", { class: "flex flex-wrap mt-0 -mx-3" }, [
                            createVNode("div", { class: "flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0" }, [
                              createVNode("div", { class: "flex mb-2" }, [
                                createVNode("div", { class: "flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900" }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "10px",
                                    height: "10px",
                                    viewBox: "0 0 40 44",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                  }, [
                                    createVNode("title", null, "document"),
                                    createVNode("g", {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }, [
                                      createVNode("g", {
                                        transform: "translate(-1870.000000, -591.000000)",
                                        fill: "#FFFFFF",
                                        "fill-rule": "nonzero"
                                      }, [
                                        createVNode("g", { transform: "translate(1716.000000, 291.000000)" }, [
                                          createVNode("g", { transform: "translate(154.000000, 300.000000)" }, [
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z",
                                              opacity: "0.603585379"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                            })
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]))
                                ]),
                                createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs" }, "Users")
                              ]),
                              createVNode("h4", { class: "font-bold" }, "36K"),
                              createVNode("div", { class: "text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200" }, [
                                createVNode("div", {
                                  class: "duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all",
                                  role: "progressbar",
                                  "aria-valuenow": "60",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0" }, [
                              createVNode("div", { class: "flex mb-2" }, [
                                createVNode("div", { class: "flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900" }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "10px",
                                    height: "10px",
                                    viewBox: "0 0 40 40",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                  }, [
                                    createVNode("title", null, "spaceship"),
                                    createVNode("g", {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }, [
                                      createVNode("g", {
                                        transform: "translate(-1720.000000, -592.000000)",
                                        fill: "#FFFFFF",
                                        "fill-rule": "nonzero"
                                      }, [
                                        createVNode("g", { transform: "translate(1716.000000, 291.000000)" }, [
                                          createVNode("g", { transform: "translate(4.000000, 301.000000)" }, [
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z",
                                              opacity: "0.598539807"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z",
                                              opacity: "0.598539807"
                                            })
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]))
                                ]),
                                createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs" }, "Clicks")
                              ]),
                              createVNode("h4", { class: "font-bold" }, "2m"),
                              createVNode("div", { class: "text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200" }, [
                                createVNode("div", {
                                  class: "duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all",
                                  role: "progressbar",
                                  "aria-valuenow": "90",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0" }, [
                              createVNode("div", { class: "flex mb-2" }, [
                                createVNode("div", { class: "flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400 text-neutral-900" }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "10px",
                                    height: "10px",
                                    viewBox: "0 0 43 36",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                  }, [
                                    createVNode("title", null, "credit-card"),
                                    createVNode("g", {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }, [
                                      createVNode("g", {
                                        transform: "translate(-2169.000000, -745.000000)",
                                        fill: "#FFFFFF",
                                        "fill-rule": "nonzero"
                                      }, [
                                        createVNode("g", { transform: "translate(1716.000000, 291.000000)" }, [
                                          createVNode("g", { transform: "translate(453.000000, 454.000000)" }, [
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",
                                              opacity: "0.593633743"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                            })
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]))
                                ]),
                                createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs" }, "Sales")
                              ]),
                              createVNode("h4", { class: "font-bold" }, "435$"),
                              createVNode("div", { class: "text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200" }, [
                                createVNode("div", {
                                  class: "duration-600 ease-soft -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all",
                                  role: "progressbar",
                                  "aria-valuenow": "30",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0" }, [
                              createVNode("div", { class: "flex mb-2" }, [
                                createVNode("div", { class: "flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400 text-neutral-900" }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "10px",
                                    height: "10px",
                                    viewBox: "0 0 40 40",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                  }, [
                                    createVNode("title", null, "settings"),
                                    createVNode("g", {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }, [
                                      createVNode("g", {
                                        transform: "translate(-2020.000000, -442.000000)",
                                        fill: "#FFFFFF",
                                        "fill-rule": "nonzero"
                                      }, [
                                        createVNode("g", { transform: "translate(1716.000000, 291.000000)" }, [
                                          createVNode("g", { transform: "translate(304.000000, 151.000000)" }, [
                                            createVNode("polygon", {
                                              class: "color-background",
                                              opacity: "0.596981957",
                                              points: "18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",
                                              opacity: "0.596981957"
                                            }),
                                            createVNode("path", {
                                              class: "color-background",
                                              d: "M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                            })
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]))
                                ]),
                                createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs" }, "Items")
                              ]),
                              createVNode("h4", { class: "font-bold" }, "43"),
                              createVNode("div", { class: "text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200" }, [
                                createVNode("div", {
                                  class: "duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-1/2 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all",
                                  role: "progressbar",
                                  "aria-valuenow": "50",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none" }, [
                    createVNode("div", { class: "border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border" }, [
                      createVNode("div", { class: "border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0" }, [
                        createVNode("h6", null, "Sales overview"),
                        createVNode("p", { class: "leading-normal text-sm" }, [
                          createVNode("i", { class: "fa fa-arrow-up text-lime-500" }),
                          createVNode("span", { class: "font-semibold" }, "4% more"),
                          createTextVNode(" in 2021 ")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", null, [
                          createVNode("canvas", {
                            id: "chart-line",
                            height: "300"
                          })
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap my-6 -mx-3" }, [
                  createVNode("div", { class: "w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none" }, [
                    createVNode("div", { class: "border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border" }, [
                      createVNode("div", { class: "border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0" }, [
                        createVNode("div", { class: "flex flex-wrap mt-0 -mx-3" }, [
                          createVNode("div", { class: "flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none" }, [
                            createVNode("h6", null, "Projects"),
                            createVNode("p", { class: "mb-0 leading-normal text-sm" }, [
                              createVNode("i", { class: "fa fa-check text-cyan-500" }),
                              createVNode("span", { class: "ml-1 font-semibold" }, "30 done"),
                              createTextVNode(" this month ")
                            ])
                          ]),
                          createVNode("div", { class: "flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none" }, [
                            createVNode("div", { class: "relative pr-6 lg:float-right" }, [
                              createVNode("a", {
                                "dropdown-trigger": "",
                                class: "cursor-pointer",
                                "aria-expanded": "false"
                              }, [
                                createVNode("i", { class: "fa fa-ellipsis-v text-slate-400" })
                              ]),
                              createVNode("p", { class: "hidden transform-dropdown-show" }),
                              createVNode("ul", {
                                "dropdown-menu": "",
                                class: "z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\\f0d8']"
                              }, [
                                createVNode("li", { class: "relative" }, [
                                  createVNode("a", {
                                    class: "py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300",
                                    href: "javascript:;"
                                  }, "Action")
                                ]),
                                createVNode("li", { class: "relative" }, [
                                  createVNode("a", {
                                    class: "py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300",
                                    href: "javascript:;"
                                  }, "Another action")
                                ]),
                                createVNode("li", { class: "relative" }, [
                                  createVNode("a", {
                                    class: "py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300",
                                    href: "javascript:;"
                                  }, "Something else here")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto p-6 px-0 pb-2" }, [
                        createVNode("div", { class: "overflow-x-auto" }, [
                          createVNode("table", { class: "items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70" }, "Companies"),
                                createVNode("th", { class: "px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70" }, "Members"),
                                createVNode("th", { class: "px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70" }, "Budget"),
                                createVNode("th", { class: "px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70" }, "Completion")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-xd.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "xd"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Soft UI XD Version")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-1.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team1"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Ryan Tompson "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-2.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team2"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Romina Hadid "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-3.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team3"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Alexander Smith "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team4"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Jessica Doe "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " $14,000 ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "60%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "60",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-atlassian.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "atlassian"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Add Progress Track")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-2.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team5"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Romina Hadid "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team6"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Jessica Doe "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " $3,000 ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "10%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "10",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-slack.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "team7"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Fix Platform Errors")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-3.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team8"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Romina Hadid "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-1.jpg",
                                        class: "w-full rounded-full",
                                        alt: "team9"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Jessica Doe "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " Not set ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "100%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "100",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-spotify.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "spotify"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Launch our Mobile App")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user1"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Ryan Tompson "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-3.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user2"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Romina Hadid "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user3"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Alexander Smith "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-1.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user4"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Jessica Doe "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " $20,500 ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "100%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "100",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-jira.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "jira"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Add the New Pricing Page")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user5"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Ryan Tompson "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " $500 ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-b whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "25%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "25",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "25"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-0 whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex px-2 py-1" }, [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/small-logos/logo-invision.svg",
                                        class: "inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl",
                                        alt: "invision"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex flex-col justify-center" }, [
                                      createVNode("h6", { class: "mb-0 leading-normal text-sm" }, "Redesign New Online Shop")
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-0 whitespace-nowrap" }, [
                                  createVNode("div", { class: "mt-2 avatar-group" }, [
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-1.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user6"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Ryan Tompson "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ]),
                                    createVNode("a", {
                                      href: "javascript:;",
                                      class: "relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30",
                                      "data-target": "tooltip_trigger",
                                      "data-placement": "bottom"
                                    }, [
                                      createVNode("img", {
                                        src: "/soft-ui/assets/img/team-4.jpg",
                                        class: "w-full rounded-full",
                                        alt: "user7"
                                      })
                                    ]),
                                    createVNode("div", {
                                      "data-target": "tooltip",
                                      class: "hidden px-2 py-1 text-white bg-black rounded-lg text-sm",
                                      role: "tooltip"
                                    }, [
                                      createTextVNode(" Jessica Doe "),
                                      createVNode("div", {
                                        class: "invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']",
                                        "data-popper-arrow": ""
                                      })
                                    ])
                                  ])
                                ]),
                                createVNode("td", { class: "p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap" }, [
                                  createVNode("span", { class: "font-semibold leading-tight text-xs" }, " $2,000 ")
                                ]),
                                createVNode("td", { class: "p-2 align-middle bg-transparent border-0 whitespace-nowrap" }, [
                                  createVNode("div", { class: "w-3/4 mx-auto" }, [
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-semibold leading-tight text-xs" }, "40%")
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200" }, [
                                      createVNode("div", {
                                        class: "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                        role: "progressbar",
                                        "aria-valuenow": "40",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "40"
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none" }, [
                    createVNode("div", { class: "border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border" }, [
                      createVNode("div", { class: "border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0" }, [
                        createVNode("h6", null, "Orders overview"),
                        createVNode("p", { class: "leading-normal text-sm" }, [
                          createVNode("i", { class: "fa fa-arrow-up text-lime-500" }),
                          createVNode("span", { class: "font-semibold" }, "24%"),
                          createTextVNode(" this month ")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px" }, [
                          createVNode("div", { class: "relative mb-4 mt-0 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "$2400, Design changes"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "22 DEC 7:20 PM")
                            ])
                          ]),
                          createVNode("div", { class: "relative mb-4 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-html5 leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "New order #1832412"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "21 DEC 11 PM")
                            ])
                          ]),
                          createVNode("div", { class: "relative mb-4 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-cart leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "Server payments for April"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "21 DEC 9:34 PM")
                            ])
                          ]),
                          createVNode("div", { class: "relative mb-4 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-credit-card leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "New card added for order #4395133"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "20 DEC 2:20 AM")
                            ])
                          ]),
                          createVNode("div", { class: "relative mb-4 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-key-25 leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "Unlock packages for development"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "18 DEC 4:54 AM")
                            ])
                          ]),
                          createVNode("div", { class: "relative mb-0 after:clear-both after:table after:content-['']" }, [
                            createVNode("span", { class: "w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold" }, [
                              createVNode("i", { class: "relative z-10 text-transparent ni leading-none ni-money-coins leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent" })
                            ]),
                            createVNode("div", { class: "ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto" }, [
                              createVNode("h6", { class: "mb-0 font-semibold leading-normal text-sm text-slate-700" }, "New order #9583120"),
                              createVNode("p", { class: "mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400" }, "17 DEC")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("footer", { class: "pt-4" }, [
                  createVNode("div", { class: "w-full px-6 mx-auto" }, [
                    createVNode("div", { class: "flex flex-wrap items-center -mx-3 lg:justify-between" }, [
                      createVNode("div", { class: "w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none" }, [
                        createVNode("div", { class: "leading-normal text-center text-sm text-slate-500 lg:text-left" }, [
                          createTextVNode(" © 2024 made with "),
                          createVNode("i", { class: "fa fa-heart" }),
                          createTextVNode(" by "),
                          createVNode("a", {
                            href: "https://www.creative-tim.com",
                            class: "font-semibold text-slate-700",
                            target: "_blank"
                          }, "Creative Tim"),
                          createTextVNode(" for a better web. ")
                        ])
                      ]),
                      createVNode("div", { class: "w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none" }, [
                        createVNode("ul", { class: "flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end" }, [
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              href: "https://www.creative-tim.com",
                              class: "block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500",
                              target: "_blank"
                            }, "Creative Tim")
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              href: "https://www.creative-tim.com/presentation",
                              class: "block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500",
                              target: "_blank"
                            }, "About Us")
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              href: "https://creative-tim.com/blog",
                              class: "block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500",
                              target: "_blank"
                            }, "Blog")
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              href: "https://www.creative-tim.com/license",
                              class: "block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500",
                              target: "_blank"
                            }, "License")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
