# 02　買い物当番の一文を関数で再利用する

**難易度**　★☆☆ 基礎

**目的**　仮引数で受け取った値だけから文を作り、`return` した文字列を、呼び出し側が場所を決めて使う。

シェアハウスの買い物当番を、同じ形の一文で知らせます。人と品物の2つを受け取り、「佐藤さんが牛乳を買います。」のような文字列を返す関数を作ってください。関数名は、役割がわかるものに自分で付けます。関数宣言とアロー関数は、どちらを使っても構いません。

関数の仕事は文字列を返すところまでです。ページへの表示と `console.log` は、呼び出し側に書きます。仮引数の名前は、入力欄の定数名と揃える必要はありません。

1人目と2人目は、入力欄の初期値を引数にして関数を呼び、戻り値を `#lineOne` と `#lineTwo` に表示します。コンソールには、入力欄にはない「林」と「パン」を引数にした呼び出しの戻り値を出します。この問いでは `addEventListener` は使いません。

| 人 | 品物 | 返す文字列 |
| --- | --- | --- |
| 佐藤 | 牛乳 | 佐藤さんが牛乳を買います。 |
| 田中 | 卵 | 田中さんが卵を買います。 |
| 林 | パン | 林さんがパンを買います。 |

## 完了条件

- [ ] ページを開くと、`#lineOne` が「佐藤さんが牛乳を買います。」、`#lineTwo` が「田中さんが卵を買います。」になる。
- [ ] コンソールに「林さんがパンを買います。」が出る。林とパンは入力欄ではなく、呼び出しのときに渡した値である。
- [ ] `#goodsOne` の `value` だけを「豆腐」に変えて保存し、再読み込みすると、1行目が「佐藤さんが豆腐を買います。」になる。2行目とコンソールは表のまま。
- [ ] 画面上で入力欄を書き換えても、再読み込みするまでは3行とも開いたときのまま。

<details>
<summary>ヒント</summary>

林とパンの入力欄はありません。関数の中で入力欄を読むと、この2つを渡しても文を作れません。括弧の中の仮引数が、呼び出しのたびに別の実引数を受け取ります。`return` した文字列は、呼び出し側の定数で受け取ってから、表示とコンソールに渡します。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。関数名は、役割がわかればこの例と違って構いません。

### 答え合わせの観点

- 関数は人と品物を仮引数で受け取り、文を `return` するだけです。関数の中で `textContent` や `console.log` を書いていません。
- 1行目・2行目・コンソールは、同じ関数を別の実引数で3回呼んでいます。
- 仮引数の名前は、入力欄の定数名と別です。
- 林とパンは、呼び出しの引数に直接書いています。
- アロー関数でも関数宣言でも構いません。解答例はアロー関数です。

```js
const shopperOne = document.querySelector('#shopperOne');
const goodsOne = document.querySelector('#goodsOne');
const shopperTwo = document.querySelector('#shopperTwo');
const goodsTwo = document.querySelector('#goodsTwo');
const lineOne = document.querySelector('#lineOne');
const lineTwo = document.querySelector('#lineTwo');

const formatErrand = (person, goods) => {
  return `${person}さんが${goods}を買います。`;
};

const firstLine = formatErrand(shopperOne.value, goodsOne.value);
const secondLine = formatErrand(shopperTwo.value, goodsTwo.value);

lineOne.textContent = firstLine;
lineTwo.textContent = secondLine;
console.log(formatErrand('林', 'パン'));
```

</details>

[作業用HTML](index.html) · [前の問題](../01-venue-signs/README.md) · [次の問題](../03-flower-labels/README.md) · [一覧](../README.md)
