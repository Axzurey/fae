"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var codemirror_1 = __importDefault(require("codemirror"));
var code = document.getElementById('code');
var mirror = codemirror_1.default.fromTextArea(code, {
    mode: "lua",
    lineNumbers: true,
    lineWrapping: true,
    showCursorWhenSelecting: true,
});
mirror.save();
mirror.refresh();
//# sourceMappingURL=code.js.map