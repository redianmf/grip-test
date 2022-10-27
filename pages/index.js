// Import Dependencies
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Spinner,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "I value",
      options: ["Justice", "Mercy"],
      selected: "",
    },
    {
      question: "I appreciate wide variety of music",
      options: [
        "Rarely",
        "Occasionaly",
        "Sometimes",
        "Usually",
        "Almost always",
      ],
      selected: "",
    },
    {
      question: "A quiet weekend at home is",
      options: ["Boring", "Rejuvenating"],
      selected: "",
    },
    {
      question: "I prefer speakers that communicate",
      options: ["Literally", "Figurativelly"],
      selected: "",
    },
    {
      question: "With people, I am more often",
      options: ["Brief and to the point", "Friendly and Warm"],
      selected: "",
    },
  ]);

  const now = (number / questions.length) * 100;

  const handleRadio = (e, idx) => {
    e.preventDefault;

    if (e.target.checked === true) {
      const _question = [...questions];
      _question[idx].selected = e.target.value;

      setQuestions(_question);

      setNumber((current) => current + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault;

    console.log(questions);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={10} md={6}>
          <div className="main-card mt-4">
            <Row>
              <h1 className="text-center text-white pt-3">Mock Test</h1>
            </Row>
            <Row>
              <Col>
                <div className="ps-5 pe-5">
                  <ProgressBar striped now={now} label={`${now}%`} />
                </div>
              </Col>
            </Row>
            <Row>
              {number <= questions.length - 1 ? (
                <div className="text-white">
                  <h3 className="text-center mt-5 mb-5">
                    {questions[number].question}
                  </h3>
                  <Form.Group className="mb-3">
                    {questions[number]?.options?.map((option, idx) => (
                      <Row key={idx}>
                        <Col md={3}></Col>
                        <Col md={6}>
                          <div className="d-flex">
                            <Form.Check
                              type="radio"
                              name={`${number}`}
                              value={option}
                              onChange={(e) => handleRadio(e, number)}
                              checked={questions[number].selected == option}
                              label={option}
                            />
                          </div>
                        </Col>
                        <Col md={3}></Col>
                      </Row>
                    ))}
                  </Form.Group>
                </div>
              ) : (
                <div className="text-center mt-5">
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              )}
            </Row>
          </div>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
}
