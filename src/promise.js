
class MyPromise {
	constructor(fn) {
		this.PromiseState = MyPromise.PENDING
		this.PromiseResult = null

		try {
			// 绑定this，但不执行
			fn(this.resolve.bind(this), this.reject.bind(this))
		} catch (error) {
			this.reject(error)
		}
	}

	static PENDING = "pending"
	static FULFILLED = "fulfilled"
	static REJECTED = "rejected"

	resolve(result) {
		if (this.PromiseState === MyPromise.PENDING) {
			this.PromiseState = MyPromise.FULFILLED
			this.PromiseResult = result
			console.log(result)
		}

	}

	reject(reason) {
		if (this.PromiseState === MyPromise.REJECTED) {
			this.PromiseState = MyPromise.REJECTED
			this.PromiseResult = reason
		}
	}

	then(onFulfilled, onRejected) {

		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
		onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

		// 每次只能执行一个函数，保证状态不可变
		if (this.PromiseState === MyPromise.FULFILLED) {
			setTimeout(() => {
				onFulfilled(this.PromiseResult)
			})
		}

		if (this.PromiseState === MyPromise.REJECTED) {
			setTimeout(() => {
				onRejected(this.PromiseResult)
			})
		}
	}
}

const p = new MyPromise((resolve, reject) => {
	resolve('abc')
})
// console.log(p)


console.log(1);
let promise = new Promise((resolve, reject) => {
	console.log(2);
	setTimeout(() => {
		
		console.log(4)
	})
})
promise.then((resolve)=>{
		console.log('fulfilled:', '这次一定');
		resolve()
})
// promise.then(
// 	result => {
// 		// resolve('这次一定')
// 		console.log('fulfilled:', '这次一定');
// 	},
// 	reason => {
// 		console.log('rejected:', reason)
// 	}
// )
console.log(3);

