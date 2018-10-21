/* 
 * Project: React Native Tutorial - Create an Image Gallery
 * YouTube: https://www.youtube.com/watch?v=QwhrAjp4X_Y
 *
 * Author : Fullstack Development - https://www.youtube.com/channel/UCNpIE11a9nLW_s2GUWmksqw
 *
 * Images : https://www.pexels.com/ 
 * 
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class ImageElement extends Component {
    render() {
        return (
            <Image source={this.props.imgsource} style={styles.image}></Image>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }

});


/*
 * EOF: ImageElement.js
 */
