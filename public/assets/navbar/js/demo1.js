(function () {
  var firstTime = sessionStorage.getItem("firstTime");
  if (firstTime == null || firstTime == "true") {
    const timer = setTimeout(() => {
      main();
      console.log("timer is running ");

      sessionStorage.setItem("firstTime", "false");
    }, 15000);
    return () => clearTimeout(timer);
  } else {
    main();
  }
  function main() {
    var button = document.getElementById("cn-button");
    var wrapper = document.getElementById("cn-wrapper");
    var overlay = document.getElementById("cn-overlay");

    if (button && wrapper && overlay) {
      var open = false;
      button.addEventListener("click", handler, false);
      wrapper.addEventListener("click", cnhandle, false);

      function cnhandle(e) {
        e.stopPropagation();
      }

      function handler(e) {
        if (!e) var e = window.event;
        e.stopPropagation();

        if (!open) {
          openNav();
        } else {
          closeNav();
        }
      }

      function openNav() {
        open = true;
        button.innerHTML = "-";
        classie.add(overlay, "on-overlay");
        classie.add(wrapper, "opened-nav");
        console.log("Clicked!");
      }

      function closeNav() {
        open = false;
        button.innerHTML = "+";
        classie.remove(overlay, "on-overlay");
        classie.remove(wrapper, "opened-nav");
        console.log("Closed!");
      }

      document.addEventListener("click", closeNav);
    } else {
      console.warn(
        "One or more elements (cn-button, cn-wrapper, cn-overlay) not found."
      );
    }
  }
})();
