// 先定义变量（避免引用未定义变量导致JS报错）
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const backToTop = document.querySelector('.back-to-top');

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 关闭移动端菜单
      if (navMenu) navMenu.classList.remove('active');
      if (navToggle) navToggle.classList.remove('active');
    }
  });
});

// 汉堡菜单
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// 返回顶部按钮
if (backToTop) {
  // 监听滚动
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  // 点击返回顶部
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 主题切换
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 初始化主题
let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
  });
}

function updateThemeIcon(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// 页面加载动画
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
