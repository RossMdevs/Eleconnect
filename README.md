###### Eleconnect, simple base shell for starter devs.

# Eleconnect

Eleconnect is a simple based electron app shell.

### This project is  open sourced!

## Proudly developed with:
 
 * Electron
 * NodeJS
 
##### Do not mess with packagine lines in package.json!
 
 # Before Building!
  Modify the main.js, go to line.
  
  To load a file, use ``win.loadFile('index.html')``
  To load a URL, use  ``win.loadURL('index.html')``
  
  If your using a URL make sure it's active and live, if using a file make sure to edit the default index.html
 ## Building
Build the project: `electron-packager . --overwrite --icon=assets/icons/win/icon.ico --out=release-builds`
Build the installer (optional): `node installers/windows/createinstaller.js`


#### Developed by Intel & Ross




