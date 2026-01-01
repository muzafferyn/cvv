(() => {

  /* ======================
     DEVICE DETECT
  ====================== */

  const isMobile = window.innerWidth < 768;
  const FLAKE_COUNT = isMobile ? 18 : 45;
  const MAX_SIZE = isMobile ? 160 : 300;

  /* ======================
     STYLE (JS)
  ====================== */

  const style = document.createElement("style");
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #222;
      overflow: hidden;
    }

    .snow {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      opacity: 0.35;
    }

    .flake {
      position: absolute;
      top: -40vh;
      background-repeat: no-repeat;
      background-size: contain;
      will-change: transform, opacity;
      animation-name: fall;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes fall {
      0% {
        transform: translate3d(0,0,0);
        opacity: 0;
      }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% {
        transform: translate3d(80px,120vh,0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  /* ======================
     CONTAINER
  ====================== */

  const snow = document.createElement("div");
  snow.className = "snow";
  document.body.appendChild(snow);

  /* ======================
     IMAGES
  ====================== */

  const images = [
    "https://andrew-hawkes-media.s3.amazonaws.com/codepen/snow/snow-flake-1.png",
    "https://andrew-hawkes-media.s3.amazonaws.com/codepen/snow/snow-flake-2.png",
    "https://andrew-hawkes-media.s3.amazonaws.com/codepen/snow/snow-flake-3.png",
    "https://andrew-hawkes-media.s3.amazonaws.com/codepen/snow/snow-flake-4.png"
  ];

  /* ======================
     CREATE FLAKES
  ====================== */

  function createSnow() {
    snow.innerHTML = "";

    for (let i = 0; i < FLAKE_COUNT; i++) {
      const flake = document.createElement("div");
      flake.className = "flake";

      const size = Math.random() * MAX_SIZE + 60;
      const left = Math.random() * 100;
      const duration = Math.random() * 6000 + 4000;
      const delay = Math.random() * 5000;
      const img = images[Math.floor(Math.random() * images.length)];

      flake.style.width = `${size}px`;
      flake.style.height = `${size * 4}px`;
      flake.style.left = `${left}%`;
      flake.style.backgroundImage = `url(${img})`;
      flake.style.animationDuration = `${duration}ms`;
      flake.style.animationDelay = `${delay}ms`;

      snow.appendChild(flake);
    }
  }

  createSnow();

  /* ======================
     RESIZE OPTIMIZE
  ====================== */

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      createSnow();
    }, 300);
  });

})();
