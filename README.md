# Chrome Extensions

<br>

<p align="center">Learn to make your own chrome extensions using these examples. I have created these examples starting from basic "Hello World" extension to much functional ones like finding word definitions by selecting a word on the web page or changing the background color theme of a particular webpage. I'm sure by exploring these extensions you will be able to create some fun stuffs of your own and deploy them on the web store for others to use.</p>
  
<br>

### Contents

1. Hello World `// Basic extension to alert Hello World.`
2. Pink Paragraphs `// Automatically changes background color of every paragraph to pink.`
3. Pink Paragraphs 2 `// Changes background color of paragraphs using background script.`
4. Kitten Everywhere `// replace images of on the webpage with an image that of a kitten.`
5. Popup `// Demonstration of popup in chrome extensions.`
6. Popup 2 `// Replace paragraph texts on the webpage with custom user input.`
7. Dictionary `// Select a word on the webpage to get its definitions and example usage.`
8. Word To Gif `// Select a word and get a gif related to it.`
9. New Tab Override `// Replace new tab with your own custom page.`
10. GitHub Backgrounds `// Change background color of GitHub by selecting your own color from the popup.`

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
<br>

<p align="center">If these projects helped you in any way do give this repo a 🌟.</p>
