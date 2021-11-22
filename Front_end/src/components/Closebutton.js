import React from "react";

class CloseButton extends React.Component {
    render() {
        return (
            <div >
                <button
                    className="close-button"
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}

export default CloseButton;