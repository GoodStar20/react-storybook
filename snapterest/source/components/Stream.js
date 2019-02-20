import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client'
import StreamTweet from './StreamTweet'
import Header from './Header.js'

class Stream extends Component {
  state = {
    tweet: null
  }

  // Lifecycle method mount
  componentDidMount () {
    console.log("LOVE ME ========>")
    SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
  }


  // Lifecycle method unmount
  componentWillUnmount () {
    SnapkiteStreamClient.destroyStream();
  }

  // Handle tweet method called during componentDidMount
  handleNewTweet = (tweet) => {
    this.setState({
      tweet: tweet
    })
  }

  render() {
    const headerText = 'Waiting for public photos from Twitter ... '

    if (tweet) {
      return (
        <StreamTweet tweet={tweet} onAddTweetToCollection={onAddTweetToCollection} />
      );
    }

    return (
      <Header text={headerText} />
    );
  }




}