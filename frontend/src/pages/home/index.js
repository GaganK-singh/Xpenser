import React from "react";
import "./home.css";
import { Route, Routes } from "react-router-dom";
import Topfold from "../../components/topfold";
import AddTopFold from "../../components/addTopFold";
import ExpenseList from "../../components/expenseList";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <div className="home">
    <Routes>
      <Route path="/" element={<Topfold />} />
      <Route path="/add" element={<AddTopFold />} />
    </Routes>
    <div className="List">
      <Routes>
        <Route path="/" element={<ExpenseList />} />
      </Routes>
    </div>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

    {/* Gaggu */}
  </div>
  )
}
