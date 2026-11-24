# 01　定数名の誤りを直して会場案内を2枚出す

**難易度**　★☆☆ 基礎

**目的**　定数名の規則を外すとスクリプトが止まること、定義していない名前は ReferenceError になること、同じ文字列は定数1つにまとめることを押さえる。

町内の会合の会場名を、ポスターと回覧メモの両方に出します。入力欄 `#venue` の初期値を、ページを開いたときに文字列の定数へ入れ、その定数を `#poster` と `#memo` に埋め込んでください。この問いでは `addEventListener` は使いません。定数は、ページを開いたときに入った値を覚えています。

次のコードは、名前が規則に反しているため、実行の前に止まります。

```js
const 1st-venue = document.querySelector('#venue');
const class = document.querySelector('#poster');
const memo note = document.querySelector('#memo');
```

| 名前 | 止まる理由 |
| --- | --- |
| `1st-venue` | 数字で始まり、ハイフンを含む。ハイフンは引き算になる |
| `class` | `class` は予約語で、定数名にできない |
| `memo note` | 名前の途中にスペースがある |

使える文字は半角英数字と `$` と `_` です。数字では始められません。予約語には、この章で使う `function` や `return`、`if` も含まれます。この問いの定数名は、役割がわかるキャメルケースにしてください。

名前の文字を直したあとも、定義した名前と使っている名前が違うと、`poster` を読んだ瞬間に ReferenceError になり、2枚とも表示されません。

```js
const venueInput = document.querySelector('#venue');
const posterEl = document.querySelector('#poster');
const memoEl = document.querySelector('#memo');
const venueName = venueInput.value;

poster.textContent = `${venueName}で開きます。`;
memo.textContent = `会場は${venueName}です。`;
```

`posterEl` を定義して `poster` と書くと、`poster` は未定義です。`memoEl` と `memo` も同じです。`textContent` に書く名前は、自分で定義した定数名と揃えてください。

| 会場名 | ポスター | 回覧メモ |
| --- | --- | --- |
| 公民館のホール | 公民館のホールで開きます。 | 会場は公民館のホールです。 |
| 図書館の集会室 | 図書館の集会室で開きます。 | 会場は図書館の集会室です。 |

## 完了条件

- [ ] ページを開くと、1行目の例どおりに2枚の案内が出る。
- [ ] 画面上の入力欄を「図書館の集会室」に書き換えても、再読み込みするまでは2枚とも開いたときの文面のまま。
- [ ] `index.html` の `#venue` の `value` を「図書館の集会室」に変えて保存し、再読み込みすると、2枚とも2行目の文面になる。
- [ ] コンソールにエラーが出ない。

<details>
<summary>ヒント</summary>

要素を指す定数と、会場名の文字列の定数は別にします。文字列の定数は `.value` を1回だけ読んで作り、2つの文面にはその定数を埋めます。画面上で入力を変えても、文字列の定数は追従しません。開いたときに入った値のままです。入力のたびに読み直すのは、このあとの問いのイベントの役割です。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。定数名は、役割がわかればこの例と違って構いません。

### 答え合わせの観点

- 定数名はキャメルケースで、数字で始まらず、ハイフン・スペース・予約語を使っていません。
- 会場名の文字列は定数1つにだけ入り、2つの文面はその定数を埋め込んでいます。
- `textContent` で使っている名前は、その直前で定義した定数名と一致しています。
- `addEventListener` は使っていません。画面上の入力を変えても、再読み込みまでは表示が開いたときのままです。

```js
const venueInput = document.querySelector('#venue');
const poster = document.querySelector('#poster');
const memo = document.querySelector('#memo');
const venueName = venueInput.value;

poster.textContent = `${venueName}で開きます。`;
memo.textContent = `会場は${venueName}です。`;
```

</details>

[作業用HTML](index.html) · [次の問題](../02-shopping-duty/README.md) · [一覧](../README.md)
