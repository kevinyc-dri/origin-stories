import React from 'react'
import { Stack, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <div>
      <Stack as="nav" direction={["row"]} spacing={8} justifyContent="space-between">
        <Heading justifyContent="left">Raid Guild</Heading>
        <div>Manifesto</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Join</div>
        <div>Hire</div>
      </Stack>
    </div>
  )
}
