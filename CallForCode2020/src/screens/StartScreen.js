import * as React from "react"
import {Text,View} from "react-native"
import StartScreenSVG from '../components/Pages/StartScreenSVG';

class StartScreenClass extends React.Component{
  constructor(params,props) {
    super(props)
    if(params != undefined)
    this.state = {
      id:params.id,
      password:params.password,
      rev :params.rev,
      path :params.path,
      point :params.point,
      maxPoint : params.maxPoint,
      name : params.name,
      history : params.history
    };
 }

 getIdAndPassword=()=>{

  
 }

 render() {
    return ( 
    <View>  
       <StartScreenSVG title={"wqeqw"} props={this.props}></StartScreenSVG>
       <Text
        //Forget
        onPress={()=>{this.props.navigation.navigate('BottomNav', {});}}
        style={{ position: 'absolute',
        opacity:1,
        top: "78%",
        opacity:0,
        left: "11.2%",
        width: "77%",
        height: "6%",
        backgroundColor: 'red'}}/>
      </View>
      );
 }
}

function StartScreen({ route,props }) {
   //alert(route.params.id)
   return new StartScreenClass(route.params,props);
}

export default StartScreen;
