<h1 align = "center"> React Keyboard Move List</center></h1>
> Carousel, Matrix Component operated by Keyboard Input (←, ↑, →, ↓)



## 💽 Intro

### SlideView

 ![slideview](https://github.com/DevSoopark/react-keyboard-move-list/raw/master/SlideView-Demo.gif)

### MatrixView

 ![matrixview](https://github.com/DevSoopark/react-keyboard-move-list/raw/master/MatrixView-Demo.gif)

[Demo in Storybook](https://DevSoopark.github.io/react-key-move-list-view/)



## 🌟 Major Component


- SlideView
- MatrixView
- ListView
- ViewContainer



## 🔨 Built With


- TypeScript
- React
- Sass



## ⚙️ Installation


```sh
yarn add @___/react-keyboard-move-list
# or
npm install ———save @___/react-keyboard-move-list
```



## 🔍 Examples


### Sample Keyboard Move List

```javascript
import * as React from 'react';
import data from '../../data';
import { ListView } from '@___/react-keyboard-move-list';

const KeyboardListViewExample = () => {
  return (
    <ListView list={data} type="slide"/>
    // or 
    <ListView list={data} type="matrix"/>
  )
}
```

You can find more Examples and [Demo in Storybook](https://DevSoopark.github.io/react-key-move-list-view/)



## 🖥 Local Development


This component is managed by a `storybook` which is combined with `develop environment` and `documentation`. If you want to develop in local environment, clone project and develop through a storybook

```sh
git clone https://github.com/DevSoopark/react-keyboard-move-list.git
yarn
yarn run storybook
```



## 🗝 License


MIT