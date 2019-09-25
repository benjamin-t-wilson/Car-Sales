import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { removeFeature, buyItem } from "./actions"; //imports action creators

//import connect from react-redux as it will affect both. This allows React to access information from Redux
import { connect } from "react-redux";

//Added props to function to be used by mapStateToProps
const App = props => {
  //Initial state commented out so I can use Redux
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   store: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item);
  };

  //In return, change state values to prop values
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store}  buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//Pass information from Redux state to the props of App, used in connect
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

//Exports the result of the connect function, using mapStateToProps as a callback, action creators as additional info, and App as the component
export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);
