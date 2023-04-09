import React, { useEffect, useState } from "react";
import FlowerForm from './FlowerForm';
import { db } from '../firebase';
import {toast} from 'react-toastify';


const FlowerList = () => {

    const [flores, setFlores] = useState([]);

    const addFlower = async (elementoDelFormulario) => {
        await db.collection('registros').doc().set(elementoDelFormulario)
        toast('Cargaste una flor con exito', {
            type:'success',
            position: "top-center",
            theme: 'dark',
            autoClose: 2000
        })
    }

    const getData = async () => {
        db.collection('registros').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setFlores(docs);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="col-md">
                <FlowerForm addFlower={addFlower} />
            </div>
            <div className="d-flex flex-wrap md-8 p-2">
                {flores.map(flor => (
                    <div className="card" key={flor.id}>
                        <div className="d-flex card-body md-8 p-2">
                                <span className="material-symbols-outlined">deceased</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FlowerList;