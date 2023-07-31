---
title: 关于加密算法的使用  todo 英文
description: 在 web 开发中登录逻辑中最关键的对密码加密的环节一些基本的逻辑, (留着后面有的抄) todo 英文
author: Zhaozunhong
time: 2023-7-1
language: 中文
---

# 关于加密算法的使用

为了以后过来黏贴使用

## crypto-js 使用

## 常用的加密算法

1. MD5：用于计算消息摘要的哈希算法。
2. SHA-1、SHA-224、SHA-256、SHA-384、SHA-512：用于计算消息摘要的哈希算法，其中 SHA-256 和 SHA-512 最常用。
3. HMAC：用于计算消息认证码的算法，通常与哈希算法一起使用。
4. PBKDF2：用于从密码派生密钥的算法，可以使用不同的哈希算法和参数来生成不同的密钥。
5. AES：高级加密标准，用于对称加密，支持不同的密钥长度和工作模式。
7. DES、Triple DES：用于对称加密，已经被 AES 取代，但仍然在某些遗留系统中使用。
8. Rabbit、RC4、RC5、RC6：用于对称加密，已经被 AES 取代，但仍然在某些系统中使用。

### 密码加密

在前端应用程序中，密码的安全性和保护用户隐私是非常重要的。为了增加密码的安全性，可以使用 PBKDF2（Password-Based Key Derivation Function 2）密钥派生函数来生成密码的密钥。同时，为了避免时序攻击的风险，需要使用时间安全的比较函数来比较两个生成的密钥的值是否相等。

在 JavaScript 中，可以使用 CryptoJS 库提供的 CryptoJS.PBKDF2() 方法来使用 PBKDF2 算法生成密钥。同时，可以使用 Node.js 的 crypto 模块提供的 timingSafeEqual() 方法来比较两个密钥的值是否相等。以下是一个使用 PBKDF2 和 timingSafeEqual() 方法生成和比较密码密钥的示例：

```ts
import crypto from 'node:crypto'
import CryptoJS from 'crypto-js'

// 盐
const salt = 'aausdhaisudhasuihdiasudhasuihduiasdbnasiuddasiudhbasu'
// 需要加密的密码
const password = 'ABC23'
// 迭代次数
const iterations = 10000
// 密钥长度
const keySize = 256 / 32

const key = CryptoJS.PBKDF2(password, salt, {
  keySize,
  iterations
})

const key2 = CryptoJS.PBKDF2(password, salt, {
  keySize,
  iterations
})

const buffer1 = Buffer.from(key.toString(CryptoJS.enc.Hex), 'hex')
const buffer2 = Buffer.from(key2.toString(CryptoJS.enc.Hex), 'hex')

const passwordsMatch = crypto.timingSafeEqual(buffer1, buffer2)

console.log('对比结果', passwordsMatch)
```
在这个示例中，我指定了密码、盐、迭代次数和密钥长度等参数，然后使用 CryptoJS.PBKDF2() 方法生成密钥。接着，我们将两个生成的密钥转换为缓冲区对象，并使用 crypto.timingSafeEqual() 方法比较两个密钥的值是否相等。

在对比两个缓冲区时，需要保证两个缓冲区长度一致，若不一致，可以新建一致的缓冲区
```ts
const length = Math.max(buffer_hash.byteLength, buffer_password.byteLength)
const newHashBuffer = Buffer.alloc(length)
const newPasswordBuffer = Buffer.alloc(length)

newHashBuffer.copy(newHashBuffer)
newPasswordBuffer.copy(newPasswordBuffer)
```

需要注意的是，在将 PBKDF2 密钥转换为缓冲区对象时，需要指定编码方式为 'hex'，以便将其转换为 Node.js 的缓冲区对象进行比较。如果两个密钥的值相等，将返回 true，否则返回 false。

在实际应用中，为了保证密码和密钥的安全性，还需要采取其他安全措施，例如使用强密码、限制登录尝试次数、定期更改密码等等。