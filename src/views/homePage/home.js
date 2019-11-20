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
import styleTemplate from '../templates/styleTemplate';
import {ScrollView, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    color: 'red',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setBorder: {
    width: 390,
    height: 55,
    borderWidth: 3,
    borderColor: '#045FB4',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
      <Container style={styles.red}>
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
          <View>
            <Text>
              Hm, looks like you haven't finished your profile information just
              yet. No worries, if you want to search by City simply press the button!
            </Text>
          </View>
          <ScrollView>
            <View style={{margin: 10}}>
              <Button
                title="Search"
                style={styles.setBorder}
                onPress={() => {
                  this.props.navigation.navigate('SearchView');
                }}>
                <Text>Search for a Company to handle your issue</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
        <Footer style={styleTemplate.footer} />
      </Container>
    );
  }
}
