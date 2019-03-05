import TweetUtils from './TweetUtils'

// describe test suite
describe('TweetUtils', () => {
  test('getListOfTweetIds returns an array of tweet ids', () => {
    const tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    }

    // create mock array of expected result
    const expectedListOfTweetIds = [
      'tweet1',
      'tweet2',
      'tweet3'
    ]

    const actualListOfTweetIds = TweetUtils.getListOfTweetIds(
      tweetsMock
    )
    expect(actualListOfTweetIds)
      .toEqual(expectedListOfTweetIds)
  })
})