import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import "../../App.scss";

class Main extends Component {
    render() {
        return (
            <>
                <nav className={"col-12 d-flex justify-content-between p-1 outline-bottom"}>
                    <img src={""} alt={"Logo"} className={"col-4"}/>
                    <Link to={"./login"}><button type="button" className={"btn btn-primary"}>Login</button></Link>
                </nav>
                <div className={"main-header col-12"}>
                    <img src={""} alt={"Header Img"} />
                </div>
                <div className={"Description col-12"}>
                    App Description
                </div>
                <footer>
                    Copyrights 2023
                </footer>
            </>
        );
    }
}

export default Main;
