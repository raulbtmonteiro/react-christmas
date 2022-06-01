import gift from '../../assets/images/acessories/gift.png'
import bells from '../../assets/images/acessories/bells.png'
import socks from '../../assets/images/acessories/socks.png'
import candy from '../../assets/images/acessories/candy.png'
import { Wrapper, AcessoriesBox , Title , Description } from './style'
import { CardTitle , CardDescription , CardImg } from './style'

const boxItens = [
    {
        img: gift,
        alt: 'presente de natal',
        title: 'Presentes',
        description: 'Eles são os melhores presentes que existem.'
    },
    {
        img: bells,
        alt: 'sinos de natal',
        title: 'Enfeites',
        description: 'Dê uma decoração.'
    },
    {
        img: candy,
        alt: 'bengala de doce',
        title: 'Doces',
        description: 'Aproveite os doces natalinos.'
    },
    {
        img: socks,
        alt: 'meia na chaminé',
        title: 'Muito amor',
        description: 'Aproveite os sentimentos que duram para sempre.'
    }
]

export const Acessories = ({theme}) => {
    return(
        <Wrapper>
            <Title theme={theme}>Acessórios</Title>
            <Description theme={theme}>
                Nessas festas de fim de ano mande um presente para a pessoa amada 
                e compartilhe a alegria do Natal.
            </Description>
            <AcessoriesBox>
                {boxItens.map( (item) => (
                    <div key={item.title}>
                        <CardImg src={item.img} alt={item.alt} />
                        <CardTitle theme={theme}>{item.title}</CardTitle>
                        <CardDescription theme={theme}>{item.description}</CardDescription>
                    </div>
                ))}
            </AcessoriesBox>
        </Wrapper>
    )
}