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
  FlatList
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

export default class studentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state={stcells: this.getData().map(this.renderItem), gbcells: GLOBAL.currStudentGB.map(this.renderGB)};
    this.appendData = this.appendData.bind(this)
    this.appendGB = this.appendGB.bind(this)
    this.IncrementCommendations = this.IncrementCommendations.bind(this)
    this.DecrementCommendations = this.DecrementCommendations.bind(this)
    this.logGoodBehaviour = this.logGoodBehaviour.bind(this)
    this.commitText = this.commitText.bind(this)
  }

  static route = {
    navigationBar: {
      visible: true,
      title(params) {
        if (typeof params.studentName === 'undefined') {
          return '';
        }

        return params.studentName
       },
    },
  };

  componentDidMount(){
    setTimeout(() => {
      this.props.navigator.updateCurrentRouteParams({
        studentName: GLOBAL.currStudentName+"'s Profile"
      })
    }, 500)
  }

  renderItem(x, i) {
    return <Cell key={i} title={x} />
  }

  renderGB(x, i){
    return <Cell key={i} title={x} />
  }

  getData(){
    return GLOBAL.currStudentProfile
  }

  appendData(text){
    var temparr = this.state.stcells.slice()
    let cidx = this.state.stcells.length
    temparr.push(<Cell key={cidx} title={text} />)
    this.setState({ stcells: temparr });
  }

  modifyData(text, index){
    var temparr = this.state.stcells.slice()
    let cidx = index
    temparr.splice(index, 1, <Cell key={cidx} title={text} />)
    this.setState({ stcells: temparr });
  }

  IncrementCommendations(){
    var currComm = parseInt(GLOBAL.currStudentProfile[0].split(" ")[1])
    currComm += 1
    let commString = "Commendations: ".concat(currComm.toString())
    GLOBAL.currStudentProfile[0] = commString
    this.modifyData(commString, 0)
    console.log(currComm)
  }

  DecrementCommendations(){
    var currComm = parseInt(GLOBAL.currStudentProfile[0].split(" ")[1])
    currComm -= 1
    let commString = "Commendations: ".concat(currComm.toString())
    GLOBAL.currStudentProfile[0] = commString
    this.modifyData(commString, 0)
    console.log(currComm)
  }

  appendGB(text){
    var temparr = this.state.gbcells.slice()
    let cidx = this.state.gbcells.length
    temparr.push(<Cell key={cidx} title={text} />)
    this.setState({ gbcells: temparr });
  }

  commitText(){
    if (GLOBAL.SAVETHISTEXT == true){
      GLOBAL.currStudentGB.push(GLOBAL.goodBehaviourText)
      this.appendGB(GLOBAL.goodBehaviourText)
      clearInterval(GLOBAL.BUSYCHECK)
    }
  }

  logGoodBehaviour(){
    clearInterval(GLOBAL.BUSYCHECK)
    GLOBAL.goodBehaviourText = ""
    GLOBAL.SAVETHISTEXT = false
    GLOBAL.classDisplayNavigation.push(Router.getRoute('goodBehaviour'))
    GLOBAL.BUSYCHECK = setInterval(this.commitText, 100);
  }

  render() {
    GLOBAL.studentProfileNavigation = this.props.navigator
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <TableView>
            <Section>
              {this.state.stcells}
            </Section>
            <Section>
              <Cell title={"Make commendation"} onPress={this.IncrementCommendations}/>
              <Cell title={"Revoke commendation"} onPress={this.DecrementCommendations}/>
            </Section>
            <Section>
              <Cell title={"Log good behaviour"} onPress={this.logGoodBehaviour} accessory="DisclosureIndicator"/>
            </Section>
            <Section>
              {this.state.gbcells}
            </Section>
          </TableView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginLeft: 12,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
