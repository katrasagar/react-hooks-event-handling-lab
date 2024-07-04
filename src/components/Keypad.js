// Code Keypad Component Here

function Keypad (){
    return (
        <input type="password" onChange={handlechange} />
    )
            function handlechange(){
                console.log("Entering password...");
            };
        
    
}

export default Keypad;