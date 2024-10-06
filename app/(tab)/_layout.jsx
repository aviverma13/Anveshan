import { Tabs } from "expo-router";
import { Platform, Text, View } from "react-native";
import HomeIcon from "../../assets/SvgIcons/Home";
import CartIcon from "../../assets/SvgIcons/Cart";

const TabIcon = ({ Icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center w-full  ">
      <View className={`items-center justify-center w-[50] h-8`}>
        <Icon color={color} opacity={focused ? 1 : 0.5} />
      </View>
      <Text className={` text-xs `} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#1F74BA",
            tabBarInactiveTintColor: "#c7c5c5",
            tabBarShowLabel: false,
            tabBarStyle: {
              height: Platform.OS === "ios" ? 100 : 80,
            },
          }}
        >
          <Tabs.Screen
            name="Products"
            options={{
              title: "Home",
              headerTitle: "",
              headerLeft: () => <Text className="px-2 font-bold">PRODUCTS</Text>,
              tabBarIconStyle: { width: "100%" },
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  Icon={HomeIcon}
                  focused={focused}
                  name={"Home"}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="Cart"
            options={{
              title: "Cart",
              headerTitle: "",
              headerLeft: () => <Text className="px-2 font-bold">My Cart</Text>,
              tabBarIconStyle: { width: "100%" },

              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  Icon={CartIcon}
                  focused={focused}
                  name={"Cart"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </>
    </>
  );
};

export default TabLayout;
