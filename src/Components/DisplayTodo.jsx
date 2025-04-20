import React  from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { deleteTodo } from '../Redux/Action/ActionTodo';


const DisplayTodo = ({todos, deleteTodo}) => {

   


  return (
   <Container>
    <Row>
        <Col>
        <Card className='mt-3 shadow-sm'>
            <Card.Body>
                <h3> All Todos Are Here  </h3>
                <DisplayCount/>
                <ListGroup>
                {
                    todos.map((todo, index)=>(
                        <ListGroup.Item key={index}>
                            <h4>{todo.title}</h4>
                            <p>{todo.discription}</p>
                            <Button variant='danger' size='sm' onClick={event=> deleteTodo(todo.id)}>Delete Todo</Button>
                        </ListGroup.Item>
                ))
                }
                </ListGroup>
            </Card.Body>
        </Card>
        </Col>
    </Row>
   </Container>
  )
}
const mapStateToProps=(state)=>{
    return{todos:state.Reducers}
}

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodo)
