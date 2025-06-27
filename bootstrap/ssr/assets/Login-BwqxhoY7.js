import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$3 } from "./ApplicationLogo-CUNc9et3.js";
import { _ as _sfc_main$6 } from "./InputError-BIoZcjri.js";
import { _ as _sfc_main$4 } from "./InputLabel-DNtlKcbO.js";
import { _ as _sfc_main$5 } from "./InputSoftUi-DRY4QHe-.js";
import { _ as _sfc_main$7 } from "./Checkbox-g3fT0BRB.js";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><div class="container"><div class="flex flex-wrap -mx-3"><div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12"><a href="javascript:;" target="_blank" class="mr-6 text-slate-400"><span class="text-lg fab fa-dribbble"></span></a><a href="javascript:;" target="_blank" class="mr-6 text-slate-400"><span class="text-lg fab fa-twitter"></span></a><a href="javascript:;" target="_blank" class="mr-6 text-slate-400"><span class="text-lg fab fa-instagram"></span></a><a href="javascript:;" target="_blank" class="mr-6 text-slate-400"><span class="text-lg fab fa-pinterest"></span></a><a href="javascript:;" target="_blank" class="mr-6 text-slate-400"><span class="text-lg fab fa-github"></span></a></div></div><div class="flex flex-wrap -mx-3"><div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0"><p class="mb-0 text-slate-400"> Copyright © 2024 Soft by Creative Tim. </p></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/FooterAuthLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterAuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "AuthLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<body${ssrRenderAttrs(mergeProps({ class: "m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500" }, _attrs))}><main class="mt-0 transition-all duration-200 ease-soft-in-out">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterAuthLayout, null, null, _parent));
      _push(`</body>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.__("login.signin")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}><div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen"${_scopeId}><div class="container z-10"${_scopeId}><div class="flex flex-wrap mt-0 -mx-3"${_scopeId}><div class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12"${_scopeId}><div class="relative flex flex-col min-w-0 mt-5 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { class: "w-56" }, null, _parent2, _scopeId));
            _push2(`<p class="mb-0 mt-3"${_scopeId}>${ssrInterpolate(_ctx.__("login.title"))}</p></div><div class="flex-auto p-6"${_scopeId}><form role="form"${_scopeId}><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "email",
              value: _ctx.__("login.email")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              placeholder: _ctx.__("login.email"),
              "aria-label": "Email",
              "aria-describedby": "email-addon",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              for: "password",
              value: _ctx.__("login.password")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              placeholder: _ctx.__("login.password"),
              "aria-label": "Password",
              "aria-describedby": "password-addon",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-h-6 mb-0.5 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.__("login.remember"))}</span></label></div><div class="text-center"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-sky-600 to-cyan-300 hover:scale-102 hover:shadow-soft-xs active:opacity-85"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(_ctx.__("login.signin"))}</button></div></form></div><div class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(`<p class="mx-auto mb-6 leading-normal text-sm"${_scopeId}>${ssrInterpolate(_ctx.__("login.notaccount"))} `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("register"),
                class: "relative z-10 font-semibold text-cyan-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("login.signup"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("login.signup")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12"${_scopeId}><div class="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block"${_scopeId}><div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10" style="${ssrRenderStyle({ "background-image": "url('../assets/imagens/bg-atendimento.png')" })}"${_scopeId}></div></div></div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode("div", { class: "relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen" }, [
                  createVNode("div", { class: "container z-10" }, [
                    createVNode("div", { class: "flex flex-wrap mt-0 -mx-3" }, [
                      createVNode("div", { class: "flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12" }, [
                        createVNode("div", { class: "relative flex flex-col min-w-0 mt-5 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" }, [
                          createVNode("div", { class: "p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl" }, [
                            createVNode(_sfc_main$3, { class: "w-56" }),
                            createVNode("p", { class: "mb-0 mt-3" }, toDisplayString(_ctx.__("login.title")), 1)
                          ]),
                          createVNode("div", { class: "flex-auto p-6" }, [
                            createVNode("form", {
                              role: "form",
                              onSubmit: withModifiers(submit, ["prevent"])
                            }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_sfc_main$4, {
                                  for: "email",
                                  value: _ctx.__("login.email")
                                }, null, 8, ["value"]),
                                createVNode(_sfc_main$5, {
                                  id: "email",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  type: "email",
                                  class: "mt-1 block w-full",
                                  placeholder: _ctx.__("login.email"),
                                  "aria-label": "Email",
                                  "aria-describedby": "email-addon",
                                  required: "",
                                  autofocus: "",
                                  autocomplete: "username"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                createVNode(_sfc_main$6, {
                                  class: "mt-2",
                                  message: unref(form).errors.email
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_sfc_main$4, {
                                  for: "password",
                                  value: _ctx.__("login.password")
                                }, null, 8, ["value"]),
                                createVNode(_sfc_main$5, {
                                  id: "password",
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  class: "mt-1 block w-full",
                                  placeholder: _ctx.__("login.password"),
                                  "aria-label": "Password",
                                  "aria-describedby": "password-addon",
                                  required: "",
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                                createVNode(_sfc_main$6, {
                                  class: "mt-2",
                                  message: unref(form).errors.password
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "min-h-6 mb-0.5 block" }, [
                                createVNode("label", { class: "flex items-center" }, [
                                  createVNode(_sfc_main$7, {
                                    checked: unref(form).remember,
                                    "onUpdate:checked": ($event) => unref(form).remember = $event,
                                    name: "remember"
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode("span", { class: "ms-2 text-sm text-gray-600" }, toDisplayString(_ctx.__("login.remember")), 1)
                                ])
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("button", {
                                  type: "submit",
                                  class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-sky-600 to-cyan-300 hover:scale-102 hover:shadow-soft-xs active:opacity-85"],
                                  disabled: unref(form).processing
                                }, toDisplayString(_ctx.__("login.signin")), 11, ["disabled"])
                              ])
                            ], 32)
                          ]),
                          createVNode("div", { class: "p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2" }, [
                            __props.canResetPassword ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mx-auto mb-6 leading-normal text-sm"
                            }, [
                              createTextVNode(toDisplayString(_ctx.__("login.notaccount")) + " ", 1),
                              createVNode(unref(Link), {
                                href: _ctx.route("register"),
                                class: "relative z-10 font-semibold text-cyan-600"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.__("login.signup")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12" }, [
                        createVNode("div", { class: "absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block" }, [
                          createVNode("div", {
                            class: "absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10",
                            style: { "background-image": "url('../assets/imagens/bg-atendimento.png')" }
                          })
                        ])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
