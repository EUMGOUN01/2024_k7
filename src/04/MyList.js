import MyListData from "./MyListData.json";
import MyListitem from "./MyListitem";

export default function(){
    console.log(MyListData)

    const tags = MyListData.map(item => 
                                    <MyListitem title ={item.title}
                                                imgUrl ={item.imgUrl} 
                                                content = {item.content}/>)
    
    return(
        <div className="grid grid-cols-2 gap-3">
            {tags}
        </div>
    )
}