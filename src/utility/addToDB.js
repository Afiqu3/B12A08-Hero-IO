// import { toast } from "react-toastify";

const getStoreItem = () => {
  const storeItemSTR = localStorage.getItem("install");
  if (storeItemSTR) {
    const storeItemData = JSON.parse(storeItemSTR);
    return storeItemData;
  } else {
    return [];
  }
};

const addToStoreToDB = (id) => {
  const storeItem = getStoreItem();
  console.log(storeItem)
  if (storeItem.includes(id)) {
    return;
  } else {
    storeItem.push(id);
    const data = JSON.stringify(storeItem);
    localStorage.setItem("install", data);
  }
};

const removeFromStoreDB = (id) => {
  const storeItem = getStoreItem();
  if (storeItem.includes(id)) {
    const newData = storeItem.filter((b) => b !== id);
    const data = JSON.stringify(newData);
    localStorage.setItem("install", data);
  }
};

export { addToStoreToDB, getStoreItem, removeFromStoreDB };
