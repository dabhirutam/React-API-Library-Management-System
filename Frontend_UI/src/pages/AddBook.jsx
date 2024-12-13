import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddBookAsync } from "../services/actions/SubmitAction";
import { useNavigate } from "react-router";

const AddBook = () => {

    const { isCreated } = useSelector((state) => state.SubmitReducer);

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        publicationYear: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddBookAsync(formData));
    };

    useEffect(() => {
        if (isCreated) {
            navigate('/');
        }
    }, [isCreated]);

    return (
        <Container>
            <Row className="justify-content-center pt-5">
                <Col md={10} xs={12} className="border border-secondary rounded-3 p-4 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex flex-wrap align-items-center mb-4 row-gap-2 text-center text-lg-start">
                        <h2 className="col-lg-6 col-12">Book Registration Form</h2>
                        <Col lg={6} xs={12} className="text-lg-end">
                            <Button onClick={() => navigate('/')} variant="info" className="text-white fw-bold fs-5 me-3"><i className="bi bi-house-fill"></i></Button>
                        </Col>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 row-gap-3">
                            <Col md={6} xs={12}>
                                <Form.Group controlId="bookTitle">
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        placeholder="Enter book Title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="bookauthor">
                                    <Form.Control
                                        type="text"
                                        name="author"
                                        placeholder="Enter Author"
                                        value={formData.author}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} xs={12}>
                                <Form.Group controlId="bookgenre">
                                    <Form.Control
                                        type="text"
                                        name="genre"
                                        placeholder="Enter genre"
                                        value={formData.genre}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="bookpublicationYear">
                                    <Form.Control
                                        type="number"
                                        name="publicationYear"
                                        placeholder="Enter Publication Year"
                                        value={formData.publicationYear}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit" className="w-100">
                            Register Book
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddBook;