import { ref, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createTextVNode, withModifiers, toDisplayString, withDirectives, vShow, createCommentVNode, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$1 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$2 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$4 } from "./ButtonSave-DVEwRSxU.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputSoftUi-DRY4QHe-.js";
const _sfc_main = {
  __name: "ImagemForm",
  __ssrInlineRender: true,
  props: {
    sessao_id: {
      type: Number,
      required: true
    },
    contato_id: {
      type: Number,
      required: true
    }
  },
  emits: ["closeAnexo"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const anexarImagem = ref(false);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const emit = __emit;
    const form = useForm({
      sessao_id: props.sessao_id,
      contato_id: props.contato_id,
      caption: "",
      arquivo: null
    });
    const onDrop = (event) => {
      isDragging.value = false;
      if (event.dataTransfer.files.length) {
        form.arquivo = event.dataTransfer.files[0];
      }
    };
    const onDragOver = () => {
      isDragging.value = true;
    };
    const onDragLeave = () => {
      isDragging.value = false;
    };
    const triggerFileSelect = () => {
      if (fileInput.value) {
        fileInput.value.click();
      }
    };
    const salvar = () => {
      form.post(route("service.messages.sendImage"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      anexarImagem.value = false;
      emit("closeAnexo");
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><li class="flex py-2 items-center transition duration-300 hover:text-sky-500 hover:cursor-pointer"><svg class="w-6 h-6 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"></path></svg><span class="ml-3">Imagem</span></li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: anexarImagem.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-xl font-medium text-gray-900"${_scopeId}> Anexar Imagem </h2><hr class="my-4"${_scopeId}><div class="mb-5"${_scopeId}><div class="${ssrRenderClass([{
              "border-blue-500 bg-blue-50": isDragging.value,
              "border-gray-300": !isDragging.value
            }, "w-full h-48 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"])}"${_scopeId}>`);
            if (!unref(form).arquivo) {
              _push2(`<p class="text-gray-500"${_scopeId}>Arraste e solte um arquivo aqui ou clique para selecionar</p>`);
            } else {
              _push2(`<p class="text-green-600"${_scopeId}>${ssrInterpolate(unref(form).arquivo.name)}</p>`);
            }
            _push2(`</div><input style="${ssrRenderStyle({ display: "none" })}" id="file_input" type="file"${_scopeId}>`);
            if (unref(form).progress) {
              _push2(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} class="w-full bg-green-600 rounded-full h-2.5 my-3" max="100"${_scopeId}>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.arquivo
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}><input placeholder="Digite uma legenda..."${ssrRenderAttr("value", unref(form).caption)} class="w-full h-12 px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.caption
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              onClick: closeModal,
              cor: "light"
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              cor: "green",
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: salvar
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Enviar`);
                } else {
                  return [
                    createTextVNode("Enviar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-xl font-medium text-gray-900" }, " Anexar Imagem "),
                createVNode("hr", { class: "my-4" }),
                createVNode("div", { class: "mb-5" }, [
                  createVNode("div", {
                    class: ["w-full h-48 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50", {
                      "border-blue-500 bg-blue-50": isDragging.value,
                      "border-gray-300": !isDragging.value
                    }],
                    onDragover: withModifiers(onDragOver, ["prevent"]),
                    onDragleave: withModifiers(onDragLeave, ["prevent"]),
                    onDrop: withModifiers(onDrop, ["prevent"]),
                    onClick: triggerFileSelect
                  }, [
                    !unref(form).arquivo ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-gray-500"
                    }, "Arraste e solte um arquivo aqui ou clique para selecionar")) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-green-600"
                    }, toDisplayString(unref(form).arquivo.name), 1))
                  ], 34),
                  withDirectives(createVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    onInput: ($event) => unref(form).arquivo = $event.target.files[0],
                    id: "file_input",
                    type: "file"
                  }, null, 40, ["onInput"]), [
                    [vShow, false]
                  ]),
                  unref(form).progress ? (openBlock(), createBlock("progress", {
                    key: 0,
                    value: unref(form).progress.percentage,
                    class: "w-full bg-green-600 rounded-full h-2.5 my-3",
                    max: "100"
                  }, toDisplayString(unref(form).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.arquivo
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mb-4" }, [
                  withDirectives(createVNode("input", {
                    placeholder: "Digite uma legenda...",
                    "onUpdate:modelValue": ($event) => unref(form).caption = $event,
                    class: "w-full h-12 px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).caption]
                  ]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.caption
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$3, {
                    onClick: closeModal,
                    cor: "light"
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
                  createVNode(_sfc_main$4, {
                    cor: "green",
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: salvar
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Enviar")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Partials/ImagemForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
