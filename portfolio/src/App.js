import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Headpanel from './Headpanel';
import Images from './Images';

function App() {
  const colors = ['red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red', 'green', 'blue'];
  const photos = [{'orient': 'l', 'path': '20241016_0001.png'}, {'orient': 'l', 'path': '20241016_0030.png'}, {'orient': 'p', 'path': '20241016_0018.png'}, {'orient': 'l', 'path': '20241016_0020.png'}, {'orient': 'l', 'path': '20241016_0022.png'}, {'orient': 'l', 'path': '20241016_0024.png'}, {'orient': 'p', 'path': '20241016_0019.png'}, {'orient': 'l', 'path': '20241016_0031.png'}];
  return (
    <>
    <Nav />
    <Images photomap={photos}/>
    </>
  );
}

export default App;
