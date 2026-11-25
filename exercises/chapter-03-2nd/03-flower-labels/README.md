# 03　花束の札で名前付き関数と無名関数を書き分ける

**難易度**　★★☆ 応用

**目的**　関数をその場で呼ぶ場合と、あとで呼んでもらうために渡す場合を区別する。この演習では、花束は名前付き関数を再利用し、リボンは無名関数を `addEventListener` に直接渡す。

花屋のカウンターに、花束の札とリボンの札を出します。

花束の入力欄は `#bouquet`、初期値は「カスミソウ」です。札 `#front` は、ページを開いたときから「花束: カスミソウ」と出て、入力の途中でも書き換わります。この更新は名前付き関数1つにまとめ、開いたときに自分で1回呼び、`input` にも同じ関数名を渡します。

リボンの入力欄は `#ribbon` で、最初は空です。札 `#ribbonLabel` は、開いたときは空のままにします。文字を入れ始めたら「リボン: 赤」のように出します。この演習では、リボンの更新は無名関数として `addEventListener` の括弧の中に直接書いてください。無名関数でも、変数に入れれば別の場所から呼び出せます。

`addEventListener` に渡すのは関数そのものです。自分で実行するときだけ、名前の後ろに `()` を付けます。`updateFront()` のように括弧を付けて渡すと、その場で一度実行されるだけで、その後の入力では札が更新されません。定義していない名前を渡すと ReferenceError になり、入力しても札は変わりません。

| 入力欄 | 開いた直後 | 入力の例 | 入力したあとの札 |
| --- | --- | --- | --- |
| 花束 | 花束: カスミソウ | バラ | 花束: バラ |
| 花束 | 花束: カスミソウ | （空） | 花束: |
| リボン | （空のまま） | 赤 | リボン: 赤 |
| リボン | （空のまま） | （空） | リボン: |

空欄の札は「花束: 」「リボン: 」です。コロンのうしろの空白は残り、その先に文字はありません。

## 完了条件

- [ ] 開いた直後、花束の札は「花束: カスミソウ」で、リボンの札は空。
- [ ] 花束を「バラ」へ書き換えているあいだに、札が「花束: バラ」になる。欄から離れるのを待たない。
- [ ] 花束をすべて消すと、札は「花束: 」になる。
- [ ] リボンに「赤」と入れると「リボン: 赤」。すべて消すと「リボン: 」。
- [ ] 花束の更新は名前付き関数1つで、開いたときの呼び出しと `input` の両方がそれを使っている。
- [ ] リボンは無名関数を `addEventListener` に直接渡し、開いたときには呼んでいない。

<details>
<summary>ヒント</summary>

名前があると、自分で呼ぶことと、イベントに渡すことの両方ができます。リボンを開いたときに呼ぶと、空欄なのに「リボン: 」が出て、完了条件の「空のまま」から外れます。イベントに渡す名前は、定義した関数名と一字違わず揃えます。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。花束の関数名は、役割がわかればこの例と違って構いません。

### 答え合わせの観点

- `updateFront` は、定義のあとに `updateFront()` で1回呼ばれ、`addEventListener` には括弧なしの `updateFront` が渡されています。
- リボンの関数は名前がなく、`addEventListener` の中に直接書いてあります。開いたときの呼び出しはありません。
- どちらの札も `textContent` で、入力の `.value` をテンプレートリテラルに埋め込んでいます。
- きっかけは `input` です。入力の途中で札が変わります。

```js
const bouquet = document.querySelector('#bouquet');
const ribbon = document.querySelector('#ribbon');
const front = document.querySelector('#front');
const ribbonLabel = document.querySelector('#ribbonLabel');

function updateFront() {
  front.textContent = `花束: ${bouquet.value}`;
}

updateFront();
bouquet.addEventListener('input', updateFront);

ribbon.addEventListener('input', () => {
  ribbonLabel.textContent = `リボン: ${ribbon.value}`;
});
```

</details>

[作業用HTML](index.html) · [前の問題](../02-shopping-duty/README.md) · [次の問題](../04-cafe-guide/README.md) · [一覧](../README.md)
