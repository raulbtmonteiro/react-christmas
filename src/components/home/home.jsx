import send from '../../assets/images/send.png'
import DonationButton from '../donationButton/donationButton'
import { HomeContainer , HomeWrapper, HomeInfo , HomeTitle , HomeDescription} from './style'
import { light } from '../../themes/light'

export default function Home() {
    return(
        <HomeContainer theme={light}>
            <HomeWrapper>
                <HomeInfo>
                    <HomeTitle theme={light}>Feliz Natal e <br/>Feliz Ano Novo!</HomeTitle>
                    <HomeDescription theme={light}>
                        Nessas festas de fim de ano mande um presente para a pessoa amada 
                        e compartilhe a alegria do Natal.
                    </HomeDescription>
                    <DonationButton />
                </HomeInfo>
                <img src={send} atl='' />
            </HomeWrapper>
        </HomeContainer>
    )
}