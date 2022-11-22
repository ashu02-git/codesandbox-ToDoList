import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const completeButton = document.createElement("button");
  completeButton.className = "complet-button";
  completeButton.innerText = "完了";

  const backButton = document.createElement("button");
  backButton.className = "back-button";
  backButton.innerText = "戻る";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteParentId = deleteButton.parentNode.parentNode.id;
    // 押された削除ボダンの親タグ(li)をリストから削除

    deleteParentNode(deleteParentId, deleteButton.parentNode);
  });

  const setItem = (targetListId, listText) => {
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    const itemText = document.createElement("a");
    itemText.innerText = listText;
    listItem.appendChild(itemText);

    targetListId === "incomlpeted-list"
      ? listItem.appendChild(completeButton)
      : listItem.appendChild(backButton);

    listItem.appendChild(deleteButton);

    return listItem;
  };

  const incompletedListId = "incomlpeted-list";
  const completedListId = "comlpeted-list";
  const listItem = setItem(incompletedListId, inputText);

  completeButton.addEventListener("click", () => {
    const completeButtonParentId = completeButton.parentNode.parentNode.id;
    const comlpetedItemText =
      completeButton.parentNode.firstElementChild.innerText;
    deleteParentNode(completeButtonParentId, completeButton.parentNode);
    const completedItem = setItem(completedListId, comlpetedItemText);
    document.getElementById("completed-list").appendChild(completedItem);
  });

  backButton.addEventListener("click", () => {
    const backButtonParentId = backButton.parentNode.parentNode.id;
    const backItemText = backButton.parentNode.firstElementChild.innerText;
    deleteParentNode(backButtonParentId, backButton.parentNode);
    const backItem = setItem(incompletedListId, backItemText);
    document.getElementById("incompleted-list").appendChild(backItem);
    // deleteParentNode(backButton.parentNode);
  });

  // 未完了リスト追加
  document.getElementById("incompleted-list").appendChild(listItem);
};

const deleteParentNode = (ParentId, target) => {
  document.getElementById(ParentId).removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
