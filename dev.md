## 构建与发布

### 包构建
```
yarn build

// package.json                     构建格式

"main": "./dist/index.js"           //cjs
"module": "./dist/index.esm.js"     //esm
"unpkg": "./dist/index.umd.js"      //umd
```
### Docz构建&部署
```
yarn doc:build
product => /.docz/dist/index.html
```

### 发布

部分配置解释

```
// package.json

    // 必须

    "name": "@jaysg/umisg",  
    // 发布到npm <packageName> / github @<username>/<packageName>
    "version": "1.0.1"
    "author": {
        "name": "<username>",
        "email": "<email>"
    },
    "license": "MIT" // or other

    // 发布至github 发布至npm的时候可以删除使用全局npm配置注册地址
    "publishConfig": {
        "registry": "https://npm.pkg.github.com/<username>"
    },

```