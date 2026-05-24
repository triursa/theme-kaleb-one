// Layout scaffold tokens — M3 I/O 2026 Expressive layout system
// The scaffold provides structural UI regions: bars, rails, panes, and content areas
// https://m3.material.io/design/layout/scaffold

module.exports = {
  // Bar heights
  "md-sys-layout-bar-height": "64px",
  "md-sys-layout-bar-height-expressive": "72px",  // Taller bar for expressive search, etc.

  // Navigation rail widths
  "md-sys-layout-rail-width": "80px",
  "md-sys-layout-rail-width-expanded": "112px",   // M3 Expressive expanded rail

  // Pane / panel dimensions
  "md-sys-layout-pane-min-width": "360px",
  "md-sys-layout-content-max-width": "1200px",

  // Content margins (semantic — map to M3 breakpoint-adaptive margins)
  "md-sys-layout-margin-compact": "16px",
  "md-sys-layout-margin-medium": "24px",
  "md-sys-layout-margin-expanded": "24px",
  "md-sys-layout-margin-large": "32px",
  "md-sys-layout-margin-extra-large": "48px",

  // Structural gaps
  "md-sys-layout-gap": "8px",                     // Between components in a container
  "md-sys-layout-safety-region-top": "24px",      // Safe area from top (status bar, notch)
  "md-sys-layout-safety-region-bottom": "32px",   // Safe area from bottom (nav bar, gesture)

  // Miscellaneous
  "md-sys-layout-drag-handle-height": "32px",     // Bottom sheet drag handle
  "md-sys-layout-fold-spacing": "8px",            // Fold / hinge spacing for foldables
};