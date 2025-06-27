import { ref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ButtonPadrao-CEQRBWs5.js";
const _sfc_main = {
  __name: "AudioGravador",
  __ssrInlineRender: true,
  emits: ["audioCaptured"],
  setup(__props, { emit: __emit }) {
    const audioChunks = ref([]);
    const mediaRecorder = ref(null);
    const audioUrl = ref(null);
    const isRecording = ref(false);
    const emit = __emit;
    const startRecording = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error("getUserMedia não é suportado neste navegador.");
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream);
        mediaRecorder.value.ondataavailable = (event) => {
          audioChunks.value.push(event.data);
        };
        mediaRecorder.value.onstop = () => {
          const blob = new Blob(audioChunks.value, { type: "audio/webm" });
          audioUrl.value = URL.createObjectURL(blob);
          audioChunks.value = [];
          emit("audioCaptured", blob);
        };
        mediaRecorder.value.start();
        isRecording.value = true;
      } catch (error) {
        console.error("Erro ao acessar o microfone:", error);
        alert(error.message);
      }
    };
    const stopRecording = () => {
      if (mediaRecorder.value) {
        mediaRecorder.value.stop();
        isRecording.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Gravador de Áudio:</h1><div class="flex gap-4 mt-3">`);
      if (!isRecording.value) {
        _push(ssrRenderComponent(_sfc_main$1, {
          onClick: startRecording,
          cor: "green",
          disabled: isRecording.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Iniciar Gravação`);
            } else {
              return [
                createTextVNode("Iniciar Gravação")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isRecording.value) {
        _push(ssrRenderComponent(_sfc_main$1, {
          onClick: stopRecording,
          cor: "red",
          disabled: !isRecording.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Parar Gravação`);
            } else {
              return [
                createTextVNode("Parar Gravação")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isRecording.value) {
        _push(`<div class="flex items-center"><svg class="w-6 h-6 mr-2 text-red-700 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path><path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z"></path></svg> Gravando </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (audioUrl.value) {
        _push(`<div><h3 class="my-4">Áudio Gravado:</h3><audio${ssrRenderAttr("src", audioUrl.value)} controls></audio></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Partials/AudioGravador.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
