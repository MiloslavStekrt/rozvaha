import './App.css';
import Add from './components/Add';
import {useState, useEffect} from 'react';
import RozvahaTable from './components/RozvahaTable'

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const parsedItem = JSON.parse(localStorage.getItem("item") || [])
    setItem(parsedItem)
  }, [])
  useEffect(()=>{
    localStorage.setItem("item", JSON.stringify(item));
  },[item])
  const clearDB = (e) => {
    e.preventDefault();
    setItem([]);
  }
  return (
    <div className="App container pt-5">
      <h1 className="text-white-50">Slavkova rozvaha <a href="https://github.com/MiloslavStekrt/rozvaha" target="_blank" rel="noreferrer" className="btn btn-primary">Code</a> <button onClick={clearDB} className="btn btn-danger">clear</button></h1>
      <RozvahaTable setItem={setItem} item={item} />
      <Add item={item} setItem={setItem} />
    </div>
  );
}

export default App;
