import send from '../../assets/images/send.png'
import { DonationButton } from '../DonationButton'
import { Container , Wrapper, Info , Title , Description , Img} from './style'

export const Home = ({theme , changeTheme}) => { 
    return(
        <Container theme={theme}>
            <Wrapper>
                <Info>
                    <Title theme={theme}>Feliz Natal e <br/>Feliz Ano Novo!</Title>
                    <Description theme={theme}>
                        Nessas festas de fim de ano mande um presente para a pessoa amada 
                        e compartilhe a alegria do Natal.
                    </Description>
                    <DonationButton theme={theme} onClick={changeTheme} />
                </Info>
                <Img src={send} alt='Papai Noel entregando presente a uma criança' />
            </Wrapper>
        </Container>
    )
}