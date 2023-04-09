import './App.css';
import FlowerLists from './components/FlowerLists';
import ControlledCarousel from './components/ControlledCarousel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="container p-4">
      <div className='row'>
        <FlowerLists />
      </div>
      <ToastContainer />
      <ControlledCarousel />

      <div className="container p-4">
      <div className='row'>
                <h4>Con todo el dolor mami, decimos, te vamos a extrañar y recordar siempre.</h4>
                </div>
            </div>
    </div>


  )
}

export default App;
