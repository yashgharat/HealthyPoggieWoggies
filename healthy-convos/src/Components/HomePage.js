import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Videos from './Videos';
import Articles from './articles';
import TwitterFeed from './TwitterFeed';
import { Typography, Card} from 'antd';
const {Text, Title} = Typography;

class HomePage extends Component {
  render() {
    return (
      <div>
          <Title level={1} style={{margin: "auto", marginBottom:"60px"}}><Text type="secondary">Starting <Text strong>#HealthyConversations</Text>, One Tweet at a Time.</Text></Title>
        <Row>
          <Col sm={36} md={24} lg={12}>
            <Row>
              <Title level={2} style={{margin: "auto", marginBottom:"10px"}}> Articles and Videos</Title>
              <Col md={24} lg={16} style={{backgroundColor: "#ff9c6e", borderRadius:"20px", margin: "auto", padding:"20px", marginBottom:"20px"}}>
                <Articles/>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={16} style={{backgroundColor: "#ff9c6e", borderRadius:"20px", margin: "auto", padding:"20px", marginBottom:"40px"}}>
                <Videos/>
              </Col>
            </Row>
          </Col>
          <Col md={24} lg={12} style={{margin: "auto"}}>
            <Row>
              <Title level={2} style={{margin: "auto", marginBottom:"20px"}}> How are you starting a <a href="https://twitter.com/search?q=%23HealthyConversation&src=typed_query" target="_blank">#HealthyConversation?</a></Title>
              <Col id="TwitterFeed" md={24} lg={12} style={{backgroundColor: "#ff9c6e", borderRadius:"20px", margin: "auto", padding:"20px"}}>
                <TwitterFeed/>
              </Col>
            </Row>
          </Col>
          </Row>
          <Row>
            <Title level={2} style={{margin: "auto", marginTop:"50px"}}> <Text keyboard>About our Bot</Text></Title>
          </Row>
          <Row>
            <Title level={5} style={{margin: "left", marginTop:"20px"}}> <Text keyboard>Our goal was to use the Twitter API to promote tweets that are examples of healthy conversations.</Text></Title>
          </Row>
          <Row>
            <Title level={5} style={{margin: "left"}}> <Text keyboard>We decided to use Microsoft's Sentiment Analysis API on tweets on the top 3 trending topics to determine if a tweet was an example of a healthy conversation</Text></Title>
          </Row>
          <Row>
            <Title level={5} style={{margin: "left"}}> <Text keyboard>Based on the score provided by the API, our Twitter Bot would tweet about that post with its score, the link to the tweet, and the #HealthyConversation</Text></Title>
          </Row>
      </div>
    );
  }

}

export default HomePage;
