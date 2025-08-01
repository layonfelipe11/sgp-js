import "./Login.css";
import logo from '../assets/sgp_logo_vertical.png'

export default function Login() {
  return (
    <div className="principal">
      <form className="formulario">
        <img src={logo} alt="Logo" className="imagem mt-3"/>
        <div className="input-box">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
            </label>
            <input
            type="email"
            className="form-control border border-primary-subtle"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            />
            <label htmlFor="inputPassword5" className="form-label">
            Senha
            </label>
            <input
            type="password"
            id="inputPassword5"
            className="form-control border border-primary-subtle"
            placeholder="Senha"
            aria-describedby="passwordHelpBlock"
            />
        </div>
        <div className="mt-3 mb-3 check">
        <input
          className="form-check-input "
          type="checkbox"
          value=""
          id="checkDefault"
        />
        <label className="form-check-label" htmlFor="checkDefault">
          Mantenha-me Conectado
        </label>
        </div>
        <button type="button" className="btn btn-primary mb-5">Entrar</button>

      </form>
    </div>
  );
}
