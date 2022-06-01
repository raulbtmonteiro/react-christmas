import send from '../../assets/images/send.png'
import DonationButton from '../donationButton'
import { Container , Wrapper, Info , Title , Description , Img} from './style'
import { light } from '../../themes/light'

export default function Home() {
    return(
        <Container theme={light}>
            <Wrapper>
                <Info>
                    <Title theme={light}>Feliz Natal e <br/>Feliz Ano Novo!</Title>
                    <Description theme={light}>
                        Nessas festas de fim de ano mande um presente para a pessoa amada 
                        e compartilhe a alegria do Natal.
                    </Description>
                    <DonationButton />
                </Info>
                <Img src={send} alt='Papai Noel entregando presente a uma criança' />
            </Wrapper>
        </Container>
    )
}