import { useState } from "react"
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton"
import Input from "../../../../components/Input/Input"
import { validate } from "../../../../helpers/helpers"

export default function Register(props) {

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email: {
            value: "",
            error: "",
            showError: false,
            rules: ["required", "email"]
        },
        password: {
            value: "",
            error: "",
            showError: false,
            rules: ["required"]
        }
    })

    const submit = e => {
        e.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const changeHandler = (value, fieldName) => {
        const error = validate(form[fieldName].rules, value)

        setForm({
            ...form,
            [fieldName]: {
                value,
                showError: true,
                error: error
            }
        })
    }

	return (
		<div className='container'>
			<div className='card'>
				<div className='card-header'> Rejestracja </div>
				<div className='card-body'>
					<p className='text-muted'>Uzupełnij dane </p>

					<form onSubmit={submit}></form>

					<form>
						<Input
							label='Email'
                            type="email"
							value={form.email.value}
							onChange={val => changeHandler(val, "email")}
							/* error={form.email.error}
							showError={form.email.showError} */
						/>

						<Input
							label='Hasło'
							value={form.password.value}
							onChange={val => changeHandler(val, "password")}
/* 							error={form.password.error}
							showError={form.password.showError} */
						/>

						<div>
							<p class='text-center'>Zarejestruj</p>
							<LoadingButton loading={loading} className='btn-success'>
								{" "}
								Zarejestruj
							</LoadingButton>
						</div>

					</form>
				</div>
			</div>
		</div>
	)
}
