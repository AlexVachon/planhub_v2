import React, { useState } from "react";
import * as Icon from "react-icons/fa"


const backgroundImages = [
    "https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400",
    "https://images.unsplash.com/photo-1703354445674-7c39f58a37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1703190530042-e103213a117a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400"
];

const initialFavoriteBoards = [
    {
        id: "1",
        title: "Mon Projet 1",
        imageUrl: backgroundImages[0],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "2",
        title: "Mon Projet 2",
        imageUrl: backgroundImages[1],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "3",
        title: "Mon Projet 3",
        imageUrl: backgroundImages[2],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "4",
        title: "Mon Projet 4",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: true
    }
];

const initialAllBoards = [
    {
        id: "1",
        title: "Mon Projet 1",
        imageUrl: backgroundImages[0],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "2",
        title: "Mon Projet 2",
        imageUrl: backgroundImages[1],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "3",
        title: "Mon Projet 3",
        imageUrl: backgroundImages[2],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "4",
        title: "Mon Projet 4",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: true
    },
    {
        id: "5",
        title: "Mon Projet 5",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "6",
        title: "Mon Projet 6",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "7",
        title: "Mon Projet 7",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    }
    ,
    {
        id: "8",
        title: "Mon Projet 8",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "9",
        title: "Mon Projet 9",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "10",
        title: "Mon Projet 10",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "11",
        title: "Mon Projet 11",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "12",
        title: "Mon Projet 12",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "13",
        title: "Mon Projet 13",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "14",
        title: "Mon Projet 14",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "15",
        title: "Mon Projet 15",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "16",
        title: "Mon Projet 16",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    },
    {
        id: "17",
        title: "Mon Projet 17",
        imageUrl: backgroundImages[3],
        workspace: "workspace-1",
        is_favorite: false
    }
]



const Boards = () => {

    const [favoriteBoards, setFavoriteBoards] = useState(initialFavoriteBoards);
    const [allBoards, setAllBoards] = useState(initialAllBoards)


    return (

        <div className="boards-container">
            <div className="mb-5">
                <div className="d-flex align-items-center h6 mb-3">
                    <Icon.FaRegStar className="me-3" />
                    <div className="fw-bold">Favorites Boards</div>
                </div>
                <div className="board-scroll-container shadow-sm p-2">
                    <ul className="board-container">
                        {favoriteBoards.map((board, index) => {
                            return (
                                <li key={index} data-test-id={`favorite-board-item-${board.id}`} className="board shadow mx-2" style={{ backgroundImage: `url(${board.imageUrl})` }}>
                                    <a href="#" type="button" className="d-block">
                                        <div className="board-link">
                                            <div title={board.title} dir="auto" className="board-title">
                                                <div>{board.title}</div>
                                            </div>
                                            <div className="board-footer">
                                                <span title={board.workspace} dir="auto" className="board-workspace">
                                                    {board.workspace}
                                                </span>
                                                <span>
                                                    {board.is_favorite ? (
                                                        <span title="Remove board from Favorites" className="star-icon">
                                                            <Icon.FaStar className="w-100" />
                                                        </span>
                                                    ) : null}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="mb-5">
                <div className="d-flex align-items-center h6 mb-3">
                    <Icon.FaTable className="me-3" />
                    <div className="fw-bold">Boards</div>
                </div>
                <div className="board-scroll-container shadow-sm p-2">
                    <ul className="board-container">
                        {allBoards.map((board, index) => {
                            return (
                                <li key={index} data-test-id={`favorite-board-item-${board.id}`} className="board shadow" style={{ backgroundImage: `url(${board.imageUrl})` }}>
                                    <a href="#" type="button" title="Custom Image" className="d-block">
                                        <div className="board-link">
                                            <div title={board.title} dir="auto" className="board-title">
                                                <div>{board.title}</div>
                                            </div>
                                            <div className="board-footer">
                                                <span title={board.workspace} dir="auto" className="board-workspace">
                                                    {board.workspace}
                                                </span>
                                                <span>
                                                    {board.is_favorite ? (
                                                        <span title="Remove board from Favorites" className="star-icon">
                                                            <Icon.FaStar className="w-100" />
                                                        </span>
                                                    ) : null}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Boards;
