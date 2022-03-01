import React from "react";
import { extratoLista } from "../../info";
import Items from "../Items";
import { Botao, Box } from "../ui";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({id, type, from, value, date}) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date}/>
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
