import { ref, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createTextVNode, withModifiers, toDisplayString, withDirectives, vShow, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$1 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$2 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$5 } from "./ButtonSave-DVEwRSxU.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputSoftUi-DRY4QHe-.js";
import _sfc_main$3 from "./AudioGravador-WHILLPeg.js";
const _sfc_main = {
  __name: "AudioForm",
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
    const anexarAudio = ref(false);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const emit = __emit;
    const form = useForm({
      sessao_id: props.sessao_id,
      contato_id: props.contato_id,
      arquivo: null,
      audio: null
    });
    const handleAudioCaptured = (audio) => {
      form.audio = audio;
    };
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
      form.post(route("service.messages.sendAudio"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      anexarAudio.value = false;
      emit("closeAnexo");
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><li class="flex py-2 items-center transition duration-300 hover:text-sky-500 hover:cursor-pointer"><svg class="w-6 h-6 text-emerald-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"></path><path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"></path></svg><span class="ml-3">Audio</span></li>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: anexarAudio.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-xl font-medium text-gray-900"${_scopeId}> Anexar ou Gravar Audio </h2><hr class="my-4"${_scopeId}><div class="mb-5"${_scopeId}><div class="${ssrRenderClass([{
              "border-blue-500 bg-blue-50": isDragging.value,
              "border-gray-300": !isDragging.value
            }, "w-full h-20 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"])}"${_scopeId}>`);
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { onAudioCaptured: handleAudioCaptured }, null, _parent2, _scopeId));
            _push2(`<div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
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
            _push2(ssrRenderComponent(_sfc_main$5, {
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
                createVNode("h2", { class: "text-xl font-medium text-gray-900" }, " Anexar ou Gravar Audio "),
                createVNode("hr", { class: "my-4" }),
                createVNode("div", { class: "mb-5" }, [
                  createVNode("div", {
                    class: ["w-full h-20 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50", {
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
                createVNode(_sfc_main$3, { onAudioCaptured: handleAudioCaptured }),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$4, {
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
                  createVNode(_sfc_main$5, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Partials/AudioForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
