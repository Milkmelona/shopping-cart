import "../styles/buttons.scss";

function Button({
    text,
    color,
    type,
    className
}){
    const btnstyle = {
            backgroundColor : color,
            fontFamily: 'Bubblegum Sans, sans-serif',
    }
return(
    <button style={btnstyle} type={type} className={className}>
        {text}
    </button>
)

}
export default Button