import './App.css';
import Form from "./Form"
import List from "./List"
import Table from './Table';
import {useEffect, useState} from "react"

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com"

  const [reqType,setReqType] = useState("users")
  const [items,setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
    try{
    const response = await fetch(`${API_URL}/${reqType}`)
    const data = await response.json()
    setItems(data)
    }
    catch(err){
    console.log(err.message)
    }
  }
  fetchItems();
  },[reqType])
  return (
      <div className="App">
      <Form reqType={reqType} setReqType={setReqType}/>
      <List items={items}/>
      <h2>Table</h2>
      <Table items={items}/> 
      </div>
  );
}

export default App;
