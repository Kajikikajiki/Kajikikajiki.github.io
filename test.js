function buttonClick(){
  localStorage.setItem('user', nameText.value); // 保存
  msg.innerText = 'お名前は' + nameText.value + 'さんですね';
}

user = localStorage.getItem("user"); // 読み込み
if (user!=null) {
 buttonClick(); // すでに登録済み
}
else {
  msg.innerText = 'ｵﾒｪ誰だよ！`;
}
let nameText = document.getElementById('nameText');
nameText.value = '名前';
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);
