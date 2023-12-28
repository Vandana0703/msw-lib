import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then(setData);
	}, []);
  return (
    <div>
			{data.map((obj) => (
				<span>{obj.title}</span>
			))}
		</div>
  );
}

export default App;
