const electron = require("electron")
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600})
  win.webContents.openDevTools()
  win.loadURL('file://' + __dirname + '/index.html');
})
