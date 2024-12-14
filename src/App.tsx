import ListGroup from './components/ListGroup';
import Button from './components/button';
import Alert from './components/Alert'
import { useState } from 'react';
function App(){
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
]
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible,setAlertVisibility]=useState(false)

  return <div>
    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
    <Button onClick={()=> setAlertVisibility(true)} children="" color="primary"></Button>
  <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}></ListGroup>
  </div>
} 
export default App