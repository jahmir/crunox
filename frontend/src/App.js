import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import ActivityListScreen from './screens/ActivityListScreen';
import AddActivityScreen from './screens/AddActivityScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path='/activities' component={ActivityListScreen} />
        <Route path='/add' component={AddActivityScreen} />
      </div>
    </Router>
  );
}

export default App;
