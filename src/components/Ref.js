import { useRef, useState} from "react";
function Ref() {
    const [ state, setState ] = useState({
        text: ""
    });
    const textRef = useRef();

    const handleOnChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })};
    const handleOnClick = () =>{
        alert(state.text);
        textRef.current.value = "";
    }
    
    return (
        <div>
            <input ref={textRef} name="text" value={state.text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>리셋 버튼</button>
        </div>
    )
}
export default Ref;