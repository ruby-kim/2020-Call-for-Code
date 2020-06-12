import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function OptionRecycle(props) {
  return (
    <Svg width={166} height={105} viewBox="0 0 166 105" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Rect width={165.492} height={105} rx={6} fill="#fff" />
        <Rect width={165.492} height={105} rx={6} stroke="#12CAB0" />
      </G>
      <Path
        d="M62.286 44.52h-5.744v-1.328h5.744v1.328zm2.096-4.416h-2.096v1.504h-5.744v-1.504h-2.096v6.064h9.936v-6.064zm-7.984 9.968h-2.112v4.048h10.337v-1.68h-8.225v-2.368zm-3.664-2.88v1.664h5.808v2.32h2.112v-2.32h5.44v-1.664h-13.36zm17.68-.608h4.783v-5.696h-6.96v1.68h4.8v2.352h-4.784v6.064h1.328c2.672 0 4.832-.096 7.232-.512l-.224-1.712c-2.08.352-3.936.464-6.176.48v-2.656zm7.2-6.96v14.784h2.111V39.624h-2.112zm21.422 5.248c-3.344-.464-5.04-2.384-5.04-4.096v-.704H91.74v.704c0 1.728-1.68 3.632-5.04 4.096l.8 1.696c2.576-.384 4.432-1.584 5.376-3.168.944 1.584 2.784 2.784 5.36 3.168l.8-1.696zm.48 2.784H86.204v1.712h5.552v5.024h2.112v-5.024h5.648v-1.712zm1.919-6.496v1.68h4.784c-.288 3.216-1.808 5.504-5.488 7.36l1.12 1.632c5.088-2.544 6.512-6.224 6.512-10.672h-6.928zm9.68-1.52v5.648h-2.848V47h2.848v7.376h2.112V39.64h-2.112z"
        fill="#000"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default OptionRecycle
