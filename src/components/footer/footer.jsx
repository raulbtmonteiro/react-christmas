import twitter from '../../assets/images/twitter.svg'
import youtube from '../../assets/images/youtube.svg'
import linkedin from '../../assets/images/linkedin.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import frame from '../../assets/images/Frame.png'
import { FooterWrapper , MediaList , ListItem , DivLogo , LogoTitle } from './style'
import { light } from '../../themes/light'

export default function Footer(){

    const navItens = [ 
        {
            icon: twitter,
            link: ''
        },
        {
            icon: youtube,
            link: ''
        },
        {
            icon: linkedin,
            link: ''
        },
        {
            icon: instagram,
            link: ''
        },
        {
            icon: facebook,
            link: ''
        }
            
        
    ];

    return(
        <FooterWrapper>
            <DivLogo>
                <img src={frame} alt='' />
                <LogoTitle theme={light}>Feliz Natal</LogoTitle>
            </DivLogo>
            <MediaList>
                {navItens.map( (item) => (
                    <ListItem key={item.link} theme={light}><img src={item.icon} /></ListItem>
                ))}
            </MediaList>
        </FooterWrapper>
    )
}