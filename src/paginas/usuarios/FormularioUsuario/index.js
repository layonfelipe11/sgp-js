import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";

export default function FormularioUsuario(){
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [status, setStatus] = useState("");
    
    return(
        <>
            <Cabecalho/>
            <section className="container mt-3" id="novo-usuario">
                <h1>Dados do Usuário</h1>

                <form className="row g-3" onSubmit={()=>{}}>
                    <div className="col-md-6 col-12">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Digite seu nome..."
                            defaultValue={nome}
                            onChange={(e)=>setNome(e.target.value)}
                            required

                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="cpf"
                            placeholder="Digite seu cpf..."
                            defaultValue={cpf}
                            onChange={(e)=>setNome(e.target.value)}
                            required

                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Digite seu email..."
                            defaultValue={email}
                            onChange={(e)=>setNome(e.target.value)}
                            required

                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="senha"
                            placeholder="Digite seu nome..."
                            defaultValue={senha}
                            onChange={(e)=>setNome(e.target.value)}
                            required

                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                        <input 
                            type="date"
                            className="form-control"
                            id="dataNascimento"
                            defaultValue={dataNascimento}
                            onChange={(e)=>setNome(e.target.value)}
                            required

                        />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <select 
                            id="status"
                            className="form-select"
                            defaultValue={status}
                            onChange={(e)=> setStatus(e.target.value)}
                            required
                        >
                            <option disabled value="">Escolha uma opção...</option>
                            <option value={"ATIVO"}>Ativo</option>
                            <option value={"INATIVO"}> Inativo</option>
                        </select>

                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                        <button type="submit" className="btn btn-outline-primary ms-2">Cancelar</button>
                    </div>




                </form>

            </section>


            <Rodape/>
        </>
    )
}