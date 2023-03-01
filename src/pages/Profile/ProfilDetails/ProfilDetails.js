import { useState, useEffect } from "react"
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton"
import { validateEmail } from "../../../helpers/helpers"

export default function ProfilDetails(props){

    const [email, setEmail] = useState("pawel@email.pl")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const submit = (e) => {
		e.preventDefault();
		setLoading(true)

		setTimeout( () => {

			setLoading(false)
		}, 500)
	}

    useEffect(() => {
        if (validateEmail(email)){
            setErrors({...errors, email: ""})
        } else {
            setErrors({...errors, email: "Niepoprawny email"})
        }
    }, [email])

/*     useEffect(() => {
        if (password.length >4){
            setErrors({...errors, password: ""})
        } else {
            setErrors({...errors, password: "Hasło musi mieć ponad 4 znaki"})
        }
    }, [password]) */

    return (
        <div className='container d-flex justify-content-center'>
			<div className='row'>
				<h2 className='text-center'> Profil Details </h2>

				<form onSubmit={submit}>
					<div className='form-group'>
						<label> Email </label>
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className={`form-control ${errors.email ? "is-invalid" : `is-valid`} `}>
                        </input>
                            <div className="invalid-feedback">
                                {errors.email}
                            </div>
                            <div className="valid-feedback">
                                Poprawny email!
                            </div>
					</div>
					<div className='form-group'>
						<label> Hasło </label>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className={`form-control ${errors.password ? "is-valid" : ``} `}>
                        </input>
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
					</div>
					<LoadingButton loading={loading} label="Zapisz" />
				</form>
			</div>
		</div>
    )
}