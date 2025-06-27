import { ref, computed, onMounted, onBeforeUnmount, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, unref, Fragment, renderList, createCommentVNode, withKeys, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$5 } from "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./DropdownLink-CZP1VQeH.js";
import { _ as _sfc_main$9 } from "./PaginationLink-C830f6DP.js";
import { _ as _sfc_main$6 } from "./InputPesquisa-Bim_pQmj.js";
import { _ as _sfc_main$a } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$b } from "./Checkbox-g3fT0BRB.js";
import { _ as _sfc_main$c } from "./ButtonIniciar-C2oxO485.js";
import { _ as _sfc_main$d } from "./ButtonSim-CjNUnTWQ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Envios",
  __ssrInlineRender: true,
  props: {
    instancias: {},
    campanha: {},
    envios: {},
    total: {},
    ordem: String,
    status: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    const busca = ref(props.pesquisar);
    const startCampanha = ref(false);
    const reenviarCampanha = ref(false);
    const Echo = window.Echo;
    const form = useForm({
      content: props.campanha.content ?? "",
      campanha_id: props.campanha.id,
      instancias: {}
    });
    const totalProcessada = computed(() => {
      return props.total.contatos - props.total.erro_invalido;
    });
    const enviados = ref(props.total.enviada);
    const totalValidos = ref(totalProcessada);
    const percentualConcluido = computed(() => {
      return enviados.value > 0 ? Math.round(enviados.value / totalValidos.value * 100) : 0;
    });
    const confirmeStartCampanha = () => {
      startCampanha.value = true;
    };
    const confirmeReenviarCampanha = () => {
      reenviarCampanha.value = true;
    };
    const handlePesquisar = () => {
      form.get(route("campanha.envios.filtrar", [props.campanha.id, props.ordem, props.status, busca.value]));
    };
    const stop = () => {
      form.get(route("campanha.stop", props.campanha.id));
    };
    const start = () => {
      form.post(route("campanha.start"), {
        preserveScroll: true,
        onSuccess: () => closeModalStart(),
        onError: () => closeModalStart(),
        onFinish: () => closeModalStart()
      });
    };
    const reenviar = () => {
      form.get(route("campanha.reenviar", props.campanha.id), {
        preserveScroll: true,
        onSuccess: () => closeModalReenviar(),
        onError: () => closeModalReenviar(),
        onFinish: () => closeModalReenviar()
      });
    };
    const closeModalStart = () => {
      startCampanha.value = false;
      form.reset();
    };
    const closeModalReenviar = () => {
      reenviarCampanha.value = false;
    };
    const listenForMessages = () => {
      Echo.channel(`channel-campanha-send-message`).listen("CampanhaSendMessageEvent", (data) => {
        if (data.envio) {
          props.total.enviada = props.total.enviada + 1;
          props.total.fila = props.total.fila - 1;
          enviados.value = enviados.value + 1;
        } else {
          props.total.erro = props.total.erro + 1;
          props.total.erro_invalido = props.total.erro_invalido + 1;
        }
      });
    };
    const listenForValNumero = () => {
      Echo.channel(`channel-campanha-valida-numero`).listen("CampanhaValidaNumeroEvent", (data) => {
        props.total.contatos = props.total.contatos + data.contatos.total;
        props.total.invalido = props.total.invalido + data.contatos.invalidos;
        props.total.erro_invalido = props.total.erro_invalido + data.contatos.invalidos;
      });
    };
    const listenForContatoEnviado = () => {
      Echo.channel(`channel-campanha-contato-enviado`).listen("CampanhaContatoEnviadoEvent", (data) => {
        props.envios.data.push(data.contato_enviado);
      });
    };
    const listenForFila = () => {
      Echo.channel(`channel-campanha-fila`).listen("CampanhaStartFilaEvent", (data) => {
        props.total.fila = props.total.fila + data.fila;
      });
    };
    onMounted(() => {
      listenForMessages();
      listenForValNumero();
      listenForContatoEnviado();
      listenForFila();
    });
    onBeforeUnmount(() => {
      Echo.leave(`channel-campanha-send-message`);
      Echo.leave(`channel-campanha-valida-numero`);
      Echo.leave(`channel-campanha-contato-enviado`);
      Echo.leave(`channel-campanha-fila`);
    });
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap gap-4"${_scopeId}>`);
            if (__props.campanha.status !== "Iniciada" && __props.campanha.status !== "Concluida") {
              _push2(ssrRenderComponent(_sfc_main$4, {
                cor: "green",
                onClick: confirmeStartCampanha
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Iniciar`);
                  } else {
                    return [
                      createTextVNode("Iniciar")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.campanha.status === "Iniciada") {
              _push2(ssrRenderComponent(_sfc_main$4, {
                cor: "red",
                onClick: stop
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd"${_scopeId2}></path></svg> Parar `);
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
                          d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createTextVNode(" Parar ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.total.erro > 0) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                href: _ctx.route("campanha.erros.reprocessar", __props.campanha.id),
                cor: "sky"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 mr-1"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"${_scopeId2}></path></svg> Reenviar Erros `);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2.5",
                        stroke: "currentColor",
                        class: "w-5 mr-1"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        })
                      ])),
                      createTextVNode(" Reenviar Erros ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$5, {
              href: _ctx.route("campanha.index"),
              cor: "slate"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Campanhas `);
                } else {
                  return [
                    createTextVNode(" Campanhas ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.campanha.status === "Concluida") {
              _push2(ssrRenderComponent(_sfc_main$4, {
                cor: "green",
                onClick: confirmeReenviarCampanha
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Reenviar`);
                  } else {
                    return [
                      createTextVNode("Reenviar")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-wrap mt-6 -mx-3"${_scopeId}><div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none md:mb-0 md:w-1/3"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Processamento da Campanha</p><div class="flex items-center gap-3"${_scopeId}><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(percentualConcluido.value)}% </h5><div class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200"${_scopeId}>`);
            if (percentualConcluido.value === 100) {
              _push2(`<div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" style="${ssrRenderStyle({ width: `${percentualConcluido.value}%` })}" role="progressbar"${ssrRenderAttr("aria-valuenow", percentualConcluido.value)} aria-valuemin="0" aria-valuemax="100"${_scopeId}></div>`);
            } else {
              _push2(`<div class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" style="${ssrRenderStyle({ width: `${percentualConcluido.value}%` })}" role="progressbar"${ssrRenderAttr("aria-valuenow", percentualConcluido.value)} aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div>`);
            }
            _push2(`</div></div></div></div></div></div><div class="max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div${_scopeId}><p class="hidden md:block mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Efetuados com Sucesso</p><p class="md:hidden mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Sucesso</p><div class="flex items-center gap-3"${_scopeId}><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.enviada)}</h5>`);
            if (percentualConcluido.value === 100) {
              _push2(`<div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" style="${ssrRenderStyle({ width: `${percentualConcluido.value}%` })}" role="progressbar"${ssrRenderAttr("aria-valuenow", percentualConcluido.value)} aria-valuemin="0" aria-valuemax="100"${_scopeId}></div>`);
            } else {
              _push2(`<div class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200"${_scopeId}><div class="animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" style="${ssrRenderStyle({ width: `${percentualConcluido.value}%` })}" role="progressbar"${ssrRenderAttr("aria-valuenow", percentualConcluido.value)} aria-valuemin="0" aria-valuemax="100"${_scopeId}></div></div>`);
            }
            _push2(`<h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(totalProcessada.value)}</h5></div></div></div></div></div><div class="max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Inválidos</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.invalido)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div></div><div class="flex flex-wrap md:mt-6 -mx-3"${_scopeId}><div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Contatos</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.contatos)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-sky-300"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Fila</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.fila)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Enviados</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.enviada)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-green-700 to-green-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div><div class="max-w-full px-3 w-1/2 md:w-1/3 xl:w-1/4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row -mx-3"${_scopeId}><div class="flex-none w-2/3 max-w-full px-3"${_scopeId}><div${_scopeId}><p class="mb-0 font-sans font-semibold leading-normal text-sm"${_scopeId}>Erros</p><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.total.erro)}</h5></div></div><div class="px-3 text-right basis-1/3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-700 to-red-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div></div></div></div></div><div class="flex flex-wrap mt-6 -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent"${_scopeId}><div class="md:flex justify-between items-center"${_scopeId}><h6${_scopeId}>Contatos enviados</h6><div class="mt-3 flex flex-wrap md:flex-nowrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              placeholder: "Pesquisar",
              modelValue: busca.value,
              "onUpdate:modelValue": ($event) => busca.value = $event,
              onKeyup: handlePesquisar
            }, null, _parent2, _scopeId));
            if (!__props.pesquisar) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                onClick: handlePesquisar,
                cor: "blue",
                class: "mt-3 md:mr-3 md:mt-0 w-full md:w-auto"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Pesquisar `);
                  } else {
                    return [
                      createTextVNode(" Pesquisar ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.pesquisar) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "mt-3 md:mt-0 w-full md:w-64",
                cor: "slate",
                href: _ctx.route("campanha.envios", __props.campanha.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Limpar Pesquisa`);
                  } else {
                    return [
                      createTextVNode("Limpar Pesquisa")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$7, { class: "w-1/2 pr-2 md:mr-3 md:pr-0 md:w-auto" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="inline-flex rounded-full mt-3 md:mt-0 w-full"${_scopeId2}><button type="button" class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"${_scopeId2}> Ordem <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId2}></path></svg></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                      }, [
                        createTextVNode(" Ordem "),
                        (openBlock(), createBlock("svg", {
                          class: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "updated_at", __props.status, __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Data `);
                      } else {
                        return [
                          createTextVNode(" Data ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "status", __props.status, __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Status `);
                      } else {
                        return [
                          createTextVNode(" Status ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "name", __props.status, __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Contato `);
                      } else {
                        return [
                          createTextVNode(" Contato ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "updated_at", __props.status, __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Data ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "status", __props.status, __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Status ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "name", __props.status, __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Contato ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, { class: "w-1/2 pl-2 md:pl-0 md:w-auto" }, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="inline-flex rounded-full mt-3 md:mt-0 w-full"${_scopeId2}><button type="button" class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"${_scopeId2}> Status <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId2}></path></svg></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                      }, [
                        createTextVNode(" Status "),
                        (openBlock(), createBlock("svg", {
                          class: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "all", __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Todos `);
                      } else {
                        return [
                          createTextVNode(" Todos ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Fila", __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Fila `);
                      } else {
                        return [
                          createTextVNode(" Fila ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Enviada", __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Enviada `);
                      } else {
                        return [
                          createTextVNode(" Enviada ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Inválido"], __props.pesquisar)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inválido `);
                      } else {
                        return [
                          createTextVNode(" Inválido ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Erro", __props.pesquisar])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Erro `);
                      } else {
                        return [
                          createTextVNode(" Erro ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "all", __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Todos ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Fila", __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Fila ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Enviada", __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Enviada ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Inválido"], __props.pesquisar)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Inválido ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Erro", __props.pesquisar])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Erro ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-auto px-0 py-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Contato</th><th class="w-auto px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Instância</th><th class="w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Data Hora</th><th class="w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Data Hora</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.envios.data, (envio) => {
              _push2(`<tr${_scopeId}><td class="p-2 align-middle bg-transparent border-t shadow-transparent"${_scopeId}><div class="flex flex-col justify-center px-3 py-1"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("campanha.show", envio.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(envio.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(envio.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h6><p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(envio.numero)}</p></div></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(envio.nome)}</span></td><td class="p-2 align-middle bg-transparent border-t whitespace-pre-wrap shadow-transparent"${_scopeId}>`);
              if (envio.status === "Erro") {
                _push2(`<div class="flex items-center"${_scopeId}><svg class="w-5 mr-2 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"${_scopeId}></path></svg><span class="text-xs font-semibold leading-tight text-red-600"${_scopeId}>${ssrInterpolate(envio.status)}</span></div>`);
              } else if (envio.status === "Fila") {
                _push2(`<div class="flex items-center"${_scopeId}><svg class="w-5 mr-2 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"${_scopeId}></path></svg><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(envio.status)}</span></div>`);
              } else if (envio.status === "Válido") {
                _push2(`<div class="flex items-center"${_scopeId}><svg class="w-5 mr-2 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${_scopeId}><path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"${_scopeId}></path></svg><span class="text-xs font-semibold leading-tight text-sky-500"${_scopeId}>${ssrInterpolate(envio.status)}</span></div>`);
              } else if (envio.status === "Enviada") {
                _push2(`<div class="flex items-center"${_scopeId}><svg class="w-5 mr-2 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"${_scopeId}></path></svg><span class="text-xs font-semibold leading-tight text-green-500"${_scopeId}>${ssrInterpolate(envio.status)}</span></div>`);
              } else {
                _push2(`<div class="flex items-center"${_scopeId}><svg class="w-5 mr-2 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"${_scopeId}></path></svg><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(envio.status)}</span></div>`);
              }
              _push2(`</td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(envio.dt_envio)}</span></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="px-6 pt-3 pb-6 md:flex md:justify-between md:items-center"${_scopeId}><div class="hidden md:flex items-baseline"${_scopeId}>`);
            if (__props.envios.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.envios.prev_page_url
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fas fa-arrow-left"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fas fa-arrow-left" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.envios.links, (link) => {
              _push2(`<div${_scopeId}>`);
              if (link.url !== null && link.label.length < 5) {
                _push2(ssrRenderComponent(_sfc_main$9, {
                  href: link.url,
                  active: link.active
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (__props.envios.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.envios.next_page_url
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fas fa-arrow-right"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", { class: "fas fa-arrow-right" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex md:hidden items-baseline"${_scopeId}>`);
            if (__props.envios.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.envios.prev_page_url
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fas fa-arrow-left mr-2"${_scopeId2}></i> Anterior `);
                  } else {
                    return [
                      createVNode("i", { class: "fas fa-arrow-left mr-2" }),
                      createTextVNode(" Anterior ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.envios.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.envios.next_page_url
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="fas fa-arrow-right mr-2"${_scopeId2}></i> Próxima `);
                  } else {
                    return [
                      createVNode("i", { class: "fas fa-arrow-right mr-2" }),
                      createTextVNode(" Próxima ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-5 md:mt-0 flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.envios.from)}-${ssrInterpolate(__props.envios.to)} de ${ssrInterpolate(__props.envios.total)} itens </div></div></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              show: startCampanha.value,
              onClose: closeModalStart,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div${_scopeId2}><h6 class="font-bold text-lg mb-4"${_scopeId2}>Selecione as Instâncias de Campanha:</h6><!--[-->`);
                  ssrRenderList(__props.instancias, (instancia) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$b, {
                      checked: unref(form).instancias[instancia.id],
                      "onUpdate:checked": ($event) => unref(form).instancias[instancia.id] = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-extrabold text-sm ml-2"${_scopeId2}>${ssrInterpolate(instancia.nome)}</span></div>`);
                  });
                  _push3(`<!--]--></div><div class="mt-6 flex gap-5 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    onClick: closeModalStart,
                    cor: "red"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId3}></path></svg> Cancelar `);
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
                          createTextVNode(" Cancelar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    cor: "green",
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing,
                    onClick: start
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Iniciar`);
                      } else {
                        return [
                          createTextVNode("Iniciar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", null, [
                        createVNode("h6", { class: "font-bold text-lg mb-4" }, "Selecione as Instâncias de Campanha:"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.instancias, (instancia) => {
                          return openBlock(), createBlock("div", null, [
                            createVNode(_sfc_main$b, {
                              checked: unref(form).instancias[instancia.id],
                              "onUpdate:checked": ($event) => unref(form).instancias[instancia.id] = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("span", { class: "font-extrabold text-sm ml-2" }, toDisplayString(instancia.nome), 1)
                          ]);
                        }), 256))
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$4, {
                          onClick: closeModalStart,
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
                            createTextVNode(" Cancelar ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$c, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: start
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Iniciar")
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
            _push2(ssrRenderComponent(_sfc_main$a, {
              show: reenviarCampanha.value,
              onClose: closeModalReenviar,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"${_scopeId2}></path></svg><h6 class="font-bold text-lg text-center"${_scopeId2}>Deseja reenviar a campanha?</h6></div><div class="mt-6 flex gap-5 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    onClick: closeModalReenviar,
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
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    cor: "green",
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing,
                    onClick: reenviar
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja reenviar a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$4, {
                          onClick: closeModalReenviar,
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
                        createVNode(_sfc_main$d, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: reenviar
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
                createVNode("div", { class: "flex flex-wrap gap-4" }, [
                  __props.campanha.status !== "Iniciada" && __props.campanha.status !== "Concluida" ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    cor: "green",
                    onClick: confirmeStartCampanha
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Iniciar")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  __props.campanha.status === "Iniciada" ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 1,
                    cor: "red",
                    onClick: stop
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
                          d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createTextVNode(" Parar ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  __props.total.erro > 0 ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 2,
                    href: _ctx.route("campanha.erros.reprocessar", __props.campanha.id),
                    cor: "sky"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2.5",
                        stroke: "currentColor",
                        class: "w-5 mr-1"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        })
                      ])),
                      createTextVNode(" Reenviar Erros ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$5, {
                    href: _ctx.route("campanha.index"),
                    cor: "slate"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Campanhas ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  __props.campanha.status === "Concluida" ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 3,
                    cor: "green",
                    onClick: confirmeReenviarCampanha
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Reenviar")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex flex-wrap mt-6 -mx-3" }, [
                  createVNode("div", { class: "w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none md:mb-0 md:w-1/3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Processamento da Campanha"),
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(percentualConcluido.value) + "% ", 1),
                            createVNode("div", { class: "text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200" }, [
                              percentualConcluido.value === 100 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                style: { width: `${percentualConcluido.value}%` },
                                role: "progressbar",
                                "aria-valuenow": percentualConcluido.value,
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }, null, 12, ["aria-valuenow"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200"
                              }, [
                                createVNode("div", {
                                  class: "animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                  style: { width: `${percentualConcluido.value}%` },
                                  role: "progressbar",
                                  "aria-valuenow": percentualConcluido.value,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }, null, 12, ["aria-valuenow"])
                              ]))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "hidden md:block mb-0 font-sans font-semibold leading-normal text-sm" }, "Efetuados com Sucesso"),
                          createVNode("p", { class: "md:hidden mb-0 font-sans font-semibold leading-normal text-sm" }, "Sucesso"),
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.enviada), 1),
                            percentualConcluido.value === 100 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                              style: { width: `${percentualConcluido.value}%` },
                              role: "progressbar",
                              "aria-valuenow": percentualConcluido.value,
                              "aria-valuemin": "0",
                              "aria-valuemax": "100"
                            }, null, 12, ["aria-valuenow"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200"
                            }, [
                              createVNode("div", {
                                class: "animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all",
                                style: { width: `${percentualConcluido.value}%` },
                                role: "progressbar",
                                "aria-valuenow": percentualConcluido.value,
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }, null, 12, ["aria-valuenow"])
                            ])),
                            createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(totalProcessada.value), 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Inválidos"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.invalido), 1)
                            ])
                          ]),
                          createVNode("div", { class: "px-3 text-right basis-1/3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500" }, [
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
                                  d: "M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z",
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
                createVNode("div", { class: "flex flex-wrap md:mt-6 -mx-3" }, [
                  createVNode("div", { class: "max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Contatos"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.contatos), 1)
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
                  createVNode("div", { class: "max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Fila"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.fila), 1)
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
                  createVNode("div", { class: "max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Enviados"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.enviada), 1)
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
                  createVNode("div", { class: "max-w-full px-3 w-1/2 md:w-1/3 xl:w-1/4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "flex-auto p-4" }, [
                        createVNode("div", { class: "flex flex-row -mx-3" }, [
                          createVNode("div", { class: "flex-none w-2/3 max-w-full px-3" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0 font-sans font-semibold leading-normal text-sm" }, "Erros"),
                              createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(__props.total.erro), 1)
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
                  createVNode("div", { class: "flex-none w-full max-w-full px-3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent" }, [
                        createVNode("div", { class: "md:flex justify-between items-center" }, [
                          createVNode("h6", null, "Contatos enviados"),
                          createVNode("div", { class: "mt-3 flex flex-wrap md:flex-nowrap" }, [
                            createVNode(_sfc_main$6, {
                              placeholder: "Pesquisar",
                              modelValue: busca.value,
                              "onUpdate:modelValue": ($event) => busca.value = $event,
                              onKeyup: withKeys(handlePesquisar, ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            !__props.pesquisar ? (openBlock(), createBlock(_sfc_main$4, {
                              key: 0,
                              onClick: handlePesquisar,
                              cor: "blue",
                              class: "mt-3 md:mr-3 md:mt-0 w-full md:w-auto"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Pesquisar ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            __props.pesquisar ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 1,
                              class: "mt-3 md:mt-0 w-full md:w-64",
                              cor: "slate",
                              href: _ctx.route("campanha.envios", __props.campanha.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Limpar Pesquisa")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true),
                            createVNode(_sfc_main$7, { class: "w-1/2 pr-2 md:mr-3 md:pr-0 md:w-auto" }, {
                              trigger: withCtx(() => [
                                createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                  }, [
                                    createTextVNode(" Ordem "),
                                    (openBlock(), createBlock("svg", {
                                      class: "ml-2 -mr-0.5 h-4 w-4",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "fill-rule": "evenodd",
                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                        "clip-rule": "evenodd"
                                      })
                                    ]))
                                  ])
                                ])
                              ]),
                              content: withCtx(() => [
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "updated_at", __props.status, __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "status", __props.status, __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Status ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, "name", __props.status, __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Contato ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$7, { class: "w-1/2 pl-2 md:pl-0 md:w-auto" }, {
                              trigger: withCtx(() => [
                                createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                  }, [
                                    createTextVNode(" Status "),
                                    (openBlock(), createBlock("svg", {
                                      class: "ml-2 -mr-0.5 h-4 w-4",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "fill-rule": "evenodd",
                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                        "clip-rule": "evenodd"
                                      })
                                    ]))
                                  ])
                                ])
                              ]),
                              content: withCtx(() => [
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "all", __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Todos ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Fila", __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fila ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Enviada", __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enviada ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Inválido"], __props.pesquisar)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Inválido ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("campanha.envios.filtrar", [__props.campanha.id, __props.ordem, "Erro", __props.pesquisar])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Erro ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-0 py-2" }, [
                        createVNode("div", { class: "p-0 overflow-x-auto" }, [
                          createVNode("table", { class: "table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Contato"),
                                createVNode("th", { class: "w-auto px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Instância"),
                                createVNode("th", { class: "w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Data Hora"),
                                createVNode("th", { class: "w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Data Hora")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.envios.data, (envio) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t shadow-transparent" }, [
                                    createVNode("div", { class: "flex flex-col justify-center px-3 py-1" }, [
                                      createVNode("h6", { class: "mb-0 text-sm leading-normal" }, [
                                        createVNode(unref(Link), {
                                          href: _ctx.route("campanha.show", envio.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(envio.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      createVNode("p", { class: "mb-0 text-xs leading-tight text-slate-400" }, toDisplayString(envio.numero), 1)
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(envio.nome), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-pre-wrap shadow-transparent" }, [
                                    envio.status === "Erro" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex items-center"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-5 mr-2 text-red-600",
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
                                      ])),
                                      createVNode("span", { class: "text-xs font-semibold leading-tight text-red-600" }, toDisplayString(envio.status), 1)
                                    ])) : envio.status === "Fila" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-center"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-5 mr-2 text-slate-400",
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
                                      createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(envio.status), 1)
                                    ])) : envio.status === "Válido" ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex items-center"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-5 mr-2 text-sky-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor"
                                      }, [
                                        createVNode("path", { d: "M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" })
                                      ])),
                                      createVNode("span", { class: "text-xs font-semibold leading-tight text-sky-500" }, toDisplayString(envio.status), 1)
                                    ])) : envio.status === "Enviada" ? (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: "flex items-center"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-5 mr-2 text-green-500",
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
                                      createVNode("span", { class: "text-xs font-semibold leading-tight text-green-500" }, toDisplayString(envio.status), 1)
                                    ])) : (openBlock(), createBlock("div", {
                                      key: 4,
                                      class: "flex items-center"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-5 mr-2 text-slate-400",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          "fill-rule": "evenodd",
                                          d: "M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z",
                                          "clip-rule": "evenodd"
                                        })
                                      ])),
                                      createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(envio.status), 1)
                                    ]))
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(envio.dt_envio), 1)
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-6 pt-3 pb-6 md:flex md:justify-between md:items-center" }, [
                        createVNode("div", { class: "hidden md:flex items-baseline" }, [
                          __props.envios.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 0,
                            href: __props.envios.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.envios.links, (link) => {
                            return openBlock(), createBlock("div", null, [
                              link.url !== null && link.label.length < 5 ? (openBlock(), createBlock(_sfc_main$9, {
                                key: 0,
                                href: link.url,
                                active: link.active
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(link.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["href", "active"])) : createCommentVNode("", true)
                            ]);
                          }), 256)),
                          __props.envios.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 1,
                            href: __props.envios.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex md:hidden items-baseline" }, [
                          __props.envios.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 0,
                            href: __props.envios.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left mr-2" }),
                              createTextVNode(" Anterior ")
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          __props.envios.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 1,
                            href: __props.envios.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right mr-2" }),
                              createTextVNode(" Próxima ")
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mt-5 md:mt-0 flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.envios.from) + "-" + toDisplayString(__props.envios.to) + " de " + toDisplayString(__props.envios.total) + " itens ", 1)
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode(_sfc_main$a, {
                  show: startCampanha.value,
                  onClose: closeModalStart,
                  "max-width": "sm"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", null, [
                        createVNode("h6", { class: "font-bold text-lg mb-4" }, "Selecione as Instâncias de Campanha:"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.instancias, (instancia) => {
                          return openBlock(), createBlock("div", null, [
                            createVNode(_sfc_main$b, {
                              checked: unref(form).instancias[instancia.id],
                              "onUpdate:checked": ($event) => unref(form).instancias[instancia.id] = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("span", { class: "font-extrabold text-sm ml-2" }, toDisplayString(instancia.nome), 1)
                          ]);
                        }), 256))
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$4, {
                          onClick: closeModalStart,
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
                            createTextVNode(" Cancelar ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$c, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: start
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Iniciar")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode(_sfc_main$a, {
                  show: reenviarCampanha.value,
                  onClose: closeModalReenviar,
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja reenviar a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$4, {
                          onClick: closeModalReenviar,
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
                        createVNode(_sfc_main$d, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: reenviar
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campanha/Envios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
