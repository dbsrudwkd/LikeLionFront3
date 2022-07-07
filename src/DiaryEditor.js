import {useState} from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author:"", 
        content:"",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
    }

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
            name="content"
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