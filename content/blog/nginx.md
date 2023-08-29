---
title: Nginx
description: nginx 基础使用 以防太久忘了
author: Zhaozunhong
time: 2022-7-2
language: 中文
---


# nginx 安装

系统：Ubuntu 20.04 server 64bit

1. ## 安装nginx

```sh
sudo apt-get install nginx
```

2. ## 验证安装成功

```sj
nginx -v 
```
nginx version: nginx/1.18.0 (Ubuntu)

当出现类似输出的版本好 则说明 nginx 安装成功
默认安装目录 /etc/nginx

3. ## 配置使用nginx

```sh
vi blog.conf
```
输入以下内容

```conf
server {
    #服务启动时监听的端口
    listen 80 default_server;
    listen [::]:80 default_server;
    #服务启动时文件加载的路径
    root /var/www/html/blog;
    #默认加载的第一个文件wwhm
    index index.php index.html index.htm index.nginx-debian.html;
    #页面访问域名，如果没有域名也可以填写
    server_name xxxx;

    location / {
        #页面加载失败后所跳转的页面
        try_files $uri $uri/ =404;
    }
}
```
创建测试文件
1. 跳到刚刚配置的文件目录下
2. 创建文件夹
3. 创建index.html 并切入内容
```sh
cd /var/www/html 
mkdir blog
vi index.html
```
### 关闭默认进程

1. 查询nginx 进程
```sh
ps -ef | grep nginx
```

2. 关闭默认进程
master 的为主进程
```sh
kill -QUIT 主进程号
```

### 重新启动nginx

1. 查看nginx 配置文件 ```nginx.conf```

在nginx 文件夹内 运行 ```vi nginx.conf``` 打开nginx 配置文件
查看nginx.conf 是否有默认运行的配置文件与我们配置的 80 端口是否
重叠 如果有就删除默认

2. 然后运行启动nginx 
没有任何报错就算启动成功
```sh
nginx -c /etc/nginx/nginx.conf
```

## 配置https

```conf

server {
    #服务启动时监听的端口
    listen 443 ssl; # 新版写法
    listen [::]:443 ssl;
    #服务启动时文件加载的路径
    root /var/www/html/blog;
    #默认加载的第一个文件wwhm
    index index.php index.html index.htm index.nginx-debian.html;
    #页面访问域名，如果没有域名也可以填写
    server_name zzhblog.cn;

    # 配置ssl 证书
    # ssl on; 不使用这个写法 会引起警告

    ssl_certificate cert/xxx.crt  ;

    ssl_certificate_key cert/xxx.key;

    ssl_session_timeout 5m;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;

    ssl_prefer_server_ciphers on;


    location / {
        #页面加载失败后所跳转的页面
        try_files $uri $uri/ =404;
    }
}
```

##### 检查配置文件是否正常

```sh
nginx -t
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is **ok**
nginx: configuration file /etc/nginx/nginx.conf **test is successful**
出现类似的就为成功

##### 重启nginx

```sh
nginx -s reload
```
不报错就是成功重启

## http 跳转 https nginx 重定向
在http 服务 也就是在80端口服务中加入下面这个代码 然后在重启 不报错就是成功
```conf
rewrite ^(.*)$ https://${server_name}$1 permanent;
```