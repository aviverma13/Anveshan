import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const DeleteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#777b81e1"
    width={15}
    height={15}
    data-name="Layer 1"
    viewBox="0 0 64 64"
    {...props}
  >
    <Path d="M50.86 13.38H13a1.5 1.5 0 0 1 0-3h37.86a1.5 1.5 0 0 1 0 3Z" />
    <Path d="M42.4 57.93H21.48a5.5 5.5 0 0 1-5.5-5.5V11.87a1.5 1.5 0 0 1 1.5-1.5H46.4a1.5 1.5 0 0 1 1.5 1.5v40.56a5.51 5.51 0 0 1-5.5 5.5ZM19 13.37v39.06a2.5 2.5 0 0 0 2.5 2.5h20.9a2.5 2.5 0 0 0 2.5-2.5V13.37Z" />
    <Path d="M40 13.37H23.9a1.5 1.5 0 0 1-1.5-1.5v-5.3a1.5 1.5 0 0 1 1.5-1.5H40a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-1.5 1.5Zm-14.58-3h13.06v-2.3H25.4ZM24.94 47.61a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5ZM38.94 47.61a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5ZM31.94 40.38a1.5 1.5 0 0 1-1.5-1.5V28.7a1.5 1.5 0 1 1 3 0v10.18a1.5 1.5 0 0 1-1.5 1.5Z" />
  </Svg>
);
export default DeleteIcon;
