import React from 'react';
import { StyleSheet, Dimensions, ScrollView,Linking,TouchableOpacity,Image,ViewPropTypes } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import {CardEcomOne} from 'react-native-card-ui';
import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import { Icon, Product } from '../components/';
import {ENTRIES1,ENTRIES2} from '../constants/entries'

const { width } = Dimensions.get('screen');
import products from '../constants/products';

import { sliderWidth, itemWidth } from '../constants/SliderEntry.style';
const SLIDER_1_FIRST_ITEM = 1;
export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
}
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Text style={styles.tabTitle} size={30} style={{paddingVertical: 18}}>EVENTS</Text>
          <Product product={products[0]} horizontal />
          <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block>
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    )
  }
renderCrowd=()=>{
  return(
    
    <Block flex center style={styles.home}>
        
    <Text style={styles.tabTitle} size={30} style={{paddingVertical: 18}}>CrowdFunding Projects Features</Text>
        <CardEcomOne
            title={"NIKE SILVER"}
            price={"$200"}
            image={{uri:"https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000199448256_nike-812654-011_zo_001.jpg"}} //OR {{uri:"http://......"}}
            icon={"star"}
            nbStar={3}
            iconColor={"#FFC57C"}
            colorList={["#000000", "#0b8457", "#7ed3b2"]}
            selectColor={"#000000"}
            getSelectColor={color => alert(color)}
          />
  
  </Block>
  )
}
_renderItem = () => {
  const { navigation } = this.props;
  return (
  
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Events')} 
    style={styles.title}
  >
    <Image
        style={styles.logo}
        source={require('../assets/images/artwork_hamilton.jpg')}
    />
</TouchableOpacity>

  );
}
_renderIte = () => {
  const { navigation } = this.props;
  return (
  
    <TouchableOpacity 
    onPress={()=>navigation.navigate('CrowdFunding')} 
    style={styles.title}
  >
    <Image
        style={styles.logo}
        source={require('../assets/images/artwork_hp.jpg')}
    />
</TouchableOpacity>

  );
}
  render() {
    const { navigation } = this.props;
    return (
    
      <Block flex center style={styles.home}>
        <ScrollView>
        <Text style={styles.tabTitle} size={30} right style={{paddingVertical: 28}}>CrowdFunding Projects Features</Text>
        <Carousel
            layout={'tinder'} 
            layoutCardOffset={`9`}
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES2}
              renderItem={this._renderIte}
  
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onPress={()=>navigation.navigate('Events')}
              >
              
            </Carousel>
             <Text style={styles.tabTitle} size={40} style={{paddingVertical: 28}}>EVENTS</Text>
         <Carousel
            layout={'default'} 
          
              ref={(c) => { this._carousel = c; }}
             data={ENTRIES1}
             renderItem={this._renderItem}
             // renderItem={this._renderIte}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              renderItem={(item, index) =>
                this._renderItem(item, index)
            }
            >
              
            </Carousel>
      </ScrollView>
    {/* Rest of the app comes ABOVE the action button component !*/}
    <ActionButton buttonColor="rgba(231,76,60,1)">
      <ActionButton.Item buttonColor='#9b59b6' title="AI Chatbot" onPress={() => navigation.navigate('Chatbot')}>
        <Icon name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#3498db' title="Info COVID-19" onPress={() => navigation.navigate('News')}>
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

  /*Original don't delete after comment */
  logo: {
    width: 366,
    height: 258,
    borderRadius:40,
    marginTop:3,
    marginBottom:15,

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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
  },
});
