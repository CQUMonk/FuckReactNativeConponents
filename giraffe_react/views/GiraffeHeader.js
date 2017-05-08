'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class GiraffeHeader extends Component {

    render() {
        return (

            <View style={styles.titleView}>
                <Text style={styles.titleText}>UI Component Demos </Text>
            </View>


        );
    }

}

const styles = StyleSheet.create({
    titleView: {
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c60a1e',
    },
    titleText: {
        color: 'white',
        fontSize: 18,
    },
});

export default GiraffeHeader;