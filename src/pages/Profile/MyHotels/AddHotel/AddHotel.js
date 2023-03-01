import { useState, useRef } from "react"
import useStateStorage from "../../../../components/Hooks/useStateStorage"
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton"

const AddHotel = props => {

    const imageRef = useRef()
    const [form, setForm] = useState({
        name: "",
        description: "",
        city: "",
        rooms: 2,
        features: [],
        image: null,
        status: 0
    })

    const [loading, setLoading] = useState(false)

    const submit = e => {
        e.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const changeFeatureHandler = e => {
        const value = e.target.value
        const isChecked = e.target.checked

        if(isChecked) {
            const newFeatures = [...form.features, value]
            setForm({... form, features: newFeatures})
        } else {
            const newFeatures = form.features.filter(x => x !==value)
            setForm({... form, features: newFeatures})
        }
    }

	return (
		<div className='container'>
			<div className='card'>
				<div className='card-header'> Nowy Hotel </div>
				<div className='card-body'>

                    <p className="text-muted">Uzupełnij dane hotelu</p>

                    <form onSubmit={submit}></form>

					<form>

						<div className='form-group mb-3'>
							<label> Nazwa </label>
							<input
                                value={form.name}
                                onChange={e => setForm({...form, name: e.target.value })}
								type='text'
								className={`form-control ${false ? "is-invalid" : ``} `}
							/>
							<div className='invalid-feedback'>
                                Błąd
                            </div>
						</div>

                        <div className='form-group mb-3'>
							<label> Opis </label>
							<textarea
                                value={form.description}
                                onChange={e => setForm({...form, description: e.target.value })}
								type='text'
								className={`form-control ${false ? "is-invalid" : ``} `}
							/>
							<div className='invalid-feedback'>
                                Błąd
                            </div>
						</div>

						<div className='form-group  mb-3'>
							<label> Miejscowość </label>
							<input
                                value={form.city}
                                onChange={e => setForm({...form, city: e.target.value })}
								type='text'
								className={`form-control ${false ? "is-invalid" : ``} `}
							/>
							<div className='invalid-feedback'>
                                Błąd
                            </div>
						</div>

                        <div className='form-group  mb-3'>
							<label> Ilość pokoi </label>
							<select 
                            value={form.rooms} className="form-control"
                            onChange={e => setForm({...form, rooms: e.target.value })}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
							<div className='invalid-feedback'>
                                Błąd
                            </div>
						</div>

                        <h5>Udogodnienia</h5>
                        <div className='form-group'>
                            <div className="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                className="custom-control-input"
                                value="tv"
                                checked={form.features.find(x => x === "tv")}
                                onChange={changeFeatureHandler}
                                id="tv"
                                />
                                <label className="custom-control-label p-1" for="tv">TV</label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                className="custom-control-input"
                                value="WiFi"
                                onChange={changeFeatureHandler}
                                checked={form.features.find(x => x === "WiFi")}
                                id="WiFi"
                                />
                                <label className="custom-control-label p-1" for="WiFi">WiFi</label>
                            </div>

                            <div className="custom-control custom-checkbox">
                                <input
                                type="checkbox"
                                className="custom-control-input"
                                value="Parking"
                                onChange={changeFeatureHandler}
                                checked={form.features.find(x => x === "Parking")}
                                id="Parking"
                                />
                                <label className="custom-control-label p-1 mb-3" for="Parking">Parking</label>
                            </div>
						</div>
                        
                        <h5>Zdjęcie</h5>
                        <div className="form-group mb-3">
                            <input type="file"
                            onChange={e => setForm({...form, image: e.target.files })}
                            ref={imageRef}/>
                        </div>

                        <h5>Dostępność</h5>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input 
                                type="radio"
                                id="status-active"
                                name="status"
                                value="1"
                                onChange={e => setForm({...form, status: e.target.value })}
                                checked={form.status == 1}
                                className="custom-control-input"
                                />
                                <label className="custom-control-label p-1" for="status-active">Dostępny</label>
                            </div>

                            <div className="custom-control custom-radio">
                                <input 
                                type="radio"
                                id="status-hide"
                                name="status"
                                value="0"
                                onChange={e => setForm({...form, status: e.target.value })}
                                checked={form.status == 0}
                                className="custom-control-input"
                                />
                                <label className="custom-control-label p-1" for="status-hide">Niedostępny</label>
                            </div>
                        </div>

                        <div>
                            <p class="text-center">Dodaj hotel</p>
                            <LoadingButton
                            loading={loading}
                            className="btn-success"> Dodaj hotel 
                            </LoadingButton>
                        </div>


					</form>
				</div>
			</div>
		</div>
	)
}

export default AddHotel
