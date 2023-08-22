import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";
import Alert from "./Components/Alert";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListItems from "./Components/ListItems";
import CreateItem from "./Components/CreateItem";
import "./App.css"
import Heading from "./Components/Heading";
import UpdateItem from "./Components/UpdateItem";
import ViewItem from "./Components/ViewItem";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ListOrders from "./Components/Order/ListOrders";
import CreateOrder from "./Components/Order/CreateOrder";
import ViewOrder from "./Components/Order/ViewOrder";
import UpdateOrder from "./Components/Order/UpdateOrder";

function App() {
  return (
      <>
      <Heading/>
      <div className="margin">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="listitems" element={<ListItems/>}/>
              <Route path="additem" element={<CreateItem />} />
              <Route path="updateitem/:id" element={<UpdateItem />} />
              <Route path="viewitem/:id" element={<ViewItem />} />
              <Route path="listorders" element={<ListOrders/>}/>
              <Route path="createorder" element={<CreateOrder/>}/>
              <Route path="vieworder/:id" element={<ViewOrder/>}/>
              <Route path="updateorder/:id" element={<UpdateOrder/>}/>
                  {/*<Route path="*" element={<NoPage />} />*/}
          </Routes>
      </BrowserRouter>
      </div>
          <Footer/>
      </>
  );
}

export default App;
