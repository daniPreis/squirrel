import React from 'react'

class ConfirmButton extends React.Component {
    render() {
        const { onClick, disabled} = this.props

        return (
            <button
                className="confirmbtn"
                type="button"
                onClick={onClick}
                disabled={disabled}
            >
                {this.props.children}
            </button>
        )
    }
}

export default ConfirmButton