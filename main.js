const icon = ( button ) => {
    console.log(button);
    const iconPosition = button.attributes[0].name
    let iconImg = button.attributes[0].value
    iconImg = iconImg.replace(/["”']/g, "")


    if( iconPosition === 'starticon' ) {
        const icon = 
        `
        <span class="material-icons">
            ${ iconImg }
        </span>
        Default
        `   
        button.innerHTML=icon
    } else if( iconPosition === 'endicon') {
        const icon = 
        `
        Default
        <span class="material-icons">
            ${ iconImg }
        </span>
        `
        button.innerHTML=icon
    } else {
        console.log('Something went wrong')
    }
}

let startIcon = [...document.querySelectorAll('[startIcon]')]
let endIcon = [...document.querySelectorAll('[endIcon]')]
const buttons = startIcon.concat(endIcon)

buttons.forEach(element => {
    icon(element)
});