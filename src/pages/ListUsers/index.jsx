import TopBackground from "../../components/TopBackground"
import Button from "../../components/button"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon, } from "./styles"
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom"


function ListUsers() {

    const [user, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)

        }

        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const upadateUsers = user.filter(user => user.id !== id)
        setUsers(upadateUsers)
    }

    return (

        <Container>

            <TopBackground />

            <Title>Listagem de Usuarios</Title>

            <ContainerUsers>

                {user.map((user) => (
                    <CardUsers key={user.id}>

                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />

                        <div>
                            <h3>{user.name}</h3>
                            <p>Idade: {user.age} Anos</p>
                            <p>Email: {user.email}</p>

                        </div>

                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />

                    </CardUsers>
                ))}

            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>

        </Container>

    )
}

export default ListUsers