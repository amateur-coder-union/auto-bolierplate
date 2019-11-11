# auto-bolierplate

auto.js 的 ts 开发，初步可用，等待落地。

Tips: 不支持视图开发，做一个最纯粹的脚本仔

## require

node 8+
yarn

## how to use

```bash
yarn install # 安装依赖

# 开发模式
yarn dev

# 打包
yarn build
```

## doc

- [飞云](https://easydoc.xyz/#/doc/25791054/uw2FUUiw/3bEzXb4y)
- [官网](https://hyb1996.github.io/AutoJs-Docs/)

## about scap

```bash
# android 6.0.1 (大多数模拟器版本)
adb exec-out screencap -p > `date '+%Y%m%d%H%M%S'`.png
# android 7+
adb shell screencap -p > `date '+%Y%m%d%H%M%S'`.png

```

## watch result

详情见 [文档](https://github.com/amateur-coder-union/Auto.js-VSCode-Extension/tree/dev)

## about package

1. 利用模拟器共享文件夹，拖动 dist 进手机。
2. autojs 建一个项目。
3. dist 的内容复制进项目文件夹下面，无脑覆盖（一般只会有 assets + main.js）
4. 修改 project.json, [隐藏主界面](https://easydoc.xyz/#/doc/25791054/uw2FUUiw/KYYtRplN)。
5. 回到 autojs，项目选择打包。

## TODO

- 调研使用 xml 记录 layout 的可能性.（可行，待做）

x.xml

```xml
<frame gravity="center">
  <text id="text">悬浮文字</text>
</frame>
```

main.js

```js
const layout = files.read('./layout/x.xml');
const w = floaty.rawWindow(layout);

setTimeout(() => {
  w.close();
}, 6000);
```
