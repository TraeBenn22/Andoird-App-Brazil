import React from 'react';
import {
  View,
  Text,
  Header,
  Footer,
  Content,
  Container,
  Button,
  Icon,
  Left,
  Right,
} from 'native-base';
import styles from './styles';
import styleTemplate from '../templates/styleTemplate';
import {ScrollView} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueList: [],
      isReady: false,
    };
  }
  render() {
    return (
      <Container>
        <Header style={styleTemplate.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={styleTemplate.menu} name="menu" />
            </Button>
          </Left>
          <Right>
            <Text>Home Repair</Text>
          </Right>
        </Header>
        <Content>
          <ScrollView>
            <Text>My 'repairs'</Text>
            <View style={{margin: 10}}>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('SearchView');
                }}>
                Search for a Company to handle your issue
              </Text>
            </View>
          </ScrollView>
        </Content>
        <Footer style={styleTemplate.footer} />
      </Container>
    );
  }
}
