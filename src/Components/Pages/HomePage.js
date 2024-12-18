import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../reducers/authReducer'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); 
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Домашняя страница</Card.Title>
              <Card.Text className="text-center">
                <p>Текст домашней страницы.</p>
                <p>Текст домашней страницы.</p>
                <p>Текст домашней страницы.</p>
                <p>Текст домашней страницы.</p>
                <p>Текст домашней страницы.</p>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                  Выйти
                </Button>
              </div>

              <div className="text-center mt-3">
                <span>Если в системе не существует аккаунт, необходима Регистрация.</span>
                <Link to="/register">Зарегистрироваться</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
