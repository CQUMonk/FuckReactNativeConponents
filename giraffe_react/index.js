'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ScrollView,
    Button,
    View

} from 'react-native';
import {StackNavigator} from 'react-navigation';


import GiraffeText from './views/GiraffeText';
import GiraffeActivityIndicator from './views/giraffeIndicator';
import GiraffeImages from './views/giraffeImages'

const MyNavScreen = ({navigation, banner}) => (
    <ScrollView>
        <GiraffeText>{banner}</GiraffeText>
        <View style={styles.splitor}/>
        <Button
            color="#c60a1e"
            onPress={() => navigation.navigate('ActivityIndicator')}
            title="Go to a ActivityIndicator screen"
            style={styles.item}
        />
        <View style={styles.splitor}/>
        <Button
            color="#c60a1e"
            onPress={() => navigation.navigate('ImageSample')}
            title="Go to a Image screen"
        />
        <View style={styles.splitor}/>
        <Button
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('Photos', {name: 'Jane'})}
            title="Go to a photos screen"
        />
        <Button
            onPress={() => navigation.goBack(null)}
            title="Go back"
        />
    </ScrollView>
);

const MyHomeScreen = ({navigation}) => (
    <MyNavScreen
        banner="Home"
        navigation={navigation}
    />
);
MyHomeScreen.navigationOptions = {
    title: 'UI Components',
};

const MyPhotosScreen = ({navigation}) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}'s Photos`}
        navigation={navigation}
    />
);
MyPhotosScreen.navigationOptions = {
    title: 'Photos',
};

const MyProfileScreen = ({navigation}) => (
    <MyNavScreen
        banner={
            `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''
                }${navigation.state.params.name}'s Profile`
        }
        navigation={navigation}
    />
);

MyProfileScreen.navigationOptions = props => {
    const {navigation} = props;
    const {state, setParams} = navigation;
    const {params} = state;
    return {
        headerTitle: `${params.name}'s Profile!`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        headerRight: (
            <Button
                title={params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
            />
        ),
        gesturesEnabled: true,
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    nav_header: {
        flexDirection: 'row',

        backgroundColor: '#c60a1e',

    },
    nav_title: {
        color: 'white',
    },
    item: {
        color: '#c60a1e',
        marginTop: 5,
        marginBottom: 5,
        height:50
    },
    splitor:{
        height:4,

    }

});


const EntryModule = StackNavigator({
        Home: {
            screen: MyHomeScreen,
        },
        Profile: {
            path: 'people/:name',
            screen: MyProfileScreen,
        },
        Photos: {
            path: 'photos/:name',
            screen: MyPhotosScreen,
        },
        ActivityIndicator: {
            screen: GiraffeActivityIndicator
        },
        ImageSample: {
            screen: GiraffeImages
        }

    },
    {
        headerMode: 'float',
        cardStyle: {
            backgroundColor: '#e3e2e2',
        },
        navigationOptions: {
            headerStyle: styles.nav_header,
            headerTintColor: "white",
        },

    });

export default EntryModule;