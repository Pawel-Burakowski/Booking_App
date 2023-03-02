export default function LoadingButton (props) {

	const buttonProps = {...props}
	delete buttonProps.loading

    return(
        props.loading 
			?	<div className="d-flex justify-content-center">
				<button className='btn btn-primary mt-2' role="status">Loading...</button>
				</div>
			:	<div className="d-flex justify-content-center">
				<button {...buttonProps} className='btn btn-primary mt-2'>{props.label}</button>
				</div>
)
}