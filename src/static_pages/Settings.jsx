

function Settings(){

    function clickSubmit(event){
        event.preventDefault();
        let color = event.target.elements.color.value;
        let body = document.querySelector("body");
        body.style.backgroundColor=color;
    }

    return(
        <div>
            <form action="/" onSubmit={clickSubmit}>
            <input name="color" type="color" />
            <input type="submit" />
            </form>
        </div>

    )
}

export default Settings;