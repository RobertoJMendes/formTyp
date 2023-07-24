import { Link, useNavigate } from 'react-router-dom'
import { useForm,FormActions } from '../../contexts/FormContext'

import { Theme } from '../../theme'
import { useEffect } from 'react'
import * as C from './styles'
import SelectOpt from '../SelectOpt'
import { BsEmojiWink, BsEmojiSunglasses } from 'react-icons/bs'

export const FormStepPassoII = () => {
    
    const navigate = useNavigate()

    const {state, dispatch} = useForm()
    
    useEffect(() => {
        if(state.name === ''){
            navigate("/")
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    },[dispatch,navigate,state.name])
    
        const handleNextStep = () =>{
            navigate("/passo3")
        }
        
        const setLevel = (level:number) => {
            dispatch({
                type: FormActions.setLevel,
                payload: level
            })
        }
        return (
            <Theme>
        <C.Container>
            <p>Passo 2/3</p>
            <h1>{state.name}, como vc se identifica?</h1>
            <p>Escolha a opção, que te descreve profissionalment0e!</p>

            <hr />
                
                <SelectOpt 
                title = "Sou Iniciante"
                description = "Comecei a programar a menos de 2 anos"
                icon = { ( <BsEmojiWink /> ) }
                selected = { state.level === 0 }
                onclick = { () => setLevel(0) }
                />
                
                <SelectOpt 
                title = "Sou programador"
                description = "Já programo a mais de 2 anos"
                icon = { ( <BsEmojiSunglasses /> ) }
                selected = { state.level === 1 }
                onclick = { () => setLevel(1) }
                />


            <Link to={"/"} className='voltar'>Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>
    )
}
//ChangeEvent,
//BsEmojiWink