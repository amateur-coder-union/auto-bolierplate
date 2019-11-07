import { a } from './a';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.show();
  await delay(1200);
  console.log(`a = ${a}`);
})();