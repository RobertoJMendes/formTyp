import { ReactNode } from 'react'
import * as C from './styles'
import { Header } from '../pages/Header'
import SideBar from './SideBar'
import { GiEvilBook,GiEgyptianProfile } from 'react-icons/gi'
//import { IconType } from 'react-icons'
import { TbMailCode } from 'react-icons/tb'
import { useForm } from '../contexts/FormContext'
//import IconeCp from './IconeCp'
type Props = {
    children: ReactNode;
    icon: JSX.Element | ReactNode;
}

export const Theme = ({children, icon }:Props) => {
    const {state } = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header  />
                <C.Steps>
                    <C.Sidebar>

                    <SideBar
                    title="Pessoal"
                    description="Identifique-se"
                    icon={(<GiEgyptianProfile/>)}
                    //icon={<IconeCp />}
                    path="/"
                    active={state.currentStep === 1 && true}
                    />
                    
                    <SideBar
                    title="Profissional"
                    description="Seu nível"
                    icon={(<GiEvilBook />)}
                    path="/passo2"
                    active={state.currentStep === 2 && true}
                    />
                     
                    <SideBar
                    title="Contatos"
                    description="Sua localização"
                    icon={(<TbMailCode/>)}
                    path="/passo3"
                    active={state.currentStep === 3 && true}
                    />


                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}