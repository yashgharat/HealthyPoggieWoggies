import React, {Component} from 'react';
import { List } from 'antd';

const data = [
  {
    title: "Having a healthy conversation",
    url: "https://www.google.com",
    description: "something on healthy convos"
  },
  {
    title: "Having a normal conversation",
    url: "https://www.fb.com",
    description: "sdhjfgsdhgjkldhgjkvf"
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
