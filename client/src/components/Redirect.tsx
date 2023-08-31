import React from 'react';
import { Heading, Image, Link, Stack } from '@chakra-ui/react';

import constructionGIF from '../assets/construction.gif';

const Redirect: React.FC = () => {
  return (
    <Stack
      h='100dvh'
      w='100dvw'
      bg='blackAlpha.900'
      alignItems='center'
      py='4rem'
      color='whiteAlpha.900'
      fontFamily='Poppins'
      gap='2rem'
    >
      <Heading>Under Construction!</Heading>
      <Image src={constructionGIF} />
      <Link isExternal href='https://v0.cjfritz.dev/'>
        👀 Take a sneak peek at the development build 👀
      </Link>
    </Stack>
  );
};

export default Redirect;
