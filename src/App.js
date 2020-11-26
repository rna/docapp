import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPageContainer from './containers/LoginPageContainer';
import AppointmentPageContainer from './containers/AppointmentPageContainer';
import PatientPageContainer from './containers/PatientPageContainer';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/"><LoginPageContainer /></Route>
      <Route exact path="/dashboard"><PatientPageContainer /></Route>
      <Route exact path="/:doctorId/book-appointment"><AppointmentPageContainer /></Route>
    </Switch>
  </div>
);

export default App;
