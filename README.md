# Format String to HTML

![](https://img.shields.io/bundlephobia/min/format-string-to-html)
![](https://img.shields.io/npm/v/format-string-to-html)
![](https://img.shields.io/npm/dt/format-string-to-html)
![](https://img.shields.io/github/license/markmead/format-string-to-html)

## Install

```shell
  npm install format-string-to-html
  yarn add format-string-to-html
```

## Usage

```js
import formatStringToHtml from 'format-string-to-html'

const stringOfHTML = '<div><h1>Hello World!</h1></div>'

new formatStringToHtml(stringOfHTML).format()
```

This will return

```html
<div>
  <h1>Hello World!</h1>
</div>
```

[See it in action on CodePen](https://codepen.io/markmead/pen/MWjdqPq)
