import { Container } from 'react-bootstrap';
import './App.css';
import AddtoDo from './Components/AddtoDo';
import DisplayTodo from './Components/DisplayTodo';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
   <Container className=' py-3'>
  <AddtoDo/>
  <DisplayTodo/>
   </Container>
   </Provider>
  )
}

export default App;
