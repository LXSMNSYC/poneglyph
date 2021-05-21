var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// pages/index.tsx
var import_react = __toModule(require("react"));
function Index() {
  return /* @__PURE__ */ import_react.default.createElement("main", null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Hello World"));
}

// .poneglyph/development/tmp.node/index.tsx
var import_poneglyph = __toModule(require("poneglyph"));
var import_http = __toModule(require("http"));
var globalConfig = {
  buildDir: ".poneglyph\\development\\browser"
};
var _a, _b;
var pages = [{
  path: "/",
  resourceID: "0",
  entrypoint: "index",
  Component: Index,
  getPageData: (_a = void 0) != null ? _a : void 0
}, {
  path: "/index",
  resourceID: "0",
  entrypoint: "index",
  Component: Index,
  getPageData: (_b = void 0) != null ? _b : void 0
}];
import_http.default.createServer((0, import_poneglyph.createServer)(globalConfig, pages)).listen(3e3);
//# sourceMappingURL=index.js.map