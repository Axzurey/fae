import CodeMirror from '../packages/codemirror/codemirror-5.65.2/lib/codemirror';
import '../packages/codemirror/codemirror-5.65.2/mode/lua/lua.js'
import '../packages/codemirror/codemirror-5.65.2/mode/javascript/javascript.js'

let code = document.getElementById('code')

let mirror = CodeMirror.fromTextArea(code as HTMLTextAreaElement, {
    mode: "lua",
    lineNumbers: true,
    lineWrapping: false,
    tabSize: 4,
    indentWithTabs: true,
    indentUnit: 4,
    showCursorWhenSelecting: true,
    theme: 'material-ocean',
})

mirror.setSize('100%', '100%');