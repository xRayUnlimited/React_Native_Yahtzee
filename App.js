import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Right,
  Body,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Yahtzee from './components/Yahtzee';
import Login from './components/Login';
import Register from './components/Register';
import Scores from './components/Scores';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Header>
            <Left>
              <Ionicons name="md-menu" color="black" size={30} />
            </Left>
            <Body>
              <Title>Yahtzee</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
          <Switch>
            <Route exact path='/' component={Yahtzee} />
            <Route exact path='login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/scores' component={Scores} />
          </Switch>
          </Content>
        </Container>
      </NativeRouter>
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