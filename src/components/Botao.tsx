interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children?: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white p-2 rounded-md mb-4 ${props.className}
            `}>
            {props.children}
        </button>
    )
}