import { Row, Col, Card } from "antd";
import "./Projects.css";
export const Projects = () => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <div id="projects">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: "2px solid rgb(168, 164, 164)",
              margin: "5%",
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={6} xl={6} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="chatting-app-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="TykooMe - Real Time Chatting App"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://github.com/sawanabhi157/TykooMe-Chat"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              A real-time chatting application built in the MERN Stack along
              with SocketIO for real-time functionality. Similar to WhatsApp,
              the app allows users to send messages to each other and also
              create rooms, and add other users to the room. 
            </p>
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              ReactJS, NodeJS, ExpressJS, MongoDB, SocketIO
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-musicbot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Restio - URL Sortner Golang API"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/sawanabhi157/URL-Shortener-Redis-GO"
              >
                GitHub
              </a>
            }
          >
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Created API using go fiber, redis as a database for better perfomence and containers whole application in docker. •Implement rate limiting 10 queries per 30 minutes by checking IP address of user on each request
            </p>
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
             Go, Redis, Docker
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        {/* <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} /> */}
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
