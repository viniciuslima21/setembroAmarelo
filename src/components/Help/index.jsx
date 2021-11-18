import { HelpBg } from './styles'

import { Container } from '../../styles/container'

export default function Help() {
    return(
        <HelpBg id="help">
            <Container>
                <h3>Encontre ajuda</h3>
                <p>De acordo com os dados da cartilha "Informando para prevenir", publicada pela ABP e pelo CFM, 96,8% dos casos de suicídio registrados estão associados com histórico de doenças mentais, que podem ser tratadas.</p>
                <p>A informação correta direcionada à população é muito importante para orientar e prevenir o suicídio.</p>
                <p>O reconhecimento dos fatores de risco e dos fatores protetores é fundamental e pode ajudar. Se você acha que está tendo problemas relacionados à sua saúde mental ou conhece alguém que está passando por alguma dificuldade, procure ajuda ou busque o CVV.</p>
                <p>O CVV é uma das ONGs mais antigas do país. Fundado em São Paulo em 1962, atua no apoio emocional e na prevenção do suicídio pelo telefone 188, e também por chat, e-mail e pessoalmente.</p>
                <p>Se precisar, não exite, ligue <b>188</b>!</p>
            </Container>
        </HelpBg>
    )
}