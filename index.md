---
layout: home
title: 首页
---

# 你好，我是 [你的名字] 👋

**软件测试工程师** · 专注自动化测试与质量保障

## 关于我

- 🔭 专注于 **接口自动化测试**（pytest）、**UI 自动化**（浏览器自动化）、**性能测试**
- 🌱 正在实践 **AI 辅助测试**（Hermes Agent + 飞书 + Cursor 自动化工作流）
- 💬 熟练：Python / pytest / Jekyll / Flask / 数据库 / Git
- 📍 工作方向：功能测试 → 自动化测试 → 质量保障

## 技术栈

| 领域 | 工具/技术 |
|------|----------|
| 接口测试 | pytest, requests, Postman |
| UI 自动化 | 浏览器自动化, 截图取证 |
| 性能测试 | JMeter, Locust |
| 测试管理 | 禅道, 飞书, 需求管理 |
| 开发语言 | Python, SQL |
| 版本管理 | Git, GitHub |

## 最新文章

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

## 联系我

- 📧 邮箱：your_email@example.com
- 💼 GitHub：https://github.com/w2697482260-maker
