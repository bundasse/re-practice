import {useState} from "react";

function State() {
    const [vaR, funcTion] = useState('default');
    const callBun = () => {
        funcTion(vaR + '🐇');
    }
    return(
        <div>
            <button onClick={callBun}>토끼를 불러보아요</button>
            <p>{vaR}</p>
        </div>
    );
    
}
export default State;