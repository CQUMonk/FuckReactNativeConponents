import React from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

import type { Children } from 'react';


const GiraffeText = ({
                         children
                     }: {
                         children?: Children
                     }) => (
    <Text style={styles.sampleText}>{children}</Text>
);

export default GiraffeText;

const styles = StyleSheet.create({
    sampleText: {
        margin: 14,
    },
});