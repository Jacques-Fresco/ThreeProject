import { createStore } from 'redux';

// Начальное состояние
const initialState = {
  verticalPosition: 0 // Начальное вертикальное положение экрана
};

// Редуктор для управления состоянием
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VERTICAL_POSITION':
      return { ...state, verticalPosition: action.payload };
    default:
      return state;
  }
};

// Создаем хранилище Redux
const store = createStore(rootReducer);

export default store;