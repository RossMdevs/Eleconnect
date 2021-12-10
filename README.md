###### Eleconnect, simple base shell for starter devs.

# Eleconnect

Eleconnect is a simple based electron app shell.

 # ⚠️ Read ME ⚠️
 
 ### Do not touch package.json, it contains critical assets to keep the package up to date. Modifying the package.json will result in unstability and security risks.

## Proudly developed with:
 
 * Electron
 * NdeJS
 

 
 # Before Building!
  Open the main.js, go to line 15.
  
  To load a file, use ``win.loadFile('index.html')``
  To load a URL, use  ``win.loadURL('index.html')``
  
  If your using a URL make sure it's active and live, if using a file make sure to edit the default index.html
 ## Building
Build the project: `electron-packager . --overwrite --icon=assets/icons/win/icon.ico --out=release-builds`
Build the installer (optional): `node installers/windows/createinstaller.js`


#### Developed by Intel & Ross




