'use strict'
import React from 'react'
import {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} from 'react-native'

import Firebase from 'firebase'

import Button from '../components/Button.js'
import Header from '../components/Header.js'

import Login from './login.js'

let app = new Firebase("reactnativelogi.firebaseio.com")

import styles from '../styles/common-styles.js'

class signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}
