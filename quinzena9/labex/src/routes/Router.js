import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminAuth from '../components/AdminAuth/AdminAuth';
import AdminCandidatures from '../components/AdminCandidatures/AdminCandidatures';
import AdminHome from '../components/AdminHome/AdminHome';
import AdminNewTrip from '../components/AdminNewTrip/AdminNewTrip';
import AdminTripList from '../components/AdminTripList/AdminTripList';
import Home from '../components/Home/Home';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import PublicHome from '../components/PublicHome/PublicHome';
import TripForm from '../components/TripForm/TripForm';
import TripList from '../components/TripList/TripList';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/publico/home">
          <PublicHome />
        </Route>

        <Route exact path="/publico/lista-de-viagens">
          <TripList />
        </Route>

        <Route exact path="/publico/seja-nosso-viajante">
          <TripForm />
        </Route>

        <Route exact path="/admin">
          <AdminAuth />
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