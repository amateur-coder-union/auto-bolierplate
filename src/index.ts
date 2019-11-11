import app from './core/app';

/** 初始化函数 */
function initReq() {
  auto(); // 确认权限
  if (!images.requestScreenCapture()) {
    toast('请求截图权限失败');
    exit();
  }
}

initReq();

app.start();