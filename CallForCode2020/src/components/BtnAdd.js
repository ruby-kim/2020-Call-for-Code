import * as React from "react"
import Svg, { Rect, G, Path, Mask } from "react-native-svg"

function BtnAdd(props) {
  return (
    <Svg width={58} height={57} viewBox="0 0 58 57" fill="none" {...props}>
      <Rect
        opacity={0.54}
        x={1.5}
        y={1}
        width={55}
        height={55}
        rx={6}
        stroke="#323643"
        strokeWidth={2}
      />
      <G opacity={0.54}>
        <Path
          d="M37.75 29.958h-7.292v7.292c0 .802-.656 1.458-1.458 1.458a1.463 1.463 0 01-1.458-1.458v-7.292H20.25a1.463 1.463 0 01-1.458-1.458c0-.802.656-1.459 1.458-1.459h7.292V19.75c0-.802.656-1.459 1.458-1.459.802 0 1.458.657 1.458 1.459v7.291h7.292c.802 0 1.458.657 1.458 1.459s-.656 1.458-1.458 1.458z"
          fill="#37474F"
        />
        <Mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={18}
          y={18}
          width={22}
          height={21}
        >
          <Path
            d="M37.75 29.958h-7.292v7.292c0 .802-.656 1.458-1.458 1.458a1.463 1.463 0 01-1.458-1.458v-7.292H20.25a1.463 1.463 0 01-1.458-1.458c0-.802.656-1.459 1.458-1.459h7.292V19.75c0-.802.656-1.459 1.458-1.459.802 0 1.458.657 1.458 1.459v7.291h7.292c.802 0 1.458.657 1.458 1.459s-.656 1.458-1.458 1.458z"
            fill="#fff"
          />
        </Mask>
      </G>
    </Svg>
  )
}

export default BtnAdd
