import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';


const appRouter= createBrowserRouter([
  {
  path :'/',
  element : <Body/>,
  children :[
    {
      path :'/',
      element : <Maincontainer/>
    },
    {
      path :'watch',
      element : <WatchPage/>
    }
  ]
},
]);
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
