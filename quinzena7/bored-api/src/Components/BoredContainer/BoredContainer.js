import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ActivityButton = styled.button`
  background-color: #ed822f;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  padding: 4px;
  width: 240px;
`

const BoredMain = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  // width: 100vw;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
`

const InfoActivity = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 16px;
`

class BoredContainer extends React.Component {

  state = {
    activity: '',
    participants: 0,
    type: '',
    price: ''
  };

  showActivities = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((response) => {
      this.setState({
        activity: response.data.activity,
        participants: response.data.participants,
        type: response.data.type,
        price: response.data.price
      })
    })

    .catch((error) => {
      alert("Uh, something is wrong, sorry! Could you try again, please?", error)
    })
  }

  render() {
    return (
      <BoredMain>
        <Container>
          <h1>Ya bored?</h1>
          <ActivityButton onClick={this.showActivities}> Click here and have some fun<br />with a random activity! </ActivityButton>
          <InfoActivity>
            <li> Activity: {this.state.activity} </li>
            <li> Participants: {this.state.participants} </li>
            <li> Type of activity: {this.state.type} </li>
            <li> Price: {this.state.price} </li>
          </InfoActivity>
        </Container>
      </BoredMain>
    )
  }
};

export default BoredContainer;