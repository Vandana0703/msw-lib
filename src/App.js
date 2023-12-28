import styled from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const StyledSpan = styled.span`
color:'red'
`
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <div>
      {data.map((obj) => (
        <StyledSpan>{obj.title}</StyledSpan>
      ))}
      <Button variant="primary">Click</Button>
    </div>
  );
}

export default App;
