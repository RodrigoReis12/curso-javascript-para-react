import CardGame from "../CardGame";

function CardFrontBack() {
    return/*html*/ `
    <article class="card-front-back">
        ${CardGame()}
        ${CardGame("javaScript", 'Logo do javaScript')}
    </article>
    `
}

export default CardFrontBack;