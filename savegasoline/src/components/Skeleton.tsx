import React, { useEffect } from 'react';

import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export function Skeleton({visible, children}) {

  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {

    circleAnimated();

    return () => circleAnimated()

  }, [])

  const circleAnimated = () => {
    AnimatedValue.setValue(0)
    Animated.timing(
      AnimatedValue,
      {
        toValue: 1,
        duration: 350,
        useNativeDriver: false
      }
    ).start(() => {
      setTimeout(() => {
        circleAnimated()
      }, 1000)
    })
  }

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 350]
  })

  if(visible) {

    return (

      <View style={style.container}>
  
        <View style={{ marginLeft: 270, width: 60, height: 60, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', top: 70}}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', overflow: 'hidden', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 270, width: 80, height: 30, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', marginTop: 50 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', overflow: 'hidden', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 270, marginLeft: 40, width: 120, height: 30, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', marginTop: 50 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', overflow: 'hidden', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 15, width: 250, height: 180, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', marginBottom: 300, marginTop: 70 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 15, width: 270, height: 35, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', bottom: 250, marginTop: 30, marginBottom: -20 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 15, width: 270, height: 35, backgroundColor: '#ECEFF1', borderRadius: 5, overflow: 'hidden', bottom: 200, marginTop: 30 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
        <View style={{ marginRight: 15, width: 270, height: 60, backgroundColor: '#ECEFF1', borderRadius: 16, overflow: 'hidden', bottom: 150, marginTop: 30 }}>
  
          <Animated.View
            style={{ width: '30%', height: '100%', opacity: 0.5, backgroundColor: '#FFFF', transform: [{ translateX: translateX }] }}>
  
          </Animated.View>
  
        </View>
  
      </View>
    )
    
  }

  return(
   
    <>
     {children}
    </>


  )

}

const style = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  /*   header: {
      width: width - 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }, */

})