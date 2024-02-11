import { tv } from "tailwind-variants";

const CardHeader = ({ title, description, icon, flexDirection }) => {

    const headerStyle = tv({
        base: 'flex gap-1',
        variants: {
            flexDirection: {
                col: 'flex-col'
            }
        }
    })

    return (
        <section className={headerStyle({ flexDirection })}>
            <h2 className="font-bold">{title}</h2>
            {
                description
                &&
                <p className="text-zinc-300">{description}</p>
            }
            {
                icon
                &&
                icon
            }
        </section>
    )
}

export default CardHeader