import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected: function() {
    console.log("connect!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
  console.log("connect!");
    // 新しいP要素を用意します．
    var node = document.createElement("P");
    // 受信したメッセージを変数に入れます．
    var textnode = document.createTextNode(data.content.message);
    // テキストノードを新規作成したP要素に追加します．
    node.appendChild(textnode);

    // DOM に新しく作られた要素とその内容を追加します
    document.getElementById("new_message").appendChild(node);
    // フォームの中身を空にします
    document.getElementById('chat_message').value= ''
  }
});
