import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, withKeys, createCommentVNode, Fragment, renderList, withDirectives, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./DropdownLink-CZP1VQeH.js";
import { _ as _sfc_main$9 } from "./PaginationLink-C830f6DP.js";
import "./ButtonTable-CGuqWcoP.js";
import "./LinkTable-B94vKGjb.js";
import "./CreateCampanhaForm-DtOW47nF.js";
import "./InputSoftUi-DRY4QHe-.js";
import "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$5 } from "./ButtonPadrao-CEQRBWs5.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputError-BIoZcjri.js";
import "./ButtonSave-DVEwRSxU.js";
import "./ButtonSim-CjNUnTWQ.js";
import { _ as _sfc_main$4 } from "./InputPesquisa-Bim_pQmj.js";
import { _ as _sfc_main$6 } from "./ButtonLink-Di3r0mgJ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SelectListaFilter-BsRynO4E.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    erros: {},
    ordem: String,
    fluxo: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    console.log(props.ordem);
    const busca = ref(props.pesquisar);
    const quantidade = ref(props.erros.per_page);
    const pesquisar = ref(props.pesquisar);
    const form = useForm({});
    const handlePesquisar = () => {
      form.get(route("erros.filtrar", [props.ordem, props.fluxo, quantidade.value, busca.value]));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Erros" }, _attrs), {
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
                  _push3(`Erros`);
                } else {
                  return [
                    createTextVNode("Erros")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Erros</h6>`);
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
                    createTextVNode("Erros")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Erros")
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h6${_scopeId}>Relação de Erros</h6><div class="flex flex-wrap md:flex-nowrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              placeholder: "Pesquisar",
              modelValue: busca.value,
              "onUpdate:modelValue": ($event) => busca.value = $event,
              onKeyup: handlePesquisar
            }, null, _parent2, _scopeId));
            if (!pesquisar.value) {
              _push2(ssrRenderComponent(_sfc_main$5, {
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
            if (pesquisar.value) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "mt-3 md:mr-3 md:mt-0 w-full md:w-64",
                cor: "slate",
                href: _ctx.route("erros.index")
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
            _push2(ssrRenderComponent(_sfc_main$7, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="inline-flex rounded-full mt-3 md:mt-0 w-full"${_scopeId2}><button type="button" class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"${_scopeId2}> Fluxo <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId2}></path></svg></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                      }, [
                        createTextVNode(" Fluxo "),
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
                    href: _ctx.route("erros.filtrar", [__props.ordem, "todas", __props.erros.per_page, pesquisar.value])
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
                    href: _ctx.route("erros.filtrar", [__props.ordem, "Entrada", __props.erros.per_page, pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Entrada `);
                      } else {
                        return [
                          createTextVNode(" Entrada ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("erros.filtrar", [__props.ordem, "Saida", __props.erros.per_page, pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Saida `);
                      } else {
                        return [
                          createTextVNode(" Saida ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", [__props.ordem, "todas", __props.erros.per_page, pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Todos ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", [__props.ordem, "Entrada", __props.erros.per_page, pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Entrada ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", [__props.ordem, "Saida", __props.erros.per_page, pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saida ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, {
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
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("erros.filtrar", ["id", __props.fluxo, __props.erros.per_page])
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
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("erros.filtrar", ["campanha_id", __props.fluxo, __props.erros.per_page])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Campanha `);
                      } else {
                        return [
                          createTextVNode(" Campanha ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("erros.filtrar", ["contato_id", __props.fluxo, __props.erros.per_page])
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
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    href: _ctx.route("erros.filtrar", ["created_at", __props.fluxo, __props.erros.per_page])
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
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", ["id", __props.fluxo, __props.erros.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ID ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", ["campanha_id", __props.fluxo, __props.erros.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Campanha ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", ["contato_id", __props.fluxo, __props.erros.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Contato ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$8, {
                      href: _ctx.route("erros.filtrar", ["created_at", __props.fluxo, __props.erros.per_page])
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
            _push2(`</div></div></div><div class="flex-auto px-0 py-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Contato</th><th class="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Erro</th><th class="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Data</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.erros.data, (erro) => {
              _push2(`<tr${_scopeId}><td class="px-3 py-2 align-middle bg-transparent border-t shadow-transparent"${_scopeId}><div class="flex flex-col justify-center px-3 py-1"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>${ssrInterpolate(erro.contato.name)}</h6>`);
              if (erro.campanha_id) {
                _push2(`<p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(erro.campanha.nome)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(erro.erro)}</span></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(erro.dt_criacao)}</span></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="px-6 pt-3 pb-6 flex justify-between items-center"${_scopeId}><div class="flex items-baseline"${_scopeId}>`);
            if (__props.erros.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.erros.prev_page_url
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
            ssrRenderList(__props.erros.links, (link) => {
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
            if (__props.erros.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.erros.next_page_url
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
            _push2(`</div><div class="flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.erros.from)}-${ssrInterpolate(__props.erros.to)} de ${ssrInterpolate(__props.erros.total)} itens </div><div${_scopeId}> | </div><div${_scopeId}> Exibir </div><select class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"${_scopeId}><option value="15"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "15") : ssrLooseEqual(quantidade.value, "15")) ? " selected" : ""}${_scopeId}>15</option><option value="30"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "30") : ssrLooseEqual(quantidade.value, "30")) ? " selected" : ""}${_scopeId}>30</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "50") : ssrLooseEqual(quantidade.value, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "100") : ssrLooseEqual(quantidade.value, "100")) ? " selected" : ""}${_scopeId}>100</option></select><div${_scopeId}> itens </div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "flex-none w-full max-w-full px-3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent" }, [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("h6", null, "Relação de Erros"),
                          createVNode("div", { class: "flex flex-wrap md:flex-nowrap" }, [
                            createVNode(_sfc_main$4, {
                              placeholder: "Pesquisar",
                              modelValue: busca.value,
                              "onUpdate:modelValue": ($event) => busca.value = $event,
                              onKeyup: withKeys(handlePesquisar, ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            !pesquisar.value ? (openBlock(), createBlock(_sfc_main$5, {
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
                            pesquisar.value ? (openBlock(), createBlock(_sfc_main$6, {
                              key: 1,
                              class: "mt-3 md:mr-3 md:mt-0 w-full md:w-64",
                              cor: "slate",
                              href: _ctx.route("erros.index")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Limpar Pesquisa")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true),
                            createVNode(_sfc_main$7, null, {
                              trigger: withCtx(() => [
                                createVNode("div", { class: "inline-flex rounded-full mt-3 md:mt-0 w-full" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                  }, [
                                    createTextVNode(" Fluxo "),
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
                                  href: _ctx.route("erros.filtrar", [__props.ordem, "todas", __props.erros.per_page, pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Todos ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", [__props.ordem, "Entrada", __props.erros.per_page, pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Entrada ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", [__props.ordem, "Saida", __props.erros.per_page, pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Saida ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$7, null, {
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
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", ["id", __props.fluxo, __props.erros.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ID ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", ["campanha_id", __props.fluxo, __props.erros.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Campanha ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", ["contato_id", __props.fluxo, __props.erros.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Contato ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$8, {
                                  href: _ctx.route("erros.filtrar", ["created_at", __props.fluxo, __props.erros.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data ")
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
                                createVNode("th", { class: "px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Erro"),
                                createVNode("th", { class: "px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Data")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.erros.data, (erro) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-3 py-2 align-middle bg-transparent border-t shadow-transparent" }, [
                                    createVNode("div", { class: "flex flex-col justify-center px-3 py-1" }, [
                                      createVNode("h6", { class: "mb-0 text-sm leading-normal" }, toDisplayString(erro.contato.name), 1),
                                      erro.campanha_id ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "mb-0 text-xs leading-tight text-slate-400"
                                      }, toDisplayString(erro.campanha.nome), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(erro.erro), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(erro.dt_criacao), 1)
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-6 pt-3 pb-6 flex justify-between items-center" }, [
                        createVNode("div", { class: "flex items-baseline" }, [
                          __props.erros.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 0,
                            href: __props.erros.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.erros.links, (link) => {
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
                          __props.erros.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 1,
                            href: __props.erros.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.erros.from) + "-" + toDisplayString(__props.erros.to) + " de " + toDisplayString(__props.erros.total) + " itens ", 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Erros/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
