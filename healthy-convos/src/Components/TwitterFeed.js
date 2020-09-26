import React, {Component} from 'react';
import { Typography, Card} from 'antd';
const {Text, Title} = Typography;

class TwitterFeed extends Component {
  render() {
    return (
      <div>
        <Title level={4}> #PositiveConversation Tweets</Title>
          <a class="twitter-timeline" data-width="600" data-height="1000" data-theme="dark" href="https://twitter.com/bot_convo?ref_src=twsrc%5Etfw">Tweets by bot_convo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    );
  }

}

export default TwitterFeed;
