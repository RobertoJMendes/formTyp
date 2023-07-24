import { useNavigate, Link } from 'react-router-dom'
import { useForm,FormActions } from '../../contexts/FormContext'
import { Theme } from '../../theme'
import { ChangeEvent, useEffect } from 'react'
import * as C from './styles'

export const FormStepPassoIII = () => {

    const navigate = useNavigate()

    const {state, dispatch} = useForm()

    
    const handleNextStep = () => {
        if(state.email !== "" && state.github !== ""){
            console.log(state)
        } else {
            alert ("Preencha os campos!")
        }
    }
    useEffect(() => {
        if(state.name === ''){
            navigate("/")
        } else{
                dispatch({
                    type: FormActions.setCurrentStep,
                    payload: 3
                })
            }
    },[dispatch,navigate,state.name])
        const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setEmail,
                payload: e.target.value
            })
        }
        const handleGithub = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setGithub,
                payload: e.target.value
            })
        }

    return (
        <Theme>
        <C.Container>
            <p>Passo 3/3</p>
            <h1>{state.name}, onde te achamos?</h1>
            <p>Preencha seus contatos, obrigado!</p>

            <hr />

            <label>
                Qual seu e-mail?
                <input
                type="text"
                value={state.email}
                onChange={handleEmail} />
            </label>

            <label>
                Qual seu GitHub?
                <input
                type="url"
                value={state.github}
                onChange={handleGithub} />
            </label>

        <Link to={"/passo2"} className='voltar'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar</button>        
        </C.Container>
        </Theme>
    )
}