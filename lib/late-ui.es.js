import { openBlock, createElementBlock } from "vue";
const version = "1.0.3";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, " table ");
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Table.install = (Vue) => {
  Vue.component(Table.name, Table);
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, " Modal ");
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Modal.install = (Vue) => {
  Vue.component(Modal.name, Modal);
};
const components = {
  Table,
  Modal
};
const install = (Vue) => {
  if (install.installed)
    return;
  Object.values(components).map((component) => Vue.component(component.name, component));
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.vue);
}
var index = {
  version,
  install
};
export { Modal, Table, index as default };
