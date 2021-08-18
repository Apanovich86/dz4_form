import {useEffect, useState} from "react";
import {getCars, saveCar} from "../services/car.service"
import Car from "../car/Car";
import Cars from "../get.car/Cars";
//
export default function ControlledForm() {
//     // let [model, setModel] = useState('model');
//     // let [price, setPrice] = useState('price');
//     // let [year, setYear] = useState('year');
//     // let [car, setCar] = useState({model: '', price: '', year});
//     // const onSubmitForm = (e) => {
//     //     e.preventDefault();
//     //     let tempCar = {model, price, year};
//     //     setCar({...tempCar});
//     //     saveCar(tempCar);
//     // }
//     // const onInputChangeModel = (e) => {
//     //     let carmodel = e.target.value;
//     //     setModel(carmodel);
//     // }
//     // const onInputChangePrice = (e) => {
//     //     let price = e.target.value;
//     //     setPrice(price);
//     // }
//     // const onInputChangeYear = (e) => {
//     //     let year = e.target.value;
//     //     setYear(year);
//     // }
     return (
       <div>
             {/*<form onSubmit={onSubmitForm}>*/}
             {/*    <input type="text" name={'model'} value={model} onInput={onInputChangeModel} maxLength={20}/>*/}
             {/*    <input type="number" name={'price'} onInput={onInputChangePrice} min={0}/>*/}
             {/*    <input type="number" name={'year'} onInput={onInputChangeYear} min={1990} max={2021}/>*/}
             {/*    <input type="submit" value={'save'}/>*/}
             {/*</form>*/}
             <h3>Cars:</h3>
             <Cars/>
         </div>
     )
}