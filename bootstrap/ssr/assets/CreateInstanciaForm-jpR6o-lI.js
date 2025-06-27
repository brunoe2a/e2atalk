import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, createCommentVNode, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$3 } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$5 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$1 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$8 } from "./ButtonSave-DVEwRSxU.js";
import { _ as _sfc_main$4 } from "./InputSoftUi-DRY4QHe-.js";
import _sfc_main$6 from "./SelectEmpresaFilter-DLRa8pGu.js";
import { _ as _sfc_main$7 } from "./Checkbox-g3fT0BRB.js";
const _sfc_main = {
  __name: "CreateInstanciaForm",
  __ssrInlineRender: true,
  props: {
    empresas: {
      type: Object,
      required: true
    },
    checkAtendimento: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const novaInstancia = ref(false);
    const nomeInput = ref(null);
    const form = useForm({
      instancia: "",
      campanha: true,
      atendimento: false,
      empresa_id: ""
    });
    const confirmNovaInstancia = () => {
      novaInstancia.value = true;
      nextTick(() => nomeInput.value.focus());
    };
    const salvar = () => {
      form.post(route("instancia.store"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => nomeInput.value.focus()),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      novaInstancia.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: confirmNovaInstancia,
        cor: "green"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 mr-2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"${_scopeId}></path></svg> Cadastrar `);
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
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        show: novaInstancia.value,
        onClose: closeModal,
        "max-width": "xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h6 class="font-bold"${_scopeId}>Nova Instância:</h6><div class="my-4"${_scopeId}></div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "instancia",
              class: "text-xs",
              value: "Inatância:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "instancia",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).instancia,
              "onUpdate:modelValue": ($event) => unref(form).instancia = $event,
              required: "",
              autofocus: "",
              autocomplete: "instancia"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.instancia
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "empresa_id",
              value: "Empresa:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              id: "empresa_id",
              class: "mt-1",
              modelValue: unref(form).empresa_id,
              "onUpdate:modelValue": ($event) => unref(form).empresa_id = $event,
              options: __props.empresas,
              autocomplete: "empresa_id"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.empresa_id
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "campanha",
              value: "Onde pretente usar?"
            }, null, _parent2, _scopeId));
            _push2(`<label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              checked: unref(form).campanha,
              "onUpdate:checked": ($event) => unref(form).campanha = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Campanha</span></label>`);
            if (!__props.checkAtendimento) {
              _push2(`<label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                checked: unref(form).atendimento,
                "onUpdate:checked": ($event) => unref(form).atendimento = $event,
                disabled: __props.checkAtendimento
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Atendimento</span></label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              onClick: closeModal,
              cor: "red"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId2}></path></svg> Cancel `);
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              cor: "green",
              class: ["ms-3", { "opacity-25": unref(form).processing }],
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h6", { class: "font-bold" }, "Nova Instância:"),
                createVNode("div", { class: "my-4" }),
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "instancia",
                    class: "text-xs",
                    value: "Inatância:"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "instancia",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).instancia,
                    "onUpdate:modelValue": ($event) => unref(form).instancia = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "instancia"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.instancia
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "empresa_id",
                    value: "Empresa:"
                  }),
                  createVNode(_sfc_main$6, {
                    id: "empresa_id",
                    class: "mt-1",
                    modelValue: unref(form).empresa_id,
                    "onUpdate:modelValue": ($event) => unref(form).empresa_id = $event,
                    options: __props.empresas,
                    autocomplete: "empresa_id"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.empresa_id
                  }, null, 8, ["message"])
                ]),
                createVNode(_sfc_main$3, {
                  for: "campanha",
                  value: "Onde pretente usar?"
                }),
                createVNode("label", { class: "flex items-center" }, [
                  createVNode(_sfc_main$7, {
                    checked: unref(form).campanha,
                    "onUpdate:checked": ($event) => unref(form).campanha = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Campanha")
                ]),
                !__props.checkAtendimento ? (openBlock(), createBlock("label", {
                  key: 0,
                  class: "flex items-center"
                }, [
                  createVNode(_sfc_main$7, {
                    checked: unref(form).atendimento,
                    "onUpdate:checked": ($event) => unref(form).atendimento = $event,
                    disabled: __props.checkAtendimento
                  }, null, 8, ["checked", "onUpdate:checked", "disabled"]),
                  createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Atendimento")
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$1, {
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
                  createVNode(_sfc_main$8, {
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
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Instancia/Partials/CreateInstanciaForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
