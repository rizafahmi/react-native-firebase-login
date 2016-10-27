'use strict'

import React from 'react'
import {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

class Button extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight underlayColor={"#e8e8e8"} onPress={this.props.onpress} style={this.props.button_styles}>
          <View>
            <Text style={this.props.button_text_styles}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('Button', () => Button)

export default Button
