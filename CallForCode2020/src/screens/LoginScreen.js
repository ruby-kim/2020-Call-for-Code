import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import {
  TextInput, View,Button,Text
} from 'react-native';


async function loginClick(props){
  var data = {id:props.state.id, password : props.state.password};
  await fetch('http://192.168.0.71:3000/api/login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.text())
      .then((json) => {
         if(json != "Fail")
         props.state.prop.navigation.navigate('BottomNav', {});
      })
}

const forgetPassword = () =>{
  alert("Something once lost will never return. MAKE IT NEW");
}



class LoginScrennClass extends React.Component{
  constructor(props) {
    super()
    this.state = {id:"",password:"", prop : props}
 }

 render() {
    return ( <View>  
      <Svg width={"100%"} height={811} viewBox="0 0 375 811" fill="none" {...this.state.prop}>
        <Path fill="#F1F5F7" d="M0 0h375v811H0z" />
        <Path
          d="M162.273 44.352h4.355V46h-6.405v-9.953h2.05v8.306zm17.276-3.103c0 .98-.173 1.839-.52 2.577-.346.739-.843 1.308-1.49 1.71-.643.4-1.381.6-2.215.6-.825 0-1.561-.198-2.208-.594-.647-.397-1.148-.962-1.504-1.695-.355-.739-.535-1.586-.54-2.543v-.492c0-.98.176-1.842.527-2.584.355-.748.854-1.32 1.497-1.716.647-.401 1.385-.602 2.215-.602.829 0 1.565.2 2.208.602.647.396 1.146.968 1.497 1.715.355.743.533 1.602.533 2.578v.444zm-2.078-.451c0-1.044-.187-1.837-.561-2.38-.374-.541-.907-.813-1.599-.813-.689 0-1.22.27-1.593.807-.374.533-.563 1.317-.568 2.352v.485c0 1.016.187 1.805.561 2.365.374.56.911.841 1.613.841.688 0 1.217-.269 1.586-.807.369-.542.556-1.33.561-2.365v-.485zm15.443 3.944c-.369.442-.891.786-1.565 1.032-.675.242-1.422.363-2.243.363-.861 0-1.617-.187-2.269-.56-.647-.38-1.149-.926-1.504-1.642-.351-.715-.531-1.556-.54-2.522v-.677c0-.993.166-1.852.499-2.577.337-.729.82-1.285 1.449-1.668.634-.387 1.374-.58 2.222-.58 1.18 0 2.103.282 2.768.847.666.56 1.06 1.378 1.183 2.454h-1.996c-.091-.57-.294-.987-.608-1.251-.31-.264-.739-.396-1.286-.396-.697 0-1.228.262-1.592.786-.365.524-.55 1.303-.554 2.337v.636c0 1.044.198 1.832.595 2.366.396.533.977.8 1.743.8.77 0 1.319-.165 1.647-.493v-1.716h-1.866v-1.51h3.917v3.971zM200.763 46h-2.051v-9.953h2.051V46zm14.001 0h-2.051l-3.992-6.549V46h-2.051v-9.953h2.051l3.999 6.562v-6.562h2.044V46z"
          fill="#1BCFA4"
        />
        <Path
          d="M32.15 279a7.85 7.85 0 017.85-7.85h295a7.85 7.85 0 017.85 7.85v35a7.85 7.85 0 01-7.85 7.85H40a7.85 7.85 0 01-7.85-7.85v-35zM32.15 370a7.85 7.85 0 017.85-7.85h295a7.85 7.85 0 017.85 7.85v35a7.85 7.85 0 01-7.85 7.85H40a7.85 7.85 0 01-7.85-7.85v-35z"
          fill="#fff"
          stroke="#86CFA5"
          strokeWidth={0.3}
        />
        <View >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31 461a8 8 0 018-8h295a8 8 0 018 8v35a8 8 0 01-8 8H39a8 8 0 01-8-8v-35z"
          fill="#1CD0A3"
        />
        <Path
          d="M171.521 480.154h4.177V482h-6.576v-9.953h2.399v8.107zm4.792-1.921c0-.738.144-1.394.431-1.968.287-.579.7-1.023 1.237-1.333.538-.31 1.169-.465 1.894-.465 1.107 0 1.98.344 2.618 1.032.638.684.957 1.616.957 2.796v.082c0 1.153-.321 2.069-.964 2.748-.638.674-1.504 1.012-2.597 1.012-1.053 0-1.898-.315-2.536-.944-.638-.633-.983-1.49-1.033-2.57l-.007-.39zm2.304.144c0 .684.107 1.185.321 1.504.215.319.531.478.951.478.82 0 1.239-.631 1.257-1.893v-.233c0-1.326-.423-1.989-1.271-1.989-.77 0-1.187.572-1.251 1.716l-.007.417zm5.578-.13c0-.747.123-1.408.369-1.982.247-.575.6-1.017 1.06-1.327.46-.314.996-.471 1.606-.471.771 0 1.372.26 1.805.779l.082-.642h2.092v7.116c0 .651-.153 1.217-.458 1.695-.301.483-.738.852-1.313 1.107-.574.26-1.239.39-1.996.39a4.184 4.184 0 01-1.579-.308c-.506-.205-.893-.471-1.162-.799l.964-1.354c.428.506.994.759 1.695.759 1.021 0 1.532-.524 1.532-1.572v-.233c-.442.488-1.001.732-1.675.732-.903 0-1.632-.344-2.188-1.033-.556-.692-.834-1.617-.834-2.775v-.082zm2.311.144c0 .606.114 1.087.342 1.442.228.351.547.526.957.526.496 0 .859-.166 1.087-.499v-3.11c-.224-.337-.581-.506-1.074-.506-.41 0-.731.185-.964.554-.232.364-.348.895-.348 1.593zm8.442 3.609h-2.31v-7.396h2.31V482zm-2.447-9.304c0-.328.118-.597.355-.806.237-.21.545-.315.923-.315.379 0 .686.105.923.315.237.209.356.478.356.806 0 .328-.119.597-.356.807-.237.21-.544.314-.923.314-.378 0-.686-.104-.923-.314a1.03 1.03 0 01-.355-.807zm5.988 1.908l.075.868c.511-.67 1.215-1.005 2.113-1.005.77 0 1.344.23 1.722.69.383.461.581 1.153.595 2.078V482h-2.31v-4.669c0-.374-.076-.647-.226-.82-.15-.178-.424-.267-.82-.267-.451 0-.786.178-1.005.533V482h-2.304v-7.396h2.16z"
          fill="#fff"
        />
        </View>
        <Path
          d="M34.443 249.469l2.79 6.961 2.789-6.961h1.459V258h-1.126v-3.322l.106-3.586-2.8 6.908h-.862l-2.795-6.891.111 3.569V258H32.99v-8.531h1.453zm8.567 5.302c0-.621.12-1.179.363-1.675a2.763 2.763 0 011.02-1.149 2.795 2.795 0 011.494-.404c.863 0 1.56.299 2.091.896.536.598.803 1.393.803 2.385v.076c0 .618-.119 1.172-.357 1.664-.234.489-.572.87-1.014 1.143-.437.273-.941.41-1.512.41-.859 0-1.556-.299-2.091-.896-.532-.598-.797-1.389-.797-2.373v-.077zm1.09.129c0 .704.162 1.268.486 1.694.328.426.766.638 1.312.638.551 0 .989-.214 1.313-.644.324-.434.486-1.039.486-1.817 0-.695-.166-1.257-.498-1.687a1.562 1.562 0 00-1.312-.65c-.535 0-.967.212-1.295.638-.328.426-.492 1.035-.492 1.828zm11.408 0c0 .969-.223 1.748-.668 2.338-.446.586-1.043.879-1.793.879-.8 0-1.42-.283-1.857-.849l-.053.732h-.996v-9h1.084v3.357c.437-.543 1.04-.814 1.81-.814s1.373.291 1.81.873c.442.582.663 1.379.663 2.391v.093zm-1.084-.123c0-.738-.143-1.308-.428-1.711-.285-.402-.695-.603-1.23-.603-.715 0-1.229.332-1.541.996v2.742c.332.664.85.996 1.552.996.52 0 .924-.201 1.213-.603.29-.403.434-1.008.434-1.817zM58.057 258h-1.084v-6.34h1.084V258zm-1.172-8.021c0-.176.053-.325.158-.446.11-.121.27-.181.48-.181.211 0 .371.06.48.181.11.121.165.27.165.446a.619.619 0 01-.164.439c-.11.117-.27.176-.48.176-.212 0-.372-.059-.481-.176a.632.632 0 01-.158-.439zm4.09 8.021H59.89v-9h1.084v9zm4.37.117c-.859 0-1.558-.281-2.097-.844-.539-.566-.808-1.322-.808-2.267v-.199c0-.629.119-1.19.357-1.682a2.812 2.812 0 011.008-1.16 2.537 2.537 0 011.406-.422c.824 0 1.465.271 1.922.814.457.543.685 1.321.685 2.332v.452h-4.295c.016.625.198 1.13.545 1.517.352.383.797.574 1.336.574.383 0 .707-.078.973-.234.266-.156.498-.363.697-.621l.662.516c-.53.816-1.328 1.224-2.39 1.224zm-.134-5.683c-.438 0-.805.16-1.102.48-.296.316-.48.762-.55 1.336h3.175v-.082c-.03-.551-.18-.977-.445-1.277-.266-.305-.625-.457-1.078-.457zM78.78 258h-1.13l-4.295-6.574V258h-1.131v-8.531h1.13l4.307 6.603v-6.603h1.12V258zm5.742-.627c-.421.496-1.04.744-1.857.744-.676 0-1.191-.195-1.547-.586-.351-.394-.53-.976-.533-1.746v-4.125h1.084v4.096c0 .961.39 1.441 1.172 1.441.828 0 1.379-.308 1.652-.926v-4.611h1.084V258h-1.031l-.024-.627zm3.727-5.713l.03.703c.464-.547 1.091-.82 1.88-.82.887 0 1.49.34 1.81 1.019.212-.304.485-.55.821-.738.34-.187.74-.281 1.201-.281 1.39 0 2.098.736 2.121 2.209V258H95.03v-4.184c0-.453-.103-.791-.31-1.013-.207-.227-.555-.34-1.043-.34-.403 0-.737.121-1.002.363-.266.238-.42.561-.463.967V258h-1.09v-4.154c0-.922-.451-1.383-1.353-1.383-.711 0-1.198.303-1.46.908V258h-1.083v-6.34h1.025zm14.871 3.24c0 .969-.223 1.748-.668 2.338-.445.586-1.043.879-1.793.879-.8 0-1.42-.283-1.857-.849l-.053.732h-.996v-9h1.084v3.357c.437-.543 1.04-.814 1.81-.814s1.373.291 1.811.873c.441.582.662 1.379.662 2.391v.093zm-1.084-.123c0-.738-.142-1.308-.428-1.711-.285-.402-.695-.603-1.23-.603-.715 0-1.229.332-1.541.996v2.742c.332.664.85.996 1.553.996.519 0 .923-.201 1.213-.603.289-.403.433-1.008.433-1.817zm5.086 3.34c-.859 0-1.559-.281-2.098-.844-.539-.566-.808-1.322-.808-2.267v-.199c0-.629.119-1.19.357-1.682a2.81 2.81 0 011.008-1.16 2.537 2.537 0 011.406-.422c.824 0 1.465.271 1.922.814.457.543.686 1.321.686 2.332v.452h-4.295c.015.625.197 1.13.545 1.517.351.383.797.574 1.336.574.382 0 .707-.078.972-.234.266-.156.498-.363.698-.621l.662.516c-.532.816-1.328 1.224-2.391 1.224zm-.135-5.683c-.437 0-.804.16-1.101.48-.297.316-.481.762-.551 1.336h3.176v-.082c-.032-.551-.18-.977-.446-1.277-.265-.305-.625-.457-1.078-.457zm6.932.199a3.178 3.178 0 00-.533-.041c-.711 0-1.194.303-1.448.908v4.5h-1.084v-6.34h1.055l.018.733c.355-.567.859-.85 1.511-.85.211 0 .372.027.481.082v1.008zM34.115 345.66V349H32.99v-8.531h3.147c.933 0 1.664.238 2.191.715.531.476.797 1.107.797 1.892 0 .828-.26 1.467-.78 1.916-.515.446-1.255.668-2.22.668h-2.01zm0-.92h2.022c.601 0 1.062-.14 1.383-.422.32-.285.48-.695.48-1.23 0-.508-.16-.914-.48-1.219-.32-.305-.76-.463-1.319-.474h-2.086v3.345zm10.12 4.26c-.063-.125-.114-.348-.153-.668-.504.523-1.105.785-1.805.785-.625 0-1.138-.176-1.54-.527a1.73 1.73 0 01-.598-1.348c0-.66.25-1.172.75-1.535.504-.367 1.21-.551 2.12-.551h1.056v-.498c0-.379-.114-.679-.34-.902-.227-.227-.56-.34-1.002-.34-.387 0-.711.098-.973.293-.262.195-.393.432-.393.709h-1.09c0-.316.112-.621.335-.914.226-.297.53-.531.914-.703.386-.172.81-.258 1.271-.258.73 0 1.303.184 1.717.551.414.363.629.865.644 1.506v2.918c0 .582.075 1.044.223 1.388V349h-1.137zm-1.8-.826c.34 0 .663-.088.967-.264.305-.176.526-.404.663-.685v-1.301h-.85c-1.328 0-1.992.388-1.992 1.166 0 .34.113.605.34.797.226.191.517.287.872.287zm8.104-.856c0-.293-.111-.519-.334-.679-.219-.164-.603-.305-1.154-.422-.547-.117-.983-.258-1.307-.422-.32-.164-.559-.359-.715-.586a1.416 1.416 0 01-.228-.809c0-.519.218-.959.656-1.318.441-.359 1.004-.539 1.688-.539.718 0 1.3.186 1.746.557.449.371.674.845.674 1.423h-1.09c0-.296-.127-.552-.381-.767-.25-.215-.567-.322-.95-.322-.394 0-.703.086-.925.257a.812.812 0 00-.334.674c0 .262.103.459.31.592.207.133.58.26 1.12.381.542.121.982.266 1.318.433.336.168.584.372.744.61.164.234.246.521.246.861 0 .567-.226 1.022-.68 1.365-.453.34-1.04.51-1.763.51-.508 0-.957-.09-1.348-.269-.39-.18-.697-.43-.92-.75a1.842 1.842 0 01-.328-1.049h1.084c.02.363.164.652.434.867.273.211.632.316 1.078.316.41 0 .738-.082.984-.246.25-.168.375-.39.375-.668zm6.188 0c0-.293-.112-.519-.334-.679-.22-.164-.604-.305-1.155-.422-.547-.117-.982-.258-1.306-.422-.32-.164-.559-.359-.715-.586a1.416 1.416 0 01-.229-.809c0-.519.219-.959.657-1.318.44-.359 1.003-.539 1.687-.539.719 0 1.3.186 1.746.557.45.371.674.845.674 1.423h-1.09c0-.296-.127-.552-.38-.767-.25-.215-.567-.322-.95-.322-.395 0-.703.086-.926.257a.813.813 0 00-.334.674c0 .262.104.459.31.592.208.133.58.26 1.12.381.543.121.982.266 1.318.433.336.168.584.372.745.61.163.234.245.521.245.861 0 .567-.226 1.022-.68 1.365-.452.34-1.04.51-1.763.51-.508 0-.957-.09-1.347-.269-.391-.18-.698-.43-.92-.75a1.842 1.842 0 01-.328-1.049h1.084c.019.363.163.652.433.867.273.211.633.316 1.078.316.41 0 .739-.082.985-.246.25-.168.375-.39.375-.668zm8.109.188l1.219-4.846h1.084L65.293 349h-.879l-1.541-4.805-1.5 4.805h-.879l-1.84-6.34h1.078l1.248 4.746 1.477-4.746h.873l1.506 4.846zm3.123-1.735c0-.621.121-1.179.363-1.675a2.763 2.763 0 011.02-1.149 2.795 2.795 0 011.494-.404c.863 0 1.56.299 2.092.896.535.598.803 1.393.803 2.385v.076c0 .618-.12 1.172-.358 1.664-.234.489-.572.87-1.014 1.143-.437.273-.941.41-1.511.41-.86 0-1.557-.299-2.092-.896-.531-.598-.797-1.389-.797-2.373v-.077zm1.09.129c0 .704.162 1.268.486 1.694.328.426.766.638 1.313.638.55 0 .988-.214 1.312-.644.324-.434.487-1.039.487-1.817 0-.695-.166-1.257-.499-1.687a1.562 1.562 0 00-1.312-.65c-.535 0-.967.212-1.295.638-.328.426-.492 1.035-.492 1.828zm9.105-2.267a3.178 3.178 0 00-.533-.041c-.71 0-1.193.303-1.447.908v4.5H75.09v-6.34h1.054l.018.733c.356-.567.86-.85 1.512-.85.21 0 .37.027.48.082v1.008zm.621 2.144c0-.972.23-1.754.692-2.343.46-.594 1.064-.891 1.81-.891.742 0 1.33.254 1.764.762V340h1.084v9h-.996l-.053-.68c-.433.532-1.037.797-1.81.797-.735 0-1.334-.301-1.8-.902-.46-.602-.69-1.387-.69-2.356v-.082zm1.084.123c0 .719.149 1.282.446 1.688.297.406.707.609 1.23.609.688 0 1.19-.308 1.506-.926v-2.912c-.324-.597-.822-.896-1.494-.896-.531 0-.945.205-1.242.615-.297.41-.446 1.018-.446 1.822z"
          fill="#0DC6B6"
        />
        <G opacity={0.5} fill="#0DC6B6">
          <Path d="M305.695 345.232h-3.58V349h-1.125v-8.531h5.285v.926h-4.16v2.917h3.58v.92zm1.342.539c0-.621.121-1.179.363-1.675a2.76 2.76 0 011.02-1.149 2.792 2.792 0 011.494-.404c.863 0 1.561.299 2.092.896.535.598.803 1.393.803 2.385v.076a3.77 3.77 0 01-.358 1.664c-.234.489-.572.87-1.013 1.143-.438.273-.942.41-1.512.41-.86 0-1.557-.299-2.092-.896-.531-.598-.797-1.389-.797-2.373v-.077zm1.09.129c0 .704.162 1.268.486 1.694.328.426.766.638 1.313.638.551 0 .988-.214 1.312-.644.324-.434.487-1.039.487-1.817 0-.695-.166-1.257-.498-1.687a1.564 1.564 0 00-1.313-.65c-.535 0-.967.212-1.295.638-.328.426-.492 1.035-.492 1.828zm9.105-2.267a3.17 3.17 0 00-.533-.041c-.711 0-1.193.303-1.447.908v4.5h-1.084v-6.34h1.055l.017.733c.356-.567.86-.85 1.512-.85.211 0 .371.027.48.082v1.008zm.627 2.144c0-.988.229-1.773.686-2.355.457-.586 1.062-.879 1.816-.879.774 0 1.377.273 1.811.82l.053-.703h.99v6.188c0 .82-.244 1.466-.733 1.939-.484.473-1.136.709-1.957.709a3.26 3.26 0 01-1.341-.293c-.438-.195-.772-.463-1.002-.803l.562-.65c.465.574 1.033.861 1.705.861.528 0 .938-.148 1.231-.445.297-.297.445-.715.445-1.254v-.545c-.434.5-1.025.75-1.775.75-.743 0-1.344-.299-1.805-.896-.457-.598-.686-1.412-.686-2.444zm1.09.123c0 .715.147 1.278.44 1.688.293.406.703.609 1.23.609.684 0 1.186-.31 1.506-.931v-2.895c-.332-.605-.83-.908-1.494-.908-.527 0-.94.205-1.236.615-.297.41-.446 1.018-.446 1.822zm5.619-.129c0-.621.121-1.179.364-1.675a2.765 2.765 0 011.019-1.149 2.797 2.797 0 011.494-.404c.864 0 1.561.299 2.092.896.535.598.803 1.393.803 2.385v.076c0 .618-.119 1.172-.358 1.664-.234.489-.572.87-1.013 1.143-.438.273-.942.41-1.512.41-.859 0-1.557-.299-2.092-.896-.531-.598-.797-1.389-.797-2.373v-.077zm1.09.129c0 .704.162 1.268.487 1.694.328.426.765.638 1.312.638.551 0 .988-.214 1.313-.644.324-.434.486-1.039.486-1.817 0-.695-.166-1.257-.498-1.687a1.563 1.563 0 00-1.313-.65c-.535 0-.966.212-1.295.638-.328.426-.492 1.035-.492 1.828zm7.512-4.775v1.535h1.184v.838h-1.184v3.932c0 .254.053.445.158.574.106.125.285.187.539.187.125 0 .297-.023.516-.07V349a3.15 3.15 0 01-.832.117c-.485 0-.85-.146-1.096-.439-.246-.293-.369-.709-.369-1.248v-3.932h-1.154v-.838h1.154v-1.535h1.084zm3.726 5.473c.008-.465.061-.832.159-1.102.097-.269.297-.568.597-.896l.768-.791c.328-.371.492-.77.492-1.196 0-.41-.107-.73-.322-.961-.215-.234-.528-.351-.938-.351-.398 0-.718.105-.961.316-.242.211-.363.494-.363.85h-1.084c.008-.633.233-1.143.674-1.529.445-.391 1.023-.586 1.734-.586.739 0 1.313.199 1.723.597.414.395.621.938.621 1.629 0 .684-.316 1.358-.949 2.022l-.639.632c-.285.317-.428.772-.428 1.366h-1.084zm-.046 1.857c0-.176.052-.322.158-.439.109-.121.269-.182.48-.182.211 0 .371.061.481.182a.619.619 0 01.164.439.623.623 0 01-.164.44c-.11.113-.27.169-.481.169-.211 0-.371-.056-.48-.169a.632.632 0 01-.158-.44z" />
          <Path  d="M300 350.172h40.471v.586H300v-.586z" />
        </G>
        <Path
          d="M118.991 557h-1.729l-4.437-7.062V557h-1.729v-9.953h1.729l4.45 7.089v-7.089h1.716V557zm5.141.137c-1.053 0-1.907-.331-2.564-.991-.651-.666-.977-1.55-.977-2.653v-.205c0-.738.141-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.175 3.175 0 011.722-.485c1.008 0 1.785.321 2.331.964.552.642.828 1.551.828 2.727v.67h-4.833c.05.611.253 1.094.608 1.449.36.356.811.534 1.354.534.761 0 1.38-.308 1.859-.923l.895.854a3.005 3.005 0 01-1.189 1.032 3.714 3.714 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.108.478-.278.319-.456.764-.533 1.333h3.165v-.123c-.036-.556-.185-.975-.444-1.258-.26-.287-.62-.43-1.08-.43zm10.958 3.91l1.175-5.106h1.621L135.671 557h-1.367l-1.586-5.079-1.559 5.079h-1.367l-2.023-7.396h1.62l1.196 5.051 1.518-5.051h1.251l1.538 5.106zm14.834-7.663v6.651c0 1.058-.34 1.896-1.019 2.516-.674.615-1.575.923-2.7.923-1.139 0-2.044-.303-2.714-.909-.67-.611-1.005-1.457-1.005-2.537v-6.644h1.723v6.658c0 .665.168 1.174.506 1.524.337.351.834.527 1.49.527 1.331 0 1.996-.702 1.996-2.106v-6.603h1.723zm5.837 7.943a.752.752 0 00-.369-.677c-.241-.154-.645-.291-1.21-.41-.565-.118-1.036-.269-1.415-.451-.829-.401-1.244-.982-1.244-1.743 0-.638.269-1.171.807-1.6.538-.428 1.221-.642 2.051-.642.884 0 1.597.219 2.139.656.547.438.821 1.005.821 1.702h-1.662c0-.319-.118-.583-.355-.793-.237-.214-.551-.321-.943-.321-.365 0-.663.084-.896.253a.799.799 0 00-.342.677c0 .255.107.453.322.594.214.142.647.285 1.298.431.652.141 1.163.312 1.532.513.373.196.649.433.827.711.182.278.273.615.273 1.011 0 .666-.275 1.206-.827 1.62-.551.411-1.274.616-2.167.616-.606 0-1.146-.11-1.62-.328-.474-.219-.843-.52-1.107-.903a2.131 2.131 0 01-.397-1.237h1.613c.023.392.171.695.445.909.273.21.635.315 1.087.315.437 0 .77-.082.998-.247a.779.779 0 00.341-.656zm6.344 2.147c-1.053 0-1.907-.331-2.563-.991-.652-.666-.978-1.55-.978-2.653v-.205c0-.738.141-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.176 3.176 0 011.723-.485c1.007 0 1.784.321 2.331.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.611.253 1.094.608 1.449.36.356.812.534 1.354.534.761 0 1.381-.308 1.859-.923l.896.854a3.008 3.008 0 01-1.19 1.032 3.714 3.714 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.107.478-.278.319-.456.764-.534 1.333h3.165v-.123c-.036-.556-.184-.975-.444-1.258-.26-.287-.62-.43-1.08-.43zm8.333.321a4.16 4.16 0 00-.677-.055c-.761 0-1.274.292-1.538.875V557h-1.661v-7.396h1.586l.041.827c.401-.643.957-.964 1.668-.964.237 0 .433.032.588.095l-.007 1.559zm2.591 2.953c0-.606.075-1.089.225-1.449.151-.36.447-.754.889-1.183.447-.433.729-.74.848-.922.182-.278.273-.579.273-.903 0-.428-.107-.754-.321-.977-.21-.228-.52-.342-.93-.342-.392 0-.708.112-.95.335-.237.219-.355.517-.355.895h-1.662c.01-.806.283-1.444.821-1.914.542-.469 1.258-.704 2.146-.704.916 0 1.629.233 2.14.697.515.465.772 1.115.772 1.949 0 .743-.346 1.474-1.039 2.194l-.841.827c-.3.342-.455.841-.464 1.497h-1.552zm-.116 2.126c0-.269.084-.485.253-.649.168-.169.396-.253.683-.253.292 0 .522.086.691.26a.87.87 0 01.252.642c0 .251-.082.46-.246.629-.164.169-.396.253-.697.253-.301 0-.533-.084-.697-.253a.878.878 0 01-.239-.629zm12.687-3.035h-1.928V557h-1.729v-9.953h3.5c1.148 0 2.035.257 2.659.772.624.515.937 1.26.937 2.236 0 .665-.162 1.223-.486 1.674-.319.447-.765.791-1.34 1.033l2.236 4.149V557H187.2l-1.996-3.835zm-1.928-1.388h1.778c.583 0 1.039-.145 1.367-.437.328-.296.492-.7.492-1.21 0-.533-.153-.946-.458-1.237-.301-.292-.752-.442-1.353-.452h-1.826v3.336zm10.104 5.36c-1.053 0-1.907-.331-2.564-.991-.651-.666-.977-1.55-.977-2.653v-.205c0-.738.141-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.175 3.175 0 011.722-.485c1.008 0 1.785.321 2.332.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.611.253 1.094.608 1.449.36.356.811.534 1.354.534.761 0 1.38-.308 1.859-.923l.895.854a3.005 3.005 0 01-1.189 1.032 3.714 3.714 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.108.478-.278.319-.456.764-.533 1.333h3.165v-.123c-.036-.556-.185-.975-.444-1.258-.26-.287-.62-.43-1.08-.43zm4.17 2.447c0-1.148.268-2.064.806-2.748.543-.688 1.26-1.032 2.154-1.032.843 0 1.506.294 1.989.882l.075-.745h1.497v7.17c0 .971-.303 1.737-.909 2.297-.602.561-1.415.841-2.441.841a3.923 3.923 0 01-1.592-.342c-.515-.223-.907-.517-1.176-.882l.786-.998c.51.607 1.139.91 1.887.91.551 0 .986-.151 1.305-.452.319-.296.479-.733.479-1.312v-.499c-.479.533-1.117.8-1.914.8-.866 0-1.575-.344-2.126-1.033-.547-.688-.82-1.64-.82-2.857zm1.654.144c0 .742.15 1.328.451 1.756.305.424.727.636 1.265.636.67 0 1.166-.287 1.49-.861v-3.254c-.315-.561-.807-.841-1.477-.841-.547 0-.973.217-1.278.65-.301.433-.451 1.071-.451 1.914zm8.347 3.609h-1.662v-7.396h1.662V557zm-1.764-9.317c0-.256.08-.468.239-.636.164-.169.397-.253.697-.253.301 0 .534.084.698.253.164.168.246.38.246.636 0 .25-.082.46-.246.629-.164.164-.397.246-.698.246-.3 0-.533-.082-.697-.246a.884.884 0 01-.239-.629zm7.724 7.307a.752.752 0 00-.369-.677c-.241-.154-.645-.291-1.21-.41-.565-.118-1.036-.269-1.415-.451-.829-.401-1.244-.982-1.244-1.743 0-.638.269-1.171.807-1.6.538-.428 1.221-.642 2.051-.642.884 0 1.597.219 2.139.656.547.438.821 1.005.821 1.702h-1.662c0-.319-.118-.583-.355-.793-.237-.214-.551-.321-.943-.321-.365 0-.663.084-.896.253a.799.799 0 00-.342.677c0 .255.107.453.322.594.214.142.647.285 1.298.431.652.141 1.163.312 1.532.513.373.196.649.433.827.711.182.278.273.615.273 1.011 0 .666-.275 1.206-.827 1.62-.551.411-1.274.616-2.167.616-.606 0-1.146-.11-1.62-.328-.474-.219-.843-.52-1.107-.903a2.131 2.131 0 01-.397-1.237h1.613c.023.392.171.695.445.909.273.21.635.315 1.087.315.437 0 .77-.082.998-.247a.779.779 0 00.341-.656zm5.168-7.184v1.798h1.306v1.23h-1.306v4.129c0 .282.055.488.165.615.113.123.314.185.601.185.191 0 .385-.023.581-.069v1.285a4.086 4.086 0 01-1.094.158c-1.276 0-1.914-.704-1.914-2.113v-4.19h-1.216v-1.23h1.216v-1.798h1.661zm5.838 9.331c-1.052 0-1.907-.331-2.563-.991-.652-.666-.978-1.55-.978-2.653v-.205c0-.738.142-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.176 3.176 0 011.723-.485c1.007 0 1.784.321 2.331.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.611.253 1.094.609 1.449.36.356.811.534 1.353.534.761 0 1.381-.308 1.859-.923l.896.854a3.008 3.008 0 01-1.19 1.032 3.711 3.711 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.107.478-.278.319-.456.764-.534 1.333h3.166v-.123c-.037-.556-.185-.975-.445-1.258-.26-.287-.62-.43-1.08-.43zm8.333.321a4.16 4.16 0 00-.677-.055c-.761 0-1.273.292-1.538.875V557h-1.661v-7.396h1.586l.041.827c.401-.643.957-.964 1.668-.964.237 0 .433.032.588.095l-.007 1.559zM245.053 557h-1.723v-4.423h-4.45V557h-1.73v-9.953h1.73v4.142h4.45v-4.142h1.723V557zm5.147.137c-1.053 0-1.907-.331-2.563-.991-.652-.666-.978-1.55-.978-2.653v-.205c0-.738.141-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.176 3.176 0 011.723-.485c1.007 0 1.784.321 2.331.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.611.253 1.094.608 1.449.36.356.812.534 1.354.534.761 0 1.381-.308 1.859-.923l.896.854a3.008 3.008 0 01-1.19 1.032 3.714 3.714 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.107.478-.278.319-.456.764-.534 1.333h3.165v-.123c-.036-.556-.184-.975-.444-1.258-.26-.287-.62-.43-1.08-.43zm8.333.321a4.16 4.16 0 00-.677-.055c-.761 0-1.274.292-1.538.875V557h-1.661v-7.396h1.586l.041.827c.401-.643.957-.964 1.668-.964.237 0 .433.032.588.095l-.007 1.559zm4.17 6.016c-1.053 0-1.907-.331-2.564-.991-.651-.666-.977-1.55-.977-2.653v-.205c0-.738.141-1.397.424-1.976a3.273 3.273 0 011.203-1.36 3.175 3.175 0 011.722-.485c1.008 0 1.785.321 2.332.964.551.642.827 1.551.827 2.727v.67h-4.833c.05.611.253 1.094.608 1.449.36.356.811.534 1.354.534.761 0 1.38-.308 1.859-.923l.895.854a3.005 3.005 0 01-1.189 1.032 3.714 3.714 0 01-1.661.363zm-.198-6.337c-.456 0-.825.159-1.108.478-.278.319-.456.764-.533 1.333h3.165v-.123c-.036-.556-.185-.975-.444-1.258-.26-.287-.62-.43-1.08-.43z"
          fill="#0DC6B6"
        />
        <Path d="M110.084 558.367h155.825v.684H110.084v-.684z" fill="#0DC6B6" />
      </Svg>
      <TextInput
        onChangeText={(text) => { this.setState({id:text})}}
        editable={true}
        style={{ position: 'absolute',
        top: "33.5%",
        left: "15%",
        width: "70%",
        height: "6%",
        backgroundColor: 'ivory'}}
      />
        <TextInput
        onChangeText={(text) => { this.setState({password:text})}}
        editable={true}
        style={{ position: 'absolute',
        top: "44.8%",
        left: "15%",
        width: "70%",
        height: "6%",
        backgroundColor: 'ivory'}}
      />
      <Text
        //Login
        onPress={()=>{loginClick(this);}}
        style={{ position: 'absolute',
        top: "56%",
        opacity:0,
        left: "12.3%",
        width: "75%",
        height: "6%",
        backgroundColor: 'ivory'}}
      />
       <Text
       //Register
        onPress={()=>{ this.state.prop.navigation.navigate('RegisterScreen', {});}}
        style={{ position: 'absolute',
        top: "65.8%",
        opacity:0,
        left: "30%",
        width: "40%",
        height: "4%",
        backgroundColor: 'ivory'}}/>
        <Text
        //Forget
        onPress={()=>{forgetPassword();}}
        style={{ position: 'absolute',
        opacity:0,
        top: "40%",
        left: "77%",
        width: "10%",
        height: "4%",
        backgroundColor: 'ivory'}}/>
      </View>
      );
 }
}

function LoginScreen(props) {
   return new LoginScrennClass(props);
}

export default LoginScreen;
