import React from "react";
import * as Icon from "react-icons/fa";

const BoardItem = ({ id, title, imageUrl, boardId, onDragStart }) => (
    <li
        key={`background-${id}`}
        style={{
            margin: "0 2% 2% 0",
            padding: "0",
            transform: "translate(0)",
            backgroundSize: "cover",
            backgroundImage: `url(${imageUrl})`,
            borderRadius: "5px",
            backgroundPosition: "50%",
            width: "185px"
        }}
        className="board mx-2 shadow"
        draggable
        onDragStart={(e) => onDragStart(e, boardId)}
    >
        <a href="#" type="button" title="Custom Image" className="d-block">
            <div className="d-flex justify-content-between position-relative flex-column" style={{ height: "80px" }}>
                <div title={title} dir="auto" className="d-inline-block board-title">
                    <div>{title}</div>
                </div>
                <div className="d-flex justify-content-end" style={{ alignItems: "baseline", flex: "0 0 auto"}}>
                    <span title={boardId} dir="auto" className="d-block board-id" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '185px' }}>
                        {boardId}
                    </span>
                    <span className="d-flex align-items-center position-relative ms-2">
                        <span title="Remove board from Favorites" className="d-block star-icon">
                            <Icon.FaStar className="w-100" />
                        </span>
                    </span>
                </div>
            </div>
        </a>
    </li>
);

const Boards = () => {
    const backgroundImages = [
        "https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400",
        "https://images.unsplash.com/photo-1703354445674-7c39f58a37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703190530042-e103213a117a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400"

    ]


    const handleDragStart = (e, boardId) => {
        e.dataTransfer.setData("text/plain", "board-item");
        e.dataTransfer.setData("boardId", boardId);
        e.currentTarget.id = boardId;
        e.currentTarget.dataset.boardId = boardId;
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, destinationId) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        const boardId = e.dataTransfer.getData("boardId");
        const sourceElement = document.getElementById(boardId);

        if (data && boardId == sourceElement.id) {
            const destinationList = document.getElementById(destinationId);
            const number = sourceElement.dataset.boardId;
            sourceElement.id = destinationId.split("-")[0] + `-item-${number}`;
            const clonedElement = sourceElement.cloneNode(true);
            destinationList.appendChild(clonedElement);
            sourceElement.parentNode.removeChild(sourceElement);
            console.log(`Move and copy the element with ID ${boardId} to ${destinationId}`);
        }
    };

    return (
        <div>
            <div>
                <div className="d-flex align-items-center h6">
                    <Icon.FaRegStar className="me-3" />
                    <div className="fw-bold">Favorites Boards</div>
                </div>
                <div style={{ height: "fit-content" }}>
                    <ul
                        className="d-flex m-0 p-0 board-list"
                        style={{
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            listStyle: "none",
                        }}
                        id="favorites-list"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, "favorites-list")}
                    >
                        {backgroundImages.map((background, index) => (
                            <BoardItem
                                key={index}
                                id={index}
                                title={`Mon Projet ${index + 1}`}
                                imageUrl={background}
                                boardId={`favorites-item-${index + 1}`}
                                onDragStart={handleDragStart}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <ul
                    id="myboards-list"
                    className="d-flex m-0 p-0 board-list"
                    style={{
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                    }}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "myboards-list")}
                >
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Boards;
