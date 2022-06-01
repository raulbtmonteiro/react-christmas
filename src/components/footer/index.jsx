import twitter from '../../assets/images/social_media/twitter.svg'
import youtube from '../../assets/images/social_media/youtube.svg'
import linkedin from '../../assets/images/social_media/linkedin.svg'
import instagram from '../../assets/images/social_media/instagram.svg'
import facebook from '../../assets/images/social_media/facebook.svg'
import frame from '../../assets/images/Frame.png'
import { Wrapper , SocialMediaList , ListItem , LogoContainer , LogoTitle } from './style'

const socialMediaArray = [ 
    {   
        socialMedia: 'twitter',
        icon: twitter,
        alt: 'logo do twitter',
        link: 'https://www.twitter.com'
    },
    {
        socialMedia: 'youtube',
        icon: youtube,
        alt: 'logo do youtube',
        link: 'https://www.youtube.com'
    },
    {
        socialMedia: 'linkedin',
        icon: linkedin,
        alt: 'logo do linkedin',
        link: 'https://www.linkedin.com'
    },
    {
        socialMedia: 'instagram',
        icon: instagram,
        alt: 'logo do instagram',
        link: 'https://www.instagram.com'
    },
    {
        socialMedia: 'facebook',
        icon: facebook,
        alt: 'logo do facebook',
        link: 'https://www.facebook.com'
    } 
];

export default function Footer({theme}){
    return(
        <Wrapper>
            <LogoContainer>
                <img src={frame} alt='Logo do Papai Noel' />
                <LogoTitle theme={theme}>Feliz Natal</LogoTitle>
            </LogoContainer>
            <SocialMediaList>
                {socialMediaArray.map( (item) => (
                    <ListItem 
                        href={item.link} 
                        target='_blank' 
                        key={item.socialMedia} 
                        theme={theme}>
                            <img src={item.icon} alt={item.alt} />
                    </ListItem>
                ))}
            </SocialMediaList>
        </Wrapper>
    )
}