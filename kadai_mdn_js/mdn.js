// 現在の日付を取得
const today = new Date();

// 年を取得
const year = today.getFullYear();

// 月を取得（JavaScriptでは月は0から始まるため、+1する）
const month = today.getMonth() + 1;

// 日を取得
const day = today.getDate();

// 日付を「年/月/日」の形式で表示
console.log(`${year}年${month}月${day}日`);
