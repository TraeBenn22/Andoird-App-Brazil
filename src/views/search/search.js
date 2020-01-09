import React, {Component} from 'react';
import {
  Text,
  Header,
  Content,
  Container,
  Button,
  Input,
  Label,
  Form,
  Item,
  Picker,
} from 'native-base';
import {StyleSheet} from 'react-native';

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

export let infoArray = [];

export default class SearchFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'null',
      location: 'null',
    };
    this.selection = '';
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  getSearchResults() {
    infoArray.push(this.state.selected, this.state.location);
    this.props.navigation.navigate('ResultsView');
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.TextStyle}>
            Find a Company that can handle your request!
          </Text>
        </Header>
        <Content>
          <Form>
            <Text>What's the issue?</Text>
            <Picker
              note
              mode="dropdown"
              style={{width: 120}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="Car Repair" value="CarRepair" />
              <Picker.Item label="Plumbing" value="Plumbing" />
              <Picker.Item label="Painting" value="Painting" />
              <Picker.Item label="Carpentry" value="Carpentry" />
            </Picker>
            <Item floatingLabel>
              <Label>Enter City</Label>
              <Input
                getRef={input => {
                  this.state.location = input;
                }}
              />
            </Item>
            <Button
              style={styles.setBorder}
              title="SaveInformation"
              onPress={() => this.getSearchResults()}>
              <Text>Find a Company!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
