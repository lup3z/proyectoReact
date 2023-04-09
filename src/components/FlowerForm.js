import React, {useState} from "react";
import {toast} from 'react-toastify';


const FlowerForm = (props) => {

    const initialStateValue = {
        nombre:""
    };

    const [value, setValue] = useState(initialStateValue);

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setValue({ ...value, [name]: value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!value.nombre){
            toast('Ingrese un nombre', {
                type:'warning',
                position: "top-center",
                theme: 'dark',
                autoClose: 2000

            })
        }else{
        props.addFlower(value);
        setValue({...initialStateValue})
    }
    };

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group p-4">
                <div className="input-group-text bg-ligth">
                    <i className="material-icons">edit</i>
                </div>
                <input type="text"
                 className="form-control"
                 placeholder="Ingrese el nombre"
                 name="nombre"
                 onChange={handleInputChange}
                 value={value.nombre}
                 />
            </div>


        <button className="btn btn-primary btn-block">
            Guardar la flor
        </button>
        </form>

    )
};

export default FlowerForm