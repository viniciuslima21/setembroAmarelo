import TieImg from '../../assets/tie.svg'

import {
    HeaderBg,
    Subtitle,
    Tie
} from './styles'

export default function Header() {
    return(
        <HeaderBg>
            <h1>Setembro Amarelo</h1>
            <Subtitle>Mês de valorização da vida.</Subtitle>
            <Tie src={TieImg} alt="Imagem de um laço" />
        </HeaderBg>
    )
}