import React, { useState } from "react";
import './Styles/styles.css';

const Positioning = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="main-div">
            {/* Fixed Navbar */}
            <div className="nav-bar">
                <span>item 1</span>
                <span>item 2</span>
                <span>item 3</span>
            </div>

            {/* Tooltip Section */}
            <div className="tooltip-container">
                <span className={`tooltip ${showTooltip ? "visible" : ""}`}>
                    Tooltip of button
                </span>
                <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={() => setShowModal(true)}
                >
                    button
                </button>
            </div>

            {/* Modal Section */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Modal Title</h2>
                        <p>This is a modal window centered on the screen.</p>
                        <button className="close-button" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Positioning;
