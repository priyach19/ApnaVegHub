import React from "react";
// react-bootstrap Card & Button Component
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button";
import "./Style.css";
// material ui icons
import DeleteIcon from "@mui/icons-material/Delete";
import Ratings from "./Ratings";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// get cart item from store
import { useSelector } from "react-redux";
//import delteCardData function from productSlice
import { deleteCardData } from "../store/productSlice";
//addCart Fn import from cartSlice
import { addCart } from "../store/cartSlice";
// Import ProductView Function from productSlice
import { productView } from "../store/productSlice";

import SortProduct from "./SortProduct";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // access store
  const cardsData = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const data = cardsData;

  // Function for Add to Cart
  const addCartHandle = (element) => {
    // Add this element in redux store
    dispatch(addCart(element));
  };

  //function for cardDetailView
  const cardDetailView = (element) => {
    dispatch(productView(element));
    navigate(`/productdetail`);
  };
  // handle delete Item
//   const deleteItemHandler = (element) => {
//     dispatch(deleteCardData(element.id));
//     // console.log(element)
//   };

  return !loading ? (
    <div className="container mt-2">
      <div>
        <SortProduct />
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {
          // if data is present simply map over it //
          data.length > 0 &&
            data.map((element, id) => {
              return (
                <Card
                  key={element.id}
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                    onClick={() => cardDetailView(element)}
                  />
                  <Card.Body>
                    <Card.Title>
                      {element.rname}{" "}
                      <small style={{ fontSize: 15, color: "blue" }}>
                        {element.name}
                      </small>
                    </Card.Title>
                    <Card.Text>
                      <div className="price-rating d-flex justify-content-between">
                        Price : ₹ {element.price}
                        <Ratings value={element.rating} />
                      </div>
                      <div>
                        <small>{element.somedata}</small>
                      </div>
                    </Card.Text>
                    <div className="row">
                      <div className="col-8">
                        <Button
                          variant="success"
                          onClick={() => addCartHandle(element)}
                          className="col-lg-12 btn"
                        >
                          Add to Cart
                        </Button>
                      </div>
                      <div className="col-3 d-flex justify-content-between align-items-center">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Plate Size
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Half
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Medium
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Full
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
        }
      </div>
    </div>
  ) : null;
};

export default Cards;
