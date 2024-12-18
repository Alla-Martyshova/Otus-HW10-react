import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Страница не найдена!</Card.Title>
              <Card.Text className="text-center">
                Возможно, страница еще не существует.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleGoHome}>
                  Домой
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
