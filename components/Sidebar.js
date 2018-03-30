import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, Platform, Dimensions } from 'react-native';
import { List, ListItem, Left, Body } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const loggedOutNavs = [
  { name: 'Login', path: '/login', icon: "login" },
  { name: 'Register', path: '/register', icon: "sign-text" }
]

const loggedInNavs = [
  { name: 'Yahtzee', path: '/', icon: "dice-6" },
  { name: 'Scores', path: '/scores', icon: "clipboard-alert" }
]

const navs = []

const navigate = (close, history, path) => {
  close();
  history.push(path);
}

const Sidebar = ({ close, history, isAuthenticated, dispatch, user }) => {
  let visibleNavs = isAuthenticated ?
    [...navs, ...loggedInNavs]
    :
    [...loggedOutNavs, ...navs]
  return(
    <List style={styles.drawer}>
      { visibleNavs.map( (nav, i) => {
        return (
          <ListItem icon key={i}>
            <Left>
              <MaterialCommunityIcons name={nav.icon} color="white" size={30} />
            </Left>
            <Body>
              <Text
                onPress={() => navigate(close, history, nav.path) }
                style={styles.text}
                >
                  {nav.name}
                </Text>
              </Body>
            </ListItem>
          )
        })
      }
      { !isAuthenticated ? null :
        <ListItem>
          <Text
            style={styles.text}
            onPress={ () => {
              dispatch(logout(user));
              history.push('/login');
            }}
          >
            Logout
          </Text>
        </ListItem>
      }
    </List>
  )
}

const styles = {
  drawer: {
    height: deviceHeight / 3.5,
    width: deviceWidth / 1.4,
    marginBottom: 10,
    backgroundColor: '#1c4412',
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 10,
  },
  text: {
    fontWeight: (Platform.OS === 'ios') ? '700' : '600',
    fontSize: 16,
    color: '#fff',
  },
}

const mapStateToProps = (state) => {
  let isAuthenticated = Object.keys(state.user).length ? true : false
  return { isAuthenticated, user: state.user }
}

export default withRouter(connect(mapStateToProps)(Sidebar));