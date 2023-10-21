import { Box } from '@mui/material';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import React from 'react';

const HomePage = () => {
  return (
    <Box
      sx={{
        // width: '550px',
        textAlign: 'center',
      }}
    >
      Welcome to Phonebook App
      <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
      tempora voluptate, qui quia corporis, cum modi inventore facilis ab sequi
      dolores? Facere tempora commodi iure veritatis sequi rerum. Incidunt quam
      reiciendis magnam laudantium officiis temporibus amet. Qui, at distinctio
      nihil itaque temporibus nemo hic, eos quo reprehenderit possimus eius
      excepturi. Aliquid, enim. Quis nihil molestias, quia velit eligendi
      doloribus numquam maiores quod cupiditate tempora aperiam quibusdam dicta
      illo veniam delectus! Est odio iure explicabo et ut delectus perspiciatis,
      culpa iusto enim ullam ab, sequi quod amet veniam modi. Consequuntur
      recusandae similique voluptatem totam odit accusamus eum fugit ipsa quia
      molestias?
      <br />
      <StyledNavLink to={'/login'}>Start</StyledNavLink>
    </Box>
  );
};

export default HomePage;
