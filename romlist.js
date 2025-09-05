// romlist.js — register your gwbasic.zip as a ROM with DosWasmX UI.
// Place gwbasic.zip in the same folder as index.html
var ROM_LIST = ROM_LIST || [];
ROM_LIST.push({
  name: "basic",
  title: "GW-BASIC (auto)",
  url: "basic.zip",
  // metadata the UI may use — keep simple
  cpu: "auto",
  ram: 32,
  // If your DosWasmX UI recognizes an autostart flag, you can use "autostart": true
  // Otherwise index.html triggers loadRom explicitly.
  autostart: true,
  // optional: a short description
  description: "GW-BASIC bundled as ZIP. LPT redirected via dosbox-x.conf inside zip if provided."
});
