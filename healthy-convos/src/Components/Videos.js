import React, {Component} from 'react';
import { Typography, Card} from 'antd';
const {Text, Title} = Typography;

class Videos extends Component {
  render() {
    return (
      <div>
        <Title level={4}> Check out this video for tips on how to hold a healthy conversation!</Title>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/R1vskiVDwl4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }

}

export default Videos;
