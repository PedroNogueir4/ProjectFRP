import React, { useState, useRef, } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Container, H1, Container2, Inputlabel, Input, Button, Image, Image2, } from './styles'
import people from '../../assets/people1.svg'
import seta from '../../assets/seta.svg'



const App = () => {

    const [users, setUsers] = useState([]);
    const history = useHistory()
    const inputName = useRef()
    const inputAge = useRef()

    async function addNewUsers() {
        const { data: newUser } = await axios.post("http://localhost:3001/users",
            {
                name: inputName.current.value,
                age: inputAge.current.value,
            });

        setUsers([...users, newUser])

        history.push("/usuarios")
    }

    return (<Container>
        <Image alt='logo' src={people} />
        <Container2>
            <H1>Olá!</H1>
            <Inputlabel>Nome</Inputlabel>
            <Input ref={inputName} placeholder='Nome'></Input>
            <Inputlabel>Idade</Inputlabel>
            <Input ref={inputAge} placeholder='Idade'></Input>
            <Button onClick={addNewUsers}>Cadastrar <Image2 alt='seta' src={seta} /></Button>

        </Container2>
    </Container>
    )
}
export default App