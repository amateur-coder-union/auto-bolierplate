// import { delay } from '../utils';

class App {
  start = async () => {
    toast(`hello, ${device.fingerprint}`);
    console.show();
    sleep(1200); // autojs提供的sleep函数，同步delay.
    // await delay(1200); // 自己写的delay函数，利用promise，建议还是用框架提供的
    console.log(device.serial);
    console.log(device.sdkInt);
    console.verbose(device.release);
  }
}

const app = new App();

export default app;