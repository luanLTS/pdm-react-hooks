import { Accordion } from './Accordion';
// esta definido fora do app pois não precisa ser avaliado toda vez que a tela for renderizada
const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada.',
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretada e dinamicamente tipada.',
  },
  {
    titulo: 'Javascript',
    conteudo: 'Interpretada, executa do lado cliente ou servidor',
  },
];

export const App = () => {
  return (
    <div>
      <Accordion itens={itens} />
    </div>
  );
};
