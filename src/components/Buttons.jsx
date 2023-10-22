import "../styles/buttons.scss";

function Button({
    text,
    color,
    fontSize
}){
    const btnstyle = {
            backgroundColor : color,
            fontFamily: 'Bubblegum Sans, sans-serif',
            fontSize: fontSize,
    }

return(
    <button style={btnstyle}>
        {text}
    </button>
)

}
export default Button