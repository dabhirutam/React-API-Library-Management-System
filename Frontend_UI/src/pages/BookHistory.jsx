import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteBookConform, ViewBookAsync } from "../services/actions/SubmitAction";

const BookHistory = () => {

    const { books, isLoading } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ViewBookAsync());
    }, [])


    return (
        <Container>
            <Row className="text-center pt-5">
                <Col md={12} className="p-4 rounded-4 border border-secondary bg-dark bg-opacity-10 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex flex-wrap align-items-center mb-4 row-gap-2 text-center text-md-start">
                        <h2 className="col-md-6 col-12">View Book History</h2>
                        <Col md={6} xs={12} className="text-md-end">
                            <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                        </Col>
                    </div>
                    <div className="overflow-x-auto">
                        {
                            isLoading ?
                                <div className="text-center">
                                    <div className="spinner-border text-info" role="status"></div>
                                </div>
                                :
                                <Table bordered hover style={{ minWidth: '800px' }}>
                                    <thead className="table-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Book ID</th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Genre</th>
                                            <th>Publication Year</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books.map((book, index) => {
                                                return (
                                                    <tr key={book.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{book.id}</td>
                                                        <td>{book.title}</td>
                                                        <td>{book.author}</td>
                                                        <td>{book.genre}</td>
                                                        <td>{book.publicationYear}</td>
                                                        <td>
                                                            <Button className="btn btn-primary" onClick={() => navigate(`/edit/${book.id}`)}>
                                                                <i className="bi bi-pencil-square"></i>
                                                            </Button>
                                                            &nbsp; || &nbsp;
                                                            <Button className="btn btn-danger" onClick={() => dispatch(DeleteBookConform(book.id))}>
                                                                <i className="bi bi-trash-fill"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BookHistory;