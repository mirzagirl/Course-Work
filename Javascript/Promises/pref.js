const { performance } = require('perf_hooks');

const sleep1 = (timePeriod) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timePeriod);
  });
};

const main = async () => {
  console.log('hello', performance.now());
  await sleep1(1000); // sleep for 1 second
  console.log('after 1 sec', performance.now());
};

main();


const sleep = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  const start = performance.now();
  await sleep(1000);
  const end = performance.now();

  console.log(`Expected ~1000ms, got: ${end - start}ms`);
})();
