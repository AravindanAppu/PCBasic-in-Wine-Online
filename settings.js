// Minimal settings required by DosWasmX frontend.
// Keep this file in the repo root (same folder as index.html and gwbasic.zip)
var DOSWASMSETTINGS = {
  // If you prefer preloading a default image/zip, you can set DEFAULTZIP: "gwbasic.zip"
  // But we'll call myApp.loadRom in index.html, so this can remain empty.
  DEFAULTZIP: "",
  // Optional: force a default canvas size
  CANVAS_WIDTH: 800,
  CANVAS_HEIGHT: 600,
  // If you use cloud saving or other features, add them here.
  CLOUDSAVEURL: ""
};
