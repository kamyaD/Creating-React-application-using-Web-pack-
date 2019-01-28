// import React, { Component } from "react";
// import Home from "./Home";
// import Login from "./Login";
// import Contact from "./Contact";

// import { Route, NavLink, BrowserRouter } from "react-router-dom";

// class FormContainer extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//          <form id="article-form">
//           <h1>Fast foods Routes</h1>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/login">Login</a>
//             </li>
//             <li>
//               <a href="/Contact">Contact</a>
//             </li>
//           </ul>
//       </form>
//       </BrowserRouter>
//     );
//   }
// }

import React, { Component } from "react";
import Input from "../presentational/Input.jsx";

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            // seo_title: "",
            first: "",
            last: "",
            email: "",
            button: "",

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { first, last, email, button } = this.state;
        return (
            <form id="article-form">

                <Input
                    text="First Name"
                    label="Name"
                    type="text"
                    id="first"
                    value={first}
                    handleChange={this.handleChange}
                />

                <Input
                    text="Last Name"
                    label="last"
                    type="text"
                    id="last"
                    value={last}
                    handleChange={this.handleChange}
                />
                <Input
                    text="Email"
                    label="email"
                    type="text"
                    id="email"
                    value={email}
                    handleChange={this.handleChange}
                />
                <button
                    type="button"
                    label="submit"
                    id="button"
                    value={button}

                    class="btn btn-success">Submit</button>

            </form>
        );
    }
}

export default FormContainer;
