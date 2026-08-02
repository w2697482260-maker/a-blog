/* 自定义动画特效 */
(function () {
  "use strict";

  /* ============ 打字机效果（首页标语） ============ */
  function initTypewriter() {
    // 只在首页（post-list 布局）显示
    var postList = document.getElementById("post-list");
    if (!postList) return;

    var phrases = [
      "软件测试工程师 · 自动化测试",
      "接口测试 · pytest · UI 自动化",
      "AI 辅助测试 · Hermes + Cursor",
      "用技术保障产品质量"
    ];

    // 动态创建打字机容器，插入到文章列表上方
    var hero = document.createElement("div");
    hero.className = "typewriter-hero";
    hero.style.cssText =
      "text-align:center;padding:30px 20px 10px;font-size:1.5em;color:var(--heading-color,#b0b0b0);font-weight:600;min-height:80px;";
    var textEl = document.createElement("span");
    textEl.id = "typewriter-text";
    textEl.style.cssText =
      "border-right:2px solid var(--text-color,#999);padding-right:4px;";
    hero.appendChild(textEl);
    postList.parentNode.insertBefore(hero, postList);

    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var speed = 80;

    function type() {
      var current = phrases[phraseIndex];
      if (isDeleting) {
        charIndex--;
        textEl.textContent = current.substring(0, charIndex);
      } else {
        charIndex++;
        textEl.textContent = current.substring(0, charIndex);
      }

      var delay = isDeleting ? 40 : speed;
      if (!isDeleting && charIndex === current.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
      }
      setTimeout(type, delay);
    }
    type();
  }

  /* ============ 页面淡入效果 ============ */
  function initFadeIn() {
    var els = document.querySelectorAll(".fade-in");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (e) { observer.observe(e); });
  }

  /* ============ 返回顶部按钮 ============ */
  function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ============ 侧边栏头像微动效 ============ */
  function initAvatarHover() {
    var avatar = document.querySelector(".avatar img");
    if (!avatar) return;
    avatar.style.transition = "transform 0.3s ease";
    avatar.addEventListener("mouseenter", function () {
      avatar.style.transform = "scale(1.08)";
    });
    avatar.addEventListener("mouseleave", function () {
      avatar.style.transform = "scale(1)";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTypewriter();
    initFadeIn();
    initBackToTop();
    initAvatarHover();
  });
})();
