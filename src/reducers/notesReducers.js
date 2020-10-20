
/* 
    notes: [],
    active: null(activo por defecto sera null, 
        para cambiar el estado hay que inicializar la nota)
    active: {
        id: '',
        body: '',
        imagenUrl: '',
        date: ''
    }

*/

import { types } from "../types/types";


//estado incial

const inicialState = {
    notes: [],
    active: null
}
export const notesReducers = (state = inicialState, action) => {

    switch (action.type) {

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,

                notes: [...action.payload]

            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        default:
            return state;
    }


}
// una vez terminado el reducer hay que enviar el reducer al store donde se encuentra todo el
// estado de las apps