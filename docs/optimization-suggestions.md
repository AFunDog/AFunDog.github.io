# 个人网站优化建议

> 生成时间：2026-05-09
> 最后更新：2026-05-09

---

## ✅ 已修复问题

| 问题 | 修复方式 |
|------|---------|
| 路由同步导入，首屏加载全部页面代码 | 改为 `() => import(...)` 懒加载 |
| Tailwind dark 变体与主题系统不一致 | 改用 `useColorMode`，`<html>` 上切换 `dark`/`light` class |
| 主题偏好未持久化 | `useColorMode` 自动持久化到 `localStorage` |
| 主题切换无动画 | 使用 View Transition API 实现淡入淡出 |
| `theme.ts` 残留 `console.debug` | 重写 theme.ts 时已移除 |
| 顶部栏文字颜色不随主题变化 | 改用 `var(--foreground-color)` 替代 `var(--white-color)` |
| 背景图片不随主题切换 | 双图层叠加 + opacity 交叉淡入淡出 |

---

## 一、紧急问题（严重影响加载速度）

### 1. 字体文件子集化 — 26.7 MB → 几百 KB

`public/fonts/` 下的三个字体文件合计 **26.7 MB**：

| 字体文件 | 大小 |
|---------|------|
| `simsun.ttc` | 17.23 MB |
| `huangkaihuaLawyerfont-2.ttf` | 5.62 MB |
| `STXINGKA.ttf` | 3.83 MB |

**建议**：使用 [fonttools](https://github.com/fonttools/fonttools) 或在线工具只保留需要的字符（如常用汉字 3500 字），可缩减 95%+ 体积。

**额外问题**：`simsun.ttc` 的 `@font-face` 声明缺少 `font-display: swap`，会导致文字闪烁。

---

### 2. 图片优化 — 总计约 7 MB

| 资源 | 大小 |
|------|------|
| 背景图 `app-background-dark.jpg` | 2.44 MB |
| 背景图 `app-background-light.jpg` | 1.34 MB |
| 展示卡片（4 张） | ~3.54 MB |
| `app_last.png` | 860 KB |
| 未使用的 `card3.png` | 1.25 MB |

**建议**：
- 转换为 **WebP** 格式（同质量体积减少 30-50%）
- 使用 `<picture>` 标签做格式降级
- 删除未使用的 `card3.png`

---

## 二、高优先级问题

### 3. 缺少 404 路由

`src/router.ts` 没有定义 404 页面，访问不存在的路径无反馈。GitHub Pages 刷新也可能 404（`createWebHistory` 需要服务端回退）。

**建议**：添加 catch-all 路由和 404 页面组件。

---

### 4. 页面标题不随路由变化

所有页面标题都是 "AFunDog"，应使用 `document.title` 或 `@vueuse/head` 动态切换。

---

## 三、中优先级问题

### 5. 清理死代码

| 类型 | 位置 |
|------|------|
| 大量注释掉的代码 | `AppHeader.vue`、`CaptionBar.vue`、`InfoBar.vue`、`MainView.vue` 等 |
| 4 个未使用的视图文件 | `DOTNETView.vue`、`OtherView.vue`、`SQLView.vue`、`WebFrontEndView.vue` |
| 未使用的导入 | `OutsideWebLinkButton.vue` 中的 `GithubIcon`、`DefineComponent`；`SlideShowCard.vue` 中的 `card1/card2/card4` |
| 未使用的图片 | `card3.png`（1.25 MB） |
| 残留 `console.error` | `src/components/PCStateCard.vue` 第 26 行 |
| 注释掉的字体声明 | `src/css/defStyle.css` 第 7-17 行 |
| 注释掉的 CSS | `CaptionBar.vue` `.caption-outer-container`；`InfoBar.vue` `.border-animation`、`.info-border` |

---

### 6. 外部链接安全问题

`OutsideWebLinkButton.vue`：
- 缺少 `target="_blank" rel="noopener noreferrer"`，存在安全风险
- `link` 为 `null` 时会生成 `href="null"`（字符串），应处理空值情况

---

### 7. 可访问性（a11y）问题

| 问题 | 位置 |
|------|------|
| 主题切换按钮无 `aria-label` | `AppHeader.vue` |
| 头像图片无 `alt` 文本 | `AppHeader.vue`、`InfoBar.vue` |
| 导航活跃链接缺 `aria-current="page"` | `NavBar.vue` |
| 图片轮播移动端箭头/指示器不可见（`opacity-0` 仅 hover 显示） | `HorizontalImageScroller.vue` |
| 图片轮播缺少触摸滑动支持 | `HorizontalImageScroller.vue` |
| 部分图标 SVG 缺少 `role="img"` 和 `<title>` | `LineMdLoadingLoopIcon.vue` 等 |

---

### 8. SEO 缺失

`index.html` 缺少：
- `<meta name="description">`
- Open Graph 标签（`og:title`、`og:description`、`og:image`）
- Twitter Card 标签
- `<noscript>` 回退内容

---

## 四、低优先级问题

### 9. TypeScript 严格模式

`tsconfig.app.json` 中 `strict: false`，`noUnusedLocals` / `noUnusedParameters: false`，建议逐步开启。

---

### 10. package.json 依赖分类

- `@types/markdown-it` 应从 `dependencies` 移到 `devDependencies`
- `@vue/compiler-sfc` 应从 `dependencies` 移到 `devDependencies`

---

### 11. 统一使用 Tailwind dark: 前缀

现在 `@custom-variant dark` 已与 `.dark` class 一致，可考虑统一使用 Tailwind `dark:` 前缀替代手动 CSS 变量切换，减少维护成本。

---

### 12. 其他小问题

| 问题 | 位置 |
|------|------|
| `LeftNavBar.vue` 中 `focus()` 调用未绑定到元素 | 第 15 行 |
| `BlogView` "阅读更多"按钮无功能 | 第 90-94 行 |
| `PCStateCard` 在 GitHub Pages 上必然 API 调用失败 | 组件初始化自动调用 |
| `CppAlgorithmView.vue` 中 `v-html` 存在 XSS 风险 | 第 66/68 行 |
| `ImageLoader.vue` 中 `image.onprogress` 现代浏览器基本不触发 | 第 25-29 行 |
| `ImageLoader.vue` 中 `ref` 的 `imageRef` 未实际使用 | 第 17 行 |
| `NavBar.vue` 中 `index` prop 被接收但未使用 | 组件 props |
| `SlideShowCard.vue` 中 `.selected` 的 `width`/`height` 重复定义 | 第 99-107 行 |
| `InfoBar.vue` 中 `inject('isInfoBorderShow')` 默认值与其他组件不一致 | `ref(false)` vs `ref(true)` |
