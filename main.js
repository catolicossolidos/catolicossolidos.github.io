function fixViewport(){let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`);let t=window.innerWidth-document.body.clientWidth;document.documentElement.style.setProperty("--scrollbarWidth",`${t}px`)}function toggleShowLess(e,t){let s=document.getElementById(e),d=document.getElementById(t);s.classList.contains("hidden")?(s.classList.remove("hidden"),d.classList.add("hidden")):(s.classList.add("hidden"),d.classList.remove("hidden"))}function toggleNav(){let e=document.getElementsByClassName("nav-hidden")[0],t=document.getElementById("navBlur"),s=document.getElementById("navToggler"),d=document.getElementById("navTogglerImg");e.classList.contains("hidden")?(e.classList.remove("hidden"),t.classList.remove("hidden"),s.classList.add("replace"),d.src="/img/close.svg"):(e.classList.add("hidden"),t.classList.add("hidden"),s.classList.remove("replace"),d.src="/img/menu.svg")}function toggleTheme(){let e=document.getElementsByTagName("body")[0],t=document.getElementById("themeTogglerImg");e.classList.contains("post-light-mode")?(e.classList.remove("post-light-mode"),t.src="/img/darkMode.svg"):(e.classList.add("post-light-mode"),t.src="/img/lightMode.svg")}fixViewport();