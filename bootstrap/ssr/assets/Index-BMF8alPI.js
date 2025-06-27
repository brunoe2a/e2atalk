import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./DropdownLink-CZP1VQeH.js";
import { _ as _sfc_main$6 } from "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$9 } from "./PaginationLink-C830f6DP.js";
import { B as ButtonTable } from "./ButtonTable-CGuqWcoP.js";
import { _ as _sfc_main$7 } from "./LinkTable-B94vKGjb.js";
import _sfc_main$8 from "./SenhaUserForm-Bcf6OfOv.js";
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
    usuarios: {},
    ordem: String,
    pesquisar: String
  },
  setup(__props) {
    const props = __props;
    const quantidade = ref(props.usuarios.per_page);
    const pesquisar = ref(props.pesquisar);
    const form = useForm({});
    const deletar = (id) => {
      form.delete(route("usuario.destroy", id));
    };
    const handlePesquisar = () => {
      form.get(route("usuario.filtrar", [props.ordem, quantidade.value, pesquisar.value]));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Usuários" }, _attrs), {
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
                  _push3(`Usuários`);
                } else {
                  return [
                    createTextVNode("Usuários")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Usuários</h6>`);
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
                    createTextVNode("Usuários")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Usuários")
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-full max-w-full px-3"${_scopeId}><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h6${_scopeId}>Relação de Usuários</h6><div class="flex"${_scopeId}>`);
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
                    href: _ctx.route("usuario.filtrar", ["id", __props.usuarios.per_page])
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
                    href: _ctx.route("usuario.filtrar", ["name", __props.usuarios.per_page])
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
                    href: _ctx.route("usuario.filtrar", ["updated_at", __props.usuarios.per_page])
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
                      href: _ctx.route("usuario.filtrar", ["id", __props.usuarios.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ID ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("usuario.filtrar", ["name", __props.usuarios.per_page])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Nome ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$5, {
                      href: _ctx.route("usuario.filtrar", ["updated_at", __props.usuarios.per_page])
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
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("usuario.create"),
              cor: "green"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 mr-2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"${_scopeId2}></path></svg> Cadastrar `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      class: "h-4 mr-2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                      })
                    ])),
                    createTextVNode(" Cadastrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex-auto px-0 py-2"${_scopeId}><div class="p-0 overflow-x-auto"${_scopeId}><table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Usuário</th><th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Canal</th><th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Status</th><th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Cadastro</th><th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.usuarios.data, (usuario) => {
              _push2(`<tr${_scopeId}><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex px-2 py-1"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", usuario.profile_photo_url)} class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1"${_scopeId}></div><div class="flex flex-col justify-center"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>${ssrInterpolate(usuario.name)}</h6><p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(usuario.email)}</p></div></div></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><p class="mb-0 text-xs font-semibold leading-tight"${_scopeId}>${ssrInterpolate(usuario.integrante ? usuario.integrante.canal.nome : "")}</p><p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(usuario.integrante ? usuario.integrante.funcao.nome : "")}</p></td><td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}>`);
              if (usuario.logado) {
                _push2(`<span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}>Online</span>`);
              } else {
                _push2(`<span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}>Offline</span>`);
              }
              _push2(`</td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(usuario.dt_criacao)}</span></td><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex gap-3 items-baseline"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("usuario.show", usuario.id)
              }, {
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
              _push2(ssrRenderComponent(_sfc_main$7, {
                href: _ctx.route("usuario.edit", usuario.id)
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
              _push2(ssrRenderComponent(_sfc_main$8, { user: usuario }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(ButtonTable, {
                onClick: ($event) => deletar(usuario.id)
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
            if (__props.usuarios.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.usuarios.prev_page_url
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
            ssrRenderList(__props.usuarios.links, (link) => {
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
            if (__props.usuarios.next_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$9, {
                href: __props.usuarios.next_page_url
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
            _push2(`</div><div class="flex items-center text-xs gap-3"${_scopeId}><div${_scopeId}> Exibindo ${ssrInterpolate(__props.usuarios.from)}-${ssrInterpolate(__props.usuarios.to)} de ${ssrInterpolate(__props.usuarios.total)} itens </div><div${_scopeId}> | </div><div${_scopeId}> Exibir </div><select class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300"${_scopeId}><option value="15"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "15") : ssrLooseEqual(quantidade.value, "15")) ? " selected" : ""}${_scopeId}>15</option><option value="30"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "30") : ssrLooseEqual(quantidade.value, "30")) ? " selected" : ""}${_scopeId}>30</option><option value="50"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "50") : ssrLooseEqual(quantidade.value, "50")) ? " selected" : ""}${_scopeId}>50</option><option value="100"${ssrIncludeBooleanAttr(Array.isArray(quantidade.value) ? ssrLooseContain(quantidade.value, "100") : ssrLooseEqual(quantidade.value, "100")) ? " selected" : ""}${_scopeId}>100</option></select><div${_scopeId}> itens </div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "flex-none w-full max-w-full px-3" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent" }, [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("h6", null, "Relação de Usuários"),
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
                                  href: _ctx.route("usuario.filtrar", ["id", __props.usuarios.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ID ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("usuario.filtrar", ["name", __props.usuarios.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Nome ")
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(_sfc_main$5, {
                                  href: _ctx.route("usuario.filtrar", ["updated_at", __props.usuarios.per_page])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$6, {
                              href: _ctx.route("usuario.create"),
                              cor: "green"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  class: "h-4 mr-2"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                                  })
                                ])),
                                createTextVNode(" Cadastrar ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-0 py-2" }, [
                        createVNode("div", { class: "p-0 overflow-x-auto" }, [
                          createVNode("table", { class: "items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                            createVNode("thead", { class: "align-bottom" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Usuário"),
                                createVNode("th", { class: "px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Canal"),
                                createVNode("th", { class: "px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Status"),
                                createVNode("th", { class: "px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Cadastro"),
                                createVNode("th", { class: "px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70" })
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.usuarios.data, (usuario) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex px-2 py-1" }, [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          src: usuario.profile_photo_url,
                                          class: "inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl",
                                          alt: "user1"
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "flex flex-col justify-center" }, [
                                        createVNode("h6", { class: "mb-0 text-sm leading-normal" }, toDisplayString(usuario.name), 1),
                                        createVNode("p", { class: "mb-0 text-xs leading-tight text-slate-400" }, toDisplayString(usuario.email), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("p", { class: "mb-0 text-xs font-semibold leading-tight" }, toDisplayString(usuario.integrante ? usuario.integrante.canal.nome : ""), 1),
                                    createVNode("p", { class: "mb-0 text-xs leading-tight text-slate-400" }, toDisplayString(usuario.integrante ? usuario.integrante.funcao.nome : ""), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 text-sm leading-normal text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    usuario.logado ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                                    }, "Online")) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                                    }, "Offline"))
                                  ]),
                                  createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(usuario.dt_criacao), 1)
                                  ]),
                                  createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                    createVNode("div", { class: "flex gap-3 items-baseline" }, [
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("usuario.show", usuario.id)
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
                                              d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
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
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("usuario.edit", usuario.id)
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
                                      createVNode(_sfc_main$8, { user: usuario }, null, 8, ["user"]),
                                      createVNode(ButtonTable, {
                                        onClick: ($event) => deletar(usuario.id)
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
                          __props.usuarios.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 0,
                            href: __props.usuarios.prev_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-left" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.usuarios.links, (link) => {
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
                          __props.usuarios.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$9, {
                            key: 1,
                            href: __props.usuarios.next_page_url
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "fas fa-arrow-right" })
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center text-xs gap-3" }, [
                          createVNode("div", null, " Exibindo " + toDisplayString(__props.usuarios.from) + "-" + toDisplayString(__props.usuarios.to) + " de " + toDisplayString(__props.usuarios.total) + " itens ", 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
