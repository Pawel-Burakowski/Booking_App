import PropTypes from "prop-types"

function Input(props) {
	return (
		<div className='form-group'>
            <label>{props.label}</label>
			<input
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
				type={props.type}
				className={`form-control ${!props.isValid && props.showError ? "is-invalid" : "" }`}
			/>
			<div className="invalid-feedback">
                Błąd
            </div>
		</div>
	)
}

Input.defaultProps = {
    type: "text",
    isValid: false,
    showError: false
}

export default Input

