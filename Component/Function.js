import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetCartItemAsync = async () => {
  let items = await AsyncStorage.getItem("CartItems");
  return items;
};

export const GetSavedForLaterItemAsync = async () => {
  let items = await AsyncStorage.getItem("SavedForLater");
  return items;
};

export const addToCartFunction = async (CartData) => {
  let items = await AsyncStorage.getItem("CartItems");

  if (items) {
    items = [...JSON.parse(items)];
    let newItemsArray = [CartData];
    items.map((item) => {
      newItemsArray.push(item);
    });
    await AsyncStorage.setItem("CartItems", JSON.stringify(newItemsArray));
  } else {
    await AsyncStorage.setItem("CartItems", JSON.stringify([CartData]));
  }
};

export const addToSavedForLaterFunction = async (CartData) => {
  let items = await AsyncStorage.getItem("SavedForLater");
  // let AlreadyInCart = items.find(
  //   (item) => item?.productId == CartData?.productId
  // );
  // console.log(AlreadyInCart,"dsdsdsdsdsdsdsdsdsdsds");

  if (items) {
    items = [...JSON.parse(items)];

    let newItemsArray = [CartData];
    items.map((item) => {
      newItemsArray.push(item);
    });
    await AsyncStorage.setItem("SavedForLater", JSON.stringify(newItemsArray));
  } else {
    await AsyncStorage.setItem("SavedForLater", JSON.stringify([CartData]));
  }
};

export const RemoveFromCart = async (product) => {
  let ProductId = product.productId;
  let items = await AsyncStorage.getItem("CartItems");
  items = JSON.parse(items);

  let filteredArray;
  if (items) {
    filteredArray = items.filter((item) => item?.productId !== ProductId);
  }
  await AsyncStorage.setItem("CartItems", JSON.stringify(filteredArray));
};

export const RemoveFromSavedForLater = async (product) => {
  let ProductId = product.productId;
  let items = await AsyncStorage.getItem("SavedForLater");
  items = JSON.parse(items);

  let filteredArray;
  if (items) {
    filteredArray = items.filter((item) => item?.productId !== ProductId);
    await AsyncStorage.setItem("SavedForLater", JSON.stringify(filteredArray));
  } else {
    return;
  }
};
