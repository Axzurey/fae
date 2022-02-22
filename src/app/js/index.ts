import {app, ipcMain, BrowserWindow} from 'electron'
import electronReload from 'electron-reload';
const path = require('path')

async function main() {
    const window = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    window.loadFile(path.join(__dirname, '../html/index.html'));
    window.show()
}

app.whenReady().then(main);
electronReload(__dirname, {})