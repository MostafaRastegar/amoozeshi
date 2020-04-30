import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import ProfileSidebar from './profileSidebar';
import './style.scss';

const ProfileLayout = props => {
  const { children, history } = props;
  return (
    <div className="page-homeless page-profile page-small topP30">
      <section className="partition wFull">
        <Container>
          <Row className="page-profile card_white">
            <Col xs={4}>
              <div className="page-profile__sidebar">
                <ProfileSidebar history={history} />
              </div>
            </Col>
            <Col xs={8}>
              <div className="page-profile__main">{children}</div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

ProfileLayout.propTypes = {
  history: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileLayout;
