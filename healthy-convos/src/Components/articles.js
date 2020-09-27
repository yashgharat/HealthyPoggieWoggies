import React, {Component} from 'react';
import { List } from 'antd';
const data = [
  {
    title: "How to Have Healthier Communications",
    url: "https://www.loveisrespect.org/healthy-relationships/communicate-better/",
    description: "These are some steps you can take on how to better your communications with someone else."
  },
  {
    title: "How to Make Sure Your Conversations have Meaning",
    url: "https://www.forbes.com/sites/johnhall/2013/08/18/13-simple-ways-you-can-have-more-meaningful-conversations/#c66dd8b4fe95",
    description: "These are some tips on how to make sure your conversations have meaning and that they're done in a respectful manner."
  },
  {
    title: "Tips on Holding Healthy Conversations",
    url: "https://www.psychologytoday.com/us/blog/fulfillment-any-age/201712/10-must-know-tips-making-better-conversations",
    description: "Tips on How to Hold Better Conversations in a Healthy Form"
  }
]

class Articles extends Component {
  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={ item => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.url}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }

}

export default Articles;
