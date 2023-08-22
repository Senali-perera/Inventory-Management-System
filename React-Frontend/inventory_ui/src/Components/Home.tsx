import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigator = useNavigate();
    const listItems = () => {
        navigator("/listitems");
    }

    const listOrders = () => {
        navigator("/listorders");
    }
    return (
        <div className="content">
            <div className="container text-center ">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <button className="btn" type="button" onClick={listItems}>Products</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <button className="btn" type="button" onClick={listOrders}>Orders</button>
                        </div>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                    {/*<div className="col">*/}
                    {/*    <div className="p-3">Row column</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Home;
