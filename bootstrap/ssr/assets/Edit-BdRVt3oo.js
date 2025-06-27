import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$7 } from "./ButtonSave-DVEwRSxU.js";
import { _ as _sfc_main$a } from "./ButtonLink-Di3r0mgJ.js";
import { _ as _sfc_main$6 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$4 } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$5 } from "./InputSoftUi-DRY4QHe-.js";
import _sfc_main$8 from "./ImportContatoForm-uksBUH43.js";
import { _ as _sfc_main$b } from "./PaginationLink-C830f6DP.js";
import _sfc_main$9 from "./AddContatoForm-DEn-z-1S.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ButtonPadrao-CEQRBWs5.js";
import "./Modal-CK8ZWp_l.js";
import "./SelectListaFilter-BsRynO4E.js";
import "./SelectContatoFilter-BJJTi_2L.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    lista: {},
    leads: {},
    contatos: {}
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      nome: props.lista.nome,
      descricao: props.lista.descricao ?? null
    });
    const submit = () => {
      form.put(route("lista.update", props.lista.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Alterar Lista:" + __props.lista.nome
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
              href: _ctx.route("lista.index")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Listas`);
                } else {
                  return [
                    createTextVNode("Listas")
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
                  _push3(`Alterar Lista: ${ssrInterpolate(__props.lista.nome)}`);
                } else {
                  return [
                    createTextVNode("Alterar Lista: " + toDisplayString(__props.lista.nome), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Alterar Lista: ${ssrInterpolate(__props.lista.nome)}</h6>`);
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
                  href: _ctx.route("lista.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode("Listas")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$2, {
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Alterar Lista: " + toDisplayString(__props.lista.nome), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Alterar Lista: " + toDisplayString(__props.lista.nome), 1)
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
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}><div class="flex flex-wrap -mx-3"${_scopeId}><div class="flex gap-4 w-full max-w-full px-3"${_scopeId}><div class="w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "nome",
              class: "text-xs",
              value: "Nome:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "nome",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).nome,
              "onUpdate:modelValue": ($event) => unref(form).nome = $event,
              required: "",
              autofocus: "",
              autocomplete: "nome"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.nome
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "descricao",
              class: "text-xs",
              value: "Descrição:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "descricao",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).descricao,
              "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
              required: "",
              autocomplete: "descricao"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.descricao
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="my-4 border-t"${_scopeId}></div><div class="flex gap-4"${_scopeId}>`);
            if (unref(form).descricao !== __props.lista.descricao || unref(form).nome !== __props.lista.nome) {
              _push2(ssrRenderComponent(_sfc_main$7, {
                cor: "green",
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing,
                onClick: submit
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
            _push2(ssrRenderComponent(_sfc_main$8, {
              lista_id: __props.lista.id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              contatos: __props.leads,
              lista_id: __props.lista.id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              href: _ctx.route("lista.index"),
              cor: "gray"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancelar `);
                } else {
                  return [
                    createTextVNode(" Cancelar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><h6 class="font-bold text-gray-600"${_scopeId}>Relação de Contatos:</h6><table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"${_scopeId}><thead class="align-bottom"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Contato</th><th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70"${_scopeId}>Telefone</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.contatos.data, (contato) => {
              _push2(`<tr${_scopeId}><td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><div class="flex flex-col justify-center px-3 py-1"${_scopeId}><h6 class="mb-0 text-sm leading-normal"${_scopeId}>${ssrInterpolate(contato.contato.name)}</h6><p class="mb-0 text-xs leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(contato.contato.email)}</p></div></td><td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent"${_scopeId}><span class="text-xs font-semibold leading-tight text-slate-400"${_scopeId}>${ssrInterpolate(contato.contato.numero)}</span></td></tr>`);
            });
            _push2(`<!--]--></tbody></table><div class="mt-3 flex items-baseline"${_scopeId}>`);
            if (__props.contatos.prev_page_url !== null) {
              _push2(ssrRenderComponent(_sfc_main$b, {
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
                _push2(ssrRenderComponent(_sfc_main$b, {
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
              _push2(ssrRenderComponent(_sfc_main$b, {
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
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "flex gap-4 w-full max-w-full px-3" }, [
                    createVNode("div", { class: "w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$4, {
                          for: "nome",
                          class: "text-xs",
                          value: "Nome:"
                        }),
                        createVNode(_sfc_main$5, {
                          id: "nome",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).nome,
                          "onUpdate:modelValue": ($event) => unref(form).nome = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "nome"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          class: "mt-2",
                          message: unref(form).errors.nome
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$4, {
                          for: "descricao",
                          class: "text-xs",
                          value: "Descrição:"
                        }),
                        createVNode(_sfc_main$5, {
                          id: "descricao",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).descricao,
                          "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
                          required: "",
                          autocomplete: "descricao"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          class: "mt-2",
                          message: unref(form).errors.descricao
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "my-4 border-t" }),
                      createVNode("div", { class: "flex gap-4" }, [
                        unref(form).descricao !== __props.lista.descricao || unref(form).nome !== __props.lista.nome ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          cor: "green",
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          onClick: submit
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Salvar")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])) : createCommentVNode("", true),
                        createVNode(_sfc_main$8, {
                          lista_id: __props.lista.id
                        }, null, 8, ["lista_id"]),
                        createVNode(_sfc_main$9, {
                          contatos: __props.leads,
                          lista_id: __props.lista.id
                        }, null, 8, ["contatos", "lista_id"]),
                        createVNode(_sfc_main$a, {
                          href: _ctx.route("lista.index"),
                          cor: "gray"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancelar ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    createVNode("div", { class: "grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("h6", { class: "font-bold text-gray-600" }, "Relação de Contatos:"),
                      createVNode("table", { class: "items-center w-full mb-0 align-top border-gray-200 text-slate-500" }, [
                        createVNode("thead", { class: "align-bottom" }, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Contato"),
                            createVNode("th", { class: "px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70" }, "Telefone")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.contatos.data, (contato) => {
                            return openBlock(), createBlock("tr", null, [
                              createVNode("td", { class: "p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                createVNode("div", { class: "flex flex-col justify-center px-3 py-1" }, [
                                  createVNode("h6", { class: "mb-0 text-sm leading-normal" }, toDisplayString(contato.contato.name), 1),
                                  createVNode("p", { class: "mb-0 text-xs leading-tight text-slate-400" }, toDisplayString(contato.contato.email), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent" }, [
                                createVNode("span", { class: "text-xs font-semibold leading-tight text-slate-400" }, toDisplayString(contato.contato.numero), 1)
                              ])
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode("div", { class: "mt-3 flex items-baseline" }, [
                        __props.contatos.prev_page_url !== null ? (openBlock(), createBlock(_sfc_main$b, {
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
                            link.url !== null && link.label.length < 5 ? (openBlock(), createBlock(_sfc_main$b, {
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
                        __props.contatos.next_page_url !== null ? (openBlock(), createBlock(_sfc_main$b, {
                          key: 1,
                          href: __props.contatos.next_page_url
                        }, {
                          default: withCtx(() => [
                            createVNode("i", { class: "fas fa-arrow-right" })
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lista/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
