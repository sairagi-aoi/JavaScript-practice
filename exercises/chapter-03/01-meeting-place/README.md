# 01　集合場所を2枚の案内に反映する

**難易度**　★☆☆ 基礎

**目的**　繰り返し使う値に意味のある名前を付け、1か所の変更を2つの表示に反映する。

まち歩きの集合場所は天気によって変わります。集合場所の「中庭」を1つの定数に持たせ、その値を使って「出発前」と「遅れたとき」の案内を書いてください。2つの表示先は `#departure` と `#lateArrival` です。

| 集合場所 | 出発前の案内 | 遅れたときの案内 |
| --- | --- | --- |
| 中庭 | 中庭で集合します。 | 遅れた方は中庭へ。 |
| 正面玄関 | 正面玄関で集合します。 | 遅れた方は正面玄関へ。 |

## 完了条件

- [ ] ページを開くと、1行目の例どおりに2枚の案内が表示される。
- [ ] 集合場所を表す定数の値だけを「正面玄関」に変え、保存して再読み込みすると、2枚とも2行目の文面に変わる。

<details>
<summary>ヒント</summary>

2枚の案内で同じなのはどの言葉でしょうか。その役割がわかる定数名を考えてみましょう。テンプレートリテラルを使うと、文ごとに違う部分と共通の値を組み合わせられます。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- 集合場所は定数1つにだけ書き、2つの文面はその定数を埋め込んでいる。
- 定数を「正面玄関」に変えて再読み込みすると、両方の文が表の2行目になる。
- 表示先は `#departure` と `#lateArrival`。

```js
const meetingPlace = '中庭';
const departure = document.querySelector('#departure');
const lateArrival = document.querySelector('#lateArrival');

departure.textContent = `${meetingPlace}で集合します。`;
lateArrival.textContent = `遅れた方は${meetingPlace}へ。`;
```

</details>

[作業用HTML](index.html) · [次の問題](../02-radio-track/README.md) · [一覧](../README.md)
