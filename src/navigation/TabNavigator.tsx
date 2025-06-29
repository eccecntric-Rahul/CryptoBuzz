import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types/navigation";
import { Platform } from "react-native";
import Icons from "../icons/Icons";
import bottomTabs from "../constants/BottomTabsData";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabs = () => {
  const {colors} =useTheme()
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {bottomTabs?.map((tab) => {
          return (
            <Tab.Screen
              key={tab.id}
              name={tab.title}
              component={tab.component}
              options={{
                
                tabBarIcon: ({ focused }: { focused: boolean }) => (
                  <Icons name={tab.icon} color={focused ? colors.primary : "grey"} />
                ),
                tabBarStyle:
                  Platform.OS === "android"
                    ? {
                        paddingBottom: 16,
                        height: 80,
                        backgroundColor: colors.background,
                        borderTopColor:colors.border,
                        borderTopWidth:2,
                      }
                    : {
                        height: 80,
                        paddingTop: 12,
                        backgroundColor: colors.background,
                        borderTopColor:colors.border,
                        borderTopWidth:2,
                      },
              }}
            />
          );
        })}
      </Tab.Navigator>
  );
};
