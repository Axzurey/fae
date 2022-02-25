"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var codemirror_1 = __importDefault(require("../packages/codemirror/codemirror-5.65.2/lib/codemirror"));
require("../packages/codemirror/codemirror-5.65.2/mode/lua/lua.js");
require("../packages/codemirror/codemirror-5.65.2/mode/javascript/javascript.js");
var code = document.getElementById('code');
var mirror = codemirror_1.default.fromTextArea(code, {
    mode: "lua",
    lineNumbers: true,
    lineWrapping: false,
    tabSize: 4,
    indentWithTabs: true,
    indentUnit: 4,
    showCursorWhenSelecting: true,
    theme: 'material-ocean',
});
mirror.setSize('100%', '100%');
//# sourceMappingURL=code.js.map