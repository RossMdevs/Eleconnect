###### Eleconnect, simple base shell for starter devs.

# Eleconnect

> We work with [PasswordGen](https://github.com/RossMdevs/Password-Generator)

Eleconnect is a simple based electron app shell.

 # ⚠️ Read ME ⚠️
 
 ### Do not touch package.json, it contains critical assets to keep the package up to date. Modifying the package.json will result in unstability and security risks.


# If instance errors, 

Utilize this command,
`this.document.location = "Directory/of/build/index.html"`
Using / reverts to Chromes failure page.
## Proudly developed with:
 
 * Electron
 * NdeJS
 
 # Get Started 
 
 First: Install NODEJS (https://nodejs.org/en/) 
 Second: Install GIT (https://git-scm.com/)
 
 Once you do, open the folder where the source is.

Run ``npm update`` this will update the files.


 


 
 # Before Building!
  Open the main.js, go to line 15 and modify it using the specified syntax below.
  
  If you want to load a file, use ``win.loadFile('index.html')``
  
  If you want to load a URL, use  ``win.loadURL('index.html')``
  
  ###### Make sure your URL is live and propogated on the internet. (If you're loading a file, edit the index.html)


## Building

Make sure ELECTRON Packager is installed  ``npm install -g electron-packager``

Build the project: `electron-packager . --overwrite --icon=assets/icons/win/icon.ico --out=release-builds`


Build the installer (optional): `node installers/windows/createinstaller.js`


#### Developed by Intel & Ross




