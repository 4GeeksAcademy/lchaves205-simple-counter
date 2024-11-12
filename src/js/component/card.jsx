import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SecondsCounter from "./counter";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  return (
    <div className="center-container">
      <Card className="cards">
        <Card.Header className="header">Simple Counter</Card.Header>
        <Card.Body>
          <Card.Title className="title"></Card.Title>
          <Card.Text className="text">
            <SecondsCounter count={count} setCount={setCount} isRunning={isRunning} />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="footer">
          <Button variant="warning" onClick={() => setCount(0)}>Reset</Button>
          <Button variant="primary" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Stop" : "Resume"}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
