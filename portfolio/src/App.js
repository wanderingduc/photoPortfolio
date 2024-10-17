import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Headpanel from './Headpanel';
import Images from './Images';

function App() {
  const colors = ['red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'];
  return (
    <>
    <Nav />
    <Images colormap={colors}/>
    </>
  );
}

export default App;
