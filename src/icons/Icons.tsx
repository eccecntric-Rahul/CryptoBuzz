import React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
import IconType from "../types/Icons";

const Icons = ({
  name,
  color,
  ...props
}: {
  name: IconType;
  color?: string;
} & SvgProps) => {
  switch (name) {
    case "HOME":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
          <Path
            d="M12.666 16H3.335a3.337 3.337 0 01-3.333-3.333V6.484c0-1.11.55-2.142 1.469-2.762L6.136.572a3.32 3.32 0 013.729 0l4.666 3.15a3.327 3.327 0 011.468 2.762v6.183A3.337 3.337 0 0112.666 16zM8 1.334c-.389 0-.778.115-1.118.345L2.216 4.827a1.995 1.995 0 00-.881 1.657v6.183c0 1.102.897 2 2 2h9.331c1.103 0 2-.898 2-2V6.484c0-.665-.33-1.285-.88-1.657L9.118 1.68c-.34-.23-.73-.345-1.119-.345z"
            fill={color ? color : "grey"}
          />
        </Svg>
      );
    case "PROFILE":
      return (
        <Svg width={17} height={16} viewBox="0 0 17 16" fill="none" {...props}>
          <G clipPath="url(#clip0_1035_11606)">
            <Path
              d="M13.167 2.667h-.734A3.34 3.34 0 009.167 0H7.833a3.34 3.34 0 00-3.266 2.667h-.734A3.337 3.337 0 00.5 6v6.667A3.337 3.337 0 003.833 16h9.334a3.337 3.337 0 003.333-3.333V6a3.337 3.337 0 00-3.333-3.333zM7.833 1.333h1.334a2 2 0 011.877 1.334H5.956a2 2 0 011.877-1.334zM3.833 4h9.334a2 2 0 012 2v2H1.833V6a2 2 0 012-2zm9.334 10.667H3.833a2 2 0 01-2-2V9.333h6V10a.667.667 0 101.334 0v-.667h6v3.334a2 2 0 01-2 2z"
              fill={color ? color : "grey"}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1035_11606">
              <Path fill="#fff" transform="translate(.5)" d="M0 0H16V16H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
  
    case "FILTERS":
      return (
        <Svg width={17} height={16} viewBox="0 0 17 16" fill="none" {...props}>
          <Path
            d="M3.166 8h10.667M3.166 12h10.667M3.166 4h10.667"
            stroke={color ? color : "grey"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    
    case "LEFT-ANGLE-ARROW":
      return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
          <Path
            d="M12.5 15l-5-5 5-5"
            stroke={color ? color : "#fff"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "NOTIFICATION":
      return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
          <Path
            d="M8.557 17.5a1.667 1.667 0 002.886 0M11.597 1.93A5 5 0 005 6.668c0 3.75-1.176 4.963-2.283 6.106a.834.834 0 00.617 1.394h13.333a.834.834 0 00.617-1.394 7.497 7.497 0 01-.488-.554"
            stroke="#fff"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M15 9.168a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            fill={color ? color : "#DC143C"}
            stroke="#DC143C"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "SETTINGS":
      return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
          <Path
            d="M10.182 1.668h-.366a1.667 1.667 0 00-1.667 1.667v.15a1.667 1.667 0 01-.833 1.441l-.359.209a1.667 1.667 0 01-1.666 0l-.125-.067a1.667 1.667 0 00-2.275.608l-.184.317a1.667 1.667 0 00.609 2.275l.125.083a1.667 1.667 0 01.833 1.434v.425a1.667 1.667 0 01-.833 1.45l-.125.075a1.667 1.667 0 00-.609 2.275l.184.316a1.666 1.666 0 002.275.609l.125-.067a1.666 1.666 0 011.666 0l.359.208a1.667 1.667 0 01.833 1.442v.15a1.667 1.667 0 001.667 1.667h.366a1.667 1.667 0 001.667-1.667v-.15a1.667 1.667 0 01.833-1.442l.359-.208a1.667 1.667 0 011.666 0l.125.067a1.666 1.666 0 002.275-.609l.184-.325a1.666 1.666 0 00-.609-2.275l-.125-.066a1.665 1.665 0 01-.833-1.45v-.417a1.667 1.667 0 01.833-1.45l.125-.075a1.667 1.667 0 00.609-2.275l-.184-.317a1.667 1.667 0 00-2.275-.608l-.125.067a1.667 1.667 0 01-1.666 0l-.359-.209a1.666 1.666 0 01-.833-1.441v-.15a1.667 1.667 0 00-1.667-1.667z"
            stroke="#fff"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            stroke="#fff"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "CROSS":
      return (
        <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
          <Path
            d="M14 1.73L12.27 0 7 5.27 1.73 0 0 1.73 5.27 7 0 12.27 1.73 14 7 8.73 12.27 14 14 12.27 8.73 7 14 1.73z"
            fill="#0D0D0D"
          />
        </Svg>
      );
    case "DARK-MODE":
      return (
        <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
          <G clipPath="url(#clip0_1089_12284)">
            <Path
              d="M8.58 11.496l-.754.754.754.754a.583.583 0 11-.825.825l-.754-.754-.754.754a.582.582 0 01-.825 0 .583.583 0 010-.825l.754-.754-.754-.754a.583.583 0 11.825-.825l.754.754.754-.754a.583.583 0 11.825.825zm3.912.754l.754-.754a.583.583 0 10-.824-.825l-.755.754-.754-.754a.583.583 0 10-.825.825l.755.754-.755.754a.583.583 0 10.825.825l.755-.754.754.754a.582.582 0 10.824-.825l-.754-.754zm-8.579-1.58a.583.583 0 00-.825 0l-.754.755-.754-.754a.583.583 0 10-.825.825l.754.754-.754.754a.583.583 0 10.825.825l.754-.754.754.754a.582.582 0 00.825 0 .583.583 0 000-.825l-.754-.754.754-.754a.583.583 0 000-.825zm6.588-4.253A2.336 2.336 0 018.167 8.75H5.834a2.336 2.336 0 01-2.333-2.333V5.25c0-.86.472-1.604 1.166-2.009v-.908A2.336 2.336 0 017.001 0a2.336 2.336 0 012.333 2.333v.908a2.326 2.326 0 011.167 2.009v1.167zm-2.625-.584a.875.875 0 10-1.75.001.875.875 0 001.75 0zm.291-3.5a1.168 1.168 0 00-2.333 0v.584h2.333v-.584z"
              fill={color ? color : "#2A2A2A"}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1089_12284">
              <Path fill="#fff" d="M0 0H14V14H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case "ERROR-ICON":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8a8 8 0 1116 0A8 8 0 010 8zm5.034-2.966a.8.8 0 011.132 0L8 6.87l1.834-1.835a.8.8 0 011.132 1.132L9.13 8l1.835 1.834a.8.8 0 01-1.132 1.132L8 9.13l-1.834 1.835a.8.8 0 01-1.132-1.132L6.87 8 5.034 6.166a.8.8 0 010-1.132z"
            fill={color ? color : "#DC143C"}
            fillOpacity={0.2}
          />
          <Path
            d="M5.034 5.034a.8.8 0 011.132 0L8 6.87l1.834-1.835a.8.8 0 011.132 1.132L9.13 8l1.835 1.834a.8.8 0 01-1.132 1.132L8 9.13l-1.834 1.835a.8.8 0 01-1.132-1.132L6.87 8 5.034 6.166a.8.8 0 010-1.132z"
            fill={color ? color : "#DC143C"}
          />
        </Svg>
      );
    case "SUCCESS-ICON":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.766 6.566a.8.8 0 00-1.132-1.132L6.4 9.67 5.366 8.634a.8.8 0 00-1.132 1.132l1.6 1.6a.8.8 0 001.132 0l4.8-4.8z"
            fill={color ? color : "#50C878"}
            fillOpacity={0.2}
          />
          <Path
            d="M11.766 6.566a.8.8 0 00-1.132-1.132L6.4 9.67 5.366 8.634a.8.8 0 00-1.132 1.132l1.6 1.6a.8.8 0 001.132 0l4.8-4.8z"
            fill={color ? color : "#50C878"}
          />
        </Svg>
      );
    case "WARNING-ICON":
      return (
        <Svg width={4} height={10} viewBox="0 0 4 10" fill="none" {...props}>
          <Path
            d="M2 1v5.29m.033 2.644V9h-.066v-.066h.066z"
            stroke={color ? color : "#FFBF00"}
            strokeWidth={1.98347}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "LOADING-ICON":
      return (
        <Svg width={4} height={10} viewBox="0 0 4 10" fill="none" {...props}>
          <Path
            d="M2 1v5.29m.033 2.644V9h-.066v-.066h.066z"
            stroke={color ? color : "#FFBF00"}
            strokeWidth={1.98347}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "INFO-ICON":
      return (
        <Svg width={2} height={8} viewBox="0 0 2 8" fill="none" {...props}>
          <Path
            d="M1 2.667a.667.667 0 00-.667.666v4a.667.667 0 001.333 0v-4A.667.667 0 001 2.667zM1 0a.833.833 0 100 1.667A.833.833 0 001 0z"
            fill={color ? color : "#1E90FF"}
          />
        </Svg>
      );
  }
};

export default Icons;
