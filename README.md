React Tutorial
--------------

https://facebook.github.io/react/docs/tutorial-ja-JP.html

### Usage

```
$ pip install -r requirements.txt
$ npm install
$ npm run webpack
$ python server.py
```

and open http://localhost:3000

### Reference

- [ReactのチュートリアルをES6で書いてwebpackとESLintも使ってみる - Qiita](http://qiita.com/morizotter/items/9e2a7def6773a2a8e174)

### Memo

- アロー関数(Arrow Function) は `this` を自動的にバインドしてくれる
- `getInitialState` は ES6 の構文では使えない。かわりにコンストラクタ内で行う
    - ref. http://facebook.github.io/react/docs/reusable-components.html#es6-classes
- ES6 で書くときはインスタンスメソッドをbindする必要がある
    - ref. [Reactをes6で使う場合のbindの問題 - Qiita](http://qiita.com/cubdesign/items/ee8bff7073ebe1979936)
    - http://facebook.github.io/react/docs/reusable-components.html#no-autobinding
