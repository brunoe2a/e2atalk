import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, unref, createCommentVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$4 } from "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$5 } from "./InputError-BIoZcjri.js";
import { useForm } from "@inertiajs/vue3";
import _sfc_main$6 from "./ImportMediaForm-DBRPjaD5.js";
import { _ as _sfc_main$8 } from "./ButtonSave-DVEwRSxU.js";
import "./ButtonIniciar-C2oxO485.js";
import { _ as _sfc_main$7 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$9 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$a } from "./ButtonSim-CjNUnTWQ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    campanha: {},
    total: {}
  },
  setup(__props) {
    const props = __props;
    const removeMidia = ref(false);
    const form = useForm({
      content: props.campanha.content ?? null
    });
    const totalProcessada = computed(() => {
      return (props.total.contatos ?? 0) - (props.total.erro_invalido ?? 0);
    });
    const enviados = ref(props.total.enviada ?? 0);
    const totalValidos = ref(totalProcessada);
    const percentualConcluido = computed(() => {
      return enviados.value > 0 ? Math.round(enviados.value / totalValidos.value * 100) : 0;
    });
    const confirmeRemoveMidia = () => {
      removeMidia.value = true;
    };
    const salvar = () => {
      form.put(route("campanha.update", props.campanha.id));
    };
    const remover = () => {
      form.delete(route("campanha.remover.midia", props.campanha.id), {
        preserveScroll: true,
        onSuccess: () => closeModalMidia(),
        onError: () => closeModalMidia(),
        onFinish: () => closeModalMidia()
      });
    };
    const closeModalMidia = () => {
      removeMidia.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Campanha:" + __props.campanha.nome
      }, _attrs), {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("sidebar.link.dashboard"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("sidebar.link.dashboard")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("campanha.index")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Campanhas`);
                } else {
                  return [
                    createTextVNode("Campanhas")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: "",
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Campanha: ${ssrInterpolate(__props.campanha.nome)}`);
                } else {
                  return [
                    createTextVNode("Campanha: " + toDisplayString(__props.campanha.nome), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Campanha: ${ssrInterpolate(__props.campanha.nome)}</h6>`);
          } else {
            return [
              createVNode("ol", { class: "flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16" }, [
                createVNode(_sfc_main$2, {
                  href: _ctx.route("dashboard")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("sidebar.link.dashboard")), 1)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$2, {
                  href: _ctx.route("campanha.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode("Campanhas")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$2, {
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Campanha: " + toDisplayString(__props.campanha.nome), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Campanha: " + toDisplayString(__props.campanha.nome), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Contatos</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(totalProcessada.value)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-sky-300"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Processados</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(percentualConcluido.value)}% </h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Enviados</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.enviada ?? 0)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-green-700 to-green-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Erro</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.erro ?? 0)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-700 to-red-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div></div><div class="flex flex-wrap mt-6 -mx-3"${_scopeId}><div class="flex gap-4 w-full max-w-full px-3"${_scopeId}><div class="w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="mb-1 uppercase"${_scopeId}>${ssrInterpolate(__props.campanha.nome)}</div><div class="text-xs"${_scopeId}>${ssrInterpolate(__props.campanha.descricao)}</div><div class="my-2 border-t"${_scopeId}></div><div class="text-sm flex items-center gap-4"${_scopeId}><div class="grow"${_scopeId}><p${_scopeId}> Intervalo de Tempo entre envios: <br${_scopeId}> Inicio: ${ssrInterpolate(__props.campanha.t_inicial)} seg. | Fim: ${ssrInterpolate(__props.campanha.t_final)} seg. </p><p${_scopeId}> Pausa: ${ssrInterpolate(__props.campanha.tempo_pausa)} min. a cada ${ssrInterpolate(__props.campanha.quat_pausa)} envios. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"${_scopeId}></path></svg></div><div class="my-2 border-t"${_scopeId}></div><div class="mb-3 text-sm flex items-center gap-4"${_scopeId}><div class="grow"${_scopeId}> Lista de Contatos: <span class="text-xs"${_scopeId}> (Total: ${ssrInterpolate(__props.total.contatos ?? 0)})</span> <br${_scopeId}><b${_scopeId}>${ssrInterpolate(__props.campanha.lista.nome)}</b> <br${_scopeId}><span class="text-xs"${_scopeId}>${ssrInterpolate(__props.campanha.lista.descricao)}</span></div><div${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"${_scopeId}></path></svg></div></div><div class="my-4 border-t"${_scopeId}></div><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("campanha.index"),
              cor: "gray"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Voltar `);
                } else {
                  return [
                    createTextVNode(" Voltar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.campanha.status !== "Iniciada" && __props.campanha.status !== "Concluida" && (__props.campanha.content !== null || __props.campanha.file_path !== null)) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                href: _ctx.route("campanha.envios", __props.campanha.id),
                cor: "sky"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId2}><path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"${_scopeId2}></path></svg> Envios `);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 mr-1",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createTextVNode(" Envios ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><h6 class="font-bold text-gray-600"${_scopeId}>Conteúdo Mensagem:</h6><div class="mb-4"${_scopeId}><textarea id="content" rows="5" class="mt-1 block w-full border-gray-300 text-sm focus:border-sky-500 focus:ring-sky-500 rounded-lg"${_scopeId}>${ssrInterpolate(unref(form).content)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.content
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="my-4 border-t"${_scopeId}></div><div class="flex gap-4"${_scopeId}>`);
            if (__props.campanha.file_path === null) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                campanha_id: __props.campanha.id
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_sfc_main$7, {
                cor: "red",
                onClick: confirmeRemoveMidia
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd"${_scopeId2}></path></svg> Remover Mídia `);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 mr-1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createTextVNode(" Remover Mídia ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (unref(form).content !== __props.campanha.content) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                cor: "green",
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing,
                onClick: salvar
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Salvar`);
                  } else {
                    return [
                      createTextVNode("Salvar")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (__props.campanha.content || __props.campanha.type === "image") {
              _push2(`<div class="w-1/4 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><h6 class="font-bold text-gray-600"${_scopeId}>Modelo Mensagem:</h6><div class="my-4 border-t"${_scopeId}></div>`);
              if (__props.campanha.content !== null || __props.campanha.file_path !== null) {
                _push2(`<div class="text-xs whitespace-pre-wrap p-3 rounded-lg bg-slate-100"${_scopeId}>`);
                if (__props.campanha.type === "image") {
                  _push2(`<img class="rounded-lg"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + __props.campanha.file_path)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.campanha.type === "video") {
                  _push2(`<video controls${_scopeId}><source${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + __props.campanha.file_path)}${ssrRenderAttr("type", __props.campanha.mimetype)}${_scopeId}> Seu navegador não suporta o elemento de áudio. </video>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(form).content) {
                  _push2(`<div class="mt-3"${_scopeId}>${ssrInterpolate(unref(form).content)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: removeMidia.value,
              onClose: closeModalMidia,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"${_scopeId2}></path></svg><h6 class="font-bold text-lg text-center"${_scopeId2}>Deseja remover a mídia?</h6></div><div class="mt-6 flex justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    onClick: closeModalMidia,
                    cor: "red"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId3}></path></svg> Não `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            class: "w-5 mr-2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18 18 6M6 6l12 12"
                            })
                          ])),
                          createTextVNode(" Não ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    cor: "green",
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: remover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sim`);
                      } else {
                        return [
                          createTextVNode("Sim")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "w-20 text-orange-400"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          })
                        ])),
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja remover a mídia?")
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-center" }, [
                        createVNode(_sfc_main$7, {
                          onClick: closeModalMidia,
                          cor: "red"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              class: "w-5 mr-2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M6 18 18 6M6 6l12 12"
                              })
                            ])),
                            createTextVNode(" Não ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$a, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: remover
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Contatos"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(totalProcessada.value), 1)
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-sky-300" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-10 text-white",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
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
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Processados"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(percentualConcluido.value) + "% ", 1)
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-10 text-white",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
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
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Enviados"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.enviada ?? 0), 1)
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-green-700 to-green-500" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-10 text-white",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
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
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Erro"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.erro ?? 0), 1)
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-700 to-red-500" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-10 text-white",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap mt-6 -mx-3" }, [
                  createVNode("div", { class: "flex gap-4 w-full max-w-full px-3" }, [
                    createVNode("div", { class: "w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "mb-1 uppercase" }, toDisplayString(__props.campanha.nome), 1),
                      createVNode("div", { class: "text-xs" }, toDisplayString(__props.campanha.descricao), 1),
                      createVNode("div", { class: "my-2 border-t" }),
                      createVNode("div", { class: "text-sm flex items-center gap-4" }, [
                        createVNode("div", { class: "grow" }, [
                          createVNode("p", null, [
                            createTextVNode(" Intervalo de Tempo entre envios: "),
                            createVNode("br"),
                            createTextVNode(" Inicio: " + toDisplayString(__props.campanha.t_inicial) + " seg. | Fim: " + toDisplayString(__props.campanha.t_final) + " seg. ", 1)
                          ]),
                          createVNode("p", null, " Pausa: " + toDisplayString(__props.campanha.tempo_pausa) + " min. a cada " + toDisplayString(__props.campanha.quat_pausa) + " envios. ", 1)
                        ]),
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "h-10"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          })
                        ]))
                      ]),
                      createVNode("div", { class: "my-2 border-t" }),
                      createVNode("div", { class: "mb-3 text-sm flex items-center gap-4" }, [
                        createVNode("div", { class: "grow" }, [
                          createTextVNode(" Lista de Contatos: "),
                          createVNode("span", { class: "text-xs" }, " (Total: " + toDisplayString(__props.total.contatos ?? 0) + ")", 1),
                          createTextVNode(),
                          createVNode("br"),
                          createVNode("b", null, toDisplayString(__props.campanha.lista.nome), 1),
                          createTextVNode(),
                          createVNode("br"),
                          createVNode("span", { class: "text-xs" }, toDisplayString(__props.campanha.lista.descricao), 1)
                        ]),
                        createVNode("div", null, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            class: "h-10"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "my-4 border-t" }),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode(_sfc_main$4, {
                          href: _ctx.route("campanha.index"),
                          cor: "gray"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Voltar ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        __props.campanha.status !== "Iniciada" && __props.campanha.status !== "Concluida" && (__props.campanha.content !== null || __props.campanha.file_path !== null) ? (openBlock(), createBlock(_sfc_main$4, {
                          key: 0,
                          href: _ctx.route("campanha.envios", __props.campanha.id),
                          cor: "sky"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 mr-1",
                              "aria-hidden": "true",
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              fill: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createTextVNode(" Envios ")
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("h6", { class: "font-bold text-gray-600" }, "Conteúdo Mensagem:"),
                      createVNode("div", { class: "mb-4" }, [
                        withDirectives(createVNode("textarea", {
                          id: "content",
                          rows: "5",
                          class: "mt-1 block w-full border-gray-300 text-sm focus:border-sky-500 focus:ring-sky-500 rounded-lg",
                          "onUpdate:modelValue": ($event) => unref(form).content = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).content]
                        ]),
                        createVNode(_sfc_main$5, {
                          class: "mt-2",
                          message: unref(form).errors.content
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "my-4 border-t" }),
                      createVNode("div", { class: "flex gap-4" }, [
                        __props.campanha.file_path === null ? (openBlock(), createBlock(_sfc_main$6, {
                          key: 0,
                          campanha_id: __props.campanha.id
                        }, null, 8, ["campanha_id"])) : (openBlock(), createBlock(_sfc_main$7, {
                          key: 1,
                          cor: "red",
                          onClick: confirmeRemoveMidia
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 mr-1",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createTextVNode(" Remover Mídia ")
                          ]),
                          _: 1
                        })),
                        unref(form).content !== __props.campanha.content ? (openBlock(), createBlock(_sfc_main$8, {
                          key: 2,
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: salvar
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Salvar")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                      ])
                    ]),
                    __props.campanha.content || __props.campanha.type === "image" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-1/4 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
                    }, [
                      createVNode("h6", { class: "font-bold text-gray-600" }, "Modelo Mensagem:"),
                      createVNode("div", { class: "my-4 border-t" }),
                      __props.campanha.content !== null || __props.campanha.file_path !== null ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-xs whitespace-pre-wrap p-3 rounded-lg bg-slate-100"
                      }, [
                        __props.campanha.type === "image" ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "rounded-lg",
                          src: _ctx.$page.props.ziggy.url + "/storage/" + __props.campanha.file_path,
                          alt: ""
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        __props.campanha.type === "video" ? (openBlock(), createBlock("video", {
                          key: 1,
                          controls: ""
                        }, [
                          createVNode("source", {
                            src: _ctx.$page.props.ziggy.url + "/storage/" + __props.campanha.file_path,
                            type: __props.campanha.mimetype
                          }, null, 8, ["src", "type"]),
                          createTextVNode(" Seu navegador não suporta o elemento de áudio. ")
                        ])) : createCommentVNode("", true),
                        unref(form).content ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "mt-3"
                        }, toDisplayString(unref(form).content), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode(_sfc_main$9, {
                  show: removeMidia.value,
                  onClose: closeModalMidia,
                  "max-width": "sm"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "w-20 text-orange-400"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                          })
                        ])),
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja remover a mídia?")
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-center" }, [
                        createVNode(_sfc_main$7, {
                          onClick: closeModalMidia,
                          cor: "red"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              class: "w-5 mr-2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M6 18 18 6M6 6l12 12"
                              })
                            ])),
                            createTextVNode(" Não ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$a, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: remover
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campanha/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
