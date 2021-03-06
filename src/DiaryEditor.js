import {useRef, useState} from "react";
import App from "./App.css";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"", 
        content:"",
        emotion: 3,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("일기가 작성되었습니다.")
    }

    return(
        <div className = "DiaryEditor">
        <h2>일기장 만들기</h2>
        <div>
            <input
                ref={authorInput}
                name="author" 
                type="text"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
                ref={contentInput}
                name="content"
                type="text"
                value={state.content} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <select 
                name="emotion" 
                value={state.emotion}
                onChange={handleChangeState}
            >           
                <option value={1}>매우 별로</option>
                <option value={2}>별로</option>
                <option value={3}>그럭저럭</option>
                <option value={4}>좋음</option>
                <option value={5}>매우 좋음</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>추가하기</button>
        </div>
    </div>
    );
};
export default DiaryEditor;