import React from 'react';
import { AbcCard, abcCardProps } from '../component/AbcCard'
import Box from '@material-ui/core/Box';

export interface AbcContainerProps {
  title: string,
  items: abcCardProps[]
}


export const AbcContainer = (props: AbcContainerProps) => {
  return (
    <div >
      <h5>{props.title}</h5>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        p={5} m={5}
        bgcolor="background.paper">
        {props.items.map(item => {
          return <AbcCard image={item.image} lang={item.lang} word={item.word} />
        })}
      </Box>
    </div>
  );
}
