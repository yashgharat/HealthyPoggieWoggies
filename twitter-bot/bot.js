const twit = require('twit')
const config = require('./config')
const base_url = "https://api.twitter.com/"
const client = new twit(config)

async function getSample() {
    var stream = client.stream('statuses/filter', { track: 'shellhacks' })
    stream.on('tweet', function (tweet) {
        console.log(tweet)
        sleep()
      })
}
getSample()

async function sleep() {
    await(10000);
}