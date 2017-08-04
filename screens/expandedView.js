import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import {
  Cell,
  Section,
  TableView
} from 'react-native-tableview-simple';

import Router from '../navigation/Router';

/*var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;*/

GLOBAL = require('../Globals');

DataFetch = require('../DataFetch')

const win = Dimensions.get('window');

export default class expandedView extends React.Component {
  constructor(props){
    super(props);
    this.mapToView = this.mapToView.bind(this)
  }

  static route = {
    navigationBar: {
      title: 'View Good Behaviour',
    },
  };

  mapToView(x, i){
    return (
      <TouchableHighlight key={i}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.nameRow}>{x[0]}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.dateRow}>{x[3]}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.teacherRow}>{x[1]}</Text>
          </View>
          
          <View style={styles.container}>
            <Text style={styles.descriptionRow}>{x[2]}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    let views = [GLOBAL.expandedViewData].map(this.mapToView)
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        {views}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spaceRow: {
    marginTop: 3,
  },
  nameRow: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 12,
    marginRight: 12,
  },
  teacherRow: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 12,
    marginRight: 12,
  },
  descriptionRow: {
    fontSize: 16,
    marginTop: 7,
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 12,
    textAlign: 'justify',
  },
  viewFullRow: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    color: '#7d8187',
  },
  dateRow: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 12,
    marginRight: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spaceContainer: {
    flex: 1,
    backgroundColor: '#EFEFF4',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#EFEFF4',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
