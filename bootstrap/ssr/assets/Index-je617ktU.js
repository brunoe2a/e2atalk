import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, unref, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./DropdownLink-CZP1VQeH.js";
import "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$8 } from "./PaginationLink-C830f6DP.js";
import { B as ButtonTable } from "./ButtonTable-CGuqWcoP.js";
import { _ as _sfc_main$7 } from "./LinkTable-B94vKGjb.js";
import "./SenhaUserForm-Bcf6OfOv.js";
import _sfc_main$6 from "./CreateListaForm-DW_jllH5.js";
import { _ as _sfc_main$9 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$a } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$b } from "./ButtonSim-CjNUnTWQ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputError-BIoZcjri.js";
import "./ButtonSave-DVEwRSxU.js";
import "./InputSoftUi-DRY4QHe-.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    listas: {},
    ordem: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    console.log(props.listas);
    const quantidade = ref(props.listas.per_page);
    const pesquisar = ref(props.pesquisar);
    const deleteLista = ref(false);
    const idLista = ref(null);
    const form = useForm({});
    const confirmeDeleteLista = (id) => {
      deleteLista.value = true;
      idLista.value = id;
    };
    const deletar = () => {
      form.delete(route("lista.destroy", idLista.value), {
        preserveScroll: true,
        onSuccess: () => closeModalDelete(),
        onError: () => closeModalDelete(),
        onFinish: () => closeModalDelete()
      });
    };
    const handlePesquisar = () => {
      form.get(route("lista.filtrar", [props.ordem, quantidade.value, pesquisar.value]));
    };
    const closeModalDelete = () => {
      deleteLista.value = false;
      idLista.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Listas de Contato" }, _attrs), {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { href: "" }, {
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
                  _push3(`Listas de Contato`);
                } else {
                  return [
                    createTextVNode("Listas de Contato")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Listas de Contato</h6>`);
          } else {
            return [
              createVNode("ol", { class: "flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16" }, [
                createVNode(_sfc_main$2, { href: "" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("sidebar.link.dashboard")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$2, {
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Listas de Contato")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Listas de Contato")
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h6${_scopeId}>Relação de Listas</h6><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="inline-flex rounded-full mr-3 ml-3"${_scopeId2}><button type="button" class="inline-flex items-center h-8 px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"${_scopeId2}> Ordem <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId2}></path></svg></button></span>`);
                } else {
                  return [
                    createVNode("span", { class: "inline-flex rounded-full mr-3 ml-3" }, [
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center h-8 px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
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
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("lista.filtrar", ["id", __props.listas.per_page])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` ID `);
                      } else {
                        return [
                          createTextVNode(" ID ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("lista.filtrar", ["nome", __props.listas.per_page])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Nome `);
                      } else {
                        return [
                          createTextVNode(" Nome ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("lista.filtrar", ["updated_at", __props.listas.per_page])
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
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("lista.filtrar", ["id", __props.listas.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ID ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("lista.filtrar", ["nome", __props.listas.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Nome ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("lista.filtrar", ["updated_at", __props.listas.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Data ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-auto px-0 py-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Lista</th><th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Contatos</th><th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Cadastro</th><th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.listas.data, (lista) => {
              _push2(`<tr${_scopeId}><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex flex-col justify-center px-3 py-1"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("lista.edit", lista.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(lista.nome)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(lista.nome), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h6>`);
              if (lista.descricao) {
                _push2(`<p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(lista.descricao)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(lista.contatos_count)}</span></td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(lista.dt_criacao)}</span></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex gap-3 items-baseline"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("lista.edit", lista.id)
              }, {
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
                onClick: ($event) => confirmeDeleteLista(lista.id)
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
            if (__props.listas.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: __props.listas.prev_page_url
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
            ssrRenderList(__props.listas.links, (link) => {
              _push2(`<div${_scopeId}>`);
              if (link.url !== null && link.label.length < 5) {
                _push2(ssrRenderComponent(_sfc_main$8, {
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
            if (__props.listas.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: __props.listas.next_page_url
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
            _push2(`</div><div class="flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.listas.from)}-${ssrInterpolate(__props.listas.to)} de ${ssrInterpolate(__props.listas.total)} itens </div><div${_scopeId}> | </div><div${_scopeId}> Exibir </div><select class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"${_scopeId}><option value="15"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "15") : ssrLooseEqual(quantidade.value, "15")) ? " selected" : ""}${_scopeId}>15</option><option value="30"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "30") : ssrLooseEqual(quantidade.value, "30")) ? " selected" : ""}${_scopeId}>30</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "50") : ssrLooseEqual(quantidade.value, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "100") : ssrLooseEqual(quantidade.value, "100")) ? " selected" : ""}${_scopeId}>100</option></select><div${_scopeId}> itens </div></div></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: deleteLista.value,
              onClose: closeModalDelete,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"${_scopeId2}></path></svg><h6 class="font-bold text-lg text-center"${_scopeId2}>Deseja excluir a lista?</h6></div><div class="mt-6 flex gap-5 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    onClick: closeModalDelete,
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
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    cor: "green",
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing,
                    onClick: deletar
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja excluir a lista?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$a, {
                          onClick: closeModalDelete,
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
                        createVNode(_sfc_main$b, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: deletar
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
                  createVNode("div", { class: "flex-none w-full max-w-full px-3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent" }, [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("h6", null, "Relação de Listas"),
                          createVNode("div", { class: "flex" }, [
                            createVNode(_sfc_main$4, null, {
                              trigger: withCtx(() => [
                                createVNode("span", { class: "inline-flex rounded-full mr-3 ml-3" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex items-center h-8 px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
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
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("lista.filtrar", ["id", __props.listas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ID ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("lista.filtrar", ["nome", __props.listas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Nome ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("lista.filtrar", ["updated_at", __props.listas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$6)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-0 py-2" }, [
                        createVNode("div", { class: "p-0 overflow-x-auto" }, [
                          createVNode("table", { class: "items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Lista"),
                                createVNode("th", { class: "px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Contatos"),
                                createVNode("th", { class: "px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Cadastro"),
                                createVNode("th", { class: "px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70" })
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.listas.data, (lista) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex flex-col justify-center px-3 py-1" }, [
                                      createVNode("h6", { class: "mb-0 text-sm leading-normal" }, [
                                        createVNode(unref(Link), {
                                          href: _ctx.route("lista.edit", lista.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(lista.nome), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      lista.descricao ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "mb-0 text-xs leading-tight text-slate-400"
                                      }, toDisplayString(lista.descricao), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(lista.contatos_count), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(lista.dt_criacao), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex gap-3 items-baseline" }, [
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("lista.edit", lista.id)
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
                                              d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            })
                                          ]))
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => confirmeDeleteLista(lista.id)
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
                          __props.listas.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 0,
                            href: __props.listas.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.listas.links, (link) => {
                            return openBlock(), createBlock("div", null, [
                              link.url !== null && link.label.length < 5 ? (openBlock(), createBlock(_sfc_main$8, {
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
                          __props.listas.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 1,
                            href: __props.listas.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.listas.from) + "-" + toDisplayString(__props.listas.to) + " de " + toDisplayString(__props.listas.total) + " itens ", 1),
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
                ]),
                createVNode(_sfc_main$9, {
                  show: deleteLista.value,
                  onClose: closeModalDelete,
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja excluir a lista?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$a, {
                          onClick: closeModalDelete,
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
                        createVNode(_sfc_main$b, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: deletar
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lista/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
