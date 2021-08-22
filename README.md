# Chrome Extensions

<br>

<p align="center">Learn to make your own chrome extensions using these examples. I have created these examples starting from basic "Hello World" extension to much functional ones like finding word definitions by selecting a word on the web page or changing the background color theme of a particular webpage. I'm sure by exploring these extensions you will be able to create some fun stuffs of your own and deploy them on the web store for others to use.</p>
  
<br>

### Manifest

Every chrome extension begin with `manifest.json` file. All these extensions listed here uses manifest version 3 `MV3`. A simple manifest file looks like this:

```
{
    "manifest_version": 3,
    "name": "Name of your extension",
    "version": "0.01",
    "description": "about your extension"
  }

```

<br>

- Content Scripts run in the context of web pages. By using Standard DOM they are able to read details of the web pages the browser visits, make changes to them and pass information to their parent extension.
- Events are managed with background scripts.

<br>

### Running the Extension

- Visit `chrome://extensions/`.
- Turn on the developer mode from top right corner.
- Click on `Load unpacked`.
- Select the extension directory with manifest file in the root of the directory.

<br>
