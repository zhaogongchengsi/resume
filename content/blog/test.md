# Markdown Example File

This is an example Markdown file that demonstrates common Markdown syntax and usage.

:badge[v1.2]


:badge[Deprecated]{type="warning"}


::badge{type="danger"}
Not found!
::

## Headings

Use `#` to denote the level of headings, ranging from level 1 to level 6. Examples:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Paragraphs and Line Breaks

In Markdown, paragraphs are separated by empty lines. Examples:

This is the first paragraph.

This is the second paragraph. [link](#)

To create a line break within the same paragraph, add two spaces at the end of the line.

## Emphasis and Italics

Use `*` or `_` to indicate italics, and use `**` or `__` to indicate bold text. Examples:

This is an *italic* text.

This is a **bold** text.

## Lists

Markdown supports both ordered and unordered lists.

### Unordered Lists

Use `-`, `+`, or `*` to create unordered lists. Examples:

- Item 1
- Item 2
	- Item 2.1
	- Item 2.2
- Item 3

### Ordered Lists

Use numbers followed by periods to create ordered lists. Examples:

1. Item 1
2. Item 2
	1. Item 2.1
	2. Item 2.2
3. Item 3

[link](#)

## Links

To create a link, use the following format: `[link text](URL)`. Examples:

This is a [link to Google](https://www.google.com).

## Images

To insert an image, use the following format: `![alt text](image URL)`. Examples:

![Nature](https://picsum.photos/1000/300)

## Code Blocks

To create a code block, use triple backticks (\`) followed by the language name. Examples:

```js
function calculateSum(a, b) {
  return a + b
}

const result = calculateSum(3, 5)
console.log(result)
```
---

To create a code block, use triple backticks (\`) followed by the language name. Examples:

| 姓名   | 年龄 | 职业      |
| ------ | ---- | --------- |
| 小明   | 25   | 工程师    |
| 小红   | 30   | 教师      |
| 小刚   | 28   | 设计师    |