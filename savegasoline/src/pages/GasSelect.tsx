import React, { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet, View, Image, TextInput } from 'react-native';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import {Skeleton} from '../components/Skeleton'

import Car from '../assets/car.png'
import colors from '../styles/colors';

export function GasSelect() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*  console.log('Etanol:' + etanol)
     console.log('Gasolina:' + gasolina) */
  }, [etanol, gasolina])

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false)
    }, 3000)
  })

  function handleInputBlur() {

    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {

    setIsFocused(true)

  }

  /*   function handleInputChange(value: string) {
  
      setIsFilled(!!value)
      setName(value)
  
    } */

  function handleCalculator() {

    const valorFinal = Number(etanol.replace(',', '.')) / Number(gasolina.replace(',', '.'));

    if (!etanol || !gasolina) {

      alert('Algum campo não foi preenchido, dessa forma como vou calcular pra você? 😥')

    } else if (valorFinal < 0.7) {

      alert('Ta na hora de colocar etanol!')

    } else {

      alert('Ta na hora de colocar gasolina!')

    }

  }

  return (

    <SafeAreaView style={style.container}>

      <Skeleton visible={loading}> 

      <View style={style.header}>

        <Header />

      </View>

      <View style={style.view}>

        <Image source={Car} style={style.image} />

        <TextInput style={[style.input, (isFocused || isFilled) && { borderColor: colors.button }]}
          placeholder="Digite o preço do etanol"
          keyboardType={'numeric'}
          value={etanol}
          onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={setEtanol} />

        <TextInput style={[style.input, (isFocused || isFilled) && { borderColor: colors.button }]}
          placeholder="Digite o preço da gasolina"
          keyboardType={'numeric'}
          value={gasolina}
          onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={setGasolina} />

      </View>

      <View style={style.footer}>

        <Button title="Calcular" onPress={handleCalculator} />

      </View>

      </Skeleton>

    </SafeAreaView>

  )

}

const style = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 30
  },

  view: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },

  image: {
    paddingHorizontal: 20
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.title,
    width: '75%',
    fontSize: 18,
    marginTop: 50,
    padding: 5,
    textAlign: 'center'
  },

  footer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20
  },

})