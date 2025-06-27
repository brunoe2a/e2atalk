import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import "./ApplicationLogo-CUNc9et3.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "show",
  __ssrInlineRender: true,
  props: {
    user: {},
    integrante: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.user.name
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
              href: _ctx.route("usuario.index")
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
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: "",
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.user.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.user.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>${ssrInterpolate(__props.user.name)}</h6>`);
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
                  href: _ctx.route("usuario.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode("Usuários")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$2, {
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.user.name), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, toDisplayString(__props.user.name), 1)
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
            _push2(`<div${_scopeId}><div class="w-full px-6 mx-auto"${_scopeId}><div class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-52 rounded-2xl" style="${ssrRenderStyle({ "background-image": "url('/assets/imagens/bg-atendimento.png')", "background-position-y": "25%" })}"${_scopeId}><span class="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-700 to-cyan-300 opacity-60"${_scopeId}></span></div><div class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex-none w-auto max-w-full px-3"${_scopeId}><div class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200"${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_photo_url)} alt="profile_image" class="w-full shadow-soft-sm rounded-xl"${_scopeId}></div></div><div class="flex-none w-auto max-w-full px-3 my-auto"${_scopeId}><div class="h-full"${_scopeId}><h5 class="mb-1"${_scopeId}>${ssrInterpolate(__props.user.name)}</h5><p class="mb-0 font-semibold leading-normal text-sm"${_scopeId}>${ssrInterpolate(__props.user.integrante.canal.nome)} / ${ssrInterpolate(__props.user.integrante.funcao.nome)}</p></div></div></div></div></div><div class="w-full p-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-8/12"${_scopeId}><div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none"${_scopeId}><h6 class="mb-0"${_scopeId}>Informações do Perfil</h6></div></div></div><div class="flex-auto p-4"${_scopeId}><ul class="flex flex-col pl-0 mb-0 rounded-lg"${_scopeId}><li class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>Nome:</strong> ${ssrInterpolate(__props.user.name)}</li><li class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>CPF:</strong> ${ssrInterpolate(__props.user.cpf)}</li><li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>Telefone:</strong> ${ssrInterpolate(__props.user.telefone)}</li><li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>E-mail:</strong> ${ssrInterpolate(__props.user.email)}</li><li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>Canal:</strong> ${ssrInterpolate(__props.user.integrante.canal.nome)}</li><li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>Função:</strong> ${ssrInterpolate(__props.user.integrante.funcao.nome)}</li></ul></div></div></div><div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12"${_scopeId}><div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl"${_scopeId}><h6 class="mb-0"${_scopeId}>Canais de Atendimento</h6></div><div class="flex-auto p-4"${_scopeId}><ul class="flex flex-col pl-0 mb-0 rounded-lg"${_scopeId}><!--[-->`);
            ssrRenderList(__props.integrante, (canal) => {
              _push2(`<li class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"${_scopeId}><strong class="text-slate-700"${_scopeId}>${ssrInterpolate(canal.canal.nome)}:</strong> ${ssrInterpolate(canal.funcao.nome)}</li>`);
            });
            _push2(`<!--]--></ul></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "w-full px-6 mx-auto" }, [
                  createVNode("div", {
                    class: "relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-52 rounded-2xl",
                    style: { "background-image": "url('/assets/imagens/bg-atendimento.png')", "background-position-y": "25%" }
                  }, [
                    createVNode("span", { class: "absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-700 to-cyan-300 opacity-60" })
                  ]),
                  createVNode("div", { class: "relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200" }, [
                    createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                      createVNode("div", { class: "flex-none w-auto max-w-full px-3" }, [
                        createVNode("div", { class: "text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200" }, [
                          createVNode("img", {
                            src: __props.user.profile_photo_url,
                            alt: "profile_image",
                            class: "w-full shadow-soft-sm rounded-xl"
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "flex-none w-auto max-w-full px-3 my-auto" }, [
                        createVNode("div", { class: "h-full" }, [
                          createVNode("h5", { class: "mb-1" }, toDisplayString(__props.user.name), 1),
                          createVNode("p", { class: "mb-0 font-semibold leading-normal text-sm" }, toDisplayString(__props.user.integrante.canal.nome) + " / " + toDisplayString(__props.user.integrante.funcao.nome), 1)
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full p-6 mx-auto" }, [
                  createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                    createVNode("div", { class: "w-full max-w-full px-3 lg-max:mt-6 xl:w-8/12" }, [
                      createVNode("div", { class: "relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                        createVNode("div", { class: "p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl" }, [
                          createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                            createVNode("div", { class: "flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none" }, [
                              createVNode("h6", { class: "mb-0" }, "Informações do Perfil")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex-auto p-4" }, [
                          createVNode("ul", { class: "flex flex-col pl-0 mb-0 rounded-lg" }, [
                            createVNode("li", { class: "relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "Nome:"),
                              createTextVNode(" " + toDisplayString(__props.user.name), 1)
                            ]),
                            createVNode("li", { class: "relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "CPF:"),
                              createTextVNode(" " + toDisplayString(__props.user.cpf), 1)
                            ]),
                            createVNode("li", { class: "relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "Telefone:"),
                              createTextVNode(" " + toDisplayString(__props.user.telefone), 1)
                            ]),
                            createVNode("li", { class: "relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "E-mail:"),
                              createTextVNode(" " + toDisplayString(__props.user.email), 1)
                            ]),
                            createVNode("li", { class: "relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "Canal:"),
                              createTextVNode(" " + toDisplayString(__props.user.integrante.canal.nome), 1)
                            ]),
                            createVNode("li", { class: "relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit" }, [
                              createVNode("strong", { class: "text-slate-700" }, "Função:"),
                              createTextVNode(" " + toDisplayString(__props.user.integrante.funcao.nome), 1)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12" }, [
                      createVNode("div", { class: "relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                        createVNode("div", { class: "p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl" }, [
                          createVNode("h6", { class: "mb-0" }, "Canais de Atendimento")
                        ]),
                        createVNode("div", { class: "flex-auto p-4" }, [
                          createVNode("ul", { class: "flex flex-col pl-0 mb-0 rounded-lg" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.integrante, (canal) => {
                              return openBlock(), createBlock("li", { class: "relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit" }, [
                                createVNode("strong", { class: "text-slate-700" }, toDisplayString(canal.canal.nome) + ":", 1),
                                createTextVNode(" " + toDisplayString(canal.funcao.nome), 1)
                              ]);
                            }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
