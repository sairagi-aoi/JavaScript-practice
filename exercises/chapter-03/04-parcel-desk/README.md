# 04　荷物の受け取り窓口を判定する

**難易度**　★★☆ 応用

**目的**　入力が決められた文字列と一致するかを調べ、どの入力にも窓口を1つ案内する。

文化祭の搬入受付では、荷札に書かれたコードによって受け取り窓口が変わります。入力欄 `#parcelCode` を読み、次の規則で `#desk` に窓口名を表示してください。コードは大文字・小文字を区別し、入力のたびに判定します。

| 荷札のコード | 案内する窓口 |
| --- | --- |
| `BOOK` | 図書窓口 |
| `ART` | 作品窓口 |
| それ以外（空欄も含む） | 総合窓口 |

## 完了条件

- [ ] 開いた直後は空欄なので「総合窓口」が出る。
- [ ] `BOOK` → `ART` → `book` の順に置き換えると、「図書窓口」→「作品窓口」→「総合窓口」の順に切り替わる。
- [ ] `BOOK` の末尾を1文字消して `BOO` にしたときも、入力欄から離れる前に「総合窓口」に戻る。

<details>
<summary>ヒント</summary>

完全に一致したときだけ専用の窓口を案内します。規則の表を上からたどり、どちらの専用コードにも当てはまらなかった入力の行き先を考えてみましょう。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- 比較は `===` です。`book` は `BOOK` に一致しません。
- `BOOK` と `ART` 以外（空欄や `BOO`）はすべて「総合窓口」です。
- 開いたときに一度判定し、その後は `input` で同じ関数を呼んでいます。1文字消した瞬間に窓口が戻ります。

```js
const parcelCode = document.querySelector('#parcelCode');
const desk = document.querySelector('#desk');

function updateDesk() {
  if (parcelCode.value === 'BOOK') {
    desk.textContent = '図書窓口';
  } else if (parcelCode.value === 'ART') {
    desk.textContent = '作品窓口';
  } else {
    desk.textContent = '総合窓口';
  }
}

updateDesk();
parcelCode.addEventListener('input', updateDesk);
```

</details>

[作業用HTML](index.html) · [前の問題](../03-lost-and-found/README.md) · [次の問題](../05-reading-size/README.md) · [一覧](../README.md)
