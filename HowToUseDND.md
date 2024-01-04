import React, { useState, useE } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


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


const Boards = () => {

    const [favoriteBoards, setFavoriteBoards] = useState(initialFavoriteBoards);

    const handleDragDrop = (results) => {
        const { source, destination } = results;

        if (!destination) {
            return;
        }

        const reorderedBoards = Array.from(favoriteBoards);
        const [removed] = reorderedBoards.splice(source.index, 1);
        reorderedBoards.splice(destination.index, 0, removed);

        setFavoriteBoards(reorderedBoards)
    };

    return (
        <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {favoriteBoards.map((board, index) => (
                            <Draggable draggableId={board.id} key={board.id} index={index}>
                                {(provided) => (
                                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                        <h3>
                                            {board.title}
                                        </h3>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Boards;
