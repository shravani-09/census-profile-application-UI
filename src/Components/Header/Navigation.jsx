import React, { Component } from 'react';
// import './Style/Style.css';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {

        const show = (this.state.menu) ? "show" : "";
        return (
            // div class=<"dropdown-menu dropdown-menu-right text-right">
            //<div className="xyz">
                           <div className="container p-4">
               
                <nav className="navbar navbar-expand-lg navbar-dark ">
                
                    {/* <div class="brand"><a class="navbar-brand  " href=""><span aria-hidden="true"><i class="fas fa-paw fa-5x"></i></span> tindog </a></div> --> */}
                    <div >
                    
                        <a className="navbar-brand main-logo" href="#home">
                             Census Profile Application
                        </a>
                        
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleMenu}
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse" + show} id="navbarTogglerDemo01">
                    <div className="xyz">
                        <ul className="navbar-nav ml-auto">
                        
                            <li className="nav-item">
                            
                                <a className="nav-link " href="#title"><i class="fas fa-home"></i>Home</a>
                                
                            </li>
                            <div className="vert-bar">
                            </div>
                            <li className="nav-item">
                                <a className="nav-link " href="#features">About</a>
                            </li>
                            <div className="vert-bar">
                            </div>
                            <li className="nav-item">
                                <a className="nav-link " href="#testimonials"><i class="fas fa-images"></i>Gallery</a>
                            </li>
                            <div className="vert-bar ">
                            </div>
                            
                            <li className="nav-item">
                                <a className="nav-link " href="#footer"><i class="fas fa-address-book"></i>Contact Us</a>
                            </li>
                           
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
          //  </div>
 

        )
    }
}
