
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import {Provider} from 'react-redux'
import newStore from './components/myToolkit/Store'



function App() {
  return (
    <>
      <Provider store={newStore}>
          <Navbar/>
          <Body/>
      </Provider>
    </>
  );
}


export default App;
