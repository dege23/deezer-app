const Input = ({ className, type, placeholder, value, onChange }) => {
    return (
        <input
            className={`bg-opacity-20 bg-zinc-500 border rounded-md border-zinc-700 px-6 py-0 focus:outline-0 focus:border focus:border-zinc-500 ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
};

export default Input;