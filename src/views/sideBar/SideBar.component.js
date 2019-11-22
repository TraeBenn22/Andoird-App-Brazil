import React from 'react';

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25383C',
    color: 'white',
  },
});

const routeData = [
  {
    name: 'Start a new repair',
    route: 'NewRepairView',
  },
  {
    name: 'Previous repairs',
    route: 'PreviousView',
  },
  {
    name: 'Profile',
    route: 'ProfileView',
  },
  {
    name: 'Customer Support',
    route: 'SupportView',
  },
  {
    name: 'Log Out',
    route: 'LoginView',
  },
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Right>
            <Icon
              onPress={() => this.props.navigation.closeDrawer()}
              name="arrow-back"
            />
          </Right>
          <List
            keyExtractor={(item, idx) => idx.toString()}
            dataArray={routeData}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}>
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{color: '#777', fontSize: 26, width: 30}}
                  />
                  <Text style={{color: 'white'}}>{data.name}</Text>
                </Left>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
