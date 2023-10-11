function Button({
    text,
    color
}){
    const btnstyle = {
            backgroundColor : color,
            fontFamily: 'Bubblegum Sans, sans-serif'
    }
return(
    <button style={btnstyle}>
        {text}
    </button>
)

}
export default Button