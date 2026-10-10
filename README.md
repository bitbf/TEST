# 生日祝福页面

原生 HTML、CSS 和 JavaScript 实验，没有构建步骤或第三方脚本依赖。

## 使用

用浏览器打开 `模板实验2.html`。也可以在仓库目录运行 `python -m http.server 8000`，再访问 `http://localhost:8000/模板实验2.html`（需要 Python）。

## 结构

- `模板实验2.html`：12 个屏幕的内容和分支。
- `assets/css/birthday.css`：布局、响应式样式和动画。
- `assets/js/birthday.js`：页面切换、动画延迟、动态图片。

## 尚缺资源

代码引用 `b.gif`、`c.gif`、`d.gif`、`千空.jpg`、`image1.jpg`、`image2.jpg`，但这些文件未提交。请把原始图片放在 HTML 同级目录，或修改对应路径；当前图片会显示为加载失败。

## 维护与检查

屏幕 ID 必须唯一，`data-newscreen` 必须指向存在的屏幕。检查 yes 分支 4→5→6→7→8→9→10 和 no 分支 4→11→12→10。样式或脚本修改后检查手机尺寸和桌面尺寸。页面没有保存或发送数据的后端。
