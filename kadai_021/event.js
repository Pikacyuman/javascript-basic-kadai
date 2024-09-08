// ボタン要素とテキスト要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//ボタンがクリックされたときの処理
btn.addEventListener('click', setTimeout(() => {
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行す
    text.textContent = 'ボタンをクリックしました。';
}, 2000));