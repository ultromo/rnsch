import React from 'react'
import {Image} from 'react-native'

export default class CustomImage extends React.Component {
  constructor(props){
    super(props)
    this.state={height:1, width:1}
  }

  render = () => {
    const { imageURL, imageWidth } = this.props;
    if (imageURL == "!!!EMPTYIMAGE") return (null);
    Image.getSize(imageURL, (width, height) => {
      if (width == this.state.width && height == this.state.height) return
      this.setState({width: width, height: height})
    })
    return (
      <Image style={{width:imageWidth, height:imageWidth*this.state.height/this.state.width}} source={{uri: imageURL}}/>
    )
  }
}
