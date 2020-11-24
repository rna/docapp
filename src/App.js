import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientPageContainer from './containers/PatientPageContainer';
import AppointmentPageContainer from './containers/AppointmentPageContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><PatientPageContainer /></Route>
        <Route exact path="/:doctorId/book-appointment"><AppointmentPageContainer /></Route>
      </Switch>
    </div>
  );
}

export default App;
