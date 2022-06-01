import send from '../../assets/images/send.png'
import { light } from '../../themes/light'
import { dark } from '../../themes/dark'
import DonationButton from '../donationButton'
import { Container , Wrapper, Info , Title , Description , Img} from './style'

export default function Home({theme},{setTheme}) {

    const ChangeTheme = () => {
        console.log('teste')
        if (theme == light){
            setTheme(dark)
            console.log(theme)
        } else {
            setTheme(light)
            console.log(theme)
        }
    }

    return(
        <Container theme={theme}>
            <Wrapper>
                <Info>
                    <Title theme={theme}>Feliz Natal e <br/>Feliz Ano Novo!</Title>
                    <Description theme={theme}>
                        Nessas festas de fim de ano mande um presente para a pessoa amada 
                        e compartilhe a alegria do Natal.
                    </Description>
                    <DonationButton theme={theme} onClick={() => ChangeTheme()} />
                </Info>
                <Img src={send} alt='Papai Noel entregando presente a uma criança' />
            </Wrapper>
        </Container>
    )
}