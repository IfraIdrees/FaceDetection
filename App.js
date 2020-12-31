
import React, { Component } from 'react';
import {StyleSheet, View,Text,} from 'react-native';
import {RNCamera} from 'react-native-camera';
export default class App extends Component{

  state={
    fd:true
  }



  render(){
    return(
      <View style={styles.container}>
        
       
        <RNCamera style={StyleSheet.absoluteFill}
        
        faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => {
            if(this.state.fd){
              this.setState({fd:face.faces.length === 0});
              alert(JSON.stringify(face));
            }
          }
        }
         />
         
      </View>
    );
  }
}



const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey'
  }

});

