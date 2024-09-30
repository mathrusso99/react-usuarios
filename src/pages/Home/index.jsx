import { Container, Form, InputLabel, Title, ContainerInputs, Input } from "./styles"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import Button from "../../components/button"
import TopBackground from "../../components/TopBackground"

function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()

    async function createNewUser() {

        const data = await api.post('/usuarios', {
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            name: inputName.current.value
        })

        navigate('/lista-de-usuarios')
    }

    return (

        <Container>

            <TopBackground />

            <Form>

                <Title>Cadastrar Usuários</Title>

                <ContainerInputs>

                    <div>
                        <InputLabel>Nome <span> *</span></InputLabel>
                        <Input type="name" placeholder="Nome do Usuário" ref={inputName} />
                    </div>

                    <div>
                        <InputLabel>Idade <span> *</span></InputLabel>
                        <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
                    </div>

                </ContainerInputs>

                <div style={{ width: "100%" }}>
                    <InputLabel>E-mail <span> *</span></InputLabel>
                    <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
                </div>

                <Button type="button" onClick={createNewUser} theme="primary">Cadastrar Usuário</Button>

            </Form>

            <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuarios</Button>

        </Container>

    )

}

export default Home