import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, unref, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./DropdownLink-CZP1VQeH.js";
import { _ as _sfc_main$8 } from "./PaginationLink-C830f6DP.js";
import { B as ButtonTable } from "./ButtonTable-CGuqWcoP.js";
import { _ as _sfc_main$7 } from "./LinkTable-B94vKGjb.js";
import _sfc_main$6 from "./CreateCampanhaForm-DtOW47nF.js";
import { _ as _sfc_main$b } from "./InputSoftUi-DRY4QHe-.js";
import { _ as _sfc_main$9 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$d } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$a } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$c } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$e } from "./ButtonSave-DVEwRSxU.js";
import { _ as _sfc_main$f } from "./ButtonSim-CjNUnTWQ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SelectListaFilter-BsRynO4E.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    campanhas: {},
    listas: {},
    ordem: String,
    status: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    const quantidade = ref(props.campanhas.per_page);
    const pesquisar = ref(props.pesquisar);
    const editCampanha = ref(false);
    const deleteCampanha = ref(false);
    const duplicarCampanha = ref(false);
    const nomeCampanha = ref(null);
    const idCampanha = ref(null);
    const form = useForm({
      id: 0,
      nome: "",
      descricao: "",
      t_inicial: 0,
      t_final: 0,
      tempo_pausa: 0,
      quat_pausa: 0
    });
    const editarCampanha = (campanha) => {
      editCampanha.value = true;
      nomeCampanha.value = campanha.nome;
      form.id = campanha.id;
      form.nome = campanha.nome;
      form.descricao = campanha.descricao;
      form.t_inicial = campanha.t_inicial;
      form.t_final = campanha.t_final;
      form.tempo_pausa = campanha.tempo_pausa;
      form.quat_pausa = campanha.quat_pausa;
      nextTick(() => form.nome.focus());
    };
    const confirmeDeleteCampanha = (id) => {
      deleteCampanha.value = true;
      idCampanha.value = id;
    };
    const confirmeDuplicarCampanha = (id) => {
      duplicarCampanha.value = true;
      idCampanha.value = id;
    };
    const deletar = () => {
      form.delete(route("campanha.destroy", idCampanha.value), {
        preserveScroll: true,
        onSuccess: () => closeModalDelete(),
        onError: () => closeModalDelete(),
        onFinish: () => closeModalDelete()
      });
    };
    const duplicar = () => {
      form.get(route("campanha.duplicar", idCampanha.value), {
        preserveScroll: true,
        onSuccess: () => closeModalDuplicar(),
        onError: () => closeModalDuplicar(),
        onFinish: () => closeModalDuplicar()
      });
    };
    const handlePesquisar = () => {
      form.get(route("campanha.filtrar", [props.ordem, quantidade.value, props.status, pesquisar.value]));
    };
    const salvar = () => {
      form.post(route("campanha.alterar"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => form.nome.focus()),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      editCampanha.value = false;
      nomeCampanha.value = null;
      form.reset();
    };
    const closeModalDelete = () => {
      deleteCampanha.value = false;
      idCampanha.value = null;
    };
    const closeModalDuplicar = () => {
      duplicarCampanha.value = false;
      idCampanha.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Campanhas" }, _attrs), {
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
                  _push3(`Campanhas`);
                } else {
                  return [
                    createTextVNode("Campanhas")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Campanhas</h6>`);
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
                    createTextVNode("Campanhas")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Campanhas")
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h6${_scopeId}>Relação de campanhas</h6><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, {
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
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "todas", pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Todas `);
                      } else {
                        return [
                          createTextVNode(" Todas ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Aguardando", pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Aguardando `);
                      } else {
                        return [
                          createTextVNode(" Aguardando ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Iniciada", pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Iniciada `);
                      } else {
                        return [
                          createTextVNode(" Iniciada ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Pausada", pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Pausada `);
                      } else {
                        return [
                          createTextVNode(" Pausada ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Concluida", pesquisar.value])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Concluida `);
                      } else {
                        return [
                          createTextVNode(" Concluida ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "todas", pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Todas ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Aguardando", pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Aguardando ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Iniciada", pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Iniciada ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Pausada", pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Pausada ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Concluida", pesquisar.value])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Concluida ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    href: _ctx.route("campanha.filtrar", ["id", __props.campanhas.per_page])
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
                    href: _ctx.route("campanha.filtrar", ["nome", __props.campanhas.per_page])
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
                    href: _ctx.route("campanha.filtrar", ["updated_at", __props.campanhas.per_page])
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
                      href: _ctx.route("campanha.filtrar", ["id", __props.campanhas.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ID ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", ["nome", __props.campanhas.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Nome ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("campanha.filtrar", ["updated_at", __props.campanhas.per_page])
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
            _push2(ssrRenderComponent(_sfc_main$6, { listas: __props.listas }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-auto px-0 py-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Campanha</th><th class="w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Status</th><th class="w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell"${_scopeId}>Cadastro</th><th class="w-48 pl-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.campanhas.data, (campanha) => {
              _push2(`<tr${_scopeId}><td class="p-2 align-middle bg-transparent border-t shadow-transparent"${_scopeId}><div class="flex flex-col justify-center px-3 py-1"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("campanha.envios", campanha.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(campanha.nome)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(campanha.nome), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h6>`);
              if (campanha.descricao) {
                _push2(`<p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(campanha.descricao)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(campanha.status)}</span></td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(campanha.dt_criacao)}</span></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex gap-3 items-baseline"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("campanha.envios", campanha.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"${_scopeId2}></path></svg>`);
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
                          d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("campanha.show", campanha.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"${_scopeId2}></path></svg>`);
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
                          d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
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
              _push2(ssrRenderComponent(ButtonTable, {
                onClick: ($event) => editarCampanha(campanha)
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
                onClick: ($event) => confirmeDuplicarCampanha(campanha.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(ButtonTable, {
                onClick: ($event) => confirmeDeleteCampanha(campanha.id)
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
            if (__props.campanhas.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: __props.campanhas.prev_page_url
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
            ssrRenderList(__props.campanhas.links, (link) => {
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
            if (__props.campanhas.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$8, {
                href: __props.campanhas.next_page_url
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
            _push2(`</div><div class="flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.campanhas.from)}-${ssrInterpolate(__props.campanhas.to)} de ${ssrInterpolate(__props.campanhas.total)} itens </div><div${_scopeId}> | </div><div${_scopeId}> Exibir </div><select class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"${_scopeId}><option value="15"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "15") : ssrLooseEqual(quantidade.value, "15")) ? " selected" : ""}${_scopeId}>15</option><option value="30"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "30") : ssrLooseEqual(quantidade.value, "30")) ? " selected" : ""}${_scopeId}>30</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "50") : ssrLooseEqual(quantidade.value, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "100") : ssrLooseEqual(quantidade.value, "100")) ? " selected" : ""}${_scopeId}>100</option></select><div${_scopeId}> itens </div></div></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: editCampanha.value,
              onClose: closeModal,
              "max-width": "xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><h6 class="font-bold"${_scopeId2}>Campanha: ${ssrInterpolate(nomeCampanha.value)}</h6><div class="my-4"${_scopeId2}></div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "nome",
                    class: "text-xs",
                    value: "Nome:"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "nome",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).nome,
                    "onUpdate:modelValue": ($event) => unref(form).nome = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "nome"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.nome
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "descricao",
                    class: "text-xs",
                    value: "Descrição:"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "descricao",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).descricao,
                    "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
                    required: "",
                    autocomplete: "descricao"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.descricao
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="text-sm font-bold uppercase mb-2 mt-3"${_scopeId2}> Intervalo de Tempo entre envios: </div><div class="grid grid-cols-4 gap-4"${_scopeId2}><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "t_inicial",
                    class: "text-xs",
                    value: "Inicio: (seg.)"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "t_inicial",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).t_inicial,
                    "onUpdate:modelValue": ($event) => unref(form).t_inicial = $event,
                    required: "",
                    autocomplete: "t_inicial"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.t_inicial
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "t_final",
                    class: "text-xs",
                    value: "Fim: (seg.)"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "t_final",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).t_final,
                    "onUpdate:modelValue": ($event) => unref(form).t_final = $event,
                    required: "",
                    autocomplete: "t_final"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.t_final
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "tempo_pausa",
                    class: "text-xs",
                    value: "Tempo Pausa: (min.)"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "tempo_pausa",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).tempo_pausa,
                    "onUpdate:modelValue": ($event) => unref(form).tempo_pausa = $event,
                    required: "",
                    autocomplete: "tempo_pausa"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.tempo_pausa
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    for: "quat_pausa",
                    class: "text-xs",
                    value: "Quant. Pausa:"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    id: "quat_pausa",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).quat_pausa,
                    "onUpdate:modelValue": ($event) => unref(form).quat_pausa = $event,
                    required: "",
                    autocomplete: "quat_pausa"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    class: "mt-2",
                    message: unref(form).errors.quat_pausa
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    onClick: closeModal,
                    cor: "red"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId3}></path></svg> Cancel `);
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
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$e, {
                    cor: "green",
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: salvar
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Salvar`);
                      } else {
                        return [
                          createTextVNode("Salvar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h6", { class: "font-bold" }, "Campanha: " + toDisplayString(nomeCampanha.value), 1),
                      createVNode("div", { class: "my-4" }),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$a, {
                          for: "nome",
                          class: "text-xs",
                          value: "Nome:"
                        }),
                        createVNode(_sfc_main$b, {
                          id: "nome",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).nome,
                          "onUpdate:modelValue": ($event) => unref(form).nome = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "nome"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          class: "mt-2",
                          message: unref(form).errors.nome
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$a, {
                          for: "descricao",
                          class: "text-xs",
                          value: "Descrição:"
                        }),
                        createVNode(_sfc_main$b, {
                          id: "descricao",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).descricao,
                          "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
                          required: "",
                          autocomplete: "descricao"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          class: "mt-2",
                          message: unref(form).errors.descricao
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "text-sm font-bold uppercase mb-2 mt-3" }, " Intervalo de Tempo entre envios: "),
                      createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "t_inicial",
                            class: "text-xs",
                            value: "Inicio: (seg.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "t_inicial",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).t_inicial,
                            "onUpdate:modelValue": ($event) => unref(form).t_inicial = $event,
                            required: "",
                            autocomplete: "t_inicial"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.t_inicial
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "t_final",
                            class: "text-xs",
                            value: "Fim: (seg.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "t_final",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).t_final,
                            "onUpdate:modelValue": ($event) => unref(form).t_final = $event,
                            required: "",
                            autocomplete: "t_final"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.t_final
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "tempo_pausa",
                            class: "text-xs",
                            value: "Tempo Pausa: (min.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "tempo_pausa",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).tempo_pausa,
                            "onUpdate:modelValue": ($event) => unref(form).tempo_pausa = $event,
                            required: "",
                            autocomplete: "tempo_pausa"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.tempo_pausa
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "quat_pausa",
                            class: "text-xs",
                            value: "Quant. Pausa:"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "quat_pausa",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).quat_pausa,
                            "onUpdate:modelValue": ($event) => unref(form).quat_pausa = $event,
                            required: "",
                            autocomplete: "quat_pausa"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.quat_pausa
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$d, {
                          onClick: closeModal,
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
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$e, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: salvar
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Salvar")
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
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: deleteCampanha.value,
              onClose: closeModalDelete,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"${_scopeId2}></path></svg><h6 class="font-bold text-lg text-center"${_scopeId2}>Deseja excluir a campanha?</h6></div><div class="mt-6 flex gap-5 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$d, {
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
                  _push3(ssrRenderComponent(_sfc_main$f, {
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja excluir a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$d, {
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
                        createVNode(_sfc_main$f, {
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
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: duplicarCampanha.value,
              onClose: closeModalDuplicar,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"${_scopeId2}></path></svg><h6 class="font-bold text-lg text-center"${_scopeId2}>Deseja duplicar a campanha?</h6></div><div class="mt-6 flex gap-5 justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    onClick: closeModalDuplicar,
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
                  _push3(ssrRenderComponent(_sfc_main$f, {
                    cor: "green",
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing,
                    onClick: duplicar
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja duplicar a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$d, {
                          onClick: closeModalDuplicar,
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
                        createVNode(_sfc_main$f, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: duplicar
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
                          createVNode("h6", null, "Relação de campanhas"),
                          createVNode("div", { class: "flex" }, [
                            createVNode(_sfc_main$4, null, {
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
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "todas", pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Todas ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Aguardando", pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Aguardando ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Iniciada", pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Iniciada ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Pausada", pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pausada ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", [__props.ordem, __props.campanhas.per_page, "Concluida", pesquisar.value])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Concluida ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
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
                                  href: _ctx.route("campanha.filtrar", ["id", __props.campanhas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ID ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", ["nome", __props.campanhas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Nome ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("campanha.filtrar", ["updated_at", __props.campanhas.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$6, { listas: __props.listas }, null, 8, ["listas"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-0 py-2" }, [
                        createVNode("div", { class: "p-0 overflow-x-auto" }, [
                          createVNode("table", { class: "table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Campanha"),
                                createVNode("th", { class: "w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Status"),
                                createVNode("th", { class: "w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell" }, "Cadastro"),
                                createVNode("th", { class: "w-48 pl-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70" })
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.campanhas.data, (campanha) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t shadow-transparent" }, [
                                    createVNode("div", { class: "flex flex-col justify-center px-3 py-1" }, [
                                      createVNode("h6", { class: "mb-0 text-sm leading-normal" }, [
                                        createVNode(unref(Link), {
                                          href: _ctx.route("campanha.envios", campanha.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(campanha.nome), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      campanha.descricao ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "mb-0 text-xs leading-tight text-slate-400"
                                      }, toDisplayString(campanha.descricao), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(campanha.status), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(campanha.dt_criacao), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex gap-3 items-baseline" }, [
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("campanha.envios", campanha.id)
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
                                              d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                            })
                                          ]))
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("campanha.show", campanha.id)
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
                                              d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                                            }),
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            })
                                          ]))
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => editarCampanha(campanha)
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
                                      }, 1032, ["onClick"]),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => confirmeDuplicarCampanha(campanha.id)
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                                            })
                                          ]))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => confirmeDeleteCampanha(campanha.id)
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
                          __props.campanhas.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 0,
                            href: __props.campanhas.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.campanhas.links, (link) => {
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
                          __props.campanhas.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$8, {
                            key: 1,
                            href: __props.campanhas.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.campanhas.from) + "-" + toDisplayString(__props.campanhas.to) + " de " + toDisplayString(__props.campanhas.total) + " itens ", 1),
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
                  show: editCampanha.value,
                  onClose: closeModal,
                  "max-width": "xl"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h6", { class: "font-bold" }, "Campanha: " + toDisplayString(nomeCampanha.value), 1),
                      createVNode("div", { class: "my-4" }),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$a, {
                          for: "nome",
                          class: "text-xs",
                          value: "Nome:"
                        }),
                        createVNode(_sfc_main$b, {
                          id: "nome",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).nome,
                          "onUpdate:modelValue": ($event) => unref(form).nome = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "nome"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          class: "mt-2",
                          message: unref(form).errors.nome
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$a, {
                          for: "descricao",
                          class: "text-xs",
                          value: "Descrição:"
                        }),
                        createVNode(_sfc_main$b, {
                          id: "descricao",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).descricao,
                          "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
                          required: "",
                          autocomplete: "descricao"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$c, {
                          class: "mt-2",
                          message: unref(form).errors.descricao
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "text-sm font-bold uppercase mb-2 mt-3" }, " Intervalo de Tempo entre envios: "),
                      createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "t_inicial",
                            class: "text-xs",
                            value: "Inicio: (seg.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "t_inicial",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).t_inicial,
                            "onUpdate:modelValue": ($event) => unref(form).t_inicial = $event,
                            required: "",
                            autocomplete: "t_inicial"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.t_inicial
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "t_final",
                            class: "text-xs",
                            value: "Fim: (seg.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "t_final",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).t_final,
                            "onUpdate:modelValue": ($event) => unref(form).t_final = $event,
                            required: "",
                            autocomplete: "t_final"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.t_final
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "tempo_pausa",
                            class: "text-xs",
                            value: "Tempo Pausa: (min.)"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "tempo_pausa",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).tempo_pausa,
                            "onUpdate:modelValue": ($event) => unref(form).tempo_pausa = $event,
                            required: "",
                            autocomplete: "tempo_pausa"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.tempo_pausa
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$a, {
                            for: "quat_pausa",
                            class: "text-xs",
                            value: "Quant. Pausa:"
                          }),
                          createVNode(_sfc_main$b, {
                            id: "quat_pausa",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).quat_pausa,
                            "onUpdate:modelValue": ($event) => unref(form).quat_pausa = $event,
                            required: "",
                            autocomplete: "quat_pausa"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$c, {
                            class: "mt-2",
                            message: unref(form).errors.quat_pausa
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$d, {
                          onClick: closeModal,
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
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$e, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: salvar
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Salvar")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode(_sfc_main$9, {
                  show: deleteCampanha.value,
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja excluir a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$d, {
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
                        createVNode(_sfc_main$f, {
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
                }, 8, ["show"]),
                createVNode(_sfc_main$9, {
                  show: duplicarCampanha.value,
                  onClose: closeModalDuplicar,
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
                        createVNode("h6", { class: "font-bold text-lg text-center" }, "Deseja duplicar a campanha?")
                      ]),
                      createVNode("div", { class: "mt-6 flex gap-5 justify-center" }, [
                        createVNode(_sfc_main$d, {
                          onClick: closeModalDuplicar,
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
                        createVNode(_sfc_main$f, {
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: duplicar
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campanha/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
