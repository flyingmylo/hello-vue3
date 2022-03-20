Function.prototype.before = function (beforeFn) {
  // 保存原函数的引用
  const that = this;
  return function () {
    // 返回包含了原函数和新函数的“代理”函数
    beforeFn.apply(this, arguments);
    // 执行原函数
    return that.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  const that = this;
  return function () {
    const ret = that.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

let func = function () {
  console.log(2);
};

func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });

func();
