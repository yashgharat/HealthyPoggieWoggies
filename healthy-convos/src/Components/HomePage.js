import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Videos from './Videos';
import Articles from './articles';
<<<<<<< HEAD
import TwitterFeed from './TwitterFeed';
=======

>>>>>>> f7a7593925389901db73f79bd7f593854f6c45a3

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={24} lg={12}>
            <Articles/>
            <Videos/>
          </Col>
          <Col id="TwitterFeed" md={24} lg={12}>
<<<<<<< HEAD
            <TwitterFeed/>
=======
>>>>>>> f7a7593925389901db73f79bd7f593854f6c45a3
          </Col>
        </Row>
      </div>
    );
  }

}

export default HomePage;
