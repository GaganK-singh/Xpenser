import React from "react";
import "./card.css";
import { deleteXpense } from "../../redux/actions/expenses";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  
  const dispatch = useDispatch();
  const notifyDelete = () => toast.success("Expense Deleted!");
  const handleDelete = () => {
    dispatch(deleteXpense(item));
    notifyDelete();
  };

  return (
    <div className="listItemContainer">
      <div className="listItem">
        {/* <div class="listItem__icon"></div> */}
        <div>
          <div className="listItem__title">{item.title}</div>
          <div className="listItem__content">₹ {item.amount} : ({item.category})</div>
        </div>
        <div className="listItem__close" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
          >
            <path
              fill="#393a37"
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
