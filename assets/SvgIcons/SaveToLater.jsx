import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SaveToLaterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <Path
      stroke="#777b81e1"
      strokeWidth={1.2}
      d="m16 14-3.5 3.5L9 14M4.5 7.5v13h16v-13l-2-3h-12l-2 3ZM12.5 10.5V17M4.5 7.5h16"
    />
  </Svg>
);
export default SaveToLaterIcon;
