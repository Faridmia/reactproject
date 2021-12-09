import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <a href="/" className="logo">PhotoShowcase</a>
                        </div>
                        <div className="col-lg-4 my-auto text-center">
                            <div className="mainmenu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/disclaimer">Disclaimer</a></li>
                                    <li><a href="/credits">Creadits</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 my-auto text-center">
                            <form action="">
                                <input type="text" placeholder="Search Keyword"/>
                                <input type="submit" value="search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;