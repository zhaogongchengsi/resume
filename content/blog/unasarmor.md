# 如何破解 asarmor 打包后的 asar 文件

## 问题描述

在使用 electron 打包项目时，我们通常会使用 asarmor 来加密 asar 文件，
但是在某些情况下，我们需要对 asar 文件进行还原。这本身是一个很简单的操作，
只需要运行 asar e app.asar app 即可，但是一些app使用 asarmor 加密后，
我们无法直接解压缩，因为如果直接解压则会导致一直解压不出来，并且会生成一些无用
的文件，侵占磁盘空间。

## asarmor 的实现原理

asarmor 是一个基于 asar 的加密工具，它的实现原理是将asar生成文件头的时候，
向文件插入大量的无用数据。
这种无用数据并不会影响electron app的运，因为electron是直接精准提起其中的文件，
但是当我们想要解压的时候，会根据文件头的信息来解压，这时候就会导致解压不出来。因为解压
将提取的文件头信息中的 file 文件信息遍历然后生成，这个时候处于前列的无用数据就会一直侵占
解压的时间和空间。但是这个也不是无穷无尽的。当我们解压到一定程度的时候，就会解压出最后的文件。
类似于下面的数据前面是无用的文件信息，后面是真实的文件信息。

```json
{
 "files": {
  "sadas234do24iawdhoiawhdoaiwd": {
   "offset": 0,
   "size": 123123123
  },
  "sadas234do24iaasdasdwdhoiawhdoaiwd": {
   "offset": 0,
   "size": 123123123
  },
  "sadas234do24iawdhoiasdawhdoaiwd": {
   "offset": 0,
   "size": 123123123
  },
  "sadas234do24iawdhasdasdoiawhdoaiwd": {
   "offset": 0,
   "size": 123123123
  },
  "index.html": {
   "offset": 0,
   "size": 100
  },
  "main.js": {
   "offset": 100,
   "size": 100
  }
 }
}
```

### 解决方案

解决方案很简单，我们只需要将文件头的信息提取出来，然后将无用的文件信息过滤掉即可。具体的实现在
[这里](https://github.com/zhaogongchengsi/asar) 这个仓库fork自asar
在这个仓库中我添加了一个命令和一个参数用来解决这个文件，

```bash
npm install -g @zunh/asar
```


```bash
super-asar extract-header|eh <archive> <filename>
```
第一个参数为需要提取的 asar文件 第二个为提取的文件头信息输出的文件名 为 json格式
这个命令用来提取文件头信息，然后我们可以使用这个文件头信息来解压文件。

将文件头信息提取出来后，就可以发现那些是无用的垃圾文件信息。

```bash
super-asar extract app.asar header.json -s 213123213
```

这个命令追加的参数为需要跳过的文件大小，这个参数是可选的，如果不传递则会和原生asar命令一样
解压所有的文件。

这样就可以依据提取的文件头信息来解压并跳过无用的文件信息。从而绕过 asarmor 的守护