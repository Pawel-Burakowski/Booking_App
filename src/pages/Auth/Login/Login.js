export default function Login(props) {
	return (
		<div className='container d-flex justify-content-center mb-5'>
			<div className='row'>
				<h2 className='text-center mt-5'> Logowanie </h2>
				<form>
					<div className='form-group'>
						<label> Email </label>
						<input
							type='email'
							className='form-control'></input>
					</div>
					<div className='form-group'>
						<label> Hasło </label>
						<input
							type='password'
							className='form-control'></input>
					</div>
					<div className="d-flex justify-content-center">
						<button className='btn btn-primary mt-2'>Zaloguj</button>
					</div>
				</form>
			</div>
		</div>
	)
}
