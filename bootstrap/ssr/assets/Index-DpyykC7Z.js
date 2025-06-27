import { mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, ref, unref, watch, onMounted, onBeforeUnmount, nextTick, resolveDirective, toDisplayString, createCommentVNode, Fragment, renderList, createTextVNode, withDirectives, vModelText, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrGetDirectiveProps, ssrGetDynamicModelProps } from "vue/server-renderer";
import { Head, usePage, useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./LinkTable-B94vKGjb.js";
import { _ as _sfc_main$6 } from "./ApplicationLogo-CUNc9et3.js";
import { format } from "date-fns";
import { _ as _sfc_main$c } from "./ButtonPadrao-CEQRBWs5.js";
import { _ as _sfc_main$b } from "./Modal-CK8ZWp_l.js";
import _sfc_main$8 from "./ImagemForm-CeQmD8ZS.js";
import _sfc_main$7 from "./DocumentoForm-Du_NaR3T.js";
import _sfc_main$9 from "./AudioForm-B9_4vaDg.js";
import _sfc_main$a from "./VideoForm-DdKibHGS.js";
import "./InputError-BIoZcjri.js";
import "./ButtonSave-DVEwRSxU.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputSoftUi-DRY4QHe-.js";
import "./AudioGravador-WHILLPeg.js";
const _sfc_main$4 = {
  __name: "SidebarServiceLayout",
  __ssrInlineRender: true,
  props: ["aside"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.aside ? null : { display: "none" },
        class: "bg-slate-100 border-r px-3 py-5"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        href: _ctx.route("service.index"),
        active: _ctx.route().current("service*")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "2",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { href: "route('dashboard')" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  "fill-rule": "evenodd",
                  d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, { href: "route('dashboard')" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-7 h-7 mb-5 transition ease-in-out duration-300 hover:scale-125",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 transition ease-in-out duration-300 hover:scale-125"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "2",
                stroke: "currentColor",
                class: "w-7 h-7 transition ease-in-out duration-300 hover:scale-125"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/SidebarServiceLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "HeaderLateralServiceLayout",
  __ssrInlineRender: true,
  props: ["aside"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-20 px-4 pt-3 flex items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, { class: "pr-9 h-12" }, null, _parent));
      _push(`<button class="p-2 bg-gray-100 rounded-full"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: __props.aside,
        "inline-flex": !__props.aside
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !__props.aside,
        "inline-flex": __props.aside
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/HeaderLateralServiceLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ServiceLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const aside = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<body${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.__("sidebar.link.service")
      }, null, _parent));
      _push(`<div class="h-screen flex">`);
      _push(ssrRenderComponent(_sfc_main$4, { aside: aside.value }, null, _parent));
      _push(`<div class="w-1/4 bg-white border-r flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        onShowSidebar: ($event) => aside.value = !aside.value,
        aside: aside.value
      }, null, _parent));
      _push(`<div class="p-4 relative"><input type="text" placeholder="Pesquisar..." class="w-full p-2 pl-10 border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500"><button class="absolute inset-y-0 left-30 flex items-center pl-3"><svg class="w-5 h-5 text-slate-500" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg></button></div>`);
      if (_ctx.$slots.contatos) {
        _push(`<div class="flex-grow overflow-y-auto">`);
        ssrRenderSlot(_ctx.$slots, "contatos", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><template><div class="flex-grow flex flex-col bg-white relative">`);
      if (_ctx.$slots.header_mensagens) {
        _push(`<div class="p-4 bg-sky-800 flex items-center justify-between">`);
        ssrRenderSlot(_ctx.$slots, "header_mensagens", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></template></div></body>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/ServiceLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function dataBrasil(valor) {
  const date = new Date(valor);
  return format(date, "dd/MM/yyyy HH:mm");
}
const _sfc_main$1 = {
  __name: "ButtonSend",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const page = usePage();
    const loadSave = ref(false);
    const classes = ref("");
    classes.value = "ml-4 p-2 bg-green-500 text-white rounded-lg transition ease-in-out duration-300 hover:scale-110";
    watch(
      () => page.props.errors,
      () => {
        if (page.props.errors) {
          notSave();
        } else {
          save();
        }
      }
    );
    const save = () => {
      console.log(page.props.errors);
      loadSave.value = true;
    };
    const notSave = () => {
      loadSave.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "submit",
        class: classes.value,
        disabled: loadSave.value
      }, _attrs))}>`);
      if (__props.icon) {
        _push(`<span>`);
        if (loadSave.value) {
          _push(`<svg class="animate-spin ml-1 mr-2 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
        } else {
          _push(`<svg class="w-6 h-6 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"></path></svg>`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Softui/Button/ButtonSend.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    messagesChat: {},
    messages: {},
    sessoes: {},
    sessao: {},
    contato: null,
    protocolo: null
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      message: "",
      contato_id: "",
      numero: "",
      sessao_id: props.sessao ? props.sessao.id : null,
      encerrar: null
    });
    const encerrarModal = ref(false);
    const newModal = ref(false);
    const anexo = ref(false);
    const messageContainer = ref(null);
    const Echo = window.Echo;
    function formatMessage(content) {
      if (!content) return "";
      return content.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    }
    const listenForMessages = () => {
      Echo.channel(`channel-message`).listen("MessageSent", (data) => {
        props.messages.push(data.message);
        props.sessoes.forEach((obj) => {
          if (obj.id === data.message.sessao_atendimento_id) {
            obj.new_chat = "S";
          }
        });
        nextTick(() => {
          scrollToBottom();
        });
      });
    };
    const listenForSessoes = () => {
      Echo.channel(`channel-chat`).listen("NewAtendimentoEvent", (data) => {
        data.sessoes.hasNewMessage = true;
        props.sessoes.push(data.sessoes);
        nextTick(() => {
          scrollToBottom();
        });
      });
    };
    onMounted(() => {
      listenForSessoes();
      listenForMessages();
      scrollToBottom();
    });
    onBeforeUnmount(() => {
      Echo.leave(`channel-chat`);
      Echo.leave(`channel-message`);
    });
    watch(() => props.messages, () => {
      nextTick(() => {
        scrollToBottom();
      });
    });
    const scrollToBottom = () => {
      const container = messageContainer.value;
      container.scrollTop = container.scrollHeight;
    };
    const sendMessage = () => {
      form.contato_id = props.contato.id ?? "";
      form.post(route("service.messages.sendText"), {
        onSuccess: () => {
          form.message = "";
          nextTick(() => {
            scrollToBottom();
          });
        }
      });
    };
    const newConversa = () => {
      form.post(route("service.new"), {
        onSuccess: () => {
          form.numero = "";
          closeNewModal();
        }
      });
    };
    const encerrar = () => {
      form.encerrar = true;
      form.post(route("service.encerrar"), {
        onSuccess: () => {
          closeModal();
        }
      });
    };
    const closeModal = () => {
      encerrarModal.value = false;
      form.encerrar = null;
    };
    const closeNewModal = () => {
      newModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_mask = resolveDirective("mask");
      let _temp0;
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        contatos: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.sessoes, (sessao) => {
              _push2(`<div class="${ssrRenderClass([{ "bg-slate-50": sessao.contato_id === (__props.contato ? __props.contato.id : 0) }, "px-4 py-3 border-b hover:bg-slate-100"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("service.messages.contato", [sessao.contato_id, sessao.protocolo])
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}><div class="grow"${_scopeId2}><div class="text-slate-500"${_scopeId2}>${ssrInterpolate(sessao.contato.name ?? sessao.contato.numero)}</div><div class="text-xs text-slate-500"${_scopeId2}>${ssrInterpolate(sessao.contato.numero)}</div></div>`);
                    if (sessao.new_chat === "S") {
                      _push3(`<div class="w-3 h-3 bg-green-400 rounded-full"${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "grow" }, [
                          createVNode("div", { class: "text-slate-500" }, toDisplayString(sessao.contato.name ?? sessao.contato.numero), 1),
                          createVNode("div", { class: "text-xs text-slate-500" }, toDisplayString(sessao.contato.numero), 1)
                        ]),
                        sessao.new_chat === "S" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-3 h-3 bg-green-400 rounded-full"
                        })) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.sessoes, (sessao) => {
                return openBlock(), createBlock("div", {
                  class: ["px-4 py-3 border-b hover:bg-slate-100", { "bg-slate-50": sessao.contato_id === (__props.contato ? __props.contato.id : 0) }]
                }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("service.messages.contato", [sessao.contato_id, sessao.protocolo])
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "grow" }, [
                          createVNode("div", { class: "text-slate-500" }, toDisplayString(sessao.contato.name ?? sessao.contato.numero), 1),
                          createVNode("div", { class: "text-xs text-slate-500" }, toDisplayString(sessao.contato.numero), 1)
                        ]),
                        sessao.new_chat === "S" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-3 h-3 bg-green-400 rounded-full"
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ], 2);
              }), 256))
            ];
          }
        }),
        header_mensagens: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="text-white"${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(__props.contato ? __props.contato.name ?? __props.contato.numero : "Selecione um contato!")}</div>`);
            if (__props.contato) {
              _push2(`<div class="flex items-center gap-2 text-sm"${_scopeId}>`);
              if (__props.contato.name) {
                _push2(`<span${_scopeId}>Telefone: ${ssrInterpolate(__props.contato.numero)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.contato.name) {
                _push2(`<span${_scopeId}><svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"${_scopeId}></path></svg></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>Protocolo: ${ssrInterpolate(__props.sessao ? __props.sessao.protocolo : "")}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (__props.contato) {
              _push2(`<button class="p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110"${_scopeId}><svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            if (!__props.contato) {
              _push2(`<button class="p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110"${_scopeId}><svg class="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"${_scopeId}></path><path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "text-white" }, [
                  createVNode("div", { class: "font-semibold" }, toDisplayString(__props.contato ? __props.contato.name ?? __props.contato.numero : "Selecione um contato!"), 1),
                  __props.contato ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-2 text-sm"
                  }, [
                    __props.contato.name ? (openBlock(), createBlock("span", { key: 0 }, "Telefone: " + toDisplayString(__props.contato.numero), 1)) : createCommentVNode("", true),
                    __props.contato.name ? (openBlock(), createBlock("span", { key: 1 }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 12H5m14 0-4 4m4-4-4-4"
                        })
                      ]))
                    ])) : createCommentVNode("", true),
                    createVNode("span", null, "Protocolo: " + toDisplayString(__props.sessao ? __props.sessao.protocolo : ""), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              __props.contato ? (openBlock(), createBlock("button", {
                key: 0,
                onClick: ($event) => encerrarModal.value = true,
                class: "p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6 text-green-500",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "4",
                    d: "M5 13l4 4L19 7"
                  })
                ]))
              ], 8, ["onClick"])) : createCommentVNode("", true),
              !__props.contato ? (openBlock(), createBlock("button", {
                key: 1,
                onClick: ($event) => newModal.value = true,
                class: "p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110"
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6 text-green-500",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    "fill-rule": "evenodd",
                    d: "M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z",
                    "clip-rule": "evenodd"
                  }),
                  createVNode("path", {
                    fill: "currentColor",
                    d: "M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  })
                ]))
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow p-4 overflow-y-auto bg-gray-100"${_scopeId}><!--[-->`);
            ssrRenderList(__props.messages, (message, index) => {
              _push2(`<div class="mb-4"${_scopeId}>`);
              if (message.fluxo === "Entrada" && message.contato_id === __props.contato.id) {
                _push2(`<div class="mb-4 flex justify-start"${_scopeId}><div${_scopeId}><div class="bg-white text-sm text-slate-500 p-2 rounded-lg shadow-md max-w-xs"${_scopeId}>`);
                if (message.type === "imageMessage") {
                  _push2(`<img class="rounded-lg mb-2"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.content) {
                  _push2(`<p class="px-2 whitespace-pre-wrap"${_scopeId}>${formatMessage(message.content) ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.content && message.caption) {
                  _push2(`<div class="border-t my-2 mx-2 border-slate-400"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.type === "audioMessage") {
                  _push2(`<div${_scopeId}><audio controls${_scopeId}><source${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${ssrRenderAttr("type", message.mimetype)}${_scopeId}> Seu navegador não suporta o elemento de áudio. <a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></audio></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.type === "videoMessage") {
                  _push2(`<div${_scopeId}><video controls${_scopeId}><source${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${ssrRenderAttr("type", message.mimetype)}${_scopeId}> Seu navegador não suporta o elemento de Vídeo. <a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></video></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.caption) {
                  _push2(`<p class="px-2 mt-2 whitespace-pre-wrap"${_scopeId}>${formatMessage(message.caption) ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.mimetype) {
                  _push2(`<div${_scopeId}>`);
                  if (message.mimetype === "application/pdf") {
                    _push2(`<div class="pb-3 pt-4"${_scopeId}><a class="bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)} target="_blank"${_scopeId}>Abrir</a></div>`);
                  } else if (message.type !== "audioMessage" && message.type !== "videoMessage") {
                    _push2(`<div class="pb-3 pt-4"${_scopeId}><a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="text-xs text-gray-500 mt-2 pr-5"${_scopeId}>${ssrInterpolate(unref(dataBrasil)(message.created_at))}</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (message.fluxo === "Saida") {
                _push2(`<div class="mb-4 flex justify-end"${_scopeId}><div${_scopeId}><div class="bg-emerald-100 text-slate-500 text-sm p-2 rounded-lg shadow-md max-w-xs"${_scopeId}>`);
                if (message.type === "image") {
                  _push2(`<img class="rounded-lg mb-2"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.type === "ptt" || message.type === "audio") {
                  _push2(`<div${_scopeId}><audio controls${_scopeId}><source${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${ssrRenderAttr("type", message.mimetype)}${_scopeId}> Seu navegador não suporta o elemento de áudio. <a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></audio></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.type === "video") {
                  _push2(`<div${_scopeId}><video controls${_scopeId}><source${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${ssrRenderAttr("type", message.mimetype)}${_scopeId}> Seu navegador não suporta o elemento de Vídeo. <a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></video></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.content && message.type !== "video") {
                  _push2(`<p class="px-2 whitespace-pre-wrap"${_scopeId}>${formatMessage(message.content) ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.content && message.caption && message.type !== "video") {
                  _push2(`<div class="border-t my-2 mx-2 border-slate-400"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.caption) {
                  _push2(`<p class="px-2 mt-2 whitespace-pre-wrap"${_scopeId}>${formatMessage(message.caption) ?? ""}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                if (message.mimetype) {
                  _push2(`<div${_scopeId}>`);
                  if (message.mimetype === "application/pdf") {
                    _push2(`<div class="pb-3 pt-4"${_scopeId}><a class="bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)} target="_blank"${_scopeId}>Abrir</a></div>`);
                  } else if (message.type !== "ptt" && message.type !== "audio" && message.type !== "video") {
                    _push2(`<div class="pb-3 pt-4"${_scopeId}><a${ssrRenderAttr("download", message.caption ?? message.content)} class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + message.file_path)}${_scopeId}>Baixar</a></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="text-xs text-right text-gray-500 mt-2 pr-5"${_scopeId}>${ssrInterpolate(unref(dataBrasil)(message.created_at))}</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            if (__props.sessao) {
              _push2(`<div style="${ssrRenderStyle(anexo.value ? null : { display: "none" })}" class="w-56 px-4 py-2 absolute left-4 bottom-16 bg-white text-slate-500 border shadow-md rounded-2xl"${_scopeId}><ul${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                contato_id: __props.contato.id,
                sessao_id: __props.sessao.id,
                onCloseAnexo: ($event) => anexo.value = !anexo.value
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, {
                contato_id: __props.contato.id,
                sessao_id: __props.sessao.id,
                onCloseAnexo: ($event) => anexo.value = !anexo.value
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$9, {
                contato_id: __props.contato.id,
                sessao_id: __props.sessao.id,
                onCloseAnexo: ($event) => anexo.value = !anexo.value
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$a, {
                contato_id: __props.contato.id,
                sessao_id: __props.sessao.id,
                onCloseAnexo: ($event) => anexo.value = !anexo.value
              }, null, _parent2, _scopeId));
              _push2(`</ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="py-4 pl-4 pr-6 bg-slate-100 border-t flex items-center"${_scopeId}>`);
            if (__props.sessao) {
              _push2(`<button class="p-2 mr-4 transition ease-in-out duration-300 hover:scale-110"${_scopeId}><svg class="h-6 w-6 text-slate-500" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path class="${ssrRenderClass({
                hidden: anexo.value,
                "inline-flex": !anexo.value
              })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"${_scopeId}></path><path class="${ssrRenderClass({
                hidden: !anexo.value,
                "inline-flex": anexo.value
              })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<textarea placeholder="Digite uma mensagem..." class="w-full h-12 px-4 py-3 border-none rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              style: unref(form).message ? null : { display: "none" },
              onClick: sendMessage,
              class: { "opacity-60": unref(form).processing },
              disabled: unref(form).processing
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              show: encerrarModal.value,
              onClose: closeModal,
              "max-width": "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 flex flex-col items-center"${_scopeId2}><svg class="w-20 mb-2 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId2}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"${_scopeId2}></path></svg><h3 class="text-2xl mb-6 text-slate-500"${_scopeId2}>Deseja encerrar o atendimento?</h3><div class="flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    onClick: encerrar,
                    cor: "green"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sim`);
                      } else {
                        return [
                          createTextVNode("Sim")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    onClick: closeModal,
                    cor: "slate"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Não`);
                      } else {
                        return [
                          createTextVNode("Não")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 flex flex-col items-center" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-20 mb-2 text-yellow-400",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        })
                      ])),
                      createVNode("h3", { class: "text-2xl mb-6 text-slate-500" }, "Deseja encerrar o atendimento?"),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(_sfc_main$c, {
                          onClick: encerrar,
                          cor: "green"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$c, {
                          onClick: closeModal,
                          cor: "slate"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Não")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              show: newModal.value,
              onClose: closeNewModal,
              "max-width": "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 flex flex-col items-center"${_scopeId2}><h3 class="text-2xl mb-6 text-slate-500"${_scopeId2}>Iniciar Conversa:</h3><input${ssrRenderAttrs((_temp0 = mergeProps({
                    type: "text",
                    placeholder: "Whatsapp...",
                    value: unref(form).numero,
                    class: "w-56 px-4 py-2 mb-6 text-sm border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                  }, ssrGetDirectiveProps(_ctx, _directive_mask, "(##) #####-####")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(form).numero))))}${_scopeId2}><div class="flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    onClick: newConversa,
                    cor: "green"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sim`);
                      } else {
                        return [
                          createTextVNode("Sim")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    onClick: closeNewModal,
                    cor: "slate"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Não`);
                      } else {
                        return [
                          createTextVNode("Não")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 flex flex-col items-center" }, [
                      createVNode("h3", { class: "text-2xl mb-6 text-slate-500" }, "Iniciar Conversa:"),
                      withDirectives(createVNode("input", {
                        type: "text",
                        placeholder: "Whatsapp...",
                        "onUpdate:modelValue": ($event) => unref(form).numero = $event,
                        class: "w-56 px-4 py-2 mb-6 text-sm border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [_directive_mask, "(##) #####-####"],
                        [vModelText, unref(form).numero]
                      ]),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(_sfc_main$c, {
                          onClick: newConversa,
                          cor: "green"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$c, {
                          onClick: closeNewModal,
                          cor: "slate"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Não")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                ref_key: "messageContainer",
                ref: messageContainer,
                class: "flex-grow p-4 overflow-y-auto bg-gray-100"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.messages, (message, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "mb-4"
                  }, [
                    message.fluxo === "Entrada" && message.contato_id === __props.contato.id ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4 flex justify-start"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "bg-white text-sm text-slate-500 p-2 rounded-lg shadow-md max-w-xs" }, [
                          message.type === "imageMessage" ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "rounded-lg mb-2",
                            src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                            alt: ""
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          message.content ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "px-2 whitespace-pre-wrap",
                            innerHTML: formatMessage(message.content)
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          message.content && message.caption ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "border-t my-2 mx-2 border-slate-400"
                          })) : createCommentVNode("", true),
                          message.type === "audioMessage" ? (openBlock(), createBlock("div", { key: 3 }, [
                            createVNode("audio", { controls: "" }, [
                              createVNode("source", {
                                src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                type: message.mimetype
                              }, null, 8, ["src", "type"]),
                              createTextVNode(" Seu navegador não suporta o elemento de áudio. "),
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])
                          ])) : createCommentVNode("", true),
                          message.type === "videoMessage" ? (openBlock(), createBlock("div", { key: 4 }, [
                            createVNode("video", { controls: "" }, [
                              createVNode("source", {
                                src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                type: message.mimetype
                              }, null, 8, ["src", "type"]),
                              createTextVNode(" Seu navegador não suporta o elemento de Vídeo. "),
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])
                          ])) : createCommentVNode("", true),
                          message.caption ? (openBlock(), createBlock("p", {
                            key: 5,
                            class: "px-2 mt-2 whitespace-pre-wrap",
                            innerHTML: formatMessage(message.caption)
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          message.mimetype ? (openBlock(), createBlock("div", { key: 6 }, [
                            message.mimetype === "application/pdf" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pb-3 pt-4"
                            }, [
                              createVNode("a", {
                                class: "bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                target: "_blank"
                              }, "Abrir", 8, ["href"])
                            ])) : message.type !== "audioMessage" && message.type !== "videoMessage" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "pb-3 pt-4"
                            }, [
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "text-xs text-gray-500 mt-2 pr-5" }, toDisplayString(unref(dataBrasil)(message.created_at)), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    message.fluxo === "Saida" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mb-4 flex justify-end"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "bg-emerald-100 text-slate-500 text-sm p-2 rounded-lg shadow-md max-w-xs" }, [
                          message.type === "image" ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "rounded-lg mb-2",
                            src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                            alt: ""
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          message.type === "ptt" || message.type === "audio" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("audio", { controls: "" }, [
                              createVNode("source", {
                                src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                type: message.mimetype
                              }, null, 8, ["src", "type"]),
                              createTextVNode(" Seu navegador não suporta o elemento de áudio. "),
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])
                          ])) : createCommentVNode("", true),
                          message.type === "video" ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode("video", { controls: "" }, [
                              createVNode("source", {
                                src: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                type: message.mimetype
                              }, null, 8, ["src", "type"]),
                              createTextVNode(" Seu navegador não suporta o elemento de Vídeo. "),
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])
                          ])) : createCommentVNode("", true),
                          message.content && message.type !== "video" ? (openBlock(), createBlock("p", {
                            key: 3,
                            class: "px-2 whitespace-pre-wrap",
                            innerHTML: formatMessage(message.content)
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          message.content && message.caption && message.type !== "video" ? (openBlock(), createBlock("div", {
                            key: 4,
                            class: "border-t my-2 mx-2 border-slate-400"
                          })) : createCommentVNode("", true),
                          message.caption ? (openBlock(), createBlock("p", {
                            key: 5,
                            class: "px-2 mt-2 whitespace-pre-wrap",
                            innerHTML: formatMessage(message.caption)
                          }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                          message.mimetype ? (openBlock(), createBlock("div", { key: 6 }, [
                            message.mimetype === "application/pdf" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pb-3 pt-4"
                            }, [
                              createVNode("a", {
                                class: "bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path,
                                target: "_blank"
                              }, "Abrir", 8, ["href"])
                            ])) : message.type !== "ptt" && message.type !== "audio" && message.type !== "video" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "pb-3 pt-4"
                            }, [
                              createVNode("a", {
                                download: message.caption ?? message.content,
                                class: "bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700",
                                href: _ctx.$page.props.ziggy.url + "/storage/" + message.file_path
                              }, "Baixar", 8, ["download", "href"])
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "text-xs text-right text-gray-500 mt-2 pr-5" }, toDisplayString(unref(dataBrasil)(message.created_at)), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ], 512),
              __props.sessao ? withDirectives((openBlock(), createBlock("div", {
                key: 0,
                class: "w-56 px-4 py-2 absolute left-4 bottom-16 bg-white text-slate-500 border shadow-md rounded-2xl"
              }, [
                createVNode("ul", null, [
                  createVNode(_sfc_main$7, {
                    contato_id: __props.contato.id,
                    sessao_id: __props.sessao.id,
                    onCloseAnexo: ($event) => anexo.value = !anexo.value
                  }, null, 8, ["contato_id", "sessao_id", "onCloseAnexo"]),
                  createVNode(_sfc_main$8, {
                    contato_id: __props.contato.id,
                    sessao_id: __props.sessao.id,
                    onCloseAnexo: ($event) => anexo.value = !anexo.value
                  }, null, 8, ["contato_id", "sessao_id", "onCloseAnexo"]),
                  createVNode(_sfc_main$9, {
                    contato_id: __props.contato.id,
                    sessao_id: __props.sessao.id,
                    onCloseAnexo: ($event) => anexo.value = !anexo.value
                  }, null, 8, ["contato_id", "sessao_id", "onCloseAnexo"]),
                  createVNode(_sfc_main$a, {
                    contato_id: __props.contato.id,
                    sessao_id: __props.sessao.id,
                    onCloseAnexo: ($event) => anexo.value = !anexo.value
                  }, null, 8, ["contato_id", "sessao_id", "onCloseAnexo"])
                ])
              ], 512)), [
                [vShow, anexo.value]
              ]) : createCommentVNode("", true),
              createVNode("div", { class: "py-4 pl-4 pr-6 bg-slate-100 border-t flex items-center" }, [
                __props.sessao ? (openBlock(), createBlock("button", {
                  key: 0,
                  class: "p-2 mr-4 transition ease-in-out duration-300 hover:scale-110",
                  onClick: ($event) => anexo.value = !anexo.value
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "h-6 w-6 text-slate-500",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      class: {
                        hidden: anexo.value,
                        "inline-flex": !anexo.value
                      },
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                    }, null, 2),
                    createVNode("path", {
                      class: {
                        hidden: !anexo.value,
                        "inline-flex": anexo.value
                      },
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    }, null, 2)
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true),
                withDirectives(createVNode("textarea", {
                  placeholder: "Digite uma mensagem...",
                  "onUpdate:modelValue": ($event) => unref(form).message = $event,
                  class: "w-full h-12 px-4 py-3 border-none rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(form).message]
                ]),
                withDirectives(createVNode(_sfc_main$1, {
                  onClick: sendMessage,
                  class: { "opacity-60": unref(form).processing },
                  disabled: unref(form).processing
                }, null, 8, ["class", "disabled"]), [
                  [vShow, unref(form).message]
                ])
              ]),
              createVNode(_sfc_main$b, {
                show: encerrarModal.value,
                onClose: closeModal,
                "max-width": "md"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6 flex flex-col items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-20 mb-2 text-yellow-400",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      })
                    ])),
                    createVNode("h3", { class: "text-2xl mb-6 text-slate-500" }, "Deseja encerrar o atendimento?"),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_sfc_main$c, {
                        onClick: encerrar,
                        cor: "green"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sim")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$c, {
                        onClick: closeModal,
                        cor: "slate"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Não")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show"]),
              createVNode(_sfc_main$b, {
                show: newModal.value,
                onClose: closeNewModal,
                "max-width": "sm"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6 flex flex-col items-center" }, [
                    createVNode("h3", { class: "text-2xl mb-6 text-slate-500" }, "Iniciar Conversa:"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      placeholder: "Whatsapp...",
                      "onUpdate:modelValue": ($event) => unref(form).numero = $event,
                      class: "w-56 px-4 py-2 mb-6 text-sm border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [_directive_mask, "(##) #####-####"],
                      [vModelText, unref(form).numero]
                    ]),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_sfc_main$c, {
                        onClick: newConversa,
                        cor: "green"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sim")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$c, {
                        onClick: closeNewModal,
                        cor: "slate"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Não")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Service/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
