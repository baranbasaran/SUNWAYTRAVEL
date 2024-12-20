import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HotelsList from "./pages/HotelsList";
import HotelDetailPage from "./pages/HotelDetailPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/hotels"
          element={
            <ErrorBoundary>
              <HotelsList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/hotels/:id"
          element={
            <ErrorBoundary>
              <HotelDetailPage />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
    </Router>
  );
}

export default App;
