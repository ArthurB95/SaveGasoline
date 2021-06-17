import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Gas from '../assets/icon.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@gasmanager:user');
      setUserName(user || '')
    }

    loadStorageUserName()
  }, [userName])

  return (

    <SafeAreaView style={style.container}>

      <View>

        <Text style={style.greeting}>Olá,</Text>
        <Text style={style.userName}>{userName}</Text>
        
      </View>

      <Image source={Gas} style={style.image} />

    </SafeAreaView>

  )


}

const style = StyleSheet.create({

  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()

  },

  greeting: {
   fontSize: 32,
   color: colors.text,
   fontFamily: fonts.text
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.title,
    lineHeight: 40
  },

  image: {
    width: 70,
    height: 70
  }


})

