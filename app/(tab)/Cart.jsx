import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  addToSavedForLaterFunction,
  GetCartItemAsync,
  GetSavedForLaterItemAsync,
  RemoveFromCart,
  RemoveFromSavedForLater,
} from "../../Component/Function";
import { useFocusEffect } from "expo-router";
import { GlobalStateContext } from "../../Context/GlobalContext";
import SaveToLaterIcon from "../../assets/SvgIcons/SaveToLater";
import DeleteIcon from "../../assets/SvgIcons/Delete";

const Cart = () => {
  const [Wishlist, setWishlist] = useState(null);
  const [savedForLater, setSavedForLater] = useState(null);

  // console.log(Wishlist);
  const { updateCartContext, HandleUpdateCartContext } =
    useContext(GlobalStateContext);

  const GetCartItem = async () => {
    let list = await GetCartItemAsync();
    list = JSON.parse(list);

    setWishlist(list);
  };

  const GetSavedForLaterItem = async () => {
    let list = await GetSavedForLaterItemAsync();
    list = JSON.parse(list);

    setSavedForLater(list);
  };

  useFocusEffect(
    useCallback(() => {
      GetCartItem();
      GetSavedForLaterItem();
    }, [updateCartContext])
  );

  const DiscardItem = async (item) => {
    await RemoveFromCart(item);
    // GetCartItem();
    HandleUpdateCartContext(item);
  };

  const DiscardItemFromSavedForLater = async (item) => {
    await RemoveFromSavedForLater(item);
    // GetCartItem();
    HandleUpdateCartContext(item);
  };

  const SavedForLaterItem = async (item) => {
    await addToSavedForLaterFunction(item);
    // GetCartItem();
    await RemoveFromCart(item);
    return HandleUpdateCartContext(item);
  };
  return (
    <View className="flex-1" showsVerticalScrollIndicator={false}>
      {Wishlist ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <FlatList
            data={Wishlist}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                DiscardItem={DiscardItem}
                savedForLater={false}
                SavedForLaterItem={SavedForLaterItem}
              />
            )}
            // Hide horizontal scroll bar
            contentContainerStyle={{}}
            ListEmptyComponent={() => (
              <View className="w-full bg-white h-[45vh] items-center justify-center space-y-2">
                <Image
                  className="w-full h-52"
                  resizeMode="contain"
                  source={require("../../assets/EmptyCart.webp")}
                />

                <Text className="font-CeraProMedium text-[18px]">
                  Your cart is empty!
                </Text>
                <Text className="font-CeraProLight text-[12px]">
                  Explore our wide selection and find something you like
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
          {savedForLater?.length > 0 && (
            <View>
              <View className="py-2 px-2">
                <Text className="font-CeraProMedium text-[16px]">{`Saved For Later (${savedForLater?.length})`}</Text>
              </View>
              <FlatList
                data={savedForLater}
                keyExtractor={(item) => item.productId}
                renderItem={({ item }) => (
                  <CartItem
                    item={item}
                    DiscardItem={DiscardItemFromSavedForLater}
                    savedForLater={true}
                  />
                )}
                showsVerticalScrollIndicator={false} // Hide horizontal scroll bar
                contentContainerStyle={{}}
                ListEmptyComponent={() => (
                  <View className="flex-1 h-full">
                    <Text>Empty Cart</Text>
                  </View>
                )}
                scrollEnabled={false}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        <View>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

const CartItem = ({ item, DiscardItem, savedForLater, SavedForLaterItem }) => {
  const [disableRemoveBtn, setDisableRemoveBtn] = useState(false);

  const SaveForLaterFunction = async () => {
    setDisableRemoveBtn(true);
    await SavedForLaterItem(item);
    setDisableRemoveBtn(false);
  };
  return (
    <View className="bg-white my-1.5 ">
      <View className="px-2 py-4  flex-row space-x-3">
        <View
          className="  h-[80px] w-[100px] items-center  justify-center border-[0.7px] border-[#00000017] "
          style={{ borderRadius: 4 }}
        >
          <Image
            className="h-[78px] w-[100px]"
            resizeMode="contain"
            source={item.productImage}
          />
        </View>
        <View className="py-1 justify-between">
          <View>
            <Text className="font-CeraProBold text-[16px]">
              {item.productName}
            </Text>
            <Text className="font-CeraPro text-[14px] w-full">
              ₹{item.productPrice}
            </Text>
          </View>
          <View>
            <Text className="font-CeraProLight text-[14px] w-full">
              Delivery by tomorrow, 11PM
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row w-full border-[#00000017]  border-t-[0.5px] divide-x-[0.5px] divide-[#00000017]">
        {!savedForLater && !disableRemoveBtn && (
          <TouchableOpacity
            className=" py-4 flex-1 items-center"
            onPress={() => SaveForLaterFunction(item)}
          >
            <View className=" flex-row  items-center space-x-0.5 ">
              <SaveToLaterIcon />
              <Text className="font-CeraProBold text-[14px] text-[#00000070]">
                Save for Later
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className=" py-4 flex-1 items-center "
          onPress={() => DiscardItem(item)}
        >
          <View className=" flex-row  items-center space-x-0.5 ">
            <DeleteIcon />
            <Text className="font-CeraProBold text-[14px] text-[#00000070]">
              Remove
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;
