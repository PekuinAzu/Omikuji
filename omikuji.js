let username; // username という箱を宣言している
let userresult;

// promptは、入力ダイアログ（今回はユーザーに名前を入力させるウインドウ）
// を表示させる命令
username = prompt("お名前を教えてください。");


// "name"というidを持つタグに囲まれている文字列を
// usernameという箱に入っている値で上書きする

// 文字が入力されなかったときは「名無し」と表示する処理
if(username === ""){
    document.getElementById("name").innerHTML = "名無し"
}else if(username === null){
    username = prompt("再度入力してください。");
}else{
document.getElementById("name").innerHTML = username;
}


// 「Math.floor( Math.random() * 5)」が実行されると、
// ランダムで0,1,2,3,4の数値のどれかが取得できます。
// その取得した値を、randという箱に入れるという処理.

let rand = Math.floor( Math.random() * 5);
　if (rand == 0) {
    userresult = "大吉";
　}　
　if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }

  document.getElementById("result").innerHTML = userresult;