const { app, BrowserWindow, Menu } = require("electron");
const path = require('path');

const isMac = process.platform == "darwin"; //mac işletim sistemleri için
const isDev = process.env.MODE !== "yayin";

const createWindow = () => {
  const win = new BrowserWindow({
    width: isDev ? 1200 : 800,
    height: isDev ? 1000 : 650,
    webPreferences: {
      preload:path.join(__dirname,'preload.js')
    }
  });

  win.loadFile("./renderer/index.html");
  if (isDev) {
    win.webContents.openDevTools();
  }
};

const hakkimizdaWindow = () => {
  const win2 = new BrowserWindow({
    width: 500,
    height: 500,
    title : 'Biz Kimiz ?'
  });

  win2.loadFile("./renderer/hakkimizda.html");
};

app.whenReady().then(() => {
  createWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
const menu = [
  {
    label: app.name,
    submenu: [
      {
        label: "Hakkımızda",
        click: () => {
          hakkimizdaWindow();
        },
      },
    ],
  },
  {
    label: "Dosya",
    submenu: [
      {
        label: "Çıkış",
        click: () => app.quit(),
        accelerator: "CmdOrCtrl+W",
      },
    ],
  },
];

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
