import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import {addTodo} from "../Redux/Action/ActionTodo"
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const AddtoDo = ({addTodo}) => {

    const [todo, setTodo]=useState({
        title: '',
        discription: '',
        id:''
    })

    const HandleSubmit=(event)=>{
        event.preventDefault()
        addTodo({...todo, id:v4()})
        console.log(todo)
        setTodo({
            title:'',
            discription: ''
        })
    } 


  return (
    <Container>
        <Row>
            <Col md={12}>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>Add todos Here</h3>
                        <DisplayCount/>
                        <Form onSubmit={HandleSubmit}> 
                            <Form.Group>
                                <Form.Label> ToDo Tittle Here</Form.Label>
                                <Form.Control type='text' placeholder='You Can Write Here' value={todo.title} onChange={event=>setTodo({...todo, title:event.target.value})}/>
                            </Form.Group>

                            <Form.Group className='mt-3'>
                                <Form.Label> Discriptions</Form.Label>
                                <Form.Control as={'textarea'} type='text' placeholder='You Can Write Here'value={todo.discription} onChange={event=>setTodo({...todo, discription:event.target.value})}/>
                            </Form.Group>

                            <Container className='text-center'>
                                <Button type='submit' variant='secondary' className='mt-2'>Click Me</Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})
export default connect(mapStateToProps, mapDispatchToProps) (AddtoDo);
