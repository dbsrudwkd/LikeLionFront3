import {useState} from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author:"", 
        content:"",
    });

    return(
        <div className = "DiaryEditor">
        <h2>일기장 만들기</h2>
        <div>
            <input
                name="author" 
                value={state.author} 
                onChange={(e)=> {
                    setState({
                        ...state,
                        author: e.target.value,
                    });
                }}
            />
        </div>
        <div>
            <textarea
            value={state.content} 
            onChange={(e)=> {
                setState({
                    content: e.target.value,
                    author: state.author,
                });
            }}
            />
        </div>
    </div>
    );
};
export default DiaryEditor;