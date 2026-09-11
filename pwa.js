// Installation stays independent of the scene and its controls.
(() => {
  const button = document.getElementById('installApp');
  const standalone = window.matchMedia('(display-mode: standalone)');
  let pendingInstall = null;
  const hideInstall = () => {
    pendingInstall = null;
    button.hidden = true;
  };

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    if (standalone.matches || navigator.standalone) return;
    pendingInstall = event;
    button.hidden = false;
  });
  window.addEventListener('appinstalled', hideInstall);
  standalone.addEventListener('change', () => {
    if (standalone.matches) hideInstall();
  });
  button.addEventListener('click', async () => {
    if (!pendingInstall) return;
    const prompt = pendingInstall;
    hideInstall();
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch (error) {
      console.info('App installation was unavailable.', error);
    }
  });

  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
      .catch(error => console.info('Offline support was unavailable.', error));
  }
})();
