import CodeMirror from 'codemirror';

let code = document.getElementById('code')

let mirror = CodeMirror.fromTextArea(code as HTMLTextAreaElement, {
    mode: "lua",
    lineNumbers: true,
    lineWrapping: true,
    showCursorWhenSelecting: true,
})

mirror.save()

mirror.refresh()