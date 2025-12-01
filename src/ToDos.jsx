import './App.css'
import React, {useState, useEffect} from 'react'

const ToDos = () => {

    // Komponentin tilan määritys
    const [todos, setTodos] = useState ([])
   
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/todos") //Hakee datan typicodesta
        .then(res => res.json()) //aliasoidaan data nimelle "res" ja muutetaan jsonista javascriptiksi
        .then(oliot => setTodos(oliot)) //aliasoidaan js -oliot nimelle "oliot" ja asetetaan propsiksi

    }

    ,
    []
    )
    return(
        <>
        <h2>To Do -list</h2>
        {todos && todos.map(t =>
        <div className="todolist" key={t.id}>
        <h4>{t.id}</h4>
        <h5>{t.title}</h5>
        <h5>{t.completed.toString()}</h5>
        </div>
        ) //Loopataan oliot läpi ja asetetaan mitä tehdään yksittäiselle oliolle
        }
        </>
        
    )

}

export default ToDos

