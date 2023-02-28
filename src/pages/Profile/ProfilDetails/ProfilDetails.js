export default function ProfilDetails(props){
    return (
        <form>
            <div className="form-group">
                <label> Email </label>
                <input type="email" value="*******@*****.***" className="form-control"></input>
            </div>
            <div className="form-group">
                <label> Hasło </label>
                <input type="password" placeholder="*******" className="form-control"></input>
            </div>
            <button className="btn btn-primary mt-2">Zapisz</button>
        </form>
    )
}