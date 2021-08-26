import React from "react";
import styles from './styles';
import {jsonList} from '../../appData'
import {Text, View, Image} from 'react-native';

export default function Block({item}){
    function blockItems(){
        item.map((d)=>{
            return (
            <View style={styles.imagesContainer}>
                <Image style={styles.image} source={{ uri: d.image[0] }} />
            </View>
            )
        })
    }
        return(
            <View>{blockItems}</View>
        )
}