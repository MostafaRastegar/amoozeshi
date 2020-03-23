import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import ProfileSidebar from './profileSidebar';
import './style.scss';

const ProfileLayout = props => {
  const { children, history } = props;
  return (
    <main className="page-homeless page-profile page-small">
      <section className="partition wFull">
        <Container fluid>
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
    </main>
  );
};

ProfileLayout.propTypes = {
  history: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileLayout;
