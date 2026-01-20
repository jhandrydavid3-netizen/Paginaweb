function setItemJson(nameItem, item) {
  localStorage.setItem(nameItem, JSON.stringify(item));
}


function setOnlyItem(nameItem, item) {
  localStorage.setItem(nameItem, item);
}


function getItemJson(nameItem, item) {
  return JSON.parse(localStorage.getItem(nameItem));
}


function getOnlyItem(nameItem) {
  return localStorage.getItem(nameItem);
}