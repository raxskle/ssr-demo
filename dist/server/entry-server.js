import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, renderToString } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, ref, resolveComponent, unref, createSSRApp } from "vue";
import { defineStore, storeToRefs, createPinia } from "pinia";
import { createMemoryHistory, createRouter as createRouter$1 } from "vue-router";
const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "greetings" }, _attrs))} data-v-90da626e><h1 class="green" data-v-90da626e>${ssrInterpolate(_ctx.msg)}</h1><h3 data-v-90da626e> You’ve successfully created a project with <a href="https://vitejs.dev/" target="_blank" rel="noopener" data-v-90da626e>Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener" data-v-90da626e>Vue 3</a>. </h3></div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/HelloWorld.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-90da626e"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-11277c1d><i data-v-11277c1d>`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`</i><div class="details" data-v-11277c1d><h3 data-v-11277c1d>`);
  ssrRenderSlot(_ctx.$slots, "heading", {}, null, _push, _parent);
  _push(`</h3>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/WelcomeItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const WelcomeItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-11277c1d"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "17",
    fill: "currentColor"
  }, _attrs))}><path d="M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/icons/IconDocumentation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DocumentationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    class: "iconify iconify--mdi",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/icons/IconTooling.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ToolingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "20",
    fill: "currentColor"
  }, _attrs))}><path d="M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/icons/IconEcosystem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EcosystemIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, _attrs))}><path d="M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/icons/IconCommunity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CommunityIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, _attrs))}><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/icons/IconSupport.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SupportIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheWelcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(WelcomeItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(DocumentationIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(DocumentationIcon)
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Documentation `);
          } else {
            return [
              createTextVNode(" Documentation ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Vue’s <a href="https://vuejs.org/" target="_blank" rel="noopener"${_scopeId}>official documentation</a> provides you with all information you need to get started. `);
          } else {
            return [
              createTextVNode(" Vue’s "),
              createVNode("a", {
                href: "https://vuejs.org/",
                target: "_blank",
                rel: "noopener"
              }, "official documentation"),
              createTextVNode(" provides you with all information you need to get started. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WelcomeItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ToolingIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ToolingIcon)
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tooling `);
          } else {
            return [
              createTextVNode(" Tooling ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This project is served and bundled with <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener"${_scopeId}>Vite</a>. The recommended IDE setup is <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"${_scopeId}>VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener"${_scopeId}>Volar</a>. If you need to test your components and web pages, check out <a href="https://www.cypress.io/" target="_blank" rel="noopener"${_scopeId}>Cypress</a> and <a href="https://on.cypress.io/component" target="_blank" rel="noopener"${_scopeId}>Cypress Component Testing</a>. <br${_scopeId}> More instructions are available in <code${_scopeId}>README.md</code>. `);
          } else {
            return [
              createTextVNode(" This project is served and bundled with "),
              createVNode("a", {
                href: "https://vitejs.dev/guide/features.html",
                target: "_blank",
                rel: "noopener"
              }, "Vite"),
              createTextVNode(". The recommended IDE setup is "),
              createVNode("a", {
                href: "https://code.visualstudio.com/",
                target: "_blank",
                rel: "noopener"
              }, "VSCode"),
              createTextVNode(" + "),
              createVNode("a", {
                href: "https://github.com/johnsoncodehk/volar",
                target: "_blank",
                rel: "noopener"
              }, "Volar"),
              createTextVNode(". If you need to test your components and web pages, check out "),
              createVNode("a", {
                href: "https://www.cypress.io/",
                target: "_blank",
                rel: "noopener"
              }, "Cypress"),
              createTextVNode(" and "),
              createVNode("a", {
                href: "https://on.cypress.io/component",
                target: "_blank",
                rel: "noopener"
              }, "Cypress Component Testing"),
              createTextVNode(". "),
              createVNode("br"),
              createTextVNode(" More instructions are available in "),
              createVNode("code", null, "README.md"),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WelcomeItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EcosystemIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EcosystemIcon)
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ecosystem `);
          } else {
            return [
              createTextVNode(" Ecosystem ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get official tools and libraries for your project: <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Pinia</a>, <a href="https://router.vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Vue Router</a>, <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Vue Test Utils</a>, and <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"${_scopeId}>Vue Dev Tools</a>. If you need more resources, we suggest paying <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"${_scopeId}>Awesome Vue</a> a visit. `);
          } else {
            return [
              createTextVNode(" Get official tools and libraries for your project: "),
              createVNode("a", {
                href: "https://pinia.vuejs.org/",
                target: "_blank",
                rel: "noopener"
              }, "Pinia"),
              createTextVNode(", "),
              createVNode("a", {
                href: "https://router.vuejs.org/",
                target: "_blank",
                rel: "noopener"
              }, "Vue Router"),
              createTextVNode(", "),
              createVNode("a", {
                href: "https://test-utils.vuejs.org/",
                target: "_blank",
                rel: "noopener"
              }, "Vue Test Utils"),
              createTextVNode(", and "),
              createVNode("a", {
                href: "https://github.com/vuejs/devtools",
                target: "_blank",
                rel: "noopener"
              }, "Vue Dev Tools"),
              createTextVNode(". If you need more resources, we suggest paying "),
              createVNode("a", {
                href: "https://github.com/vuejs/awesome-vue",
                target: "_blank",
                rel: "noopener"
              }, "Awesome Vue"),
              createTextVNode(" a visit. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WelcomeItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CommunityIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CommunityIcon)
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Community `);
          } else {
            return [
              createTextVNode(" Community ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Got stuck? Ask your question on <a href="https://chat.vuejs.org" target="_blank" rel="noopener"${_scopeId}>Vue Land</a>, our official Discord server, or <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"${_scopeId}>StackOverflow</a>. You should also subscribe to <a href="https://news.vuejs.org" target="_blank" rel="noopener"${_scopeId}>our mailing list</a> and follow the official <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"${_scopeId}>@vuejs</a> twitter account for latest news in the Vue world. `);
          } else {
            return [
              createTextVNode(" Got stuck? Ask your question on "),
              createVNode("a", {
                href: "https://chat.vuejs.org",
                target: "_blank",
                rel: "noopener"
              }, "Vue Land"),
              createTextVNode(", our official Discord server, or "),
              createVNode("a", {
                href: "https://stackoverflow.com/questions/tagged/vue.js",
                target: "_blank",
                rel: "noopener"
              }, "StackOverflow"),
              createTextVNode(". You should also subscribe to "),
              createVNode("a", {
                href: "https://news.vuejs.org",
                target: "_blank",
                rel: "noopener"
              }, "our mailing list"),
              createTextVNode(" and follow the official "),
              createVNode("a", {
                href: "https://twitter.com/vuejs",
                target: "_blank",
                rel: "noopener"
              }, "@vuejs"),
              createTextVNode(" twitter account for latest news in the Vue world. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WelcomeItem, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SupportIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SupportIcon)
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Support Vue `);
          } else {
            return [
              createTextVNode(" Support Vue ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` As an independent project, Vue relies on community backing for its sustainability. You can help us by <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"${_scopeId}>becoming a sponsor</a>. `);
          } else {
            return [
              createTextVNode(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
              createVNode("a", {
                href: "https://vuejs.org/sponsor/",
                target: "_blank",
                rel: "noopener"
              }, "becoming a sponsor"),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/components/TheWelcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMainStore = defineStore("main", () => {
  const title = ref("title");
  const loadSyncData = (syncData) => {
    title.value = syncData.msg;
  };
  return {
    title,
    loadSyncData
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const { title } = storeToRefs(mainStore);
    console.log("render App");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[--><header data-v-c8b3b470><img alt="Vue logo" class="logo"${ssrRenderAttr("src", _imports_0)} width="125" height="125" data-v-c8b3b470><div class="wrapper" data-v-c8b3b470>`);
      _push(ssrRenderComponent(HelloWorld, { msg: unref(title) }, null, _parent));
      _push(`</div></header><main data-v-c8b3b470>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main><nav data-v-c8b3b470>`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go to Index `);
          } else {
            return [
              createTextVNode(" Go to Index ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, { to: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go to User `);
          } else {
            return [
              createTextVNode(" Go to User ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8b3b470"]]);
function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  app.use(pinia);
  return { app, pinia };
}
const createServerRouter = () => {
  return createRouter(createMemoryHistory());
};
const createRouter = (type) => createRouter$1({
  history: type,
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: "首页",
        keepAlive: true
      },
      component: () => import("./assets/IndexPage-BxLvAR_3.js")
    },
    {
      path: "/user",
      name: "user",
      meta: {
        title: "用户中心",
        keepAlive: true
      },
      component: () => import("./assets/UserPage-CM45_Ggv.js")
    }
  ]
});
async function render(ctx, syncData, manifest = {}) {
  const { app, pinia } = createApp();
  const router = createServerRouter();
  app.use(router);
  await router.push(ctx.path);
  await router.isReady();
  const store = useMainStore(pinia);
  store.loadSyncData(syncData);
  const renderCtx = {};
  const html = await renderToString(app, renderCtx);
  const state = `
    <script>
      window.__pinia = ${JSON.stringify(pinia.state.value)};
    <\/script>
    `;
  const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest);
  return [html, state, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  if (modules === void 0) throw new Error();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
export {
  _export_sfc as _,
  render
};
//# sourceMappingURL=entry-server.js.map
