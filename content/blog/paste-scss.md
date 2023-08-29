---
title: Scss 通用mixin 方法
---

# scss MixIn 专区

## 文字截断

```scss
@mixin text-hidden($clamp: 1) {
  @if $clamp == 1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } @else {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: $clamp;
    -webkit-box-orient: vertical;
  }
}
```

## 绝对定位快速方位设置

```scss
@mixin position($value) {
  position: absolute;
  @if $value == 'left' {
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  @if $value == 'right' {
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  @if $value == 'top' {
    right: 0;
    top: 0;
    left: 0;
    margin: 0 auto;
  }
  @if $value == 'bottom' {
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
  }

  @if $value == 'center' {
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    margin: auto;
  }
}
```

## 去掉滚动条

```scss
@mixin scrollNone {
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    // 火狐下隐藏滚动条
    width: 0px;
    height: 0px;
  }
}
```

## 清除浮动

```scss
@mixin clearfix {
  &::after,
  &::before {
    clear: both;
    content: '';
    display: block;
    height: 0;
    line-height: 0;
    overflow: hidden;
  }
}
```

## 图片大小设置

```scss
@mixin setImgSize($width, $height, $fit: contain) {
  @if $height == null {
    width: $width;
    height: $width;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: $fit;
    }
  } @else {
    width: $width;
    height: $height;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: $fit;
    }
  }
}
```

## 取消选中文字

```scss
@mixin userSelect($value: none) {
  -moz-user-select: $value;
  -webkit-user-select: $value;
  -ms-user-select: $value;
  -khtml-user-select: $value;
  user-select: $value;
}
```

## 清除选择框的默认样式

```scss
@mixin clearSelectStyle {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  &::-ms-expand {
    display: none;
  }
  @content;
}
```

## 设置多行多列布局

```scss
@mixin grid(
  $width: 1200px /* 父元素的宽度 */,
  $chiname: item /* 子元素的类名 */,
  $row: 4 /* 列数 */,
  $space: 20px,
  /* 间隔 */ $isov: false /*父元素是否有裁剪属性*/
) {
  @if ($isov == true) {
    width: $width;
    display: flex;
    flex-wrap: wrap;
    .#{$chiname} {
      $_spaceWidth: ($width - ($space * ($row - 1)));
      $_width: ($_spaceWidth / $row);
      width: $_width;
      margin-right: $space;
      margin-bottom: $space;
      &:nth-child(#{$row}n) {
        margin-right: 0;
      }
      @content;
    }
  } @else {
    width: $width;
    display: flex;
    flex-wrap: wrap;
    margin-top: -$space;
    margin-left: -$space;
    .#{$chiname} {
      width: ($width / $row - $space);
      margin-left: $space;
      margin-bottom: $space;
      @content;
    }
  }
}
```

## 探测 IE

```scss
@mixin IsIE {
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    @content;
  }
}
```
