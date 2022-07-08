import "./App.css";
import DiaryEditor from './DiaryEditor';
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

// const dummyList = [
//   {
//     id:1,
//     author:"나",
//     content:"지금 아침 6시야,,,",
//     emotion:3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"나",
//     content:"지금 아침 6시야,,,",
//     emotion:3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"나",
//     content:"지금 아침 6시야,,,",
//     emotion:3,
//     created_date: new Date().getTime(),
//   }
// ]

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, 
      content, 
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data}/>
    </div>
  );
};

export default App;