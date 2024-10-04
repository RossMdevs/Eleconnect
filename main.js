 //handle setupevents as quickly as possible
 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }

const {app, BrowserWindow} = require('electron')
  
  let win
  
  function createWindow () {
    win = new BrowserWindow({width: 800, height: 600, frame: false}) // specifies height, width and if the windows is borderless or not. 
  // Frame allows access to context tools like console, exit, devtools, and other stuff for development purposes. You should hard bake your forward and back protocols into the app.


   // Use // to comment out whichever win.load you're not using. One loads a static-file, one loads a URL from the WAN/WWW.
   // win.loadFile('index.html') // Loads a file, DNS/Internet not required.
   //win.loadURL("http://127.0.0.1") // (Requires Internet Connectivity or a resolution w./ DNS to the website you choose).
  
    win.on('closed', () => {
      win = null
    })
  }
  
  app.on('ready', createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
