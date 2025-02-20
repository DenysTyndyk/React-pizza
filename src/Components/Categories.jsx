import React from 'react'


// class Categories extends React.Component{
//
//     state = {
//         activeItem: 3,
//     };
//
//     onSelectItem = (index) =>{
//         this.setState({activeItem: index});
//     }
//     render(){
//         const {items , onClickItem} = this.props;
//         return (
//         <div className="categories">
//             <ul>
//                 <li className="active">All</li>
//                 {items.map((name , index) => (<li
//                     className={this.state.activeItem === index ? 'active' : ''}
//                     onClick={() => this.onSelectItem(index)}
//                     key={`${name}_${index}`}>{name}</li>))}
//
//             </ul>
//         </div>
//     )
//     }
// }




const Categories = ({items}) => {
    const [ActiveItem,SetActiveItem] =React.useState(null);
    function onSelectItem(index){
         SetActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={ActiveItem === null ? 'active' : ''} onClick={() =>SetActiveItem(null) } >All</li>
                {items && items.map((name , index) => (<li onClick={() => onSelectItem(index) } className={ActiveItem === index ? 'active' : ''} key={`${name}_${index}`}>{name}</li>))}

            </ul>
        </div>
    )
}
export default Categories