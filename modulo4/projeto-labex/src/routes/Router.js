import react from "react"
import HomePage from "../pages/HomePage"
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";

export const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='trips/list' element={<ListTripsPage />} />
        <Route path='trips/application' element={<ApplicationFormPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='admin/trips/list' element={<AdminHomePage />} />
        <Route path='admin/trips/:id' element={<TripDetailsPage />} />
        <Route path='admin/trips/create' element={<CreateTripPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>)