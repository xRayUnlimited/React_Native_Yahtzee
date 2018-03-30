import React from 'react';
import { API_URL } from '../utils/urls';
import { List, ListItem, Left, Right, H1, Button, Body } from 'native-base';
import { View, Text } from 'react-native';
import axios from 'axios';

class Scores extends React.Component {
  state = { scores: [] }

  componentDidMount() {
    axios.get(`${API_URL}/scores`)
      .then( res => this.setState({ scores: res.data.scores }) )
  }

  showScores = () => {
    let { scores } = this.state;
    return scores.map( (s,i) => {
      let { email, value } = s;
      return (
        <ListItem key={i}>
          <Left>
            <Text>
              {value}
            </Text>
          </Left>
          <Body>
            <Text note>
              {email}
            </Text>
          </Body>
        </ListItem>
      )
    });
  }

  render() {
    return (
      <View>
        <H1 style={{ textAlign: 'center' }}>Scores</H1>
        <List>
          { this.showScores() }
        </List>
      </View>
    )
  }
}

export default Scores;