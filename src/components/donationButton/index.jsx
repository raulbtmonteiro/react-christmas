import gift from '../../assets/images/gift.svg'
import { Button } from "./style"

export default function DonationButton({theme}){
    return(
        <Button theme={theme}>
            <img src={gift} alt='presente de natal' />
            Fazer Doação
        </Button>
    )
}