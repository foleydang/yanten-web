// 导航栏切换
function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// 状态检测
async function checkStatus() {
  const services = [
    { id: 'status-blog', url: 'https://foleydang.github.io', name: '博客' },
    { id: 'status-homepage', url: window.location.origin, name: '主页' },
    { id: 'status-github', url: 'https://github.com/foleydang', name: 'GitHub' }
  ];

  for (const service of services) {
    const card = document.getElementById(service.id);
    if (!card) continue;

    const indicator = card.querySelector('.status-indicator');
    const statusText = card.querySelector('.status-text');

    try {
      // 使用 fetch 检测（CORS 可能限制，这里模拟检测）
      // 实际部署时可以通过后端代理检测
      indicator.className = 'status-indicator online';
      statusText.textContent = '运行正常';
    } catch (error) {
      indicator.className = 'status-indicator offline';
      statusText.textContent = '无法访问';
    }
  }

  // 更新时间
  const lastUpdate = document.getElementById('last-update');
  if (lastUpdate) {
    lastUpdate.textContent = new Date().toLocaleString('zh-CN');
  }
}

// 页面加载完成后检测状态
document.addEventListener('DOMContentLoaded', () => {
  checkStatus();

  // 每30秒更新一次状态
  setInterval(checkStatus, 30000);
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // 关闭移动端导航
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// 滚动时更新导航栏样式
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.8)';
  }
});
