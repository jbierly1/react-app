interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, onClick, color='primary' }: Props) =>{
    return(
        <button className={'btn btn-' + color} onClick={onClick}>Button</button>
    )
}

export default Button