import React, { useState } from "react";
import * as Icon from "react-icons/fa";
import * as Bootstrap from "react-bootstrap";

const HomePage = () => {

    return (
        <div>
            <div className="row">
                <div className="p-2 border shadow-sm col-lg-10" style={{ borderRadius: "10px", maxWidth: "36rem" }}>
                    <img className="w-100" src="/graphic_image.jpg" alt="Image HomePage" />
                    <div className="py-2 px-1">
                        <p className="h6 fw-bold">Stay on track and up to date</p>
                        <p className="text-wrap">
                            Invite people to boards and cards, leave comments and see the most important activity here.
                        </p>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="mt-5">
                        <div className="d-flex justify-content-start align-items-center mb-2">
                            <Icon.FaRegStar />
                            <div className="ms-2 text-secondary" style={{ fontSize: "15px" }}>Favorites</div>
                        </div>
                        <div style={{ overflowY: "scroll", width: "fit-content", maxHeight: "12rem"}} className="pe-1">
                            <ul style={{borderRadius: "10px"}} className="border">
                                {[...Array(6)].map((_, index) => (
                                    <li className="nav-link mt-2" style={{ width: "fit-content", borderRadius: "10px" }} key={`item-${index}`}>
                                        <div className="d-flex align-items-center p-2">
                                            <div style={{ width: "16rem" }}>
                                                <a href="#toInfinityAndBeyond" className="text-decoration-none d-flex flex-row align-items-center" style={{ color: "inherit" }}>
                                                    <div style={{ backgroundColor: 'rgb(11, 80, 175)', width: "25px", height: "25px", borderRadius: "5px" }}></div>
                                                    <span className="m-auto" style={{ maxWidth: "12rem", fontSize: "15px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                        <span className="d-block" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Mon projet</span>
                                                        <span style={{ fontSize: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Mon-premier-espace-de-travail-trop-long</span>
                                                    </span>
                                                </a>
                                            </div>
                                            {/* Ameliorer la gestion du hover */}
                                            <Icon.FaStar style={{ color: "#FFBF00" }} className="ms-2" onMouseEnter={(e) => {
                                                {/* <Icon.FaRegStar/> */ }
                                                e.currentTarget.innerHTML = '<path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>'
                                            }} onMouseLeave={(e) => {
                                                {/* <Icon.FaStar/> */ }
                                                e.currentTarget.innerHTML = '<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>'
                                            }} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5" >
                        <div className="text-secondary mb-2" style={{ fontSize: "15px" }}>
                            Links
                        </div>
                        <div id="create-board" style={{ width: "fit-content" }}>
                            <div className="d-flex align-items-center p-2">
                                <div style={{ width: "16rem" }}>
                                    <a className="text-decoration-none d-flex flex-row align-items-center" style={{ color: "inherit" }} data-bs-target="#addBoard" data-bs-toggle="modal">
                                        <Icon.FaPlusSquare style={{ width: "25px", height: "25px" }} className="me-3" />
                                        Create a board
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="modal fade" id="addBoard" aria-labelledby="addBoardLabel" tabIndex="-1" aria-hidden="true" style={{ display: "none" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Create your board</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div id="board-image">

                                            </div>
                                            <form>
                                                <div className="mb-3 w-75 mx-auto">
                                                    <select className="form-select" id="backgroundOptions">
                                                        <option value="">Sélectionnez un arrière-plan</option>
                                                        <option value="background1">Simple blue</option>
                                                        <option value="background2">Simple green</option>
                                                        <option value="background3">Simple red</option>
                                                        {/* Ajoutez autant d'options que nécessaire */}
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
