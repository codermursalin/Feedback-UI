import React, { useState } from "react";
import FeadBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

import {FeedbackProvider} from './context/FeedbackContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeadBackList/>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
