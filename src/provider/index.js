import React, {useState} from 'react';

export const DataContext = React.createContext();

const Provider = ({children}) => {
  const [itemsCheckout, setItemsCheckout] = useState([]);
  return (
    <DataContext.Provider
      value={{
        itemsCheckout,
        adicionarItem: (novoItem) => {
          let copiaItemsCheckout = [...itemsCheckout];
          let itemFiltrado = copiaItemsCheckout.find(
            (itemsCheckout) => itemsCheckout.id === novoItem.id,
          );
          if (itemFiltrado) {
            itemFiltrado.quantidade = itemFiltrado.quantidade + 1;
          } else {
            novoItem.quantidade = 1;
            copiaItemsCheckout = [...copiaItemsCheckout, novoItem];
          }
          setItemsCheckout(copiaItemsCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;