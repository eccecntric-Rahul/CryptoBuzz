import FilterScreen from "../screens/FilterScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IconType from "../types/Icons";
import { BottomTabParamList } from "../types/navigation";

const bottomTabs: {
  icon: IconType;
  title: keyof BottomTabParamList;
  id: string;
  component: React.FC;
}[] = [
  { id: "Home", title: "Home", icon: "HOME", component: HomeScreen },
  { id: "Filters", title: "Filters", icon: "FILTERS", component: FilterScreen },
  { id: "Profile", title: "Profile", icon: "PROFILE", component: ProfileScreen },
];

export default bottomTabs;
