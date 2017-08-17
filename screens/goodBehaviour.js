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
  TextInput
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

import Expo from 'expo';

export default class goodBehaviour extends React.Component {
  constructor(props) {
    super(props);
    this.state={text: ""}
    GLOBAL.gbCanExit = true
    this.saveText = this.saveText.bind(this)
    this.clearText = this.clearText.bind(this)
    GLOBAL.gbethis = this
  }

  static route = {
    navigationBar: {
      visible: true,
      title(params) {
        return "Log Good Behaviour"
      },
    },
  };

  componentDidMount(){
  }

  saveText(){
    if (GLOBAL.gbCanExit == false){
      console.log("Gb exit blocked by image")
      setTimeout(() => {this.saveText()}, 100)
      return
    }
    GLOBAL.goodBehaviourText = this.state.text
    GLOBAL.gbethis.props.navigator.pop()
    GLOBAL.SAVETHISTEXT = true
  }

  clearText(){
    GLOBAL.SAVETHISTEXT = false
    GLOBAL.goodBehaviourText = ""
    this.setState({
      text: ""
    })
  }

  async insertImage(){
    let img = await Expo.ImagePicker.launchImageLibraryAsync({})
    console.log(img)
    if (img["cancelled"] == false){
      GLOBAL.gbInsertedImageURL = img["uri"]
    }
    GLOBAL.gbCanExit = true
  }

  async takePhoto(){
    let img = await Expo.ImagePicker.launchCameraAsync({})
    console.log(img)
    if (img["cancelled"] == false){
      GLOBAL.gbInsertedImageURL = img["uri"]
    }
    GLOBAL.gbCanExit = true
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <TableView>
            <Section>
              <Cell key={0} title={"Save and Exit"} onPress={this.saveText}/>
              {/*<Cell key={1} title={"Clear"} onPress={this.clearText}/>*/}
              <Cell key={2} title={"Insert Image from Camera Roll"} onPress={() => {GLOBAL.gbCanExit = false; this.insertImage()}}/>
              <Cell key={3} title={"Take Photo"} onPress={() => {GLOBAL.gbCanExit = false; this.takePhoto()}}/>
            </Section>
          </TableView>
          <View style={styles.inputContainer}>
            <TextInput
              style={{height:1080, fontSize:20}}
              multiline = {true}
              numberOfLines = {4}
              onChangeText={(text) => {
                this.setState({text})
              }}
              value={this.state.text}
              editable = {true}
              maxLength = {500}
              placeholder = "What good behaviour did you observe?"
              placeholderTextColor = "grey"
              autoFocus = {true}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 12,
  },
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
