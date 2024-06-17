# 使用JavaScript实现简单洋葱模型的记录

## 什么是洋葱模型

洋葱模型是一种中间件的设计模式，它的核心思想是将各种操作的处理分为前置处理、后置处理和中间处理三个阶段
，操作在这三个阶段之间依次传递。

### 话不多说直接上测试

```typescript

it('use', () => {
  const onion = new Onion()
  const fn = async (ctx: any, next: () => Promise<void>) => {
   await next()
   ctx.count++
  }
  onion.use(fn)
  expect(onion.middlewares.length).toBe(1)
})

```

### 实现以及一些初始化

```typescript
type OnionMiddlewareFn = (ctx: any, next: () => Promise<void>) => Promise<void>

class Onion<T extends any> {
 // 1. 首先定义一个中间件数组
 middlewares: OnionMiddlewareFn[]
 auto: boolean

 constructor(auto: boolean = true) {
  this.auto = auto
  this.middlewares = []
 }
 // 2. 定义一个use方法，用来注册中间件
 use(fn: OnionMiddlewareFn) {
  if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  this.middlewares.push(fn)
 }
}

```

这些都是一些基本操作，提供一个 use 方法用来注册中间件 ，一个 middlewares 数组用来存储中间件。
在简单做一下预防，防止用户传入的不是函数。

### 上基础运行的测试

```typescript
 it('run', async () => {
  const onion = new Onion()
  const ctx = { count: 0 }

  onion.use(async (ctx: any, next: () => Promise<void>) => {
   ctx.count++
   await next()
   ctx.count++
  })
  onion.use(async (ctx: any, next: () => Promise<void>) => {
   ctx.count++
   await next()
   ctx.count++
  })
  await onion.run(ctx)
  expect(ctx.count).toBe(4)
 })
```

这个测试需要我们实现一个 run 方法并且运行中间件的逻辑，这个逻辑是一个递归调用的过程，每次调用都会执行一个中间件，直到中间件数组为空。

懒得讲了，反正没人看 谁看到了，谁慢慢看，反正不难

```typescript
 compose(middlewares: OnionMiddlewareFn[]) {
  let index = -1
  let auto = this.auto
  return (context: T | undefined) => {
   return async function dispatch(i: number): Promise<void> {
    if (i <= index) return Promise.reject(new Error('next() called multiple times'))
    index = i
    let fn = middlewares[i]
    if (!fn) return Promise.resolve()
    try {
     let current = i
     await Promise.resolve(fn(context, dispatch.bind(null, index + 1)))
     if (auto && i === current) {
      dispatch(index + 1)
     }
    } catch (err) {
     return Promise.reject(err)
    }
   }
  }

 }

 // 4. 定义一个run方法，用来执行中间件
 async run(ctx?: T) {
  return this.compose(this.middlewares)(ctx)(0)
 }
```

具体实现的仓库地址：[onion](https://github.com/zhaogongchengsi/onion)
