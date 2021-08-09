import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  //   About: {
  //     screen: About,
  //   },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
