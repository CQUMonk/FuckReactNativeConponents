'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

class EntryModule extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            titleText: 'I\'m A Tittle ',
            bodyText: 'body',
            animating: true,
            data: {'基础组件': ['ActivityIndicator', 'Button'], "扩展组件": ['Test']},
            dataSource: ds,
        };
        this._onPressTitle = this._onPressTitle.bind(this);

    }


    _onPressTitle() {
        this.setState({animating: !this.state.animating});
    }

    _pressRow() {
    }


    _renderRow(rowData: string, sectionID: number, rowID: number) {


        return (
            <TouchableHighlight style={styles.row} onPress={() => {
                this._pressRow(rowID);
            }}>

                <View >
                    <Text style={styles.itemText}>
                        {rowData}
                    </Text>
                </View>

            </TouchableHighlight>
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>UI Component Demos </Text>
                </View>
                <ListView

                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                    renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                    showsVerticalScrollIndicator={false}
                />


            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    titleView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c60a1e',
    },
    titleText: {
        color: 'white',
        fontSize: 18,
    },
    demoList: {
        flex: 0.8,

        alignItems: 'center',
    },
    icon: {
        width: 200,
        height: 150,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#e3e2e2',

    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Cochin',
    }
});
export default EntryModule;