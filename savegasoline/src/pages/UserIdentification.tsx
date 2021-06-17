import React, { useState } from 'react';

import { StyleSheet, SafeAreaView, View, KeyboardAvoidingView, Keyboard, Text, Alert} from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '../components/Button';

export function UserIdentification() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {

    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {

    setIsFocused(true)

  }

  function handleInputChange(value: string) {

    setIsFilled(!!value)
    setName(value)

  }

  async function handleNext() {
    
    if(!name) {
      return Alert.alert('Hey! Qual o seu nome? 🤔')
    }

    try { 

      await AsyncStorage.setItem('@gasmanager:user', name)

      navigation.navigate('Confirmation')

    } catch {

      return Alert.alert('Não foi possível salvar o seu nome! 😥')
    }

  }

  return (

    <SafeAreaView style={style.container}>

      <KeyboardAvoidingView style={style.container}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={style.content}>

            <View style={style.form}>

              <View style={style.header}>

                <Text style={style.emoji}>

                  {isFilled ? '😀' : '😁'}

                </Text>

                <Text style={style.title}>

                  Como podemos {'\n'}
                  chamar você? 

                </Text>

              </View>

              <TextInput style={[style.input, (isFocused || isFilled) && {borderColor: colors.button}]} 
                         placeholder="Digite um nome" onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange}/>

              <View style={style.footer}>

               <Button title="Confirmar" onPress={handleNext}/>

              </View>           

            </View>

          </View>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>

    </SafeAreaView>

  )

}

const style = StyleSheet.create({

  container: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },

  header: {
    alignItems: 'center'
  },

  emoji: {
   fontSize: 54
  },

  title: {
   fontSize: 24,
   fontFamily: fonts.heading,
   color: colors.title,
   textAlign: 'center',
   marginTop: 20
  },

  input: {
   borderBottomWidth: 1,
   borderColor: colors.gray,
   color: colors.title,
   width: '100%',
   fontSize: 18,
   marginTop: 50,
   padding: 10,
   textAlign: 'center'
  },

  footer: {
   width: '100%',
   marginTop: 40,
   paddingHorizontal: 20
  }

})