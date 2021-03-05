import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminArea from '../components/AdminArea/AdminArea';
import AdminCandidatures from '../components/AdminCandidatures/AdminCandidatures';
import AdminHome from '../components/AdminHome/AdminHome';
import AdminNewTrip from '../components/AdminNewTrip/AdminNewTrip';
import AdminTripList from '../components/AdminTripList/AdminTripList';
import Home from '../components/Home/Home';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import PublicArea from '../components/PublicArea/PublicArea';
import TripForm from '../components/TripForm/TripForm';
import TripList from '../components/TripList/TripList';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/publico">
          <PublicArea />
        </Route>

        <Route exact path="/lista-de-viagens">
          <TripList />
        </Route>

        <Route exact path="/seja-nosso-viajante">
          <TripForm />
        </Route>

        <Route exact path="/admin">
          <AdminArea />
        </Route>

        <Route exact path="/admin/home">
          <AdminHome />
        </Route>

        <Route exact path="/admin/candidaturas">
          <AdminCandidatures />
        </Route>

        <Route exact path="/admin/criar-nova-viagem">
          <AdminNewTrip />
        </Route>

        <Route exact path="/admin/lista-de-viagens">
          <AdminTripList />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
};