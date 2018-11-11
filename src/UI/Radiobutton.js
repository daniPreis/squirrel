import React from 'react'

class Radiobutton extends React.Component {
    render() {
        return (
            <label>
                <button
                    className="radiobtn"
                    type="radio"
                    checked={true}
                >
                    {this.props.children}
                </button>
            </label>

        )
    }
}

export default Radiobutton