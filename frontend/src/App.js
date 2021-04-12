import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ActivityListScreen from './screens/ActivityListScreen';
import AddActivityScreen from './screens/AddActivityScreen';
import EditActivityScreen from './screens/EditActivityScreen';
import GalleryScreen from './screens/GalleryScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path='/' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/activities' component={ActivityListScreen} />
        <Route path='/add' component={AddActivityScreen} />
        <Route path='/edit/:id' component={EditActivityScreen} />
        <Route path='/gallery/' component={GalleryScreen} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
