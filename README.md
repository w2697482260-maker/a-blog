# QA 测试博客

软件测试工程师的个人技术博客，用于**面试求职展示**和**个人技术记录**。

## 快速开始（GitHub Pages，无需本地安装 Ruby）

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点 **New repository**
3. 仓库名必须为：**`<你的用户名>.github.io`**
   - 例如你的用户名是 `tester2026`，仓库名就是 `tester2026.github.io`
4. 勾选 **Public**，点创建

### 第二步：把本目录内容推上去

```bash
cd D:\CODE\qa-blog
git init
git add .
git commit -m "初始化测试博客"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. GitHub 仓库页面 → **Settings**
2. 左侧 **Pages**
3. **Source** 选 `Deploy from a branch`
4. **Branch** 选 `main`，目录选 `/` (root)
5. 点 **Save**
6. 等 1-2 分钟，访问 `https://<你的用户名>.github.io`

### 第四步：写新文章

在 `_posts/` 目录下新建 `.md` 文件：

```markdown
---
layout: post
title: "文章标题"
date: 2026-08-03
tags: [标签1, 标签2]
categories: [分类]
---

# 正文内容（Markdown）
```

**命名规则**：`YYYY-MM-DD-文章标题.md`

写完后 push 到 GitHub，Pages 自动更新：
```bash
git add .
git commit -m "新文章"
git push
```

---

## 本地预览（可选，需装 Ruby）

如果想本地预览效果，安装 Ruby 后：

```bash
# 安装 Ruby：https://rubyinstaller.org/downloads/
# 选 Ruby+Devkit 3.2.x，安装时勾选 "Add to PATH"

gem install jekyll bundler
cd D:\CODE\qa-blog
bundle install
bundle exec jekyll serve
# 打开 http://localhost:4000
```

---

## 修改配置

编辑 `_config.yml`，把里面的 `YOUR_USERNAME`、`你的名字` 等占位符换成你的真实信息：

| 字段 | 改成 |
|------|------|
| `title` | 你的博客名 |
| `author.name` | 你的名字 |
| `author.email` | 你的邮箱 |
| `github_username` | 你的 GitHub 用户名 |
| `url` | `https://<你的用户名>.github.io` |

---

## 面试求职亮点

博客内容建议围绕：
1. **秒杀系统接口自动化测试实战** — 体现 pytest 框架搭建能力
2. **AI 测试自动化工作流** — 体现 AI 工具应用能力（差异化）
3. **缺陷分析复盘** — 体现问题定位和思考能力
4. **性能测试** — 体现质量保障广度

在简历里放上博客链接，面试官能直接看到你的作品和思考。
