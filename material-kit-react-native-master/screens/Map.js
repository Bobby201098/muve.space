import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import { StyleSheet, Dimensions, ScrollView,Linking} from 'react-native';
import {Icon} from '../components/';


const { width } = Dimensions.get('screen');
import products from '../constants/products';
import { Block,Text } from 'galio-framework';

export default class Map extends React.Component {
  
renderMap=()=>{
    return(    
        
         <MapView       
        style={{flex: 1}}       
        showsUserLocation={true}  
        >
          <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"Apple Workshop"}
            description={"From: 10:00 am to 13:00 pm "}
            image={require('../assets/images/ios.png')}
         />
           </MapView> )
}

render(){
    return(
        <Block flex>
       {this.renderMap()}
      
       <ActionButton buttonColor="rgba(231,76,60,1)">
    <ActionButton.Item buttonColor='#9b59b6' title="AI Chatbot" onPress={() => console.log("notes tapped!")}>
      <Icon name="md-create" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    <ActionButton.Item buttonColor='#3498db' title="Info COVID-19" onPress={() => {}}>
      <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    <ActionButton.Item buttonColor='#1abc9c' title="Call 911" onPress={() => {Linking.openURL('tel:${911}')}}>
      <Icon name="md-done-all" style={styles.actionButtonIcon} />
    </ActionButton.Item>
  </ActionButton>

       </Block>

       
    

      );
}
}
const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});