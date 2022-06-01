import shared from '../../assets/images/shared.png'
import { DonationButton } from '../DonationButton'
import { Img , Container , Wrapper , Info, Title , Description } from './style'

export const Donation = ({theme}) => {
    return(
        <Container theme={theme}>
            <Wrapper>
                <Img src={shared} alt='Criança recebendo um presente de natal' />
                <Info>
                    <Title theme={theme}> Comemore com <br/>muito amor!</Title>
                    <Description theme={theme}>
                        Nestes feriados, festeje com muito amor e paz,
                        oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, 
                        desejando-lhes um Feliz Natal.
                    </Description>
                    <DonationButton theme={theme}/>
                </Info>
            </Wrapper>
        </Container>
    )
}