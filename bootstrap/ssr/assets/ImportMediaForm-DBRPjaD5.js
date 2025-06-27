import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, withModifiers, toDisplayString, withDirectives, vShow, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$2 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$3 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$4 } from "./ButtonSave-DVEwRSxU.js";
const _sfc_main = {
  __name: "ImportMediaForm",
  __ssrInlineRender: true,
  props: {
    campanha_id: Number
  },
  setup(__props) {
    const props = __props;
    const novoContato = ref(false);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const form = useForm({
      campanha_id: props.campanha_id,
      file: null
    });
    const confirmNovoContato = () => {
      novoContato.value = true;
    };
    const onDrop = (event) => {
      isDragging.value = false;
      if (event.dataTransfer.files.length) {
        form.file = event.dataTransfer.files[0];
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
      form.post(route("campanha.import"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      novoContato.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        onClick: confirmNovoContato,
        cor: "cyan"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"${_scopeId}></path></svg> Foto, Vídeo ou Documento `);
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
                  d: "M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                })
              ])),
              createTextVNode(" Foto, Vídeo ou Documento ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        show: novoContato.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-xl font-medium text-gray-900"${_scopeId}> Importar Foto, Vídeo ou Documento </h2><hr class="my-4"${_scopeId}><div class="mb-5"${_scopeId}><div class="${ssrRenderClass([{
              "border-blue-500 bg-blue-50": isDragging.value,
              "border-gray-300": !isDragging.value
            }, "w-full h-48 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"])}"${_scopeId}>`);
            if (!unref(form).file) {
              _push2(`<p class="text-gray-500"${_scopeId}>Arraste e solte um arquivo aqui ou clique para selecionar</p>`);
            } else {
              _push2(`<p class="text-green-600"${_scopeId}>${ssrInterpolate(unref(form).file.name)}</p>`);
            }
            _push2(`</div><input style="${ssrRenderStyle({ display: "none" })}" id="file_input" type="file"${_scopeId}>`);
            if (unref(form).progress) {
              _push2(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} class="w-full bg-green-600 rounded-full h-2.5 my-3" max="100"${_scopeId}>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.file
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
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
                createVNode("h2", { class: "text-xl font-medium text-gray-900" }, " Importar Foto, Vídeo ou Documento "),
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
                    !unref(form).file ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-gray-500"
                    }, "Arraste e solte um arquivo aqui ou clique para selecionar")) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-green-600"
                    }, toDisplayString(unref(form).file.name), 1))
                  ], 34),
                  withDirectives(createVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    onInput: ($event) => unref(form).file = $event.target.files[0],
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
                  createVNode(_sfc_main$3, {
                    class: "mt-2",
                    message: unref(form).errors.file
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$1, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Campanha/Partials/ImportMediaForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
