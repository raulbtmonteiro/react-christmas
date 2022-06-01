import shared from '../../assets/images/shared.png'
import DonationButton from '../donationButton'
import { Img , Container , Wrapper , Info, Title , Description } from './style'
import { light } from '../../themes/light'

export default function Donation(){
    return(
        <Container theme={light}>
            <Wrapper>
                <Img src={shared} alt='Criança recebendo um presente de natal' />
                <Info>
                    <Title theme={light}> Comemore com <br/>muito amor!</Title>
                    <Description theme={light}>
                        Nestes feriados, festeje com muito amor e paz,
                        oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, 
                        desejando-lhes um Feliz Natal.
                    </Description>
                    <DonationButton />
                </Info>
            </Wrapper>
        </Container>
    )
}