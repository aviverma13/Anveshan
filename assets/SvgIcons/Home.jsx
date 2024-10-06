import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M20 11.75a.74.74 0 0 1-.45-.15L12 5.94 4.45 11.6a.75.75 0 0 1-.9-1.2l8-6a.75.75 0 0 1 .9 0l8 6a.75.75 0 0 1 .15 1 .74.74 0 0 1-.6.35Z"
    />
    <Path
      fill={props.color}
      d="M18 19.75H6a.76.76 0 0 1-.75-.75V9.5a.75.75 0 0 1 1.5 0v8.75h10.5V9.5a.75.75 0 1 1 1.5 0V19a.76.76 0 0 1-.75.75Z"
    />
    <Path
      fill={props.color}
      d="M14 19.75a.76.76 0 0 1-.75-.75v-6.25h-2.5V19a.75.75 0 1 1-1.5 0v-7a.76.76 0 0 1 .75-.75h4a.76.76 0 0 1 .75.75v7a.76.76 0 0 1-.75.75Z"
    />
  </Svg>
);
export default HomeIcon;
