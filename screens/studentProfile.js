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
  Alert,
  Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText';

import {
  Cell,
  Section,
  TableView
} from 'react-native-tableview-simple';

import Router from '../navigation/Router';

import CustomImage from '../CustomImage'

/*var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;*/

GLOBAL = require('../Globals');

const win = Dimensions.get('window');

export default class studentProfile extends React.Component {
  constructor(props) {
    super(props);
    GLOBAL.spneverupdated = true
    GLOBAL.spinconstructor = true
    GLOBAL.spself = this;
    this.state={widthArray:[],heightArray:[],numcomm: GLOBAL.viewedStudent["Commendations"], stcells: GLOBAL.viewedStudent["_MiscProfileData"].map(this.renderItem), gbcells: [GLOBAL.viewedStudent["_GoodBehaviours"].map(this.renderGB)]};
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
    if (GLOBAL.spself.isLong(x["BodyText"])) {
      return (
        <View key={i}>
          <View style={styles.spaceContainer}>
            <Text style={styles.spaceRow}>{}</Text>
          </View>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.container}>
              <View style={styles.container}>
                <Text style={styles.nameRow}>{GLOBAL.currStudentName}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.dateRow}>{x["FriendlyTime"]}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.teacherRow}>{x["IssuingTeacher"]}</Text>
              </View>
              <CustomImage imageWidth={win.width} imageURL={x["Image"]}/>
              <View style={styles.container}>
                <Text style={styles.descriptionRow}>{GLOBAL.spself.truncText(x["BodyText"])}</Text>
                <Text style={styles.viewFullRow}>{"Tap to view full description"}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View key={i}>
          <View style={styles.spaceContainer}>
            <Text style={styles.spaceRow}>{}</Text>
          </View>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.container}>
              <View style={styles.container}>
                <Text style={styles.nameRow}>{GLOBAL.currStudentName}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.dateRow}>{x["FriendlyTime"]}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.teacherRow}>{x["IssuingTeacher"]}</Text>
              </View>
              <CustomImage imageWidth={win.width} imageURL={x["Image"]}/>
              <View style={styles.container}>
                <Text style={styles.descriptionRow}>{GLOBAL.spself.truncText(x["BodyText"])}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }

  IncrementCommendations(){
    GLOBAL.viewedStudent["Commendations"] += 1
    GLOBAL.spself.setState({numcomm: GLOBAL.viewedStudent["Commendations"]})
  }

  DecrementCommendations(){
    GLOBAL.viewedStudent["Commendations"] -= 1
    GLOBAL.spself.setState({numcomm: GLOBAL.viewedStudent["Commendations"]})
  }

  appendGB(text){
    GLOBAL.viewedStudent["_GoodBehaviours"].push({"IssuingTeacher": GLOBAL.Data2["TeacherName"], "UnixTime": 89, "FriendlyTime": "2/8/2017", "BodyText": GLOBAL.goodBehaviourText, "Image": "!!!EMPTYIMAGE"})
    var temparragb = GLOBAL.viewedStudent["_GoodBehaviours"].map(this.renderGB)
    this.setState({ gbcells: temparragb });
  }

  actlaskremoveGB(i){
    Alert.alert("Remove Good Behaviour record?", "", [{text: "Cancel", onPress: () => {}}, {text: "OK", onPress: () => {GLOBAL.askremoveGB(i)}}], { cancelable: false })
  }

  askremoveGB(i){
    GLOBAL.currStudentGB.splice(i, 1)
    var temparrargb = GLOBAL.currStudentGB.map(this.renderGB)
    this.setState({ gbcells: temparrargb})
  }

  commitText(){
    if (GLOBAL.SAVETHISTEXT == true){
      GLOBAL.spself.appendGB(GLOBAL.goodBehaviourText)
      clearInterval(GLOBAL.BUSYCHECK)
    }
  }

  logGoodBehaviour(){
    clearInterval(GLOBAL.BUSYCHECK)
    GLOBAL.goodBehaviourText = ""
    GLOBAL.SAVETHISTEXT = false
    GLOBAL.spself.props.navigator.push(Router.getRoute('goodBehaviour'))
    GLOBAL.BUSYCHECK = setInterval(GLOBAL.spself.commitText, 100);
  }

  truncText(x){
    if (x.length > GLOBAL.PREFS_MAXFEEDGBLENGTH){
      return x.substring(0,GLOBAL.PREFS_MAXFEEDGBLENGTH)+"..."
    }
    return x
  }

  isLong(x){
    if (x.length > GLOBAL.PREFS_MAXFEEDGBLENGTH) {
      return true
    }
    return false
  }

  render() {
    //GLOBAL.askremoveGB = this.askremoveGB
    //GLOBAL.actlaskremoveGB = this.actlaskremoveGB
    //GLOBAL.studentProfileNavigation = this.props.navigator
    GLOBAL.spinconstructor = false
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <TableView>
            <Section>
              <Cell cellStyle={"RightDetail"} title={"Commendations"} detail={""+this.state.numcomm}/>
            </Section>
            <Section>
              <Cell title={"Make Commendation"} onPress={this.IncrementCommendations}/>
              <Cell title={"Revoke Commendation"} onPress={this.DecrementCommendations}/>
            </Section>
            <Section>
              {this.state.stcells}
            </Section>
            <Section>
              <Cell title={"Log Good Behaviour"} onPress={this.logGoodBehaviour} accessory="DisclosureIndicator"/>
            </Section>
            <View style={styles.gbContainer}><Text style={styles.gbText}>GOOD BEHAVIOURS</Text></View>
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
  gbText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#rgb(128, 128, 128)',
  },
  row: {
    marginLeft: 12,
    fontSize: 16,
  },
  gbContainer: {
    marginTop: 14,
    flex: 1,
    backgroundColor: '#EFEFF4',
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
