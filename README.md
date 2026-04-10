# SBTI 人格测试

> MBTI 已经过时，SBTI 来了。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SherlockGougou/SBTI-Vercel)
[![License: Non-commercial](https://img.shields.io/badge/license-non--commercial-green)](#版权与致谢)

---

## 简介

SBTI 是一款以娱乐为主的在线人格测试。全程 30 道常规题 + 1 道隐藏触发题，通过 15 个维度对你进行"精准打击"，最终匹配 25 种辛辣人格之一。结果仅供自嘲，请勿用于医学、相亲或宇宙命运判断。

---

## 功能特性

- **30 道常规题**，题序每次随机打乱
- **1 道爱好隐藏题**：选择「饮酒」后触发追加题，确认酗酒者直接解锁 🍶 **DRUNK（酒鬼）** 隐藏人格
- **15 个评分维度**，分属 5 大模型：
  - 自我模型（S1–S3）
  - 情感模型（E1–E3）
  - 态度模型（A1–A3）
  - 行动驱力模型（Ac1–Ac3）
  - 社交模型（So1–So3）
- **25 种标准人格** + 1 种隐藏人格 + 1 种兜底人格（HHHH），共 27 种结果
- 每题维度信息默认隐藏，结果页展示完整的逐维度解读
- 零外部依赖，纯原生 HTML / CSS / JS，无需构建工具

---

## 一键部署到 Vercel

点击下方按钮，Fork 本仓库并自动部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SherlockGougou/SBTI-Vercel)

> 部署完成后可在 Vercel 控制台绑定自定义域名。

---

## 本地运行

本项目为纯静态站点，无需任何构建步骤：

```bash
# 方式一：直接在浏览器打开
open index.html

# 方式二：使用 npx serve（推荐，避免 file:// 协议限制）
npx serve .

# 方式三：VS Code 安装 Live Server 扩展后，右键 index.html → Open with Live Server
```

---

## 项目结构

```
SBTI-Vercel/
├── index.html          # HTML 页面骨架（入口）
├── style.css           # 全部样式
├── script.js           # 应用逻辑（渲染、评分、交互）
├── data/
│   └── questions.js    # 题目数据、人格定义、维度说明
├── vercel.json         # Vercel 静态部署配置（缓存头等）
└── image/              # 27 张人格结果配图
    ├── CTRL.png
    ├── BOSS.png
    └── ...（共 27 张）
```

---

## 技术栈

| 项目 | 详情 |
|------|------|
| 语言 | 原生 HTML5 / CSS3 / Vanilla JavaScript |
| 框架 | 无（零依赖） |
| 构建工具 | 无 |
| 部署 | Vercel / Cloudflare Pages / 任意静态托管 |

---

## 版权与致谢

- **原作者**：[B站@蛆肉儿串儿](https://space.bilibili.com/417038183)（[BV1LpDHByET6](https://www.bilibili.com/video/BV1LpDHByET6/)）
- 本仓库为静态镜像，仅供学习与个人娱乐，**禁止商业用途**。
- 如有侵权请联系删除。
