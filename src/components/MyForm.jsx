import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  //gerenciamento de dados
  const [name, setName] = useState(userName); //desestruturacao de props
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState(""); //controlador de input
  const [role, setRoole] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  //envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    //validacao
    //envio 
    setName("");
    setEmail(""); //limpar formulario
    setBio("");
    setRole("")
  };

  console.log(name, email, bio, role);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label> 
          <input 
            type="text" 
            name="name" 
            placeholder="Digite o seu nome" 
            onChange={handleName}
            value={name || ""}
          />
        </div>

        {/*Label envolvendo input*/}
        <label>
          <span>E-mail:</span>
          {/*OnChange detecta quando algo muda, e=abreviacao para event*/}
          <input 
            type="text" 
            name="email" 
            placeholder="Digite o seu e-mail" 
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
        </label>

        {/*texterea*/}
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
        <label>
            <span>
                Função no sistema
                <select name ="role"
                onChange={(e) => setRoole(e.target.value)}
                value={role}
                >
                    <option value="usuario">Usuário</option>
                    <option value="root">Root</option>
                </select>
            </span>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
