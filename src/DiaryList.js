import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
    console.log(diaryList);
    return (
        <div className='DiaryList'>
            <h2>Diary List</h2>
            <h4>일기가 {diaryList.length}개 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;