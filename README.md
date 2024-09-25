# pxt-test

学习如何构建自定义makecode扩展

## 自定义扩展本地化

参考文档: https://makecode.com/extensions/localization


### 提取翻译ID/生成翻译文件

```
pxt gendocs --locs
```

> 在扩展的根目录中创建一个 `_locales` 文件夹, 而翻译文件就在里面

### 支持的本地化语言
# pxt-test

学习如何构建自定义makecode扩展

## 自定义扩展本地化

参考文档: https://makecode.com/extensions/localization


### 提取翻译ID/生成翻译文件

```
pxt gendocs --locs
```

> 在扩展的根目录中创建一个 `_locales` 文件夹, 而翻译文件就在里面

### 支持的本地化语言

<details>
  <summary>点击展开/折叠</summary>

  | Language Code | Language Name |语言名称   |
  | -------------- | ------------ |--------- |
  | en             | English      |英语      |
  | ar             | Arabic       |阿拉伯语  |
  | bg             | Bulgarian    |保加利亚语|
  | ca             | Catalan      |加泰罗尼亚语 |
  | cs             | Czech        |捷克语    |
  | cy             | Welsh        |威尔士语  |
  | da             | Danish       |丹麦语    |
  | de             | German       |德语      |
  | el             | Greek        |希腊语    |
  | es-ES          | Spanish      |西班牙语  |
  | fi             | Finnish      |芬兰语    |
  | fr             | French       |法语      |
  | he             | Hebrew       |希伯来语  |
  | hu             | Hungarian    |匈牙利语  |
  | is             | Icelandic    |冰岛语    |
  | it             | Italian      |意大利语  |
  | ja             | Japanese     |日语      |
  | ko             | Korean       |韩语      |
  | nl             | Dutch        |荷兰语    |
  | nb             | Norwegian    |挪威语    |
  | nn-NO          | Norwegian Nynorsk |挪威尼诺斯克语 |
  | pl             | Polish       |波兰语    |
  | pt-BR          | Portuguese (Brazil) |葡萄牙语（巴西） |
  | pt-PT          | Portuguese (Portugal) |葡萄牙语（葡萄牙） |
  | ru             | Russian      |俄语      |
  | si-LK          | Sinhala      |僧伽罗语  |
  | sk             | Slovak       |斯洛伐克语|
  | sr             | Serbian      |塞尔维亚语|
  | sv-SE          | Swedish      |瑞典语    |
  | tr             | Turkish      |土耳其语  |
  | uk             | Ukrainian    |乌克兰语  |
  | vi             | Vietnamese   |越南语    |
  | zh-CN          | Chinese (Simplified) |中文（简体） |
  | zh-TW          | Chinese (Traditional) |中文（繁体） |

</details>

> 类似于 `_locales/zh-CN` 文件夹，对应的是 简体中文
> ps. **区分大小写**

### 本地化文件的文件名称格式

> 前期提要:
> Name: pxt.json里面的name字段的值

```
<Name>-strings.json
<Name>-jsdoc-strings.json
```

### 翻译格式

1. 翻译积木 "xx.xx|block"
2. 翻译分类 "{id:category}Test"
3. 翻译小标题 "{id:group}Basic"

