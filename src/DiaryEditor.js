import {useState} from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author:"", 
        content:"",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <div className = "DiaryEditor">
        <h2>일기장 만들기</h2>
        <div>
            <input
                name="author" 
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
            value={state.content} 
            onChange={handleChangeState}
            />
        </div>
    </div>
    );
};
export default DiaryEditor;