interface luaFile {
    content: string,
    name: string,
}

type directory = string

enum routineTypes {
    keybind, time, programLaunched
}