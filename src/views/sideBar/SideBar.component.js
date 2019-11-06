import React from 'react'

import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right
    // Badge
} from 'native-base'

const routeData = [
    {
        name: 'Gallery',
        route: 'Gallery',
        icon: 'albums'
    },
    {
        name: 'Join Event',
        route: 'JoinEvent',
        icon: 'flower'
    },
    {
        name: 'My Events',
        route: 'MyEvents',
        icon: 'pizza'
    },
    {
        name: 'Create Event',
        route: 'EventCreate',
        icon: 'arrow-down'
    },
    {
        name: 'Create Account',
        route: 'SignUpView',
        icon: 'flower'
    },
    {
        name: 'Log Out',
        route: 'LoginView',
        icon: 'car'
    }
]

class SideBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (

            <Container>
                <Content>
                    <Right>
                        <Icon
                            onPress={() => this.props.navigation.closeDrawer()}
                            name='arrow-back'
                        />
                    </Right>
                    <List
                        keyExtractor={(item, idx) => idx.toString()}
                        dataArray={routeData}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Icon
                                        active
                                        name={data.icon}
                                        style={{ color: '#777', fontSize: 26, width: 30 }}
                                    />
                                    <Text style={{ color: 'black' }}>
                                        {data.name}
                                    </Text>
                                </Left>
                            </ListItem>}
                    />
                </Content>
            </Container>
        )
    }
}

export default SideBar
