var outsite = 1;
window.globalvar = 2;

(function() {
  function something() {
    const sum = globalvar + outside;
  }
})();

// IIFE