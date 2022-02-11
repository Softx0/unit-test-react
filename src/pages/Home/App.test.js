import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {

  beforeEach(() => {
    render(<App />)
  });

  test('renders Free Disctionary title', () => {
    // screen.debug(); // para debugear y ver el componente a renderizar

    // la i es de ignoreCase
    const linkElement = screen.getByText(/react/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Differents types of queries
  // Para consulta de elementos asincronos
  // screen.findAllByText();

  // Para consultas sincronas, pero si no existen da error. 
  // Util para momentos que sabemos que deberian existir en la app
  // screen.getAllByText();

  // Para consultar elementos que pueden estar o no estar en el DOM, si no existe retorna null pero no da error
  // screen.queryAllByText();


  // Nota: dejar las pruebas los planas posibles, y single responsability
  test(`should render element's form`, () => {

    // buscando por el label correspondiente a un input
    const inputEl = screen.getByLabelText(/Word/i);
    expect(inputEl).toBeInTheDocument();

    const btnEl = screen.getByRole('button', { name: /definicion/i });
    expect(btnEl).toBeInTheDocument();
  });



  

});