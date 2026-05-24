/**
 * @kaleb-one/theme — Tailwind CSS preset (auto-generated)
 *
 * Maps M3 Obsidian design tokens to Tailwind configuration.
 * Extends colors, spacing, borderRadius, boxShadow, and fontFamily
 * from the canonical theme tokens.
 *
 * Usage (Tailwind v3):
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('@kaleb-one/theme/tailwind')],
 *   }
 *
 * Usage (Tailwind v4, CSS-first):
 *   @import "@kaleb-one/theme/css/obsidian";
 *   // Tokens available as CSS custom properties, use via arbitrary values:
 *   // bg-[var(--md-sys-color-surface)]
 *   // text-[var(--md-sys-color-on-surface)]
 *
 * Breakpoints and layout tokens are also available:
 *   // @screen m3-medium → min-width: 600px
 *   // p-m3-layout-2 → padding: 16px (layout spacing)
 */

module.exports = {
  theme: {
    extend: {
      colors: { m3: {
        "primary": "#BACFE5",
        "on-primary": "#2C3E50",
        "primary-container": "#3D5167",
        "on-primary-container": "#D6E5F5",
        "secondary": "#C6CBD9",
        "on-secondary": "#31343C",
        "secondary-container": "#474B55",
        "on-secondary-container": "#E3E6EF",
        "tertiary": "#CDC6E2",
        "on-tertiary": "#342F45",
        "tertiary-container": "#4B465C",
        "on-tertiary-container": "#E9E2FF",
        "error": "#FFB4AB",
        "on-error": "#690005",
        "error-container": "#93000A",
        "on-error-container": "#FFDAD6",
        "surface": "#11151C",
        "on-surface": "#DCE1E9",
        "surface-dim": "#11151C",
        "surface-bright": "#353C44",
        "surface-variant": "#454D56",
        "on-surface-variant": "#C5CDD9",
        "surface-container-lowest": "#0D1117",
        "surface-container-low": "#1A1F26",
        "surface-container": "#1E242C",
        "surface-container-high": "#282E36",
        "surface-container-highest": "#31383F",
        "outline": "#8F97A3",
        "outline-variant": "#454D56",
        "inverse-surface": "#DCE1E9",
        "inverse-on-surface": "#1A1F26",
        "inverse-primary": "#506680",
        "scrim": "#000000",
        "shadow": "#000000",
        "elevation": "transparent"
} },
      spacing: {
      "m3-0": "0px",
      "m3-1": "4px",
      "m3-2": "8px",
      "m3-3": "12px",
      "m3-4": "16px",
      "m3-5": "20px",
      "m3-6": "24px",
      "m3-7": "28px",
      "m3-8": "32px",
      "m3-9": "36px",
      "m3-10": "40px",
      "m3-11": "44px",
      "m3-12": "48px",
      "m3-16": "64px",
      "m3-layout-1": "8px",
      "m3-layout-2": "16px",
      "m3-layout-3": "24px",
      "m3-layout-4": "32px",
      "m3-layout-5": "40px",
      "m3-layout-6": "48px",
      "m3-layout-7": "56px",
      "m3-layout-8": "64px",
      "m3-layout-10": "80px",
      "m3-layout-12": "96px",
      "m3-gap": "8px",
      "m3-margin-compact": "16px",
      "m3-margin-medium": "24px",
      "m3-margin-expanded": "24px",
      "m3-margin-large": "32px",
      "m3-margin-extra-large": "48px"
},
      borderRadius: {
      "m3-none": "0px",
      "m3-extra-small": "4px",
      "m3-small": "8px",
      "m3-medium": "12px",
      "m3-large": "16px",
      "m3-extra-large": "28px",
      "m3-full": "9999px",
      "m3-expressive-small": "12px",
      "m3-expressive-medium": "16px",
      "m3-expressive-large": "28px",
      "m3-expressive-extra-large": "36px"
},
      boxShadow: {
      "m3-0": "none",
      "m3-1": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)",
      "m3-2": "0 2px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
      "m3-3": "0 4px 12px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)",
      "m3-4": "0 6px 18px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.14)",
      "m3-5": "0 10px 24px rgba(0,0,0,0.12), 0 12px 14px rgba(0,0,0,0.14)"
},
      fontFamily: {
      "display": [
            "'Inter', 'Roboto', sans-serif"
      ],
      "body": [
            "'Inter', 'Roboto', sans-serif"
      ],
      "mono": [
            "'JetBrains Mono', 'Fira Code', monospace"
      ]
},
      transitionDuration: {
      "m3-short1": "50ms",
      "m3-short2": "100ms",
      "m3-short3": "150ms",
      "m3-short4": "200ms",
      "m3-medium1": "250ms",
      "m3-medium2": "300ms",
      "m3-medium3": "350ms",
      "m3-medium4": "400ms",
      "m3-long1": "450ms",
      "m3-long2": "500ms",
      "m3-extra-long1": "550ms",
      "m3-extra-long2": "600ms",
      "m3-extra-long3": "650ms",
      "m3-extra-long4": "700ms"
},
      transitionTimingFunction: {
      "m3-standard": "cubic-bezier(0.2, 0, 0, 1)",
      "m3-standard-accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
      "m3-standard-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
      "m3-emphasized": "cubic-bezier(0.2, 0, 0, 1)",
      "m3-emphasized-accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
      "m3-emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
      "m3-legacy": "cubic-bezier(0.4, 0, 0.2, 1)",
      "m3-linear": "linear"
},
      screens: {
        "m3-compact": "0px",
        "m3-medium": "600px",
        "m3-expanded": "840px",
        "m3-large": "1200px",
        "m3-extra-large": "1600px"
},
      layout: {
        "m3-layout-bar-height": "64px",
        "m3-layout-bar-height-expressive": "72px",
        "m3-layout-rail-width": "80px",
        "m3-layout-rail-width-expanded": "112px",
        "m3-layout-pane-min-width": "360px",
        "m3-layout-content-max-width": "1200px",
        "m3-layout-margin-compact": "16px",
        "m3-layout-margin-medium": "24px",
        "m3-layout-margin-expanded": "24px",
        "m3-layout-margin-large": "32px",
        "m3-layout-margin-extra-large": "48px",
        "m3-layout-gap": "8px",
        "m3-layout-safety-region-top": "24px",
        "m3-layout-safety-region-bottom": "32px",
        "m3-layout-drag-handle-height": "32px",
        "m3-layout-fold-spacing": "8px"
},
    },
  },
};
