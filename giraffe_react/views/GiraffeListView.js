'use strict'
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';


class GiraffeListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {

            dataSource: ds.cloneWithRowsAndSections(this._genRows()),
        };

    }

    _genRows() {
        var dataBlob = {'基础组件': ['ActivityIndicator',
            'StackNavigatorSimple'], "扩展组件": ['Test']};

        return dataBlob;

    }

    _pressRow(rowID) {
        const { navigate } = this.props.navigation;
        navigate(rowID);
    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {


        return (
            <TouchableHighlight
                style={styles.row}
                underlayColor='#c60a1e'
                onPress={() => {
                    this._pressRow(rowData);
                }}>

                <View >
                    <Text style={styles.itemText}>
                        {rowData}
                    </Text>
                </View>

            </TouchableHighlight>
        );

    }

    _renderSeperator(sectionID: number, rowID: number) {
        return (<View

            style={styles.rowSeparator}/>);
    }

    _renderSectionHeader(sectionData, sectionId) {
        return (<View>
            <Text style={styles.sectionHeaderStyle}>{sectionId}</Text>
        </View>);

    }


    render() {
        return (

            <ListView
                dataSource={this.state.dataSource}
                renderSectionHeader={this._renderSectionHeader}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                showsVerticalScrollIndicator={false}
                renderSeparator={this._renderSeperator}
            />



        );
    }
}
const styles = StyleSheet.create({
    demoList: {
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
    },
    rowSeparator: {
        height: 2,
        backgroundColor: '#CCCCCC'
    },
    sectionHeaderStyle: {
        backgroundColor: '#EEEEEE'
    }
});

export default GiraffeListView;