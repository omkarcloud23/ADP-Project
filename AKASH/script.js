  (function () {
      const words = [
        'Loading assets',
        'Preparing interface',
        'Fetching resources',
        'Almost there',
        'Finishing up'
      ];
      const cycleDelay = 700;
      const hideTimeout = 12000; // fallback: hide after 12s
      const pre = document.getElementById('preloader');
      const preword = document.getElementById('preword');
      const prebar = document.getElementById('prebar');
      const prepercent = document.getElementById('prepercent');

      // Rotate words
      let wi = 0;
      const wordInterval = setInterval(() => {
        preword.style.opacity = 0;
        setTimeout(() => {
          preword.textContent = words[wi % words.length];
          preword.style.opacity = 1;
          wi++;
        }, 200);
      }, cycleDelay);

      // Track image loading progress (if images exist)
      const imgs = Array.from(document.images);
      let total = imgs.length;
      let loaded = 0;

      function updateProgress() {
        const pct = total ? Math.round((loaded / total) * 100) : 100;
        prebar.style.width = pct + '%';
        prepercent.textContent = pct + '%';
        if (pct >= 100) markReady();
      }

      function markReady() {
        // wait a bit so users see 100%
        setTimeout(hidePreloader, 250);
      }

      function hidePreloader() {
        clearInterval(wordInterval);
        pre.classList.add('hide');
        pre.setAttribute('aria-hidden', 'true');
        // optional: remove from DOM after transition
        setTimeout(() => pre.remove(), 500);
      }

      // Attach listeners to images to count loaded
      if (total === 0) {
        // no images: wait for window load or short delay
        window.addEventListener('load', hidePreloader);
        setTimeout(hidePreloader, 900); // ensure it doesn't hang
      } else {
        imgs.forEach(img => {
          if (img.complete && img.naturalWidth !== 0) {
            loaded++;
            updateProgress();
          } else {
            img.addEventListener('load', () => { loaded++; updateProgress(); });
            img.addEventListener('error', () => { loaded++; updateProgress(); });
          }
        });

        // Also ensure full load event removes preloader when other assets are done.
        window.addEventListener('load', () => {
          // If images finished earlier, will already be handled; otherwise force to 100%
          loaded = total;
          updateProgress();
        });
      }

      // Safety fallback
      setTimeout(() => {
        if (!pre.classList.contains('hide')) hidePreloader();
      }, hideTimeout);
    })();