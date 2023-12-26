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
                        <div style={{ overflowY: "scroll", width: "fit-content", maxHeight: "12rem", borderRadius: "10px" }} className="pe-1 border border-end-0 shadow-sm">
                            <ul>
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
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Create your board</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="my-4 mx-auto w-50">
                                                <div className="m-auto d-flex align-items-center justify-content-center" style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "rgb(0, 121, 191)", backgroundImage: "url(https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400&quot)" }}>
                                                    <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="" role="presentation" className="p-2 w-100" />
                                                </div>

                                            </div>
                                            <div>
                                                <form>

                                                    <div className="mb-3 ">
                                                        <div>
                                                            <label className="form-label" for="background-picker">Backgrounds</label>
                                                        </div>
                                                        <div>
                                                            <ul style={{ listStyleType: "None" }} id="background-picker">
                                                                <li className="d-inline">
                                                                    <button className="" type="button" title="Image personnalisée" style={{ backgroundSize: "cover", backgroundImage: "url(https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400&quot)" }}><span><span><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.73534 12.3223C6.36105 11.9162 5.72841 11.8904 5.3223 12.2647C4.91619 12.639 4.89039 13.2716 5.26467 13.6777L8.87678 17.597C9.41431 18.1231 10.2145 18.1231 10.7111 17.6264C10.7724 17.5662 10.7724 17.5662 11.0754 17.2683C11.3699 16.9785 11.6981 16.6556 12.0516 16.3075C13.0614 15.313 14.0713 14.3169 15.014 13.3848L15.0543 13.3449C16.7291 11.6887 18.0004 10.4236 18.712 9.70223C19.0998 9.30904 19.0954 8.67589 18.7022 8.28805C18.309 7.90022 17.6759 7.90457 17.2881 8.29777C16.5843 9.01131 15.3169 10.2724 13.648 11.9228L13.6077 11.9626C12.6662 12.8937 11.6572 13.8889 10.6483 14.8825C10.3578 15.1685 10.0845 15.4375 9.83288 15.6851L6.73534 12.3223Z" fill="currentColor"></path></svg></span></span></button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <div className="mb-3 w-75 mx-auto">
                                                        <select className="form-select" id="backgroundOptions">
                                                            <option value="">Sélectionnez un arrière-plan</option>
                                                            <option value="background1">Simple blue</option>
                                                            <option value="background2">Simple green</option>
                                                            <option value="background3">Simple red</option>
                                                        </select>
                                                    </div> */}
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
        </div>
    );
};

export default HomePage;
