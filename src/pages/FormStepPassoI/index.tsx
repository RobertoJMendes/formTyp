import { useNavigate } from 'react-router-dom'
import { useForm,FormActions } from '../../contexts/FormContext'
import { Theme } from '../../theme'
import { ChangeEvent, useEffect } from 'react'
import * as C from './styles'

export const FormStepPassoI = () => {

    const navigate = useNavigate()

    const {state, dispatch} = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[dispatch])

        const handleNextStep = () =>{
            if(state.name !== ""){
                navigate("/passo2")
            } else {
                alert ("Preencha o campo Nome!")
            }
    }
        const handleName = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setName,
                payload: e.target.value
            })
        }
    
    return (
        <Theme>
        <C.Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar!</h1>
            <p>Preencha o campo abaixo com seu nome completo!</p>

            <hr />

            <label>
                Seu nome completo
                <input 
                type="text"
                autoFocus
                value={state.name}
                onChange={handleName}
                />
            </label>

            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>

    )
}