import React, {Component} from 'react';
import { Timeline } from 'react-twitter-widgets'
import { Typography, Card} from 'antd';
const {Text, Title} = Typography;

class TwitterFeed extends Component {
  render() {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'bot_convo'
          }}
          options={{
            height: '400'
          }}
        />
      </div>
    );
  }
}
export default TwitterFeed;


// <Title level={4}> #PositiveConversation Tweets</Title>
//  <a class="twitter-timeline" data-width="600" data-height="1000" data-theme="dark" href="https://twitter.com/bot_convo?ref_src=twsrc%5Etfw">Tweets by bot_convo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
