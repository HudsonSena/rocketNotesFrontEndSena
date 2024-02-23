import { api } from "../../services/api";
import { useState } from 'react';
import { Container, Form, Background } from './styles.js';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';



export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSingUp() {
        if(!name || !email || !password) {
            alert("Preencha todos os campos!");
        }

        if(name == '' || email == '' || password == '') {
            alert("Campos inválidos");
        }

        api.post("/users", { name, email, password }).then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
            
        }).catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        })
    }
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSingUp}/>

                <Link to="/">Voltar para o login</Link>
            </Form>

        </Container>        
    );
}