const {contextBridge, contentTracing} = require('electron');
const os = require("node:os")
const path = require("node:path")

// contextBridge.exposeInMainWorld('os',{
//     homedir: ()=>os.homedir()
// });
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
  })

contextBridge.exposeInMainWorld("os", {
  homedir: () => os.homedir()
})

contextBridge.exposeInMainWorld("path", path)

// contextBridge.exposeInIsolatedWorld('path',{
//     join: (...args)=>path.join(...args)
// })