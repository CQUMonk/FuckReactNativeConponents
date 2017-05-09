/**
 * Created by chenzhuo on 2017/5/8.
 */
import React, {Component} from 'react';
import {View, Image,Text, StyleSheet} from 'react-native';
let Dimensions = require('Dimensions');

class GiraffeImages extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../img/jiji.jpg')}
                       style={styles.pic}/>

                <Image source={{uri: 'learn_english'}}
                       style={styles.pic}/>

                <Image style={styles.pic}
                       source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} />
                <Image source={require('../../img/wudalang.jpg')}
                       style={styles.pic}>
                    <Text>大郎</Text>
                </Image>

            </View>
        );
    }
}

GiraffeImages.navigationOptions={
    title: 'GiraffeImages',
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    pic: {
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height/5,
        resizeMode:'stretch'
    }
});
export default GiraffeImages;