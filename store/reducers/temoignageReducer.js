
//1- Les actions (qui modifient le store)

const ADD_TEMOIGNAGE= 'ADD_TEMOIGNAGE'
const DELETE_TEMOIGNAGE = 'DELETE_TEMOIGNAGE'
const UPDATE_TEMOIGNAGE = 'UPDATE_TEMOIGNAGE'
const LIST_TEMOIGNAGE = 'LIST_TEMOIGNAGE'
const CURRENT_TEMOIGNAGE = 'CURRENT_TEMOIGNAGE'

//2 - Createurs d'actions (retournent un objet)

export const addTemoignage = (user) => ({ type: ADD_TEMOIGNAGE, payload: user })

export const updateTemoignage = (user, id) => ({ type: UPDATE_TEMOIGNAGE, payload: { user, id } })

export const deleteTemoignage = id => ({ type: DELETE_TEMOIGNAGE, payload: { id } })

export const getAllTemoignage = (users) => ({ type: LIST_TEMOIGNAGE, payload: users })

export const getTemoignage = id => ({ type: CURRENT_TEMOIGNAGE, payload: { id } })


// Le reducteur pour les etudiants

// --Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    temoignages: [],
    temoignage: {}
}

// Faites attention aux comparaison == et === car les types son differents des fois
export const temoignageReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_TEMOIGNAGE:
            return { ...state, users: payload }
        case CURRENT_TEMOIGNAGE:
            return { ...state, user: state.users.find(user => user.id === payload.id) }

        case ADD_TEMOIGNAGE:
            return { ...state, users: [...state.users, payload] }

        case UPDATE_TEMOIGNAGE:
            return { ...state, users: state.users.map(user => user.id == payload.id ? payload.user : user) }

        case DELETE_TEMOIGNAGE:
            return { ...state, users: state.users.filter(user => user.id !== payload.id) }

        default:
            return state
    }
}
