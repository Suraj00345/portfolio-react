import React from "react";
import {Leftbar} from "./leftbar.js";
import { Header } from "./header";
import { RightBar } from "./rightbar.js";
import "./app.css"

export const App = () => {
    return (
        <div className="root-container">
            <Header/>
            <div className="body">
            <Leftbar/>
            <RightBar/>
            </div>
        </div>
    )
}