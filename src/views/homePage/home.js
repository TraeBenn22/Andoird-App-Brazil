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
  Body,
} from 'native-base';
import styleTemplate from '../templates/styleTemplate';
import {ScrollView, StyleSheet} from 'react-native';
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
        <Header style={styles.header}>
          <Left>
            <Button
              title="drawer"
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={styleTemplate.menu} name="menu" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.TextStyle}>Home Repair</Text>
          </Body>
        </Header>
        <Content style={styles.background}>
          <View>
            <Text style={styles.BodyText}>
              Hm, looks like you haven't finished your profile just yet.
            </Text>
            <Text style={styles.BodyText2}>Fill out Profile?</Text>
            <Text style={styles.BodyText3}>
              If you would rather just search by city, use the button below!
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
