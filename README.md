<h1> React KeyMoveListView</h1>
Carousel, Matrix Component operated by Keyboard Input (←, ↑, →, ↓)



## 💽 Intro

### SlideView

 ![slideview](https://github.com/DevSoopark/react-key-move-list-view/raw/master/SlideView-Demo.gif)

### MatrixView

 ![matrixview](https://github.com/DevSoopark/react-key-move-list-view/raw/master/MatrixView-Demo.gif)

### SlideView - Container
![slideview-container](https://github.com/DevSoopark/react-key-move-list-view/raw/master/SlideView-Container-Demo.gif)

### MatrixView - Container
![matrixview-container](https://github.com/DevSoopark/react-key-move-list-view/raw/master/MatrixView-Container-Demo.gif)


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
npm i react-key-move-list-view
# or
yarn add react-key-move-list-view
```



## 🔍 Examples


### Sample Keyboard Move List

```javascript
import * as React from 'react';
import { ListView } from 'react-key-move-list-view';

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
git clone https://github.com/DevSoopark/react-key-move-list-view.git
yarn
yarn run storybook
```



## 🗝 License


MIT