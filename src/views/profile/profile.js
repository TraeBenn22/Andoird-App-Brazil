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
  Label,
} from 'native-base';
import {StyleSheet} from 'react-native';
import styleTemplate from '../templates/styleTemplate';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Header>
          <Left>
            <Text>Welcome to your profile</Text>
          </Left>
          <Right>
            <Text>Editing Profile for $</Text>
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
            <Button
              backgroundColor=
                  "gray"
              title="SaveInformation"
              onPress={() => navigate('HomeView')}>
              <Text>Save Your Changes?</Text>
            </Button>
          </Form>
          <Footer>
            <Button title="BackToHome" onPress={() => navigate('HomeView')}>
              <Text>Back to Home Page</Text>
            </Button>
          </Footer>
        </Content>
      </Container>
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
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//     var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//     // ...
// });
