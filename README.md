# FoleyDang 个人主页

网站地址：https://yanten.top

## 功能特性

- **个人介绍**：展示个人信息和职业经历
- **服务状态**：实时检测各服务运行状态
- **项目展示**：展示主要项目和作品
- **社交链接**：GitHub、掘金、知乎、Bilibili 等链接

## 部署方式

### 静态部署
直接将文件部署到任意静态服务器或 CDN。

### Nginx 配置示例
```nginx
server {
    listen 80;
    server_name yanten.top;
    root /path/to/yanten-homepage;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 目录结构

```
yanten-homepage/
├── index.html      # 主页面
├── css/
│   └── style.css   # 样式文件
├── js/
│   └── main.js     # 交互脚本
├── images/
│   ├── avatar.png  # 头像图片
│   └── favicon.png # 网站图标
└── README.md
```

## 自定义

### 修改信息
编辑 `index.html` 中的个人信息、项目链接等。

### 修改样式
编辑 `css/style.css` 中的颜色变量：
```css
:root {
  --primary: #49b1f5;      /* 主色调 */
  --secondary: #ff7242;    /* 辅助色 */
}
```

### 添加头像
替换 `images/avatar.png` 为你的头像图片。
