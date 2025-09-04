import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostList from "./PostList";
import NewsWidget from "./NewsWidget";
import SidebarProfile from "./SidebarProfile";
import CreatePost from "./CreatePost";
import Suggested from "./Suggested";

const Home = () => {
  const profile = useSelector((state) => state.mainProfile.me_Profile);

  return (
    <Container className="mt-4">
      <Row>
        {/* Sidebar sinistra */}
        <Col xs={12} md={4} lg={3}>
          <SidebarProfile />
        </Col>

        {/* Colonna centrale */}
        <Col xs={12} md={8} lg={6}>
          <CreatePost profile={profile} />
          <Suggested />
          <PostList />
        </Col>

        {/* Sidebar destra */}
        <Col xs={12} lg={3} className="d-block d-md-none d-lg-block">
          <NewsWidget />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
