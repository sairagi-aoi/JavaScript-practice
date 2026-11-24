# 05　席札の紙色と文字サイズを変える

**難易度**　★★☆ 応用

**目的**　CSSのハイフン付きの名前をキャメルケースにして `style` に代入し、代入する値が文字列のままであることを確かめる。

会合の席札 `#nameCard` を、紙の色と名前の文字サイズで整えます。紙の色は `#paper`、文字の大きさは `#ink`、名前の入力欄は `#guest` です。名前の文字は `#guestName`、今の指定を読む欄は `#sampleRead` です。

ページを開いたときと、3つの入力のどれかが変わったときに、同じ関数で次の4つをそろえてください。

- `#nameCard` の背景色は、`#paper` の value。
- `#guestName` の文字サイズは、`#ink` の value。
- `#guestName` の文字は、`#guest` の value。
- `#sampleRead` は「背景は#fffbeb、文字は24px」の形。背景の部分は紙の value、文字の部分は大きさの value。

紙の色の選択肢に見える文字は「生成り」「薄緑」「薄青」です。スタイルへ代入するのは、その表示ではなく value です。

| 画面の表示 | value | 席札の背景 |
| --- | --- | --- |
| 生成り | `#fffbeb` | `#fffbeb` |
| 薄緑 | `#ecfdf5` | `#ecfdf5` |
| 薄青 | `#eff6ff` | `#eff6ff` |

文字の大きさの value は `16px`、`24px`、`40px` です。単位は value に最初から入っています。数値へ変換したり、うしろに `px` を足したりする必要はありません。

次の2行は、このままでは動きません。ハイフンが引き算として読まれるためです。

```js
nameCard.style.background-color = paper.value;
guestName.style.font-size = ink.value;
```

CSSの `background-color` は `backgroundColor`、`font-size` は `fontSize` と書きます。右辺は `#fffbeb` や `24px` のような文字列のまま代入します。

ページ全体の背景を変えるときは `document.body.style.backgroundColor` を使います。この問いは席札だけなので、`#nameCard` に代入します。見出しや操作ラベルの文字サイズは変えません。

## 完了条件

- [ ] 開いたとき、席札の背景は `#fffbeb`、名前「山田」の文字サイズは 24px、`#sampleRead` は「背景は#fffbeb、文字は24px」。
- [ ] 紙の色を「薄青」にすると背景が `#eff6ff` になり、読み上げ欄も `#eff6ff` になる。文字サイズは 24px のまま。
- [ ] 文字の大きさを 40px にすると、名前だけが 40px になり、読み上げ欄は「背景は#eff6ff、文字は40px」になる。見出しの文字サイズは、どの大きさでも開いたときと同じ。
- [ ] 名前を「佐藤」に書き換えると席札の文字が「佐藤」になり、背景色と文字サイズはそのまま。
- [ ] ページ全体の背景色は、紙の色を変えても開いたときと同じ。

背景色と文字サイズは、席札と名前を右クリックして「検証」を開き、計算済みスタイルの `background-color` と `font-size` で確かめられます。

<details>
<summary>ヒント</summary>

選択肢から読める文字列を、そのまま `style` の右辺に置きます。プロパティ名のハイフンは、JavaScriptでは大文字の境目にします。ページ全体が染まってしまったら、代入先が `document.body` になっていないか見てみましょう。席札は `#nameCard` です。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- 背景は `nameCard.style.backgroundColor`、文字サイズは `guestName.style.fontSize` です。ハイフン付きの名前のままでは書いていません。
- 右辺は `#paper` と `#ink` の `.value` そのものです。`px` の付け足しも、数値への変換もありません。
- `#sampleRead` は、スタイルに代入したのと同じ文字列をテンプレートリテラルで読めるようにしています。
- 開いたときと、紙・大きさ・名前の `input` が、同じ関数を呼んでいます。
- 背景を変えているのは `#nameCard` だけです。`document.body` には代入していません。

```js
const paper = document.querySelector('#paper');
const ink = document.querySelector('#ink');
const guest = document.querySelector('#guest');
const nameCard = document.querySelector('#nameCard');
const guestName = document.querySelector('#guestName');
const sampleRead = document.querySelector('#sampleRead');

function updateCard() {
  nameCard.style.backgroundColor = paper.value;
  guestName.style.fontSize = ink.value;
  guestName.textContent = guest.value;
  sampleRead.textContent = `背景は${paper.value}、文字は${ink.value}`;
}

updateCard();
paper.addEventListener('input', updateCard);
ink.addEventListener('input', updateCard);
guest.addEventListener('input', updateCard);
```

</details>

[作業用HTML](index.html) · [前の問題](../04-cafe-guide/README.md) · [次の問題](../06-watch-band/README.md) · [一覧](../README.md)
