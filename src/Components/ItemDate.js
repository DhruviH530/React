import './ItemDate.css';


function ItemDate(props){
        const day = props.day;
        const month = props.monnth;
        const year = props.year;
     
    return(
        <div className='date'>
            <span >{day}</span>
            <span >{month}</span>
            <span >{year}</span>
        </div>
    );
}
 

export default ItemDate;