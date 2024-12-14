interface Props{
  children: string;
  onClose: () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
    
    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>

    </div>
    
  )
}
export default Alert