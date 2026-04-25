// Elevation tokens — M3 uses shadow + tonal overlay
module.exports = {
  // Shadow-based (for light themes)
  "md-sys-elevation-0": "none",
  "md-sys-elevation-1": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)",
  "md-sys-elevation-2": "0 2px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
  "md-sys-elevation-3": "0 4px 12px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)",
  "md-sys-elevation-4": "0 6px 18px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.14)",
  "md-sys-elevation-5": "0 10px 24px rgba(0,0,0,0.12), 0 12px 14px rgba(0,0,0,0.14)",
};

// Dark theme elevation overlays (tonal, not shadow)
module.exports.darkOverlays = {
  "md-sys-elevation-overlay-0": "0%",
  "md-sys-elevation-overlay-1": "3%",
  "md-sys-elevation-overlay-2": "6%",
  "md-sys-elevation-overlay-3": "8%",
  "md-sys-elevation-overlay-4": "12%",
  "md-sys-elevation-overlay-5": "14%",
};