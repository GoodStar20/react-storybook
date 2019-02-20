import React, { Component } from 'react';
import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {

  // define other component lifecycle methods here
  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 1. Running componentWillMount()');
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }


  render() {
    console.log('[Snapterest] StreamTweet: Running render()');
    const { headerText } = this.state;
    const { tweet, onAddTweetToCollection } = this.props;


    return (
      <section>
        <Header text={headerText} /> */}
        <Tweet
          tweet={tweet}
          onImageClick={onAddTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet;