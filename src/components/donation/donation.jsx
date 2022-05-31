import shared from '../../assets/images/shared.png'
import DonationButton from '../donationButton/donationButton'
import { DonationContainer , DonationWrapper , DonationInfo, DonationTitle , DonationDescription } from './style'
import { light } from '../../themes/light'

export default function Donation(){

    return(
        <DonationContainer theme={light}>
            <DonationWrapper>
                <img src={shared} alt='' />
                <DonationInfo>
                    <DonationTitle theme={light}> Comemore com <br/>muito amor!</DonationTitle>
                    <DonationDescription theme={light}>
                        Nestes feriados, festeje com muito amor e paz,
                        oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, 
                        desejando-lhes um Feliz Natal.
                    </DonationDescription>
                    <DonationButton />
                </DonationInfo>
            </DonationWrapper>
        </DonationContainer>
    )
}