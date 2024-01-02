import React from "react";
import * as Bootstrap from "react-bootstrap";
import *  as Icon from "react-icons/fa"


const Boards = () => {

    const backgroundImages = [
        "https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400",
        "https://images.unsplash.com/photo-1703354445674-7c39f58a37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703190530042-e103213a117a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400"

    ]

    return (
        <div>
            <div className="d-flex align-items-center h6">
                <Icon.FaRegStar className="me-3" />
                <div className="fw-bold">
                    Favorites Boards
                </div>
            </div>
            <div style={{ height: "fit-content" }}>
                <ul className="d-flex m-0 p-0" style={{ flexWrap: "wrap", justifyContent: "flex-start", listStyle: "none" }} id="favorites-board">
                    <li key={`background-${0}`} style={{ margin: "0 2% 2% 0", padding: "0", transform: "translate(0)" }} className="shadow">
                        <a
                            type="button"
                            title="Custom Image"
                            style={{ backgroundSize: "cover", backgroundImage: `url(${backgroundImages[0]})`, borderRadius: "5px", backgroundPosition: "50%"}}
                            className="d-block"
                        >
                            <div className="d-flex justify-content-between position-relative flex-column" style={{ height: "80px" }}>
                                <div title="Mon Projet" dir="auto" className="d-inline-block board-title" style={{ flex: "0 0 auto", fontSize: "20px", fontWeight: "bold", maxHeight: "40px", overflow: "hidden", width: "100%", wordWrap: "break-word" }}>
                                    <div>
                                        Mon Projet
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end" style={{ alignItems: "baseline", flex: "0 0 auto" }}>
                                    <span title="Projet-web-react-2023" dir="auto" className="d-block" style={{ flex: "1 1 auto", fontWeight:"bold", letterSpacing: ".02rem", lineHeight: "18px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>
                                        Projet-web-react-2023
                                    </span>
                                    <span className="d-flex align-items-center position-relative" style={{ flex: "0 0 auto", marginLeft: "4px", overflow: "hidden", right: "-4px" }}>
                                        <span title="Click here to remove this favorites board. It will be removed from your favorites list." className="d-block" style={{ fontSize: "14px", height: "18px", lineHeight: "18px", WebkitTransform: "translateZ(0)", transitionDuration: ".15s", transitionProperty: "color, background, opacity, transform, width, margin" }}>
                                            <Icon.FaStar color="#FFBF00" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* <div className="p-3">
                                <div className="h6 fw-bold">
                                    Mon Projet
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="me-3">
                                        Projet-Web-Trop-Cool-2023
                                    </div>
                                    <Icon.FaStar color="#FFBF00" />
                                </div>
                            </div> */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Boards;
