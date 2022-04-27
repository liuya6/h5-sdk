interface DeepCLone<T> {
  (arg: T): T;
}

const deepClone: DeepCLone<any> = (target) => {
  if (typeof target !== "object" || target == null) {
    return target;
  }
  const result: any = target instanceof Array ? [] : {};
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      result[key] = deepClone(target[key]);
    }
  }
  return result;
};

interface randomIndex {
  (a: number, b: number): number;
}

const randomIndex: randomIndex = (a: number, b: number) => {
  return (function (a, b) {
    let num = Math.floor(Math.random() * b);
    if (a === num) {
      num = randomIndex(num, b);
    }
    return num;
  })(a, b);
};

const throttle = (fn: () => void, delay = 1500): (() => void) => {
  let flag = true;
  let timer = setTimeout(() => {}, delay);
  return function () {
    if (flag) {
      flag = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
        flag = true;
      }, delay);
    }
  };
};

const debounce = (fn: () => void, delay = 1500): (() => void) => {
  let timer = setTimeout(() => {}, delay);
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

export { deepClone, randomIndex, throttle, debounce };
