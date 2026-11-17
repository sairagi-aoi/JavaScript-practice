# 05　朗読カードの文字サイズを調整する

**難易度**　★★☆ 応用

**目的**　3-10で覚えた `style` への代入を、単位が必要な `font-size` に応用する。背景色はそのまま代入できますが、文字サイズは数値に `px` を付けます。この問は3-10のそのままの復習ではなく、その応用です。

朗読する人が手元の原稿を読みやすくできるようにします。スライダー `#size` を動かすと、原稿 `#passage` の文字だけが大きくなったり小さくなったりするようにしてください。`#sizeLabel` には今のサイズを「20 px」の形式で表示します。スライダーは16〜32を4刻みで選べます。

## 完了条件

- [ ] 初期値の20で、原稿の文字サイズが20pxになり、表示欄に「20 px」と出る。
- [ ] 32まで動かすと原稿が32pxになり、表示欄が「32 px」に変わる。16に戻すと両方が16に切り替わる。
- [ ] 途中の24でも原稿が24px、表示が「24 px」になる。見出しと操作ラベルの文字サイズはどの位置でも同じ。

実際のサイズは、原稿を右クリックして「検証」を開き、計算済みスタイルの `font-size` で確かめられます。

<details>
<summary>ヒント</summary>

スライダーから読めるのは「24」のような値です。画面で人が読む表記と、ブラウザーがCSSの長さとして受け取れる表記では、数値と単位の間の空白に違いがあります。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- `#passage` の `style.fontSize` は `20px` のように、数値と `px` を空白なしでつないでいます。
- `#sizeLabel` は `20 px` のように、数値と `px` の間に空白があります。
- 変えている文字サイズは原稿だけです。見出しと操作ラベルはそのままです。
- 開いたときとスライダー操作で、同じ関数を使っています。

```js
const size = document.querySelector('#size');
const sizeLabel = document.querySelector('#sizeLabel');
const passage = document.querySelector('#passage');

function updateSize() {
  passage.style.fontSize = `${size.value}px`;
  sizeLabel.textContent = `${size.value} px`;
}

updateSize();
size.addEventListener('input', updateSize);
```

</details>

[作業用HTML](index.html) · [前の問題](../04-parcel-desk/README.md) · [次の問題](../06-cinema-board/README.md) · [一覧](../README.md)
