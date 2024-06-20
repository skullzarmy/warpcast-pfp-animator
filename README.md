# ![Chrome Extension Logo](icons/icon48.png) Warpcast PFF Animator: Chrome Extension

![GitHub](https://img.shields.io/github/license/skullzarmy/warpcast-pfp-animator?style=for-the-badge)

---

A Manifest V3 Chrome Extension which automatically changes the `img` elements' `src` attributes on `warpcast.com` to animate profile pictures (PFPs). The extension observes changes in the DOM to ensure newly added images are also updated accordingly, enhancing the user experience by ensuring profile pictures (PFPs) are consistently animated.

### Required Permissions:

-   `host_permissions`: To interact with https://warpcast.com/*.

## Installation

0.  Clone this repo to your local machine

```bash
git clone https://github.com/skullzarmy/warpcast-pfp-animator.git
```

or [download .zip](https://github.com/skullzarmy/warpcast-pfp-animator/archive/refs/heads/main.zip)

1.  Open Chrome and navigate to `chrome://extensions` by typing it into the address bar and hitting enter.

1.  At the top right [↗] of the page, toggle on "Developer mode". This will enable additional options for loading in custom extensions.

    <img src="icons/enable-dev.png" alt="Enable Developer Mode" width="150">

1.  At the top left [↖] of the page, click on the "Load unpacked" button that appears once you have enabled developer mode.

    <img src="icons/load-unpacked.png" alt="Load Unpacked" width="150">

1.  A file selection dialog will appear. Navigate to the directory where you cloned the repo, and select the directory.

The extension should now appear in your list of extensions and be available for use. You should see its icon [ ![Extension Icon](icons/icon16.png) ] in the extensions section of the Chrome toolbar. If the icon doesn't appear, you may need to click on the Extensions icon (which looks like a puzzle piece) in the Chrome toolbar and pin your extension so that its icon is always visible.

If you download a new version, first replace the files in the extension directory with the new versions, then you can click the "Reload" button on your extension's box in the [chrome://extensions](chrome://extensions) page to load in the changes.

Remember, your extension will only be available in the current profile and on the current device where you loaded it. If you sign in to a different Chrome profile, or use a different device, you'll need to load the extension again.

## LICENSE

MIT License

Copyright (c) 2024 [skllzrmy](https://skllzrmy.com/) [Joe Peterson](https://joepeterson.work)

[LICENSE FILE](LICENSE)

### Acknowledgements

This project was inspired by the extension created by [ggomaeng](https://github.com/ggomaeng) (GitHub repo: [https://github.com/ggomaeng/warpcast-chrome-extension](https://github.com/ggomaeng/warpcast-chrome-extension)), but all code in this project was written by [skllzrmy](https://skllzrmy.com/) to be a more simplified approach and avoid using external libraries.
