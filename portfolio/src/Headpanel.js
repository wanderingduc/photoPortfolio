import './Headpanel.css';
import { usestate} from 'react';

function Headpanel() {
  let newcolor;
  const colorf = function(color, newcolor) {
    if (color=='blue'){
      newcolor = 'red';
      return newcolor; 
    }
    if (color=='red'){
      newcolor = 'red';
      return newcolor; 
    }
    newcolor = 'blue';
    return newcolor; 
  }
  let back = 'red';
  return (
    <div className='title'>
    <h1>David</h1>
    </div>
  );
}

export default Headpanel;
