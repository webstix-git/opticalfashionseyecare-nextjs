export const A11Y_STORAGE_KEY = "of-a11y";

/** Runs in <head> before first paint so saved preferences never flash in. Keep in sync with applyA11y in lib/a11y.ts. */
export const a11yInitScript = `(function(){try{var s=JSON.parse(localStorage.getItem("${A11Y_STORAGE_KEY}")||"null");if(!s)return;var d=document.documentElement;if(s.text)d.setAttribute("data-a11y-text",String(s.text));["contrast","links","spacing","motion"].forEach(function(k){if(s[k])d.setAttribute("data-a11y-"+k,"")})}catch(e){}})()`;
