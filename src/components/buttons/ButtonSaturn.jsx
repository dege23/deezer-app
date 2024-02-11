import { tv } from "tailwind-variants";

const ButtonSaturn = ({ icon, className, handleClick, handleBlur }) => {

    const buttonSaturnStyle = tv({
        base: 'bg-white text-black flex justify-center items-center p-4 rounded-full',
        variants: {
            className: {
                true: className
            }
        }
    });

    return (
        <button
            className={buttonSaturnStyle({ className })}
            onClick={() => handleClick && handleClick()}
            onBlur={() => handleBlur && handleBlur()}
        >{icon}</button>
    )
};

export default ButtonSaturn;
