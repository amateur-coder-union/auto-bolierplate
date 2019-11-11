// import { delay } from '../utils';
import dx from '../../assets/1.png';

class App {
  start = async () => {
    toast(`hello, ${device.fingerprint}`);
    console.show();
    sleep(1200); // autojs提供的sleep函数，同步delay.
    // await delay(1200); // 自己写的delay函数，利用promise，建议还是用框架提供的
    console.log(device.serial);
    console.log(device.sdkInt);

    const color = images.pixel(dx, 187, 80); // 009688

    console.log(images.findColor(dx, '#13312e'));
    console.log(color);
    console.log('qwe');
  };
}

const app = new App();

export default app;
