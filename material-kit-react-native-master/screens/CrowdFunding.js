import React from 'react';

import ActionButton from 'react-native-action-button';
import { StyleSheet, Dimensions, Linking, Image} from 'react-native';
import {Icon} from '../components/';
import CardFromScreen from '../screens/StripeCheck';


const { width } = Dimensions.get('screen');

import { Block,Text, Button,theme } from 'galio-framework';

export default class CrowdFunding extends React.Component {

    
    

    render () {
    const{navigation}=this.props
        return(
            
            <Block flex center style={styles.home} style={{paddingVertical:150}}>
     <Text onPress={()=> navigation.navigate('StripeCheck')}></Text>
           <Block flex center style={styles.home}>
                  <Image
                      style={styles.logo}
                
                   source={require('../assets/images/artwork_hp.jpg')}>

                   </Image>
                  <Text style={styles.description}>
                      Project details enter here
                 </Text>
                  <Button>Fund this project</Button>
            </Block>
          
    
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
const styles = StyleSheet.create({
    description:{
      textAlign:'center',
      fontSize:15,
      marginTop:18,
      marginBottom:28,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 4,
    },
    logo: {
        width: 366,
        height: 358,
        borderRadius:40,
        marginTop:3,
    
      },
    /*Original don't delete after comment */
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'black',
    },
    home: {
        width: width,    
      },
      search: {
        height: 48,
        width: width - 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 3,
      },
      header: {
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 4,
        zIndex: 2,
      },
      tabs: {
        marginBottom: 24,
        marginTop: 10,
        elevation: 4,
      },
      tab: {
        backgroundColor: theme.COLORS.TRANSPARENT,
        width: width * 0.50,
        borderRadius: 0,
        borderWidth: 0,
        height: 24,
        elevation: 0,
      },
      tabTitle: {
        lineHeight: 19,
        fontWeight: '300'
      },
      divider: {
        borderRightWidth: 0.3,
        borderRightColor: theme.COLORS.MUTED,
      },
      products: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
      }
});