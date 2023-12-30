import React, { useState, useEffect } from "react";
import * as Icon from "react-icons/fa";
import Select, { components } from "react-select";

const { SingleValue } = components;

const FAVORITES_COUNT = 6;

const HomePage = () => {
    const [selectedBackgroundIndex, setSelectedBackgroundIndex] = useState(0);
    const [boardTitle, setBoardTitle] = useState("");
    const [selectedWorkspace, setSelectedWorkspace] = useState(null);
    const [selectedVisibility, setSelectedVisibility] = useState(true);
    const [visibilityDefaultValue, setVisibilityDefaultValue] = useState({
        label: "WorkSpace",
        describe: `All members of ${selectedWorkspace ? selectedWorkspace.label : "the choosed workspace"} can consult and edit this board`,
        img: <Icon.FaUserFriends />,
        value: "workspace"
    });
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(
            selectedBackgroundIndex !== null &&
            boardTitle.trim() !== "" &&
            selectedWorkspace !== null &&
            selectedVisibility !== null
        );
    }, [selectedBackgroundIndex, boardTitle, selectedWorkspace, selectedVisibility]);

    useEffect(() => {
        setVisibilityDefaultValue({
            label: "WorkSpace",
            describe: `All members of ${selectedWorkspace ? selectedWorkspace.label : "the choosed workspace"} can consult and edit this board`,
            img: <Icon.FaUserFriends />,
            value: "workspace"
        });
    }, [selectedWorkspace]);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "rgba(184, 221, 247, 0.25)" : "white",
            color: state.isSelected ? "#0047AB" : "",
            ":hover": {
                backgroundColor: "#E5E4E2",
            },
        }),
    };

    const handleItemClick = (index) => {
        setSelectedBackgroundIndex(index);
        const backgroundChoiceElement = document.getElementById("background-choice");
        const hiddenInput = document.getElementById("selected-background-index");

        if (backgroundChoiceElement && hiddenInput) {
            backgroundChoiceElement.style.backgroundImage = `url(${backgroundImages[index]})`;
            hiddenInput.value = index.toString();
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setBoardTitle(inputValue);

        const isValidInput = inputValue.trim() !== "";
        setIsValid(isValidInput);
    };

    const handleWorkSpaceSelectChange = (selectedWorkspace) => {
        setSelectedWorkspace(selectedWorkspace);
    };

    const handleVisibilitySelectChange = (selectedVisibility) => {
        setSelectedVisibility(selectedVisibility);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("form sent!!!");
    };

    const isInvalid = !selectedWorkspace;

    const backgroundImages = [
        "https://images.unsplash.com/photo-1703016445632-240f009aa738?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400",
        "https://images.unsplash.com/photo-1703354445674-7c39f58a37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703190530042-e103213a117a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzAzNTkzMDE5fA&ixlib=rb-4.0.3&q=80&w=400"

    ]

    return (
        <div className="row mx-auto">
            <div className="p-2 border shadow-sm col-xlg-10" style={{ borderRadius: "10px", maxWidth: "36rem" }}>
                <img className="w-100" src="/graphic_image.jpg" alt="Image HomePage" />
                <div className="py-2 px-1">
                    <p className="h6 fw-bold">Stay on track and up to date</p>
                    <p className="text-wrap">
                        Invite people to boards and cards, leave comments and see the most important activity here.
                    </p>
                </div>
            </div>

            <div className="col-xlg-2" style={{ width: "fit-content" }}>
                <div className="mt-5" >
                    <div className="d-flex justify-content-start align-items-center mb-2">
                        <Icon.FaRegStar />
                        <div className="ms-2 text-secondary" style={{ fontSize: "15px" }}>Favorites</div>
                    </div>
                    <div style={{ overflowY: "scroll", width: "fit-content", maxHeight: "16rem", borderRadius: "10px" }} className="pe-1 border border-end-0 shadow-sm">
                        <ul>
                            {[...Array(FAVORITES_COUNT)].map((_, index) => (
                                <li className="nav-link mt-1" style={{ width: "fit-content", borderRadius: "10px" }} key={`item-${index}`}>
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
                                        <div className="icon">
                                            {/* Ameliorer la gestion du hover */}
                                            <Icon.FaStar style={{ color: "#FFBF00" }} className="ms-2" onMouseEnter={(e) => {
                                                {/* <Icon.FaRegStar/> */ }
                                                e.currentTarget.innerHTML = '<path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>'

                                            }} onMouseLeave={(e) => {
                                                {/* <Icon.FaStar/> */ }
                                                e.currentTarget.innerHTML = '<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>'
                                            }} />
                                        </div>
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
                        <div className="modal fade" id="addBoard" tabIndex="-1" role="dialog" aria-labelledby="addBoardLabel" aria-hidden="true" style={{ display: "none" }}>
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ width: "24rem" }}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Create your board</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="my-4 mx-auto w-75">
                                            <div id="background-choice" className="m-auto d-flex align-items-center justify-content-center" style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "rgb(0, 121, 191)", backgroundImage: `url(${backgroundImages[selectedBackgroundIndex]})`, borderRadius: "5px" }}>
                                                <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="" role="presentation" className="p-2 w-100" />
                                            </div>
                                        </div>
                                        <div>
                                            <form onSubmit={handleFormSubmit}>
                                                <div className="mb-3">
                                                    <div>
                                                        <label className="form-label" htmlFor="selected-background-index">Backgrounds</label>
                                                    </div>
                                                    <div>
                                                        <ul id="background-picker" className="d-flex my-auto p-0 justify-content-center">
                                                            {backgroundImages.map((_, index) => (
                                                                <li className="d-inline mx-1" key={`background-${index}`}>
                                                                    <button
                                                                        type="button"
                                                                        title="Custom Image"
                                                                        style={{ backgroundSize: "cover", backgroundImage: `url(${backgroundImages[index]})`, borderRadius: "5px" }}
                                                                        onClick={() => handleItemClick(index)}>
                                                                        <span>
                                                                            <svg
                                                                                width="60"
                                                                                height="42"
                                                                                role="presentation"
                                                                                focusable="false"
                                                                                viewBox="0 0 24 24"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                {/* Votre contenu SVG existant ... */}
                                                                                {/* Ajoutez le nouveau path ici */}
                                                                                {index === selectedBackgroundIndex && (
                                                                                    <path
                                                                                        d="M6.73534 12.3223C6.36105 11.9162 5.72841 11.8904 5.3223 12.2647C4.91619 12.639 4.89039 13.2716 5.26467 13.6777L8.87678 17.597C9.41431 18.1231 10.2145 18.1231 10.7111 17.6264C10.7724 17.5662 10.7724 17.5662 11.0754 17.2683C11.3699 16.9785 11.6981 16.6556 12.0516 16.3075C13.0614 15.313 14.0713 14.3169 15.014 13.3848L15.0543 13.3449C16.7291 11.6887 18.0004 10.4236 18.712 9.70223C19.0998 9.30904 19.0954 8.67589 18.7022 8.28805C18.309 7.90022 17.6759 7.90457 17.2881 8.29777C16.5843 9.01131 15.3169 10.2724 13.648 11.9228L13.6077 11.9626C12.6662 12.8937 11.6572 13.8889 10.6483 14.8825C10.3578 15.1685 10.0845 15.4375 9.83288 15.6851L6.73534 12.3223Z"
                                                                                        fill="#A9A9A9"
                                                                                    />
                                                                                )}
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                </li>
                                                            ))}
                                                            <input
                                                                type="hidden"
                                                                id="selected-background-index"
                                                                name="selectedBackgroundIndex"
                                                                value={selectedBackgroundIndex}
                                                            />
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="board-title" className="form-label">Board's Tile</label>
                                                    <input
                                                        type="text"
                                                        name="board-title"
                                                        id="board-title"
                                                        className={`form-control ${boardTitle.trim() !== '' ? '' : 'is-invalid'}`}
                                                        value={boardTitle}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        <span>
                                                            <Icon.FaHandSpock className="me-2" style={{ color: "#FFBF00" }} />
                                                            <span className="text-dark">
                                                                The board must have a title
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="workspace">Work Space</label>
                                                    <Select
                                                        className={`mt-2 ${isInvalid ? 'is-invalid' : ''}`}
                                                        name="workspace"
                                                        id="workspace"
                                                        options={[
                                                            { label: 'WorkSpace 1', value: 1 },
                                                            { label: 'WorkSpace 2', value: 2 },
                                                            { label: 'WorkSpace 3', value: 3 },
                                                            { label: 'WorkSpace 4', value: 4 },
                                                        ].map(({ label, value }) => ({ label, value }))}
                                                        styles={customStyles}
                                                        onChange={handleWorkSpaceSelectChange}
                                                    />
                                                    {isInvalid && (
                                                        <div className="invalid-feedback">
                                                            <span>
                                                                <Icon.FaExclamationCircle className="me-2 text-danger" />
                                                                <span className="text-dark">Please select a valid work space</span>
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="visibility" className="form-label">Visibility</label>
                                                    <Select
                                                        name="visibility"
                                                        id="visibility"
                                                        options={[
                                                            { label: "Private", describe: "Only the members of the board can consult and edit this board", img: <Icon.FaLock />, value: "private" },
                                                            { label: visibilityDefaultValue.label, describe: visibilityDefaultValue.describe, img: visibilityDefaultValue.img, value: visibilityDefaultValue.value },
                                                            { label: "Public", describe: "Only the members of the board can consult and edit this board", img: <Icon.FaUnlock />, value: "public" }
                                                        ].map(({ label, describe, img, value }) => ({ label, describe, img, value }))}
                                                        styles={customStyles}
                                                        formatOptionLabel={({ label, describe, img, value }) => (
                                                            <div style={{ width: "fit-content", height: "fit-content" }}>
                                                                <div className="f-bold">{label}</div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div className="me-3">{img}</div>
                                                                    <div style={{ fontSize: "12.5px" }}>{describe}</div>
                                                                </div>
                                                            </div>
                                                        )}
                                                        defaultValue={visibilityDefaultValue}
                                                        closeMenuOnSelect={false}
                                                        components={{
                                                            SingleValue: ({ children, ...props }) => (
                                                                <SingleValue {...props}>
                                                                    <div style={{ width: "fit-content", height: "fit-content" }} className="d-flex align-items-center justify-content-between">
                                                                        <div className="me-3">{props.data.img}</div>
                                                                        <div className="f-bold">{props.data.label}</div>
                                                                    </div>
                                                                </SingleValue>
                                                            ),
                                                        }}
                                                        onChange={handleVisibilitySelectChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-primary d-block w-75 m-auto" id="create-board-submit" disabled={!isValid}>Create</button>
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
