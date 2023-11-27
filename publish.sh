#!/bin/bash

# 运行 pnpm generate 命令
pnpm generate

# 复制并覆盖 .output/public 目录到 /home/blog
cp -Rf .output/public /home/blog