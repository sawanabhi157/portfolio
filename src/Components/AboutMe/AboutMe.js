import { Row, Col } from "antd";
import "./AboutMe.css";
import MyFace from "../../Content/MyFace.jpg";
export const AboutMe = () => {
  return (
    <div id="aboutme" >
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
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
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-heading"
          >
            <b>About Me</b>
          </h1>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
    I have post graduated from the Indian Institute of Information Technology, Gwalior, with a (B.Tech + M.Tech) in Information Technology.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-second"
          >
            I am a Full Stack Developer, I really enjoy building new things and
            overcoming new challenges. I'm always eager to learn new concepts
            and apply them in my projects Currently I am actively looking for
            new full time SDE opportunities
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-third"
          >
            I am a dedicated team player, and I get along well with any team
            environment. I do well under pressure which I feel makes me a good
            addition to any team. 
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-fourth"
          >
            In my free time, I enjoy traveling and playing footbal, if not these,
            you'll find me reading a book or playing video games with friends.
          </p>
        </Col>
        <Col xxl={1} xl={1} lg={7} xs={2} />
        <Col
          data-aos="fade"
          data-aos-delay="500"
          data-aos-once
          xxl={9}
          xl={9}
          lg={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <section className="main">
            <div className="container">
              <div className="img-container">
                <img className="image" src={MyFace} alt="MyFace" />
              </div>
            </div>
          </section>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
