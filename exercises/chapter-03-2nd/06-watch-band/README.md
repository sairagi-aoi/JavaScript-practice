# 06　見守り当番の腕章ボードを作る

**難易度**　★★★ 小規模実装

**目的**　引数で文を返す関数と、画面を更新する関数を分け、条件の順と背景色まで1枚のボードにまとめる。

地域の見守り当番が、入口のボード `#armband` に今日の担当と控えと腕章の色を出します。担当者の入力欄は `#member`、場所は `#spot`、腕章の色は `#band` です。ボードの中に、当番 `#duty`、控え `#backup`、色の表示 `#bandLabel` があります。

人の名前と場所を引数に取り、当番の文を返す関数を書いてください。関数名は自分で決めます。この関数は入力欄を直接読まず、渡された引数だけを見ます。仮引数の名前は、入力欄の定数名と揃っていなくて構いません。

| 人 | 場所 | 返す文字列 |
| --- | --- | --- |
| 青木 | 南門 | 青木さんは南門を担当します。 |
| （空） | 南門 | 担当者が未定です。 |
| （空） | （空） | 担当者が未定です。 |
| 青木 | （空） | 場所が未定です。 |

人が空のときは、場所より先に判定して「担当者が未定です。」を返します。両方空のときもこの文です。人が入っていて場所が空のときだけ「場所が未定です。」です。この2つの分岐を逆にすると、両方空のときの文が「場所が未定です。」に変わります。人も場所も空でないときは、「青木さんは南門を担当します。」の形で返します。

控え `#backup` は、同じ関数に「佐藤」と「北門」を渡した戻り値です。入力欄を変えても「佐藤さんは北門を担当します。」のままです。

腕章の色は、当番の文とは別の分岐で判定します。比較は `===` です。一致したときに、`#bandLabel` の文字と `#armband` の背景色をそろえます。

| 入力 | 色の表示 | ボードの背景色 |
| --- | --- | --- |
| `黄` | 黄色の腕章 | `#fef08a` |
| `緑` | 緑色の腕章 | `#bbf7d0` |
| `赤` | 赤色の腕章 | `#fecaca` |
| それ以外（空欄や「黄色」「青」） | 色を入力してください | `#f8fafc` |

画面を更新する関数を1つ作り、ページを開いたときと、3つの入力のどれかが変わったときに使います。`addEventListener` には、その関数名を渡します。

## 完了条件

- [ ] 開いたとき、当番は「青木さんは南門を担当します。」、控えは「佐藤さんは北門を担当します。」、色の表示は「黄色の腕章」で、ボードの背景は `#fef08a`。
- [ ] 担当者を「川上」に書き換えているあいだに、当番が「川上さんは南門を担当します。」になる。控えの文は変わらない。
- [ ] 担当者と場所を両方消すと、当番は「担当者が未定です。」。担当者を「青木」に戻して場所だけ空にすると「場所が未定です。」。控えはどちらでも「佐藤さんは北門を担当します。」。
- [ ] 色を「緑」「赤」の順に変えると、表示と背景が表の行にそろう。当番の文は、そのときの担当者と場所のまま。
- [ ] 「黄」のうしろに「色」を足して「黄色」にしたとき、欄から離れる前に「色を入力してください」と背景 `#f8fafc` に戻る。「青」でも同じ案内になる。

<details>
<summary>ヒント</summary>

文を作る関数の中に `member.value` と書くと、控えで「佐藤」と「北門」を渡しても、入力欄の名前が出てしまいます。人の名前と場所は仮引数で受け取ります。色の文字と背景色は、更新用の関数の中で同じ分岐に書きます。3つの `input` には、同じ更新用の関数名を渡します。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。関数名は、役割がわかればこの例と違って構いません。

### 答え合わせの観点

- 当番の文を作る関数は、人と場所を仮引数で受けて `return` するだけです。入力欄は読んでいません。
- 当番は入力欄の値を渡し、控えは `'佐藤'` と `'北門'` を渡しています。同じ関数です。
- 人が空の分岐が場所の分岐より先です。両方空のときは「担当者が未定です。」になります。
- 色の `===` と背景色の代入は、更新用の関数にまとまっています。`黄` と `黄色` は別の文字列です。
- 開いたときの呼び出しと、3つの `input` が、同じ更新用の関数を呼んでいます。

```js
const member = document.querySelector('#member');
const spot = document.querySelector('#spot');
const band = document.querySelector('#band');
const armband = document.querySelector('#armband');
const duty = document.querySelector('#duty');
const backup = document.querySelector('#backup');
const bandLabel = document.querySelector('#bandLabel');

function formatDuty(person, place) {
  if (person === '') {
    return '担当者が未定です。';
  } else if (place === '') {
    return '場所が未定です。';
  }
  return `${person}さんは${place}を担当します。`;
}

function updateArmband() {
  duty.textContent = formatDuty(member.value, spot.value);
  backup.textContent = formatDuty('佐藤', '北門');

  if (band.value === '黄') {
    bandLabel.textContent = '黄色の腕章';
    armband.style.backgroundColor = '#fef08a';
  } else if (band.value === '緑') {
    bandLabel.textContent = '緑色の腕章';
    armband.style.backgroundColor = '#bbf7d0';
  } else if (band.value === '赤') {
    bandLabel.textContent = '赤色の腕章';
    armband.style.backgroundColor = '#fecaca';
  } else {
    bandLabel.textContent = '色を入力してください';
    armband.style.backgroundColor = '#f8fafc';
  }
}

updateArmband();
member.addEventListener('input', updateArmband);
spot.addEventListener('input', updateArmband);
band.addEventListener('input', updateArmband);
```

</details>

[作業用HTML](index.html) · [前の問題](../05-name-card/README.md) · [一覧](../README.md)
