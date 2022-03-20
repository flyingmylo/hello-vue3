class MyPromise {
  constructor(fn) {
    this.PromiseState = MyPromise.PENDING;
    this.PromiseResult = null;
    // 保存成功回调
    this.onFulfilledCallbacks = [];
    // 保存失败回调
    this.onRejectedCallbacks = [];

    try {
      // 绑定this，但不执行
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  resolve(result) {
    if (this.PromiseState === MyPromise.PENDING) {
      this.PromiseState = MyPromise.FULFILLED;
      this.PromiseResult = result;
      console.log(result);

      this.onFulfilledCallbacks.forEach((callback) => callback(result));
    }
  }

  reject(reason) {
    if (this.PromiseState === MyPromise.REJECTED) {
      this.PromiseState = MyPromise.REJECTED;
      this.PromiseResult = reason;

      this.onRejectedCallbacks.forEach((callback) => callback(reason));
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 如果 resovle() 放在了 settimeout 内，此时状态没有改变，依然是 pending
    if (this.PromiseState === MyPromise.PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }

    // 每次只能执行一个函数，保证状态不可变
    if (this.PromiseState === MyPromise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromiseResult);
      });
    }

    if (this.PromiseState === MyPromise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromiseResult);
      });
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  resolve("abc");
});
// console.log(p)

console.log(1);
let promise = new MyPromise((resolve, reject) => {
  console.log(2);

  resolve("这次一定");
  console.log(4);
});

promise.then(
  (result) => {
    console.log("fulfilled:", result);
  },
  (reason) => {
    console.log("rejected:", reason);
  }
);
console.log(3);
