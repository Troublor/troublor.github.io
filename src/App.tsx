import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import NotFound from './4xx/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
