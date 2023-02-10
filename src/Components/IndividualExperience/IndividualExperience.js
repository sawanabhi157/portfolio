import { Row, Col } from "antd";

export const IndividualExperience = ({
  marginTop,
  company,
  link,
  role,
  brief,
  report = null,
  youtubeLink = null,
}) => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <>
      <Row style={{ marginTop: marginTop }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={5}
          xl={5}
          lg={18}
          xs={10}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
            className={`${company
              .replace(",", "")
              .split(" ")[0]
              .toLowerCase()}-heading`}
          >
            <b>
              <a
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
                href={link}
                target="_blank"
                rel="noreferrer"
                onMouseOver={handleHover}
              >
                {company}
              </a>
            </b>
          </h1>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={12}
          xl={12}
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
            className="role-heading"
            style={{
              textDecoration: "underline",
              textDecorationColor: "rgb(168, 164, 164)",
            }}
          >
            <b>{role}</b>
          </h1>
          <ul
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ color: "rgb(168, 164, 164)" }}
          >
            {brief.map((listItem, index) => {
              return (
                <li key={`${index}-individualExperience`} className="list">
                  {listItem}
                </li>
              );
            })}
            {report && (
              <li className="list">
                Press{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgb(168, 164, 164)" }}
                  href={report}
                >
                  {" "}
                  <u>
                    {" "}
                    <b>me</b>{" "}
                  </u>{" "}
                </a>{" "}
                to read a detailed report of the project
              </li>
            )}
            {youtubeLink && (
              <li className="list">
                Checkout my work
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgb(168, 164, 164)" }}
                  href={youtubeLink}
                >
                  {" "}
                  <u>
                    {" "}
                    <b>here</b>{" "}
                  </u>{" "}
                </a>{" "}
              </li>
            )}
          </ul>
        </Col>
        <Col xxl={7} xl={7} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </>
  );
};
