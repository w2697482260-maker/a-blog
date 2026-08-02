/* ============================================
   粒子网络背景动画（Canvas）
   类似全息投影的流动粒子连线
   ============================================ */
(function () {
  "use strict";

  function initParticles() {
    // 移动端性能考虑：小屏减少粒子
    var isMobile = window.innerWidth < 768;
    var canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext("2d");
    var particles = [];
    var mouse = { x: null, y: null };

    // 粒子数量：桌面 80，移动 40
    var COUNT = isMobile ? 40 : 80;
    var CONNECT_DIST = 150; // 连线距离
    var MAX_SPEED = 0.5;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * MAX_SPEED * 2,
        vy: (Math.random() - 0.5) * MAX_SPEED * 2,
        r: Math.random() * 2 + 1
      };
    }

    function init() {
      resize();
      for (var i = 0; i < COUNT; i++) {
        particles.push(createParticle());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 画粒子
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();
      });

      // 画连线
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var a = particles[i];
          var b = particles[j];
          var dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_DIST) {
            var opacity = (1 - dist / CONNECT_DIST) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(59, 130, 246, " + opacity + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 鼠标连线（增强互动感）
      if (mouse.x !== null) {
        particles.forEach(function (p) {
          var dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < 180) {
            var opacity = (1 - dist / 180) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = "rgba(139, 92, 246, " + opacity + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }
    }

    function update() {
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;

        // 边界反弹
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    // 鼠标移动监听
    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", function () {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener("resize", function () {
      resize();
    });

    init();
    animate();
  }

  // 延迟启动，避免影响页面首屏渲染
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initParticles, 500);
  });
})();
