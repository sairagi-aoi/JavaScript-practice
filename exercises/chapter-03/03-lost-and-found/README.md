# 03　落とし物メモを入力中に表示する

**難易度**　★★☆ 応用

**目的**　入力が変わった瞬間に値を読み直し、初回の表示にも同じ関数を使う。

落とし物の窓口で、印刷するメモの文面を入力しながら確認できるようにします。入力欄 `#item` の内容を、そのまま見本欄 `#preview` に表示してください。最初の文面はHTMLに入っています。

## 完了条件

- [ ] 開いた直後から、入力欄の初期値「青い傘」が見本欄にも出る。
- [ ] 「鍵」に書き換えると、入力欄にカーソルを置いたまま見本が「鍵」に変わる。すべて消すと見本も空になる。
- [ ] `<b>鍵</b>` を貼り付けると、山括弧も含めてそのまま読める。
- [ ] 表示を更新する処理を1つの関数にまとめ、初回と入力時の両方で使っている。

<details>
<summary>ヒント</summary>

要素を指す定数は何度も使えます。入力欄の中身は、いつ読み取れば最新でしょうか。初回は自分で関数を呼び、次の更新は `input` イベントをきっかけにできます。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- 見本を更新する関数は1つで、開いた直後の呼び出しと `input` イベントの両方がそれを使っています。
- 見本は `textContent` です。`<b>鍵</b>` を貼り付けてもタグにならず、山括弧ごと読めます。
- 入力の途中で更新されます。欄から離れたときだけでは、途中の文字が反映されません。

```js
const item = document.querySelector('#item');
const preview = document.querySelector('#preview');

function updatePreview() {
  preview.textContent = item.value;
}

updatePreview();
item.addEventListener('input', updatePreview);
```

</details>

[作業用HTML](index.html) · [前の問題](../02-radio-track/README.md) · [次の問題](../04-parcel-desk/README.md) · [一覧](../README.md)
