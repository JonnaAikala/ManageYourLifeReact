import './App.css'
import React, {useState, useEffect} from 'react'
import ToDosService from './services/ToDos'
import ToDoAdd from './ToDoAdd'

const ToDolist = () => {

    // Komponentin tilan määritys
    const [todos, setTodos] = useState ([])
    const [showToDos, setShowToDos] = useState (false)
    const [lisäystila, setLisäystila] = useState (false)
   
    useEffect( () => {
        ToDosService.getAll()
        .then(data => {
            setTodos(data)
        })
    },[lisäystila]
    )
    return(
        <>
        <h2><nobr style={{ cursor: 'pointer' }} className="todootsikko"
        onClick={() => setShowToDos(!showToDos)}>TO DO -lista</nobr>

        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Uusi tehtävä</button>}</h2>

        {lisäystila && <ToDoAdd setLisäystila={setLisäystila} />}


        {showToDos && todos && todos.map(t =>
        <div className="todolist" key={t.id}>
            <table>
                <thead>
                     <tr>
                        <th className="rivi">Tehtävän koodi</th>
                        <th className="rivi">Tehtävä</th>
                        <th className="rivi">Deadline</th>
                        <th className="rivi">Lisätiedot</th>
                        <th className="rivi">Suoritettu</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td className="rivi">{t.id}</td>
                        <td className="rivi">{t.task}</td>
                        <td className="rivi">{t.date}</td>
                        <td className="rivi">{t.info}</td>
                        <td className="rivi">{t.completed.toString()}</td>
                    </tr>
                 </tbody>
            </table>
        </div>
        ) //Loopataan oliot läpi ja asetetaan mitä tehdään yksittäiselle oliolle
        }
        </>
        
    )

}

export default ToDolist

