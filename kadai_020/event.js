// ボタン要素とテキスト要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', function() {
    // テキストを変更
    text.textContent = 'ボタンをクリックしました。';
});
