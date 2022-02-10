import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {

  test('renders Free Disctionary title', () => {
    render(<App />);
    screen.debug(); // para debugear y ver el componente a renderizar

    // la i es de ignoreCase
    const linkElement = screen.getByText(/Hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Para consulta de elementos asincronos
  // screen.findAllByText();

  // Para consultas sincronas, pero si no existen da error. 
  // Util para momentos que sabemos que deberian existir en la app
  // screen.getAllByText();

  // Para consultar elementos que pueden estar o no estar en el DOM, si no existe retorna null pero no da error
  // screen.queryAllByText();

  test('differents types of query', () => {
    render(<App />);



  });

});