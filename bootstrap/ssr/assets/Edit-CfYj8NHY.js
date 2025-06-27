import { watch, resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, withDirectives, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { _ as _sfc_main$4 } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$5 } from "./InputSoftUi-DRY4QHe-.js";
import { _ as _sfc_main$6 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$8 } from "./ButtonSave-DVEwRSxU.js";
import { _ as _sfc_main$7 } from "./Checkbox-g3fT0BRB.js";
import { _ as _sfc_main$9 } from "./ButtonLink-Di3r0mgJ.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: {},
    canal: {},
    funcao: {},
    canais: {},
    modulos: {},
    permissao: {}
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      telefone: props.user.telefone,
      cpf: props.user.cpf,
      canal: props.canal,
      funcao: props.funcao,
      permissao: props.permissao
    });
    watch(
      () => form.funcao,
      (newFuncao) => {
        props.canais.forEach((canal) => {
          const canalFuncoesMarcadas = canal.funcoes.some((funcao) => newFuncao[funcao.id]);
          const todasFuncoesDesmarcadas = canal.funcoes.every((funcao) => !newFuncao[funcao.id]);
          if (canalFuncoesMarcadas) {
            form.canal[canal.id] = true;
          } else if (todasFuncoesDesmarcadas) {
            form.canal[canal.id] = false;
          }
        });
      },
      { deep: true }
    );
    const submit = () => {
      form.put(route("usuario.update", props.user.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_mask = resolveDirective("mask");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Alterar: " + __props.user.name
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
                  _push3(`Alterar: ${ssrInterpolate(__props.user.name)}`);
                } else {
                  return [
                    createTextVNode("Alterar: " + toDisplayString(__props.user.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Alterar: ${ssrInterpolate(__props.user.name)}</h6>`);
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
                    createTextVNode("Alterar: " + toDisplayString(__props.user.name), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Alterar: " + toDisplayString(__props.user.name), 1)
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
              for: "name",
              class: "text-xs",
              value: "Nome:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "email",
              class: "text-xs",
              value: "E-mail:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "cpf",
              class: "text-xs",
              value: "CPF:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
              id: "cpf",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).cpf,
              "onUpdate:modelValue": ($event) => unref(form).cpf = $event,
              required: "",
              autocomplete: "cpf"
            }, ssrGetDirectiveProps(_ctx, _directive_mask, "###.###.###-##")), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.cpf
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "telefone",
              class: "text-xs",
              value: "Celular:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
              id: "telefone",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).telefone,
              "onUpdate:modelValue": ($event) => unref(form).telefone = $event,
              required: "",
              autocomplete: "telefone"
            }, ssrGetDirectiveProps(_ctx, _directive_mask, "(##) #####-####")), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.telefone
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><h6 class="font-bold bg-gray-100 text-gray-600 rounded mb-3 px-2 py-1"${_scopeId}>Canais de Atendimento:</h6><!--[-->`);
            ssrRenderList(__props.canais, (canal) => {
              _push2(`<div class="pb-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                class: "hidden",
                checked: unref(form).canal[canal.id],
                "onUpdate:checked": ($event) => unref(form).canal[canal.id] = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-extrabold text-sm"${_scopeId}>${ssrInterpolate(canal.nome)}: </span> <br${_scopeId}><span class="italic text-xs"${_scopeId}>${ssrInterpolate(canal.descricao)}</span><div class="pt-1"${_scopeId}><!--[-->`);
              ssrRenderList(canal.funcoes, (funcao) => {
                _push2(`<label class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  checked: unref(form).funcao[funcao.id],
                  "onUpdate:checked": ($event) => unref(form).funcao[funcao.id] = $event
                }, null, _parent2, _scopeId));
                _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(funcao.nome)}</span></label>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></div><div class="my-4 border-t"${_scopeId}></div><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, { onClick: submit }, {
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
            _push2(ssrRenderComponent(_sfc_main$9, {
              href: _ctx.route("usuario.index"),
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
            _push2(`</div></div><div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><h6 class="font-bold"${_scopeId}>Acesso aos Módulos:</h6><div class="my-3 border-t"${_scopeId}></div><!--[-->`);
            ssrRenderList(__props.modulos, (modulo) => {
              _push2(`<div class="pb-5"${_scopeId}><span class="font-extrabold"${_scopeId}>${ssrInterpolate(modulo.section)}: </span><span class="italic"${_scopeId}>${ssrInterpolate(modulo.name)}</span><div class="flex gap-4 pt-1"${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).permissao[modulo.chave].index,
                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].index = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Visualizar</span></label><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).permissao[modulo.chave].create,
                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].create = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Cadastrar</span></label><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).permissao[modulo.chave].edit,
                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].edit = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Alterar</span></label><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).permissao[modulo.chave].delete,
                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].delete = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Excluir</span></label></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode("div", { class: "flex flex-wrap -mx-3" }, [
                  createVNode("div", { class: "flex gap-4 w-full max-w-full px-3" }, [
                    createVNode("div", { class: "w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border" }, [
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$4, {
                          for: "name",
                          class: "text-xs",
                          value: "Nome:"
                        }),
                        createVNode(_sfc_main$5, {
                          id: "name",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          class: "mt-2",
                          message: unref(form).errors.name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$4, {
                          for: "email",
                          class: "text-xs",
                          value: "E-mail:"
                        }),
                        createVNode(_sfc_main$5, {
                          id: "email",
                          type: "email",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: "",
                          autocomplete: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$6, {
                          class: "mt-2",
                          message: unref(form).errors.email
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$4, {
                          for: "cpf",
                          class: "text-xs",
                          value: "CPF:"
                        }),
                        withDirectives(createVNode(_sfc_main$5, {
                          id: "cpf",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).cpf,
                          "onUpdate:modelValue": ($event) => unref(form).cpf = $event,
                          required: "",
                          autocomplete: "cpf"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [_directive_mask, "###.###.###-##"]
                        ]),
                        createVNode(_sfc_main$6, {
                          class: "mt-2",
                          message: unref(form).errors.cpf
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$4, {
                            for: "telefone",
                            class: "text-xs",
                            value: "Celular:"
                          }),
                          withDirectives(createVNode(_sfc_main$5, {
                            id: "telefone",
                            type: "text",
                            class: "mt-1 block w-full",
                            modelValue: unref(form).telefone,
                            "onUpdate:modelValue": ($event) => unref(form).telefone = $event,
                            required: "",
                            autocomplete: "telefone"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                            [_directive_mask, "(##) #####-####"]
                          ]),
                          createVNode(_sfc_main$6, {
                            class: "mt-2",
                            message: unref(form).errors.telefone
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("h6", { class: "font-bold bg-gray-100 text-gray-600 rounded mb-3 px-2 py-1" }, "Canais de Atendimento:"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.canais, (canal) => {
                          return openBlock(), createBlock("div", { class: "pb-5" }, [
                            createVNode(_sfc_main$7, {
                              class: "hidden",
                              checked: unref(form).canal[canal.id],
                              "onUpdate:checked": ($event) => unref(form).canal[canal.id] = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("span", { class: "font-extrabold text-sm" }, toDisplayString(canal.nome) + ": ", 1),
                            createTextVNode(),
                            createVNode("br"),
                            createVNode("span", { class: "italic text-xs" }, toDisplayString(canal.descricao), 1),
                            createVNode("div", { class: "pt-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(canal.funcoes, (funcao) => {
                                return openBlock(), createBlock("label", { class: "flex items-center" }, [
                                  createVNode(_sfc_main$7, {
                                    checked: unref(form).funcao[funcao.id],
                                    "onUpdate:checked": ($event) => unref(form).funcao[funcao.id] = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode("span", { class: "ms-2 text-sm text-gray-600" }, toDisplayString(funcao.nome), 1)
                                ]);
                              }), 256))
                            ])
                          ]);
                        }), 256))
                      ]),
                      createVNode("div", { class: "my-4 border-t" }),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode(_sfc_main$8, { onClick: submit }, {
                          default: withCtx(() => [
                            createTextVNode("Salvar")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$9, {
                          href: _ctx.route("usuario.index"),
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
                      createVNode("h6", { class: "font-bold" }, "Acesso aos Módulos:"),
                      createVNode("div", { class: "my-3 border-t" }),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.modulos, (modulo) => {
                        return openBlock(), createBlock("div", { class: "pb-5" }, [
                          createVNode("span", { class: "font-extrabold" }, toDisplayString(modulo.section) + ": ", 1),
                          createVNode("span", { class: "italic" }, toDisplayString(modulo.name), 1),
                          createVNode("div", { class: "flex gap-4 pt-1" }, [
                            createVNode("label", { class: "flex items-center" }, [
                              createVNode(_sfc_main$7, {
                                checked: unref(form).permissao[modulo.chave].index,
                                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].index = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Visualizar")
                            ]),
                            createVNode("label", { class: "flex items-center" }, [
                              createVNode(_sfc_main$7, {
                                checked: unref(form).permissao[modulo.chave].create,
                                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].create = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Cadastrar")
                            ]),
                            createVNode("label", { class: "flex items-center" }, [
                              createVNode(_sfc_main$7, {
                                checked: unref(form).permissao[modulo.chave].edit,
                                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].edit = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Alterar")
                            ]),
                            createVNode("label", { class: "flex items-center" }, [
                              createVNode(_sfc_main$7, {
                                checked: unref(form).permissao[modulo.chave].delete,
                                "onUpdate:checked": ($event) => unref(form).permissao[modulo.chave].delete = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Excluir")
                            ])
                          ])
                        ]);
                      }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
