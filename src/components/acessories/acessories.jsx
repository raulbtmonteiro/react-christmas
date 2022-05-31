import giving1 from '../../assets/images/giving1.png'
import giving2 from '../../assets/images/giving2.png'
import giving3 from '../../assets/images/giving3.png'
import giving4 from '../../assets/images/giving4.png'
import { Wrapper, AcessoriesFlex , AcessoriesTitle , AcessoriesDescription } from './style'
import { FlexCardTitle , FlexCardDescription , FlexCardImg } from './style'
import { light } from '../../themes/light'

export default function Acessories(){

    const boxItens = [
        {
            img: giving1,
            title: 'Presentes',
            description: 'Eles são os melhores presentes que existem.'
        },
        {
            img: giving2,
            title: 'Enfeites',
            description: 'Dê uma decoração.'
        },
        {
            img: giving4,
            title: 'Doces',
            description: 'Aproveite os doces natalinos.'
        },
        {
            img: giving3,
            title: 'Muito amor',
            description: 'Aproveite os sentimentos que duram para sempre.'
        }
    ]

    return(
        <Wrapper>
            <AcessoriesTitle theme={light}>Acessórios</AcessoriesTitle>
            <AcessoriesDescription theme={light}>
                Nessas festas de fim de ano mande um presente para a pessoa amada 
                e compartilhe a alegria do Natal.
            </AcessoriesDescription>
            <AcessoriesFlex>
                {boxItens.map( (item) => (
                    <div key={item.title}>
                        <FlexCardImg src={item.img} alt='' />
                        <FlexCardTitle theme={light}>{item.title}</FlexCardTitle>
                        <FlexCardDescription theme={light}>{item.description}</FlexCardDescription>
                    </div>
                ))}
            </AcessoriesFlex>
        </Wrapper>
    )
}