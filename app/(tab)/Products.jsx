import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CarouselData,
  Laptops,
  Mobiles,
  watches,
} from "../../assets/DataBase/db";
import {
  addToCartFunction,
  CartFunction,
  GetCartItemAsync,
  RemoveFromSavedForLater,
} from "../../Component/Function";
import { Toast } from "toastify-react-native";
import { router } from "expo-router";
import { GlobalStateContext } from "../../Context/GlobalContext";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";

const Products = () => {
  const { width } = useWindowDimensions();
  const carouselRef = useRef();
  return (
    <>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="  h-[25vh]  shadow-md shadow-zinc-400">
          <Carousel
            key={width}
            ref={carouselRef}
            data={CarouselData}
            sliderWidth={width}
            itemWidth={width - 60}
            hasParallaxImages={true}
            renderItem={({ item }) => (
              <>
                <View style={styles.item}>
                  <View
                    style={styles.imageContainer}
                    className="bg-transparent"
                  >
                    <Image source={item.Image} style={styles.image} />
                  </View>
                </View>
              </>
            )}
          />
        </View>
        <ProductList title="Popular Mobiles" data={Mobiles} />
        <ProductList title="Amazing Laptops" data={Laptops} />
        <ProductList title="Premium Watches" data={watches} />
      </ScrollView>
    </>
  );
};

export default Products;

const ProductList = ({ data, title }) => {
  return (
    <View style={{ padding: 6, gap: 4 }}>
      <View className="flex-row items-center  justify-between pr-2">
        <Text className="font-CeraProBold text-lg ">{title}</Text>
        <TouchableOpacity className="">
          <Text className="font-CeraProMedium text-sm">View all</Text>
        </TouchableOpacity>
      </View>
      <View className="px-2">
        <FlatList
          horizontal
          keyExtractor={(item) => item.productId}
          data={data}
          renderItem={(item) => <Product item={item} />}
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll bar
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

const Product = ({ item }) => {
  const { width } = useWindowDimensions();
  const [addToCart, setAddToCart] = useState(false);
  const [storedWishlist, setStoredWishlist] = useState(null);

  const { updateCartContext } = useContext(GlobalStateContext);

  const GetWishlist = async () => {
    let list = await GetCartItemAsync();
    list = JSON.parse(list);
    setStoredWishlist(list);
    setAddToCart(false);
  };

  useEffect(() => {
    GetWishlist();
  }, [updateCartContext]);

  useEffect(() => {
    if (storedWishlist) {
      storedWishlist.find((storedItem) => {
        storedItem.productId == item.item.productId && setAddToCart(true);
      });
    }
  }, [storedWishlist]);

  const HandleAddCart = async (item) => {
    await RemoveFromSavedForLater(item);
    let list = await GetCartItemAsync();
    list = JSON.parse(list);
    let CartData = item;

    if (list == null || list?.length < 10) {
      addToCartFunction(CartData);
      setAddToCart(true);
    } else {
      Toast.warn("Wishlist can include only 10 items.");
    }
  };

  return (
    <View
      style={{ width: (width - 40) / 2 }}
      className={` bg-white   rounded-md py-2 px-2 justify-between`}
    >
      <View className="w-full h-40  items-center">
        <Image
          className="w-32 h-full"
          source={item.item.productImage}
          resizeMode="contain"
        />
      </View>
      <View className="px-1 py-2  justify-between items-start">
        <Text className="font-CeraProBold text-[16px] ">
          {item.item.productName}
        </Text>
        <Text className="font-CeraPro text-[14px] w-full">
          ₹{item.item.productPrice}
        </Text>
      </View>
      <View>
        {!addToCart ? (
          <TouchableOpacity
            className="items-center bg-[#0f3757dd] py-2 rounded-lg  border border-[#0f3757dd] "
            onPress={() => HandleAddCart(item.item)}
          >
            <Text className="font-CeraProBold text-md text-white ">
              Add To Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="items-center bg-[#fff] py-2 rounded-lg border border-[#0f3757dd]"
            onPress={() => router.push("Cart")}
          >
            <Text className="font-CeraProBold text-md text-[#0f3757dd] ">
              Go to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
    // backgroundColor:"#333"
  },
  image: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});
