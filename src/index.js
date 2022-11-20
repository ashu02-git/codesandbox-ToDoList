import "./styles.css";

const onClickAdd = () => {
  const incompletedList = document.getElementById("incompleted-list");
  const completedList = document.getElementById("completed-list");

  // テキストボックスの値取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // listItem生成
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerText = inputText;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.className = "complet-button";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completedTreat = completeButton.parentNode;
    const getListId = completedTreat.parentNode.getAttribute("id");

    if (getListId === "completed-list") {
      completedList.removeChild(completedTreat);
      incompletedList.appendChild(completedTreat);
    } else {
      incompletedList.removeChild(completedTreat);
      completedList.appendChild(completedTreat);
    }
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボダンの親タグ(li)をリストから削除
    const deleteTreat = deleteButton.parentNode;
    const getListId = deleteTreat.parentNode.getAttribute("id");

    if (getListId === "completed-list") {
      completedList.removeChild(deleteTreat);
    } else {
      incompletedList.removeChild(deleteTreat);
    }
  });

  // listItemの子要素追加
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // 未完了リスト追加
  incompletedList.appendChild(listItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
