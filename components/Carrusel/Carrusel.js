import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import {setState} from '../../appData'
import { FlatList, Vibration,Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default function Carrusel() {

  const [length, setLength] = useState(setState.length);
  const [number, setNumber] = useState(0);
  const [current, setCurrent] = useState(0);
  const flatListRef = useRef();

  //////// Vibration settings ///////

  const PATTERN = [
    1 * 20,
    2 * 20,
    3 * 20
  ];

  ///////// useEffects ///////////////

  useEffect(() => {
      flatListRef.current.scrollToIndex({ index: current, animated: true });
  }, [current]);
  useEffect(()=>{
    setNumber(Math.floor(Math.random() * (2 - 0) + 0))
  },[])
  console.log(number);

  /////////////////////////////////////////////////
  const renderItem = ({item}) => {
 
    return (
      <View style={styles.imagesContainer}>
        <View style={styles.contFirstImgs}>
          <Text style={styles.textLeft}>{item[0].title}</Text>
          <Text style={styles.textRight}>{item[1].title}</Text>
          <Image style={styles.imageLeft} source={{ uri: item[0].image[number]}} />
          <Image style={styles.imageRight} source={{ uri: item[1].image[number]}} />
        </View>
        <Image style={styles.imageBottom} source={{ uri: item[2].image[number]}} />
        <Text style={styles.textBottom}>{item[2].title}</Text>
      </View>
    );
  }

  const goNextSlide = () => {
    if(current < length -1){
      setCurrent(current < length -1 ? current + 1 : 0);
      flatListRef.current.scrollToIndex({ index: current, animated: true });
    }else{
      Vibration.vibrate(PATTERN);
    }

  };
  const goPrevSlide = () => {
    if(current!==0){
      setCurrent(current ? current - 1 : length - 1);
      flatListRef.current.scrollToIndex({ index: current, animated: true });
    }else{
      Vibration.vibrate(PATTERN);
    }
  };
  ////////////////////////////////////////////////////////////////////
  return (
    <View style={styles.screen}>
      <StatusBar hidden/>
      <ImageBackground source={require('../../assets/abstract-vector-graphic-design-hf.jpg')} blurRadius={20} resizeMode="cover" style={styles.background}/>
      <View style={styles.contCarousel}>
      <Text style={styles.text}>CAROUSEL APP!</Text>
      <View style={styles.controls}>
          <TouchableOpacity style={styles.controlleft} onPress={goPrevSlide}>
            <Image  source={require('../../assets/arrow.png')} style={current!==0?styles.arrowPrev:styles.arrowPrevNone}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlRight} onPress={goNextSlide}>
            <Image source={require('../../assets/arrow.png')} style={current < length -1?styles.arrowNext:styles.arrowNextNone}/>
          </TouchableOpacity>
        </View>
        <FlatList
          data={setState}
          keyExtractor={item => item[0].id}
          renderItem={renderItem}
          horizontal={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          ref={flatListRef}
          style={styles.flatList}
        />
      </View>
    </View>
  );
}