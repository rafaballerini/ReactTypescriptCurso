import React, { Component } from 'react';

class Form extends Component{
    render(){
        return (
            <form>
                <div className="inputContainer">
                    <label htmlFor="tarefa">Nova tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você estudará?"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo" placeholder="00:00"/>
                </div>
                <button type="submit" style={{ display: 'none'}}>Confirmar Tarefa</button>
            </form>
        )
    }
}

export default Form;