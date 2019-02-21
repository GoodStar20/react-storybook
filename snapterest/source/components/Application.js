import React, { Component } from 'react';
import Stream from './Stream';
import Collection from './Collection';


class Application extends Component {
    state = {
      collectionTweets: {}
    }

    componentWillMount() {
      console.log('[Snapterest] StreamTweet: 1. Will Mount()');
      // console.log("====>", componentDOMRepresentation.children)
    }
    componentDidMount = () => {
      console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');
      const componentDOMRepresentation = ReactDOM.findDOMNode(this);
      window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
      window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
      }

      
  

    addTweetToCollection = (tweet) => {
      const { collectionTweets } = this.state;
      collectionTweets[tweet.id] = tweet;
      this.setState({
        collectionTweets: collectionTweets
      });
    }

    removeTweetFromCollection = (tweet) => {
      const { collectionTweets } = this.state;
      delete collectionTweets[tweet.id];
      this.setState({
        collectionTweets: collectionTweets
      });
    }

    removeAllTweetsFromCollection = () => {
      this.setState({
        collectionTweets: {}
      });
    }
    
    render() {

      const {
        addTweetToCollection,
        removeTweetFromCollection,
        removeAllTweetsFromCollection
      } = this;

      return (
        <div className="container-fluid">
          <div className="row">
          <h1>Hello</h1>
            <div className="col-md-4 text-center">
              <Stream onAddTweetToCollection=
                {addTweetToCollection} />
            </div>
            <div className="col-md-8">
              <Collection
                tweets={this.state.collectionTweets}
                onRemoveTweetFromCollection={removeTweetFromCollection}
                onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  export default Application;