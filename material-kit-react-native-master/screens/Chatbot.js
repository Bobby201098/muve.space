import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chatbot extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Do you have health issues?',
          createdAt: new Date(),
          quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: 'No',
                value: 'Ok then goodbye',
              },
              {
                title: 'Yes',
                value: 'What health problems?',
              },
          
            ],
          },
          user: {
            _id: 2,
            name: 'Muve',
          },
        },
        {
          _id: 1,
          text: 'How are you today?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Muve',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: 'Hello Bobby',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Muve',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}