import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {

  const navigation = useNavigation();

  function handleNext() {

     navigation.navigate('GasSelect');
    
  }

  return (

    <SafeAreaView style={style.container}>

      <View style={style.body}>

        <Text style={style.emoji}>😃</Text>

        <Text style={style.title}>Prontinho</Text>

        <Text style={style.subtitle}> Agora é so digitar o que pedimos e deixa {'\n'}
        que o resto a gente faz por você!</Text>

        <View style={style.footer}>

          <Button title="Confirmar" onPress={handleNext} />


        </View>

      </View>

    </SafeAreaView>

  )

}

const style = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 30
  },

  emoji: {
    fontSize: 80,
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.title
  },

  subtitle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: colors.text,
    fontSize: 17,
    paddingVertical: 10,
    lineHeight: 25
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }




})