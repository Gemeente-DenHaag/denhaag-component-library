export default class AnchorCollapses {
  constructor(className = 'denhaag-anchor-collapse') {
    this.panels = document.getElementsByClassName(className);

    if (!this.panels) {
      return;
    }

    this.classNames = {
      active: `${className}--active`,
      toggle: `${className}__toggle`,
    };

    this.openOrCloseCollapses();
    this.clickEvents();
    this.windowEvents();
  }

  windowEvents() {
    const self = this;
    const ww = window.innerWidth;
    self.windowEventsLoop();
    window.addEventListener('resize', async () => {
      // Check for width, for mobile devices where the url-bar overlay counts as resize.
      if (ww !== window.innerWidth) {
        self.openOrCloseCollapses();
        self.windowEventsLoop();
      }
    });
    window.addEventListener('orientationchange', async () => {
      self.openOrCloseCollapses();
      self.windowEventsLoop();
    });
  }

  /**
   * Update openCollapses check.
   */
  openOrCloseCollapses() {
    this.openCollapses = window.matchMedia('(min-width: 768px)').matches;
  }

  /**
   * Fired on click events.
   */
  clickEvents() {
    [...this.panels].forEach((panel) => {
      [...panel.getElementsByClassName(this.classNames.toggle)].forEach(
        (toggle) =>
          (toggle.onclick = () => {
            toggle.setAttribute('aria-expanded', toggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
            panel.classList.toggle(this.classNames.active);
          }),
      );
    });
  }

  /**
   * Loop through panels and close them based on the windowWidth.
   */
  windowEventsLoop() {
    [...this.panels].forEach((panel) => {
      let expanded = null;

      if (this.openCollapses && !panel.classList.contains(this.classNames.active)) {
        panel.classList.add(this.classNames.active);
        expanded = 'true';
      } else if (panel.classList.contains(this.classNames.active)) {
        panel.classList.remove(this.classNames.active);
        expanded = 'false';
      }

      if (expanded) {
        [...panel.getElementsByClassName(this.classNames.toggle)].forEach((toggle) =>
          toggle.setAttribute('aria-expanded', expanded),
        );
      }
    });
  }
}
