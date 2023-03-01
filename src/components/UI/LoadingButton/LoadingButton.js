export default function LoadingButton (props) {
    return(
        props.loading 
			?	<div className="d-flex justify-content-center">
				<button className='btn btn-primary mt-2' role="status">Loading...</button>
				</div>
			:	<div className="d-flex justify-content-center">
				<button className='btn btn-primary mt-2'>{props.label}</button>
				</div>
)
}