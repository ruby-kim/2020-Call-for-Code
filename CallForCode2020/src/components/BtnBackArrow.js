import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"

function BtnBackArrow(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.002 2.985a1.25 1.25 0 00-1.77 0l-8.31 8.31a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77l-7.24-7.25 7.25-7.25c.48-.48.48-1.28-.01-1.76z"
        fill="#37474F"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={2}
        width={12}
        height={20}
      >
        <Path
          d="M16.002 2.985a1.25 1.25 0 00-1.77 0l-8.31 8.31a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77l-7.24-7.25 7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  )
}

export default BtnBackArrow