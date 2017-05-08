/**
 * Created by chenzhuo on 2017/5/8.
 */
'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native';

class GiraffeActivityIndicator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animating: true,
        };
    }

    setToggleTimeout() {
        setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 3000);

    }

    componentDidMount() {
        this.setToggleTimeout();
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    style={[styles.centering, {height: 80}]}
                    size="large"
                    animating={this.state.animating}
                />
                <ActivityIndicator
                    size="small"
                    animating={!(this.state.animating)}
                    color="red"
                />
            </View>
        );
    }
}


GiraffeActivityIndicator.navigationOptions = {
    title: 'ActivityIndicator',
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        margin:10
    },
});


export default GiraffeActivityIndicator;

