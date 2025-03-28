import React from "react";
import { Card, Col, Row, Spin } from "antd";
import "./UserList.css";

const UserList = ({ users = [] }) => {
  if (users.length === 0) {
    return <Spin size="large" className="loading-spinner" />;
  }

  return (
    <Row gutter={[16, 16]} className="user-list">
      {users.map(({ id, name, email, phone }) => (
        <Col span={8} key={id}>
          <Card className="user-card" hoverable title={name}>
            <p>{email}</p>
            <p>{phone}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
