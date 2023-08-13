import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import './addTopFold.css';
import { useDispatch } from "react-redux";
import { addXpense } from "../../redux/actions/expenses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function AddTopFold() {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState("");
  const notify = () => toast.error("Enter valid Data!");
  const notifyBack = () => toast.success("Expense added Successfully!");

  const handleSubmit = () => {
    if (title === "" || amount === null || category === "") {
      console.log("Incorrect Data!");
      notify();
      return;
    }
    console.log("Submit Clicked!");
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addXpense(data));
    notifyBack();
  };

  const handleTitleQuery = (e) => {
    setTitle(e.target.value);
  };
  
  useEffect(() => {
    console.log(title);
  }, [title]);

  const handleCategoryQuery = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    console.log(category);
  }, [category]);

  const handleAmountQuery = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount(0);
      return;
    }
    setAmount(val);
  };

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <div className="addItemTopFOld">
      <div class="login-box">
        <form method="post">
          <div className="addForm">
            <div class="user-box">
              <label>Title</label>
              <input
                type="text"
                name="addFormInput"
                required=""
                placeholder="Enter Title"
              onChange={(e) => handleTitleQuery(e)}
              ></input>
            </div>
            <div class="user-box">
              <label>Amount</label>
              <input
                type="text"
                name="addFormInput"
                required=""
                placeholder="Enter Amount"
              onChange={(e) => handleAmountQuery(e)}
              ></input>
            </div>
            <div class="user-box">
              <label>Category:</label>
              <select
                name="cars"
                id="cars"
              value={category}
              onChange={(e) => handleCategoryQuery(e)}
              >
                <option value="">Choose</option>
                <option value="Education">Education</option>
                <option value="HealthCare">HealthCare</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="addForm-buttons">
              <div className="addForm-buttons_Send" onClick={handleSubmit}>
              {/* <div className="addForm-buttons_Send" > */}
                <NavLink to="/">
                  <button id="addForm-buttons_SendButton">Add</button>
                </NavLink>
              </div>
              <div className="addForm-buttons_Home">
                <NavLink to="/">
                  <button id="addForm-buttons_HomeButton">Back</button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
