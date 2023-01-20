import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Container, H1, Container2, Button, Image, Image2, User, Trash, } from './styles'
import avatar from '../../assets/avatar.svg'
import seta from '../../assets/seta.svg'
import dump from '../../assets/dump.svg'


const Users = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory()

    useEffect(() => {
        async function fetchUsers() {

            const { data: newUsers } = await axios.get("http://localhost:3001/users")
            setUsers(newUsers)
        }
        fetchUsers()
    }, [])


    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)

        const newUsers = users.filter(user => user.id !== userId)
        setUsers(newUsers)
    }

    function goBack() {

        history.push("/")
    }

    return (<Container>
        <Image alt='logo' src={avatar} />
        <Container2>
            <H1>Usuários</H1>

            <ul>
                {users.map((user) => (
                    <User key={user.id}>
                        <p>{user.name}</p> <p>{user.age} Anos</p> <Trash onClick={() => deleteUser(user.id)}><img alt='lixeira' src={dump}></img></Trash>
                    </User>
                ))}
            </ul>
            <Button onClick={goBack} > <Image2 alt='seta' src={seta} /> Voltar </Button>

        </Container2>
    </Container>
    )
}
export default Users