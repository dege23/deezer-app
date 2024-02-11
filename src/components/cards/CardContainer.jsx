import { tv } from "tailwind-variants";

const CardContainer = ({ children, grid }) => {

    const cardContainerStyle = tv({
        base: 'grid px-3 gap-6',
        variants: {
            grid: {
                multiCards: 'grid-cols-2'
            }
        }
    })

    return (
        <section className={cardContainerStyle({ grid })}>
            {children}
        </section>
    )
}

export default CardContainer;