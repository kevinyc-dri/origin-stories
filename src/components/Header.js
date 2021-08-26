import React from 'react'
import { Stack, VStack, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <div>
      <Stack as="nav" direction={["row"]} spacing={8} justifyContent="space-between">
        <Image src="Rectangle.png" alt="Raid Guild" />
          <div>Manifesto</div>
          <div>Services</div>
          <div>Portfolio</div>
          <div>Join</div>
          <div>Hire</div>
      </Stack>
      <VStack>
        <Image src="01_header.jpg" alt="Header Image"  />
      </VStack>
    </div>
  )
}
