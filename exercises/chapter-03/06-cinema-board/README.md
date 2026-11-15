# 06　上映会の入口ボードを作る

**難易度**　★★★ 小規模実装

**目的**　2つの入力から1枚の案内板を更新し、文字列を作る関数と画面を更新する関数を使い分ける。

ミニシアターの受付係が、入口のボードに上映作品と入場案内を出せるようにします。作品名の入力欄は `#film`、受付状況の選択欄は `#stage` です。ボード `#board` の内側に、見出し `#boardTitle` と案内文 `#boardNote` があります。

作品名を引数に取り、見出しの文字列を返す関数を書いてください。渡された文字列は前後の空白を除いてから使います。作品名が「月の港」なら見出しは「上映作品『月の港』」です。除いたあとに文字が残らないとき（何も入力していない、半角スペースだけ、全角スペースだけ）は「作品未定」です。文字が残っていれば、その文字で「上映作品『…』」を作ります。続いて画面を更新する関数を1つ作り、ページを開いたときと、どちらかの入力が変わったときに使います。

| 受付状況 | 選択欄の値 | 案内文 | ボードの背景色 |
| --- | --- | --- | --- |
| 準備中 | `prep` | 開場までお待ちください | 薄い灰色 `#e2e8f0` |
| 開場 | `open` | どうぞお入りください | 薄い緑 `#d1fae5` |
| 満席 | `full` | 次の回をご利用ください | 薄い赤 `#fee2e2` |

## 完了条件

- [ ] 最初から「上映作品『月の港』」と準備中の案内が出て、ボードは薄い灰色になっている。
- [ ] 「開場」に切り替えると、見出しを保ったまま案内文と背景色が表の開場の行にそろう。
- [ ] 開場のまま作品名を「午後の鳥」に書き換えると、見出しが「上映作品『午後の鳥』」に変わり、開場の案内が続く。
- [ ] 「満席」に切り替えてから作品名をすべて消すと、「作品未定」と満席の案内文・背景色が同時に出る。そこから「準備中」に戻すと、見出しは「作品未定」のまま案内文・背景色が戻る。
- [ ] 作品名が半角スペースだけ、または全角スペースだけのときも「作品未定」になる。前後に空白が付いた「 午後の鳥 」は「上映作品『午後の鳥』」になる。

<details>
<summary>ヒント</summary>

まず初期表示で作品名だけを確認し、次に受付状況を1つずつ試しましょう。別々に動かせる2つの入力について、「いつ読み直すか」と「どの関数をイベントに渡すか」を考えると、どちらを先に操作しても表示がそろいます。空白だけの作品名は、`trim` で除いてから空欄かどうか見ます。

</details>

<details>
<summary>解答例</summary>

自分のコードを書いてから開いてください。

### 答え合わせの観点

- 見出し用の関数は文字列を返すだけです。画面の書き換えは、別の更新用関数が担当しています。
- 更新用関数は作品名と受付状況の両方を読み、見出し・案内文・`#board` の背景色をそろえます。
- 開いたとき、作品名の `input`、受付状況の変更が、どれも同じ更新用関数を呼びます。
- 作品名は `trim` してから判断します。空白だけなら「作品未定」、文字が残ればその文字で「上映作品『…』」です。

```js
const film = document.querySelector('#film');
const stage = document.querySelector('#stage');
const board = document.querySelector('#board');
const boardTitle = document.querySelector('#boardTitle');
const boardNote = document.querySelector('#boardNote');

function formatTitle(name) {
  const title = name.trim();
  if (title === '') {
    return '作品未定';
  }
  return `上映作品『${title}』`;
}

function updateBoard() {
  boardTitle.textContent = formatTitle(film.value);

  if (stage.value === 'open') {
    boardNote.textContent = 'どうぞお入りください';
    board.style.backgroundColor = '#d1fae5';
  } else if (stage.value === 'full') {
    boardNote.textContent = '次の回をご利用ください';
    board.style.backgroundColor = '#fee2e2';
  } else {
    boardNote.textContent = '開場までお待ちください';
    board.style.backgroundColor = '#e2e8f0';
  }
}

updateBoard();
film.addEventListener('input', updateBoard);
stage.addEventListener('change', updateBoard);
```

</details>

[作業用HTML](index.html) · [前の問題](../05-reading-size/README.md) · [一覧](../README.md)
