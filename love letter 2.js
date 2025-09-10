$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");

    // เล่นวิดีโออัตโนมัติเมื่อเปิดซอง
    const video = document.getElementById("love-video");
    if (video) {
      video.currentTime = 0; // เริ่มจากต้น
      video.play().catch(() => {
        // ถ้าเบราว์เซอร์ป้องกัน autoplay
        console.log("Autoplay blocked, user interaction required");
      });
    }
  }

  function close() {
    envelope.addClass("close").removeClass("open");

    // หยุดวิดีโอเมื่อปิดซอง
    const video = document.getElementById("love-video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
});
