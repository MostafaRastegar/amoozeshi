import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SnappAuthLayout from '../../../snappAuthLayout';
import './style.scss';

const OtpRegister = () => (
  <Container>
    <Row>
      <Col>
        <SnappAuthLayout className="auth__layout_student">
          <div className="mt-4 text-center">
            <span className="ruleAndCondition midText">
              جهت ثبت نام بعنوان دانشجو از این قسمت اقدام کنید
            </span>
          </div>
          <div className="topM20 wFull hP20 center bottomM20">
            <Link className="btn btn-success" to="/register-student">
              ثبت‌نام دانشجو
            </Link>
          </div>
        </SnappAuthLayout>
      </Col>
      <Col>
        <SnappAuthLayout className="auth__layout_teacher" icon="icon-teacher">
          <div className="mt-4 text-center">
            <span className="ruleAndCondition midText">
              جهت ثبت نام بعنوان مدرس از این قسمت اقدام کنید
            </span>
          </div>
          <div className="topM20 wFull hP20 center bottomM20">
            <Link className="btn btn-primary" to="/register-teacher">
              ثبت‌نام مدرس
            </Link>
          </div>
        </SnappAuthLayout>
      </Col>
    </Row>
  </Container>
);

export default OtpRegister;
