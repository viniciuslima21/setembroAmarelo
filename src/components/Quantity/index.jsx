import {
    QuantityBg,
    ImgBg,
    DeathsBg
} from './styles'

export default function Quantity() {
    return(
        <QuantityBg>
            <ImgBg />
            <DeathsBg>
                <h4>+13 mil</h4>
                <p>suicídios todos os anos no Brasil.</p>
                <h4>+1 milhão</h4>
                <p>suicídios todos os anos no mundo.</p>
                <h4>98%</h4>
                <p>dos suicídio são relacionados a transtornos mentais.</p>
                <h4>a cada 40 segundos</h4>
                <p>uma pessoa morre por suicídio no mundo.</p>
            </DeathsBg>
        </QuantityBg>
    )
}