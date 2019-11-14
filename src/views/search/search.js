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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'HVAC',
      location: 'brasilia',
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
        <Header>
          <Text>Find a Company that can handle your request!</Text>
        </Header>
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{width: 120}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="Heating and Air" value="HVAC" />
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
              backgroundColor="blue"
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
