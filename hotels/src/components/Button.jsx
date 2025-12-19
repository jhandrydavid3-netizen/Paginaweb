    function Button({name, onClick ={}, background="white", }) {

    return (
        <button name={name} onClick={onClick} style={{backgroundColor: backgroundColor}}>{name}
            {children}
        </button>
    )
}