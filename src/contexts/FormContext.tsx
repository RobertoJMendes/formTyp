// context - reducer - provider - hook 
import { ReactNode, createContext, useContext,useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}
type FormProviderProps = {
    children: ReactNode;
}

    const initialData: State = {
    currentStep: 0,
    name:'',
    level: 0,
    email:'',
    github:''   
    }
// Context - FormContext precisa de um valor padrão inicial
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const FormReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            return state;
        }
}

// Provider - ele usa o Reducer para "gerenciar" os dados, teoricamente.
export const FormProvider = ({children}:FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData)// dispatch - é uma função, que é utilizada para executar as ações
    const value = { state, dispatch }
    return (
    <FormContext.Provider value={value} >
        {children}
    </FormContext.Provider>
    )
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error ('useForm tem q ser usdo dentro do FormProvider')
    }
    return context
}