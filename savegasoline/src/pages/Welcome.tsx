import React from 'react';

import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import imageWelcome from '../assets/imageWelcome.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {

    navigation.navigate('UserIdentification')

  }

  return (

    <SafeAreaView style={style.container}>

      <View style={style.wrapper}>

        <Text style={style.title}>

          Não perca {'\n'}
          dinheiro quando for {'\n'}
          abastecer

        </Text>

        <Image style={style.image} source={imageWelcome} resizeMode="contain" />

        <Text style={style.subtitle}>

         Não fique na duvida de qual {'\n'}
         combustível colocar no seu carro. Nós {'\n'}
         cuidamos de calcular todos os valores {'\n'}
         para você! 
          
        </Text>

        <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleStart}>

          <Feather name="arrow-right" style={style.buttonIcon}/>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  )

}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: fonts.heading,
    color: colors.title,
    lineHeight: 38,
    marginTop: 80
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    fontFamily: fonts.text,
    color: colors.text
  },

  button: {
    backgroundColor: colors.button,
    borderRadius: 16,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60
  },

  buttonIcon: {
    color: '#FFFF',
    fontSize: 32
  }

})