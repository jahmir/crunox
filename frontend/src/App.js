import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import ActivityListScreen from './screens/ActivityListScreen';
import AddActivityScreen from './screens/AddActivityScreen';
import EditActivityScreen from './screens/EditActivityScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path='/activities' component={ActivityListScreen} />
        <Route path='/add' component={AddActivityScreen} />
        <Route path='/edit/:id' component={EditActivityScreen} />
      </div>
    </Router>
  );
}

export default App;
