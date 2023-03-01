import { useState } from "react"
import useAuth from "../../../components/Hooks/useAuth"
import { useHistory } from "react-router-dom"
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton"

export default function Login(props) {

	const history = useHistory()
	const [auth, setAuth] = useAuth()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const [valid, setValid] = useState(null)


	const submit = (e) => {
		e.preventDefault();
		setLoading(true)

		setTimeout( () => {
			if(true) {
				setAuth(true)
				history.push("/")
			} else {
				setValid(false)
				setPassword("")
			}
			setLoading(false)
		}, 500)
	}

	return (
		<div className='container d-flex justify-content-center mb-5'>
			<div className='row'>
				<h2 className='text-center mt-5'> Logowanie </h2>

				{valid === false ? (
					<div className="alert alert-danger"> Niepoprawne dane logowania</div>
				) 
				: null}
				<form onSubmit={submit}>
					<div className='form-group'>
						<label> Email </label>
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='form-control'></input>
					</div>
					<div className='form-group'>
						<label> Hasło </label>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='form-control'></input>
					</div>
					<LoadingButton loading={loading} label="Zaloguj" />
				</form>
			</div>
		</div>
	)
}
