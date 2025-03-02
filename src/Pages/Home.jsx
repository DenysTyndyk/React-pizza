import React from "react";
import {Categories, SortPoPup,Pizza_block} from "../Components";

const Home = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Meat',
                    'Vegetarian',
                    'Grill',
                    'Spicy',
                    'Closed'
                ]}/>
                <SortPoPup items={['popularity',
                    'price',
                    'alphabet'
                ]}/>
            </div>
            <h2 className="content__title">All the pizzas</h2>
            <div className="content__items">
                {
                    items.map((item) => (
                        <Pizza_block key={item.id} {...item} />
                    ))
                }

            </div>
        </div>
    )
}
export default Home;