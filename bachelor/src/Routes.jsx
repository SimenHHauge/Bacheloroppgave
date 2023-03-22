
import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";

import LandingSide from "./LandingSide";
import SimulertBoligkjop from "./SimulertBoligkjop/SimulertBoligkjop";
import history from './history';

export default class Lenker extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route path="/" exact component={LandingSide} />
                    <Route path="/SimulertBoligkjop" component={SimulertBoligkjop} />
                </Routes>
            </Router>
        )
    }
}