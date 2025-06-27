import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import "./DropdownLink-CZP1VQeH.js";
import "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$5 } from "./PaginationLink-C830f6DP.js";
import { B as ButtonTable } from "./ButtonTable-CGuqWcoP.js";
import { _ as _sfc_main$4 } from "./LinkTable-B94vKGjb.js";
import "./SenhaUserForm-Bcf6OfOv.js";
import "./CreateListaForm-DW_jllH5.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Modal-CK8ZWp_l.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputError-BIoZcjri.js";
import "./ButtonPadrao-CEQRBWs5.js";
import "./ButtonSave-DVEwRSxU.js";
import "./InputSoftUi-DRY4QHe-.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    contatos: {},
    ordem: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    const quantidade = ref(props.contatos.per_page);
    const pesquisar = ref(props.pesquisar);
    const form = useForm({});
    const deletar = (id) => {
      form.delete(route("contato.destroy", id));
    };
    const handlePesquisar = () => {
      form.get(route("contato.filtrar", [props.ordem, quantidade.value, pesquisar.value]));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Contatos" }, _attrs), {
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
              href: "",
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contatos`);
                } else {
                  return [
                    createTextVNode("Contatos")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Contatos</h6>`);
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
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Contatos")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Contatos")
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent"${_scopeId}><h6${_scopeId}>Relação de Contatos</h6></div><div class="flex-auto px-0 pt-0 pb-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Nome</th><th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Numero</th><th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>E-mail</th><th class="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Cadastro</th><th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.contatos.data, (contato) => {
              _push2(`<tr${_scopeId}><td class="px-6 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>${ssrInterpolate(contato.name)}</h6></td><td class="px-2 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"${_scopeId}><p class="mb-0 text-xs font-semibold leading-normal text-slate-400"${_scopeId}>${ssrInterpolate(contato.numero)}</p></td><td class="px-2 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(contato.email)}</span></td><td class="px-2 py-1 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(contato.dt_criacao)}</span></td><td class="px-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex gap-3 items-baseline"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, { href: "route('lista.show', lista.id)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, { href: "route('lista.edit', lista.id)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(ButtonTable, {
                onClick: ($event) => deletar(contato.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="px-6 pt-3 pb-6 flex justify-between items-center"${_scopeId}><div class="flex items-baseline"${_scopeId}>`);
            if (__props.contatos.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                href: __props.contatos.prev_page_url
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
            ssrRenderList(__props.contatos.links, (link) => {
              _push2(`<div${_scopeId}>`);
              if (link.url !== null && link.label.length < 5) {
                _push2(ssrRenderComponent(_sfc_main$5, {
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
            if (__props.contatos.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                href: __props.contatos.next_page_url
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
            _push2(`</div><div class="flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.contatos.from)}-${ssrInterpolate(__props.contatos.to)} de ${ssrInterpolate(__props.contatos.total)} itens </div><div${_scopeId}> | </div><div${_scopeId}> Exibir </div><select class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"${_scopeId}><option value="15"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "15") : ssrLooseEqual(quantidade.value, "15")) ? " selected" : ""}${_scopeId}>15</option><option value="30"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "30") : ssrLooseEqual(quantidade.value, "30")) ? " selected" : ""}${_scopeId}>30</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "50") : ssrLooseEqual(quantidade.value, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "100") : ssrLooseEqual(quantidade.value, "100")) ? " selected" : ""}${_scopeId}>100</option></select><div${_scopeId}> itens </div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "flex-none w-full max-w-full px-3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent" }, [
                        createVNode("h6", null, "Relação de Contatos")
                      ]),
                      createVNode("div", { class: "flex-auto px-0 pt-0 pb-2" }, [
                        createVNode("div", { class: "p-0 overflow-x-auto" }, [
                          createVNode("table", { class: "items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Nome"),
                                createVNode("th", { class: "px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Numero"),
                                createVNode("th", { class: "px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "E-mail"),
                                createVNode("th", { class: "px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Cadastro"),
                                createVNode("th", { class: "px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap" })
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.contatos.data, (contato) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-6 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent" }, [
                                    createVNode("h6", { class: "mb-0 text-sm leading-normal" }, toDisplayString(contato.name), 1)
                                  ]),
                                  createVNode("td", { class: "px-2 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent" }, [
                                    createVNode("p", { class: "mb-0 text-xs font-semibold leading-normal text-slate-400" }, toDisplayString(contato.numero), 1)
                                  ]),
                                  createVNode("td", { class: "px-2 py-1 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(contato.email), 1)
                                  ]),
                                  createVNode("td", { class: "px-2 py-1 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(contato.dt_criacao), 1)
                                  ]),
                                  createVNode("td", { class: "px-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex gap-3 items-baseline" }, [
                                      createVNode(_sfc_main$4, { href: "route('lista.show', lista.id)" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "2",
                                            stroke: "currentColor",
                                            class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            }),
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_sfc_main$4, { href: "route('lista.edit', lista.id)" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "2",
                                            stroke: "currentColor",
                                            class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            })
                                          ]))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => deletar(contato.id)
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "2",
                                            stroke: "currentColor",
                                            class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            })
                                          ]))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-6 pt-3 pb-6 flex justify-between items-center" }, [
                        createVNode("div", { class: "flex items-baseline" }, [
                          __props.contatos.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            href: __props.contatos.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.contatos.links, (link) => {
                            return openBlock(), createBlock("div", null, [
                              link.url !== null && link.label.length < 5 ? (openBlock(), createBlock(_sfc_main$5, {
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
                          __props.contatos.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            href: __props.contatos.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.contatos.from) + "-" + toDisplayString(__props.contatos.to) + " de " + toDisplayString(__props.contatos.total) + " itens ", 1),
                          createVNode("div", null, " | "),
                          createVNode("div", null, " Exibir "),
                          withDirectives(createVNode("select", {
                            onChange: handlePesquisar,
                            "onUpdate:modelValue": ($event) => quantidade.value = $event,
                            class: "py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"
                          }, [
                            createVNode("option", { value: "15" }, "15"),
                            createVNode("option", { value: "30" }, "30"),
                            createVNode("option", { value: "50" }, "50"),
                            createVNode("option", { value: "100" }, "100")
                          ], 40, ["onUpdate:modelValue"]), [
                            [vModelSelect, quantidade.value]
                          ]),
                          createVNode("div", null, " itens ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contato/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
