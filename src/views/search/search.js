import React from 'react';
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

export default class SearchFunc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'null',
      location: 'null',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.TextStyle}>Find a Company that can handle your request!</Text>
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
              <Label required="true" selectedValue={this.state.location}>
                Enter your City
              </Label>
              <Input />
            </Item>
            <Button
              style={styles.setBorder}
              title="SaveInformation"
              onPress={() => this.props.navigation.navigate('ResultsView')}>
              <Text>Find a Company!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

