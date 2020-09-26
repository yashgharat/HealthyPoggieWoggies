import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Videos from './Videos';
import Articles from './articles'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={24} lg={12}>
            <Row id="Articles">
              <Articles/>
            </Row>
            <Row id="Videos">
              <Videos/>
            </Row>
          </Col>
          <Col id="TwitterFeed" md={24} lg={12}>

          </Col>
        </Row>
      </div>
    );
  }

}

export default HomePage;
