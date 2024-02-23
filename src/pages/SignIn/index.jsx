import { useState } from 'react';
import { Container, Form, Background } from './styles.js';
import { Link} from 'react-router-dom';
import { Input } from "../../components/Input";
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <p>E-mail: hudson@gmail.com</p>

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <p>Senha: 123h</p>

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background />

        </Container>        
    );
}