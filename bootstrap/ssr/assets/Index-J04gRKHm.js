import { ref, watch, mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, unref, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./ApplicationLayout-bmOej9Km.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./ItemBreadcrumb-eEQH6PnN.js";
import { B as ButtonTable } from "./ButtonTable-CGuqWcoP.js";
import { usePage, useForm } from "@inertiajs/vue3";
import axios from "axios";
import { _ as _sfc_main$5 } from "./Modal-CK8ZWp_l.js";
import { _ as _sfc_main$6 } from "./ButtonPadrao-CEQRBWs5.js";
import _sfc_main$7 from "./CreateInstanciaForm-jpR6o-lI.js";
import { _ as _sfc_main$8 } from "./LinkTable-B94vKGjb.js";
import "./ApplicationLogo-CUNc9et3.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./InputLabel-DNtlKcbO.js";
import "./InputError-BIoZcjri.js";
import "./ButtonSave-DVEwRSxU.js";
import "./InputSoftUi-DRY4QHe-.js";
import "./SelectEmpresaFilter-DLRa8pGu.js";
import "./Checkbox-g3fT0BRB.js";
const _sfc_main$1 = {
  __name: "ButtonExcluindo",
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
    classes.value = "h-8 px-3 rounded-lg bg-gradient-to-tl from-green-600 to-green-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300";
    document.getElementById("buttomSave");
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
          _push(`<svg class="animate-spin ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (loadSave.value) {
        _push(`<span>Excluindo...</span>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Softui/Button/ButtonExcluindo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    instancias: {},
    checkAtendimento: {
      type: Boolean
    },
    empresas: {}
  },
  setup(__props) {
    const qrcode = ref(null);
    const instanciaID = ref(null);
    const deleteInstancia = ref(false);
    const showQrcode = ref(false);
    const countdown = ref(60);
    let timer = null;
    const form = useForm({
      name: ""
    });
    const confirmDeleteInstancia = (id) => {
      deleteInstancia.value = true;
      instanciaID.value = id;
    };
    const startCountdown = () => {
      countdown.value = 60;
      timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
          closeModal();
        }
      }, 1e3);
    };
    const connect = (id) => {
      showQrcode.value = true;
      axios.get(route("instancia.connect", id)).then((res) => {
        qrcode.value = res.data.qrcode;
        startCountdown();
      }).catch((error) => {
        console.log(error.data);
      });
    };
    const closeModal = () => {
      showQrcode.value = false;
      clearInterval(timer);
      window.location.reload();
    };
    const closeDeleteModal = () => {
      deleteInstancia.value = false;
      instanciaID.value = null;
    };
    const deletar = () => {
      form.delete(route("instancia.destroy", instanciaID.value), {
        preserveScroll: true,
        onSuccess: () => closeDeleteModal(),
        onError: () => closeDeleteModal(),
        onFinish: () => closeDeleteModal()
      });
    };
    const logout = (id) => {
      form.get(route("instancia.logout", id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Instâncias" }, _attrs), {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: "",
              active: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Instâncias`);
                } else {
                  return [
                    createTextVNode("Instâncias")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ol><h6 class="mb-0 font-bold capitalize"${_scopeId}>Instâncias</h6>`);
          } else {
            return [
              createVNode("ol", { class: "flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16" }, [
                createVNode(_sfc_main$3, {
                  href: _ctx.route("dashboard")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("sidebar.link.dashboard")), 1)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$3, {
                  href: "",
                  active: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("Instâncias")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h6", { class: "mb-0 font-bold capitalize" }, "Instâncias")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full px-6 py-6 mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: showQrcode.value,
              onClose: closeModal,
              "max-width": "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><h6 class="font-bold"${_scopeId2}>Escaneie o QR Code com o WhatsApp:</h6><div class="my-4"${_scopeId2}></div>`);
                  if (qrcode.value) {
                    _push3(`<div${_scopeId2}><img${ssrRenderAttr("src", qrcode.value)} class="w-full" alt="QR Code"${_scopeId2}></div>`);
                  } else {
                    _push3(`<h2 class="font-semibold text-lg"${_scopeId2}> Gerando QR code. </h2>`);
                  }
                  if (qrcode.value) {
                    _push3(`<div class="mt-6 flex justify-between"${_scopeId2}><p${_scopeId2}>Fechando em ${ssrInterpolate(countdown.value)} segundos...</p>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      onClick: closeModal,
                      cor: "slate"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId3}></path></svg> Fechar `);
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
                            createTextVNode(" Fechar ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h6", { class: "font-bold" }, "Escaneie o QR Code com o WhatsApp:"),
                      createVNode("div", { class: "my-4" }),
                      qrcode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("img", {
                          src: qrcode.value,
                          class: "w-full",
                          alt: "QR Code"
                        }, null, 8, ["src"])
                      ])) : (openBlock(), createBlock("h2", {
                        key: 1,
                        class: "font-semibold text-lg"
                      }, " Gerando QR code. ")),
                      qrcode.value ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "mt-6 flex justify-between"
                      }, [
                        createVNode("p", null, "Fechando em " + toDisplayString(countdown.value) + " segundos...", 1),
                        createVNode(_sfc_main$6, {
                          onClick: closeModal,
                          cor: "slate"
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
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: deleteInstancia.value,
              onClose: closeDeleteModal,
              "max-width": "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><div class="flex justify-center"${_scopeId2}><svg class="w-24 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"${_scopeId2}></path></svg></div><h6 class="font-semibold text-slate-500 text-center"${_scopeId2}> Tem certeza que gostaria de Excluir? </h6><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    onClick: closeDeleteModal,
                    cor: "red"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"${_scopeId3}></path></svg> Não `);
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
                          createTextVNode(" Não ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    cor: "green",
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deletar
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
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "flex justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-24 text-orange-500",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                          })
                        ]))
                      ]),
                      createVNode("h6", { class: "font-semibold text-slate-500 text-center" }, " Tem certeza que gostaria de Excluir? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$6, {
                          onClick: closeDeleteModal,
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
                            createTextVNode(" Não ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: deletar
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              empresas: __props.empresas,
              "check-atendimento": __props.checkAtendimento
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap md:mt-6 -mx-3"${_scopeId}><!--[-->`);
            ssrRenderList(__props.instancias, (instancia) => {
              _push2(`<div class="max-w-full px-3 mb-6 w-full md:w-1/3"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="flex-auto p-4"${_scopeId}><div class="flex flex-row justify-between -mx-3"${_scopeId}><div class="max-w-full px-3"${_scopeId}><div${_scopeId}><h5 class="mb-0 text-lg font-bold"${_scopeId}>${ssrInterpolate(instancia.nome)}</h5><p class="mb-2 mt-0 text-xs"${_scopeId}>${ssrInterpolate(instancia.empresa.name)}</p></div></div><div class="px-3"${_scopeId}><div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500"${_scopeId}><svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"${_scopeId}></path></svg></div></div></div>`);
              if (instancia.conection.profileName) {
                _push2(`<div class="mt-3 mb-5 flex justify-between items-center"${_scopeId}><img${ssrRenderAttr("src", instancia.conection.profilePicUrl)} class="w-12 h-12 rounded-full"${_scopeId}><div class="pl-3 grow font-semibold text-sm"${_scopeId}>${ssrInterpolate(instancia.conection.profileName)} <br${_scopeId}> ${ssrInterpolate(instancia.conection.ownerJid)}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-3 mb-5 flex justify-between items-center"${_scopeId}>`);
              if (instancia.conection.connectionStatus === "open") {
                _push2(`<span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}> Conectado </span>`);
              } else if (instancia.conection.connectionStatus === "close") {
                _push2(`<span class="bg-gradient-to-tl from-red-700 to-red-500 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}> Desconectado </span>`);
              } else if (instancia.conection.connectionStatus === "connecting") {
                _push2(`<span class="bg-gradient-to-tl from-yellow-600 to-yellow-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}> Conectando </span>`);
              } else {
                _push2(`<span class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"${_scopeId}>${ssrInterpolate(instancia.conection.connectionStatus)}</span>`);
              }
              _push2(`<div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"${_scopeId}></path></svg><p class="pl-1 font-sans font-semibold leading-normal text-sm"${_scopeId}>${ssrInterpolate(instancia.conection._count.Contact)}</p></div><div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"${_scopeId}></path></svg><p class="pl-1 font-sans font-semibold leading-normal text-sm"${_scopeId}>${ssrInterpolate(instancia.conection._count.Message)}</p></div></div><div class="flex justify-between items-center border-t pt-3"${_scopeId}><div class="text-xs text-slate-400 grow flex items-center gap-4"${_scopeId}>`);
              if (instancia.atendimento === "S") {
                _push2(`<div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"${_scopeId}></path></svg><p class="pl-1 font-sans font-semibold leading-normal"${_scopeId}> Atendimento </p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (instancia.campanha === "S") {
                _push2(`<div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"${_scopeId}></path></svg><p class="pl-1 font-sans font-semibold leading-normal"${_scopeId}> Campanha </p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex gap-3 items-center"${_scopeId}>`);
              if (instancia.conection.connectionStatus !== "open") {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  href: _ctx.route("instancia.conection", instancia.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (instancia.conection.connectionStatus !== "open") {
                _push2(ssrRenderComponent(ButtonTable, {
                  onClick: ($event) => connect(instancia.id),
                  disabled: showQrcode.value
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (instancia.conection.connectionStatus === "open") {
                _push2(ssrRenderComponent(ButtonTable, {
                  onClick: ($event) => logout(instancia.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "h-6 transition ease-in-out duration-300 hover:scale-125"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(ButtonTable, {
                onClick: ($event) => confirmDeleteInstancia(instancia.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-6 py-6 mx-auto" }, [
                createVNode(_sfc_main$5, {
                  show: showQrcode.value,
                  onClose: closeModal,
                  "max-width": "md"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h6", { class: "font-bold" }, "Escaneie o QR Code com o WhatsApp:"),
                      createVNode("div", { class: "my-4" }),
                      qrcode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("img", {
                          src: qrcode.value,
                          class: "w-full",
                          alt: "QR Code"
                        }, null, 8, ["src"])
                      ])) : (openBlock(), createBlock("h2", {
                        key: 1,
                        class: "font-semibold text-lg"
                      }, " Gerando QR code. ")),
                      qrcode.value ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "mt-6 flex justify-between"
                      }, [
                        createVNode("p", null, "Fechando em " + toDisplayString(countdown.value) + " segundos...", 1),
                        createVNode(_sfc_main$6, {
                          onClick: closeModal,
                          cor: "slate"
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
                            createTextVNode(" Fechar ")
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode(_sfc_main$5, {
                  show: deleteInstancia.value,
                  onClose: closeDeleteModal,
                  "max-width": "md"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("div", { class: "flex justify-center" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-24 text-orange-500",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                          })
                        ]))
                      ]),
                      createVNode("h6", { class: "font-semibold text-slate-500 text-center" }, " Tem certeza que gostaria de Excluir? "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$6, {
                          onClick: closeDeleteModal,
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
                            createTextVNode(" Não ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, {
                          cor: "green",
                          class: ["ms-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: deletar
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sim")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["show"]),
                createVNode("div", { class: "flex flex-wrap gap-4" }, [
                  createVNode(_sfc_main$7, {
                    empresas: __props.empresas,
                    "check-atendimento": __props.checkAtendimento
                  }, null, 8, ["empresas", "check-atendimento"])
                ]),
                createVNode("div", { class: "flex flex-wrap md:mt-6 -mx-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.instancias, (instancia) => {
                    return openBlock(), createBlock("div", { class: "max-w-full px-3 mb-6 w-full md:w-1/3" }, [
                      createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border" }, [
                        createVNode("div", { class: "flex-auto p-4" }, [
                          createVNode("div", { class: "flex flex-row justify-between -mx-3" }, [
                            createVNode("div", { class: "max-w-full px-3" }, [
                              createVNode("div", null, [
                                createVNode("h5", { class: "mb-0 text-lg font-bold" }, toDisplayString(instancia.nome), 1),
                                createVNode("p", { class: "mb-2 mt-0 text-xs" }, toDisplayString(instancia.empresa.name), 1)
                              ])
                            ]),
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-10 text-white",
                                  "aria-hidden": "true",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])
                            ])
                          ]),
                          instancia.conection.profileName ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-3 mb-5 flex justify-between items-center"
                          }, [
                            createVNode("img", {
                              src: instancia.conection.profilePicUrl,
                              class: "w-12 h-12 rounded-full"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "pl-3 grow font-semibold text-sm" }, [
                              createTextVNode(toDisplayString(instancia.conection.profileName) + " ", 1),
                              createVNode("br"),
                              createTextVNode(" " + toDisplayString(instancia.conection.ownerJid), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-3 mb-5 flex justify-between items-center" }, [
                            instancia.conection.connectionStatus === "open" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                            }, " Conectado ")) : instancia.conection.connectionStatus === "close" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "bg-gradient-to-tl from-red-700 to-red-500 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                            }, " Desconectado ")) : instancia.conection.connectionStatus === "connecting" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "bg-gradient-to-tl from-yellow-600 to-yellow-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                            }, " Conectando ")) : (openBlock(), createBlock("span", {
                              key: 3,
                              class: "bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                            }, toDisplayString(instancia.conection.connectionStatus), 1)),
                            createVNode("div", { class: "flex items-center" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "size-6"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                })
                              ])),
                              createVNode("p", { class: "pl-1 font-sans font-semibold leading-normal text-sm" }, toDisplayString(instancia.conection._count.Contact), 1)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "size-6"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                })
                              ])),
                              createVNode("p", { class: "pl-1 font-sans font-semibold leading-normal text-sm" }, toDisplayString(instancia.conection._count.Message), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex justify-between items-center border-t pt-3" }, [
                            createVNode("div", { class: "text-xs text-slate-400 grow flex items-center gap-4" }, [
                              instancia.atendimento === "S" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor",
                                  class: "size-5"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                  })
                                ])),
                                createVNode("p", { class: "pl-1 font-sans font-semibold leading-normal" }, " Atendimento ")
                              ])) : createCommentVNode("", true),
                              instancia.campanha === "S" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor",
                                  class: "size-5"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                  })
                                ])),
                                createVNode("p", { class: "pl-1 font-sans font-semibold leading-normal" }, " Campanha ")
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex gap-3 items-center" }, [
                              instancia.conection.connectionStatus !== "open" ? (openBlock(), createBlock(_sfc_main$8, {
                                key: 0,
                                href: _ctx.route("instancia.conection", instancia.id)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                    class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                    })
                                  ]))
                                ]),
                                _: 2
                              }, 1032, ["href"])) : createCommentVNode("", true),
                              instancia.conection.connectionStatus !== "open" ? (openBlock(), createBlock(ButtonTable, {
                                key: 1,
                                onClick: ($event) => connect(instancia.id),
                                disabled: showQrcode.value
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                    class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                                    }),
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                                    })
                                  ]))
                                ]),
                                _: 2
                              }, 1032, ["onClick", "disabled"])) : createCommentVNode("", true),
                              instancia.conection.connectionStatus === "open" ? (openBlock(), createBlock(ButtonTable, {
                                key: 2,
                                onClick: ($event) => logout(instancia.id)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                    class: "h-6 transition ease-in-out duration-300 hover:scale-125"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    })
                                  ]))
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              createVNode(ButtonTable, {
                                onClick: ($event) => confirmDeleteInstancia(instancia.id)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "2",
                                    stroke: "currentColor",
                                    class: "h-5 transition ease-in-out duration-300 hover:scale-125"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    })
                                  ]))
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Instancia/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
