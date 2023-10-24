import "../styles/buttons.scss";

function Button({
    text,
    color,
    fontSize,
    type,
    className
}){
    const btnstyle = {
            backgroundColor : color,
            fontFamily: 'Bubblegum Sans, sans-serif',
            fontSize: fontSize + 'px',
    }

return(
    <button style={btnstyle} type={type} className={className}>
        {text}
    </button>
)

}
export default Button