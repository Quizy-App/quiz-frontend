import { Card, Col, Row } from "react-bootstrap";

const Screen1 = () => {
  return (
    <main className="">
      <div className="container-sm">
        <Row>
          <Col className="">
            <h2> Welcome Student</h2>
          </Col>
          <Col>
            <Row className="justify-end">
              <div>
                <span>Branch</span> <span>CSE</span>
              </div>
            </Row>
            <Row>
              <div>
                <span>Year</span> <span>2nd</span>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="g-3" md={3} xs={1}>
          {[1, 2, 3, 4].map((v, i) => (
            <Col key={i}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Screen1;
