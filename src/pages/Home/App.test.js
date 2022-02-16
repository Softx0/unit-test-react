import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
jest.mock('axios');

describe('App Test Suite', () => {

  beforeEach(() => {
    render(<App />);
    axios.get.mockClear();
  });

  const getFakeResponse = ({ expectedDefinition }) => ({
    data: [{
      meanings: [{
        definitions: [{
          definition: expectedDefinition
        }]
      }]
    }]
  })

  const fillFormAndSubmit = () => {
    const inputEl = screen.getByLabelText(/word/i);
    const btnEl = screen.getByRole('button', { name: /definicion/i });

    fireEvent.change(inputEl, { target: { value: 'casa' } });
    fireEvent.click(btnEl);
  }

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
  it(`should render element's form`, () => {

    // buscando por el label correspondiente a un input
    const inputEl = screen.getByLabelText(/Word/i);
    expect(inputEl).toBeInTheDocument();

    const btnEl = screen.getByRole('button', { name: /definicion/i });
    expect(btnEl).toBeInTheDocument();
  });

  it('should search a word', async () => {
    const expectedDefinition = 'Construcción cubierta destinada a ser habitada';
    axios.get.mockReturnValueOnce(getFakeResponse({ expectedDefinition }));

    fillFormAndSubmit();

    const wordMeaning = await screen.findAllByText(expectedDefinition);
    expect(wordMeaning[0]).toBeInTheDocument();
  });

  it('should dissapear loading message when search is finish', async () => {
    const expectedDefinition = 'Construcción cubierta destinada a ser habitada';
    axios.get.mockReturnValueOnce(getFakeResponse({ expectedDefinition }));

    fillFormAndSubmit();

    const loadingEl = screen.getByText(/loading/i);
    expect(loadingEl).toBeInTheDocument();

    await screen.findAllByText(expectedDefinition);

    const loadingElExpetec = screen.queryByText(/loading/i);
    expect(loadingElExpetec).not.toBeInTheDocument()
  });

});