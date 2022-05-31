import gift from '../../assets/images/gift.svg'
import { light } from '../../themes/light'
import { Button } from "./style"

export default function DonationButton(){
    return(
        <Button theme={light}><img src={gift} alt='' />Fazer Doação</Button>
    )
}