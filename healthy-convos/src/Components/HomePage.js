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
        <Row>
          <Col sm={36} md={24} lg={12}>
            <Row>
              <Title level={4} style={{margin: "auto", marginBottom:"10px"}}> Resources on starting a Healthy Conversation</Title>
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
          
          </Row>
      </div>
    );
  }

}

export default HomePage;
