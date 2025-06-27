import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$3 } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$5 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$1 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$6 } from "./ButtonSave-DVEwRSxU.js";
import { _ as _sfc_main$4 } from "./InputSoftUi-DRY4QHe-.js";
const _sfc_main = {
  __name: "CreateListaForm",
  __ssrInlineRender: true,
  setup(__props) {
    const novaLista = ref(false);
    const nomeInput = ref(null);
    const form = useForm({
      nome: "",
      descricao: ""
    });
    const confirmNovaLista = () => {
      novaLista.value = true;
      nextTick(() => nomeInput.value.focus());
    };
    const salvar = () => {
      form.post(route("lista.store"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => nomeInput.value.focus()),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      novaLista.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: confirmNovaLista,
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
        show: novaLista.value,
        onClose: closeModal,
        "max-width": "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h6 class="font-bold"${_scopeId}>Nova Lista de Contatos:</h6><div class="my-4"${_scopeId}></div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "nome",
              class: "text-xs",
              value: "Nome:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "nome",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).nome,
              "onUpdate:modelValue": ($event) => unref(form).nome = $event,
              required: "",
              autofocus: "",
              autocomplete: "nome"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.nome
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "descricao",
              class: "text-xs",
              value: "Descrição:"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "descricao",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).descricao,
              "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
              required: "",
              autocomplete: "descricao"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.descricao
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
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
            _push2(ssrRenderComponent(_sfc_main$6, {
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
                createVNode("h6", { class: "font-bold" }, "Nova Lista de Contatos:"),
                createVNode("div", { class: "my-4" }),
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "nome",
                    class: "text-xs",
                    value: "Nome:"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "nome",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).nome,
                    "onUpdate:modelValue": ($event) => unref(form).nome = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "nome"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.nome
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mb-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "descricao",
                    class: "text-xs",
                    value: "Descrição:"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "descricao",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).descricao,
                    "onUpdate:modelValue": ($event) => unref(form).descricao = $event,
                    required: "",
                    autocomplete: "descricao"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.descricao
                  }, null, 8, ["message"])
                ]),
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
                  createVNode(_sfc_main$6, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Lista/Partials/CreateListaForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
