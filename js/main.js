// 更新时间
function updateTime() {
  const now = new Date();
  document.getElementById('last-update').textContent = now.toLocaleTimeString('zh-CN');
}

// 数据动画
function animateValue(id, start, end, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const range = end - start;
  const startTime = performance.now();
  
  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + range * progress);
    el.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 60000);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
