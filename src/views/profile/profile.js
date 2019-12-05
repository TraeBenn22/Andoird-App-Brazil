import React from 'react';
import {
  Text,
  Header,
  Footer,
  Content,
  Container,
  Button,
  Left,
  Right,
  Form,
  Item,
  Input,
  Toast,
  Label,
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      name: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Text style={styles.TextStyle}>Welcome to your profile</Text>
          </Left>
          <Right>
            <Text style={styles.TextStyle}>Editing Profile for Guest</Text>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Street</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>State</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Zip Code</Label>
              <Input />
            </Item>
          </Form>

          <Footer>
            <Button
              styler={styles.setBorder}
              title={'saving'}
              success
              onPress={() =>
                Toast.show({
                  text: 'Profile Updated!',
                  buttonText: 'Okay',
                  type: 'success',
                })
              }>
              <Text>Save Changes</Text>
            </Button>

            <Button
              style={styles.setBorder}
              title="BackToHome"
              onPress={() => navigate('HomeView')}>
              <Text>Back to Home Page</Text>
            </Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#25383C',
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25383C',
  },
  background: {
    backgroundColor: 'whitesmoke',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setBorder: {
    backgroundColor: '#25383C',
    fontSize: 15,
    fontWeight: 'bold',
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  BodyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#25383C',
  },
  BodyText2: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 18,
    color: '#25383C',
  },
  BodyText3: {
    textAlign: 'center',
    fontSize: 16,
    color: '#25383C',
  },
});
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//     var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//     // ...
// });
