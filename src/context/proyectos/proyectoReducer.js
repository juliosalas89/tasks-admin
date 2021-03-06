import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    ERROR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types';

const proyectoReducer = (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true,
                errorform: false
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorform: false,
                proyecto: action.payload
            }
        case ERROR_FORMULARIO:
            return {
                ...state,
                errorform: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyectoActual: action.payload
            }
            case ELIMINAR_PROYECTO:
                return {
                    ...state,
                    proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                    proyectoActual: null
                }
            case PROYECTO_ERROR:
                return {
                    ...state,
                    mensaje: action.payload
                }
        default:
            return state
    }
}

export default proyectoReducer;