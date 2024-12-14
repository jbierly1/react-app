import ListGroup from './components/ListGroup';
import Button from './components/button';
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
  return <div><Button onClick={()=> console.log('clicked')} children=""></Button>
  <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}></ListGroup>
  </div>
}
export default App