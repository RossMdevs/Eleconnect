###### Eleconnect, simple base shell for starter devs.

# Eleconnect

> We work with [PasswordGen](https://github.com/RossMdevs/Password-Generator)

Eleconnect is a electron developed app. 
It opens a frameless or framed window displaying the asset you configured to load.

It is the first step to packaging a windows app for your specified distro.

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
 
Also, make sure you modify these lines in package.json
```  
"name": "eleconnect",
  "version": "1.0.0",
  "description": "Base app for Electron to coonect to your files.",
  ```

  And modify the output name and logo here
  ```ProductName=\"Name Here\"",```

## Building

Make sure ELECTRON Packager is installed  ``npm install -g electron-packager``

Build the project: `electron-packager . --overwrite --icon=assets/icons/win/icon.ico --out=release-builds`


Build the installer (optional): `node installers/windows/createinstaller.js`



# Errors 

Utilize this command using the Console Interface.
`this.document.location = "Directory/of/build/index.html"`
Using "/" as the location reverts to a broken page

#### Developed by Intel & Ross




