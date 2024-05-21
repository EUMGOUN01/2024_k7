import TailButton from '../UI/TailButton' ;
export default function TrafficNav({title, category, sel, setSel}) {
  const handleBtClick = (item) => {
    setSel(item) ;
  }
  
  const bts = category.map(item => 
      <TailButton caption = {item}
                  color = {item === sel ? "red" :"blue"}
                  key = {item}
                  handleClick ={() => handleBtClick(item)} />
  );  
  
  return (
    <div className="w-full flex justify-start items-start my-5">
          <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 
                          md:grid-cols-2 lg:grid-cols-4 gap-2">
        {bts}
      </div>
    </div>
  )
}