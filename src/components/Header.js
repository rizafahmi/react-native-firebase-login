'use strict'
import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import GiftedSpinner from 'react-native-gifted-spinner'

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={style.header_item}>
          <Text style={style.header_text}>{this.props.text}</Text>
        </View>
        <View style={styles.header_item}>
          {
            !this.props.loaded &&
              <GiftedSpinner />
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1
  },
  header_item: {
    paddingLeft: 10,
    paddingRight: 10
  },
  header_text: {
    color: '#000',
    fontSize: 18
  }
})

AppRegistry.registerComponent('Header', () => Header)
