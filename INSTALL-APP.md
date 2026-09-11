# Install the oasis as an app

Upload this entire folder to your static website host, keeping `index.html`,
`manifest.webmanifest`, `pwa.js`, `sw.js`, `icons/`, and `assets/` together.
Use an HTTPS address. No build command or npm install is needed.

Open your website in Google Chrome. When Chrome offers installation, use the
small install icon in the oasis toolbar, the address-bar install icon, or
Chrome's menu > Install app / Add to home screen (wording varies by device).
The installed app uses the blue flower icon and opens in its own window.
On iPhone/iPad, use Safari > Share > Add to Home Screen.

This is a PWA installed from your website. It does not create a Google Play
Store listing or an APK.

## Local preview and future edits

Serve this folder through localhost to test installation; double-clicking
`index.html` does not enable PWA features. For example, if Python is installed,
open a terminal in this folder, run `python -m http.server 5175`, and visit
`http://localhost:5175/`.

Keep editing your existing `index.html` and assets as usual. Upload changed
files and reopen or reload the app while online to see them. When changing
the service worker/offline shell, also bump `v1` in `sw.js`; close all open
app windows and browser tabs for this website, then reopen to activate it.

The first visit needs internet. The app caches its shell and models/images
loaded while the service worker is active. Offline scene availability depends
on which assets have already been cached and the device's available storage;
music is streamed and needs a connection. Installing does not download all
assets or guarantee that the complete 3D scene will work offline.

The flower's source is `icons/flower.svg`. If you change it, also regenerate
the PNG icons to update the installed app icon. The maskable version uses a
solid background and keeps the flower inside the central safe area.
