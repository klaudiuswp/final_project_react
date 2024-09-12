import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
  
    const handleSearch = (event) => {
      event.preventDefault();
      if (searchQuery) {
        navigate(`/movies/${searchQuery}`);
      }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(251, 67, 0, 1)' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/movies"><b>FinProH8</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="d-flex justify-content-lg-end justify-content-center text-light w-100">
                            <form className="d-flex" onSubmit={handleSearch}>
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control bg-secondary-emphasis" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                    <button className="btn btn-dark" type="submit" id="button-addon2">SEARCH</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarComponent;
