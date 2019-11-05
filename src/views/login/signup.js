//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import firebase from 'firebase';
import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      password: '',
      name: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    };
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBC2poTmWBgAdl0DWEe1Myv5WIMKIgWVdI',
      authDomain: 'brazil-repair-app.firebaseapp.com',
      databaseURL: 'https://brazil-repair-app.firebaseio.com',
      projectId: 'brazil-repair-app',
      storageBucket: 'brazil-repair-app.appspot.com',
      messagingSenderId: '656694704732',
      appId: '1:656694704732:web:275e8e0d6d1f22447ec499',
      measurementId: 'G-BMYJ30YDM8',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp({firebaseConfig});
    }

    //   firebase
    //     .database()
    //     .ref('users')
    //     .set({
    //       name: 'Trae Bennett',
    //       email: 'trae.d.bennett2@gmail.com',
    //       address: '123 4th st something, Washington, 98188',
    //     })
    //     .then(() => {
    //       console.log('inserted');
    //     })
    //     .catch(() => {
    //       console.error('not inserted');
    //     });
  }

  static navigationOptions = {
    title: 'Sign Up',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  handleChange = (inputField, text) => {
    this.setState(prevState => ({
      ...prevState,
      [inputField]: text,
    }));
  };

  handleSubmit = () => {
    let ID = this.generatePushID();
    if (this.state.username.length > 3 && this.state.password.length > 3) {
      firebase
        .database()
        .ref(`users/${ID}`)
        .set({
          id: ID,
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          email: this.state.email,
          street: this.state.street,
          city: this.state.city,
          state: this.state.state,
          zipCode: this.state.zipCode,
        })
        .then(() => {
          console.log('inserted');
        })
        .catch(() => {
          console.error('not inserted');
        });
    } else {
      Alert.alert(
        'Error',
        'Username and Password must be at least 3 characters',
      );
    }
  };
  generatePushID = (function() {
    // Modeled after base64 web-safe chars, but ordered by ASCII.
    var PUSH_CHARS =
      '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

    // Timestamp of last push, used to prevent local collisions if you push twice in one ms.
    var lastPushTime = 0;

    // We generate 72-bits of randomness which get turned into 12 characters and appended to the
    // timestamp to prevent collisions with other clients.  We store the last characters we
    // generated because in the event of a collision, we'll use those same characters except
    // "incremented" by one.
    var lastRandChars = [];

    return function() {
      var now = new Date().getTime();
      var duplicateTime = now === lastPushTime;
      lastPushTime = now;

      var timeStampChars = new Array(8);
      for (var i = 7; i >= 0; i--) {
        timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
        // NOTE: Can't use << here because javascript will convert to int and lose the upper bits.
        now = Math.floor(now / 64);
      }
      if (now !== 0) {
        throw new Error('We should have converted the entire timestamp.');
      }

      var id = timeStampChars.join('');

      if (!duplicateTime) {
        for (i = 0; i < 12; i++) {
          lastRandChars[i] = Math.floor(Math.random() * 64);
        }
      } else {
        // If the timestamp hasn't changed since last push, use the same random number, except incremented by 1.
        for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
          lastRandChars[i] = 0;
        }
        lastRandChars[i]++;
      }
      for (i = 0; i < 12; i++) {
        id += PUSH_CHARS.charAt(lastRandChars[i]);
      }
      if (id.length != 20) {
        throw new Error('Length should be 20.');
      }

      return id;
    };
  })();

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={this.state.username}
          onChangeText={text => this.handleChange('username', text)}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.handleChange('password', text)}
        />
        <TextInput
          placeholder="Full Name"
          value={this.state.name}
          onChangeText={text => this.handleChange('name', text)}
        />
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.handleChange('email', text)}
        />
        <TextInput
          placeholder="Street Address"
          value={this.state.street}
          onChangeText={text => this.handleChange('street', text)}
        />
        <TextInput
          placeholder="City"
          value={this.state.city}
          onChangeText={text => this.handleChange('city', text)}
        />
        <TextInput
          placeholder="State"
          value={this.state.state}
          onChangeText={text => this.handleChange('state', text)}
        />
        <TextInput
          placeholder="Zip Code"
          value={this.state.zipCode}
          onChangeText={text => this.handleChange('zipCode', text)}
        />
        <Button title="Sign Up" onPress={this.handleSubmit}>
          Everything looks good!
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
