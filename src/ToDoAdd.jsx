import './App.css'
import React, {useState} from 'react'
import ToDosService from './services/ToDos'

const ToDoAdd = ({setLisäystila}) => {

    // Komponentin tilan määritys

    const [newTask, setNewTask] = useState ('')
    const [newDate, setNewDate] = useState ('')
    const [newInfo, setNewInfo] = useState ('')
    const [newCompleted, setNewCompleted] = useState ('')

    //onSubmit tapahtumankäsittelijä -funktio
    const handleSubmit = (event) => {
        event.preventDefault()
        var uusiTehtava = {
            task: newTask,
            date: newDate,
            info: newInfo,
            completed: newCompleted
        }
       ToDosService.create(uusiTehtava)
       .then(response => {
        if (response.status === 200) {
            alert("Lisätty uusi tehtävä: " + uusiTehtava.task)
            setLisäystila(false)
        }
    })
        .catch(error => {
         alert("Error")
     })
       }

    
    return(
        <div id="addNew">
 
        <h2>Lisätään tämä listalle, niin on vähemmän muistettavaa!</h2>

        <form onSubmit={handleSubmit}>
            <div>
            <input type='text' value={newTask} onChange={({target}) => setNewTask(target.value)} placeholder='tehtävä'/>
            </div>
            <div>
            <input type='text' value={newDate} onChange={({target}) => setNewDate(target.value)} placeholder='deadline'/>
            </div>
            <div>
            <input type='text' value={newInfo} onChange={({target}) => setNewInfo(target.value)} placeholder='lisätiedot' />
            </div>
            <div>
            <input type='text' value={newCompleted} onChange={({target}) => setNewCompleted(target.value)} placeholder='"true" tai "false"'/>
            </div>
            <input type='submit' value='Save' />
            <input type='button' value='Peruuta' onClick={() => setLisäystila (false)} />

        </form>

        </div>
        
    )

}

export default ToDoAdd

