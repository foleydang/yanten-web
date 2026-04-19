# 家庭备忘录 - 小程序官网

网站地址：https://yanten.top

## 页面内容

- **首页介绍**：小程序简介和核心功能展示
- **功能模块**：购物清单、待办事项、日程安排、家庭管理
- **运营数据**：注册用户、活跃家庭、备忘条目等统计数据
- **服务状态**：API、数据库、云服务运行状态
- **下载引导**：小程序码和微信搜索引导
- **开发者信息**：开发者介绍和博客链接

## 部署方式

### 部署到服务器

```bash
# 克隆项目
git clone git@github.com:foleydang/yanten-web.git
cd yanten-web

# Nginx 配置
server {
    listen 80;
    server_name yanten.top;
    root /path/to/yanten-web;
    index index.html;
}
```

### GitHub Pages 部署

1. Settings → Pages → Source: master 分支
2. 域名 DNS 配置 CNAME: yanten.top → foleydang.github.io

## 目录结构

```
yanten-web/
├── index.html      # 主页面
├── css/style.css   # 样式
├── js/main.js      # 交互脚本
├── images/         # 图片资源
└── README.md
```

## 相关项目

- [family-memo](https://github.com/foleydang/family-memo) - 小程序源码
- [blog-source](https://github.com/foleydang/blog-source) - 博客源文件
