dayjs-jp-format
===
[![Actions Status](https://github.com/hyakt/dayjs-jp-format/workflows/Node.js%20CI/badge.svg)](https://github.com/hyakt/dayjs-jp-format/actions)
[![npm version](https://badge.fury.io/js/dayjs-jp-format.svg)](https://badge.fury.io/js/dayjs-jp-format)

day.jsのformat関数にて日本の元号を表示するためのプラグインです。  
A plugin is an independent module that can be added to Day.js to extend functionality or add japanse calendar features.

Usage
---
1. Install the repository
    ```bash
    $ npm install --save dayjs-jp-format
    $ npm install --save dayjs # peer dependency
    ```
    or
    ```bash
    $ yarn add dayjs-jp-format
    $ yarn add dayjs # peer dependency
    ```

2. Import the jp format
   ```javascript
    import { jpFormat } from 'dayjs-jp-format' // load on demand

    dayjs.extend(jpFormat) // use plugin

    const date = '2020-06-24'

    dayjs(date).format('rrrr') // --> 令和02
    ```

Format
---
| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `rr`   | 令和              | 日付に応じた元号                         |
| `rrrr` | 令和02            | 日付に応じた和暦(年は除く)                 |
