# Zybooks DOM Automation Extension

A Chrome extension (Manifest V3) that automates DOM interactions on the Zybooks learning platform. Built with a service worker architecture, content script injection, and zero-dependency vanilla JavaScript. Adopted by 30+ students at SMU.

## Tech Stack

- **JavaScript** — content scripts + background service worker
- **Chrome Extensions API (Manifest V3)** — `activeTab`, `scripting` permissions
- **DOM Automation** — programmatic interaction with dynamically rendered page elements
- `.crx` packaging for direct distribution without the Chrome Web Store

## Architecture

```
manifest.json        # Extension config — MV3, permissions, service worker entry
background.js        # Service worker — handles extension lifecycle and tab communication
content.js           # Injected into Zybooks pages — drives DOM interaction logic
```

The background service worker listens for the extension action and programmatically injects `content.js` into the active tab using the `scripting` API. The content script then traverses and interacts with the DOM on the target page.

## Installation

```bash
git clone https://github.com/YashShah138/zybook-extension.git
```

1. Open Chrome and navigate to `chrome://extensions`
2. Enable **Developer Mode** (toggle in the top right)
3. Click **Load unpacked** (top left)
4. Select the cloned repo folder

The extension icon will appear in your toolbar. Click it on any Zybooks page to run.

> **Note:** Refresh the page when navigating to a new section before running the extension.

## How It Works

When triggered, the extension:
1. Activates via the Chrome toolbar action
2. The background service worker uses `chrome.scripting.executeScript` to inject the content script into the current tab
3. The content script queries the DOM for interactive Zybooks elements and dispatches the appropriate events programmatically

## Contributing

Open a pull request or reach out at [portfolioresponses1@gmail.com](mailto:portfolioresponses1@gmail.com) for feedback or feature requests.
