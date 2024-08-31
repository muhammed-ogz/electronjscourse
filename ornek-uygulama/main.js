const { app, BrowserWindow } = require("electron");

const isMac = process.platform == "darwin"; //mac işletim sistemleri için
const isDev = process.env.MODE !== 'yayin';

const createWindow = () => {
  const win = new BrowserWindow({
    width: isDev ? 1200:800,
    height: isDev ? 1000:650,
  });

  win.loadFile("./renderer/index.html");
  if(isDev){
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
