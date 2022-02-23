import fs from 'fs';

export default abstract class luaStreamer {
    static loadFilesInDirectory(directory: directory) {
        let files: luaFile[] = [];
        
        let directoryFiles: File[] = []
        //fs...
    }
    static saveFilesToDirectory(directory: directory, files: luaFile[]) {
        files.forEach(file => {
            //fs...
        })
    }
}