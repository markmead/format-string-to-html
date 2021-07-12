# Format String to HTML

Pass in a string of unformatted HTML, get formatted HTML back

![](https://img.shields.io/bundlephobia/min/format-string-to-html)
![](https://img.shields.io/npm/v/format-string-to-html)
![](https://img.shields.io/npm/dt/format-string-to-html)
![](https://img.shields.io/github/license/markmead/format-string-to-html)

## Install

### CDN

```
https://unpkg.com/format-string-to-html@1.0.1/dist/index.js
```

### NPM or Yarn

```shell
npm i format-string-to-html

yarn add format-string-to-html
```

## Usage

```js
import formatStringToHtml from 'format-string-to-html'

const string = '<div><h1>Hello World!</h1></div>'

new formatStringToHtml(string).format()

/*
This will return

<div>
  <h1>Hello World</h1>
</div>
*/
```
