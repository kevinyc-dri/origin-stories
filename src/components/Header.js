import React from 'react'
import { Stack, HStack, Link, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <div>
      <Stack as="nav" mt="41" ml="20" mr="30"  direction={["row"]} spacing={8} justifyContent="space-between">
        <Image src="Rectangle.png" alt="Raid Guild" />
        <Link>Manifesto</Link>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>Join</Link>
        <Link>Hire</Link>
      </Stack>
      <Stack>
        <Image src="01_header.jpg" alt="Header Image" m="30" ml="20" mr="20" />
      </Stack>
      <Stack mt="118.11">
        <h1>SUBHEAD EXPLAINING THE PROJECT LORUM IPSUM ETSI DOLOR</h1>
      </Stack>
      <HStack>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus facilisis diam at donec feugiat. Et elementum tristique risus, ut arcu. Nibh scelerisque turpis scelerisque ultrices non. Duis sem arcu bibendum pellentesque quis tincidunt eget. Porttitor eget vulputate ultricies neque. Non at mauris pharetra, ut. Ipsum commodo varius aliquet quis magna tristique in justo feugiat. Maecenas ultricies ullamcorper facilisis lacus bibendum. Auctor eu feugiat est ornare nullam libero lacus adipiscing. Euismod et leo nam elementum eros mauris egestas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus facilisis diam at donec feugiat. Et elementum tristique risus, ut arcu. Nibh scelerisque turpis scelerisque ultrices non. Duis sem arcu bibendum pellentesque quis tincidunt eget. Porttitor eget vulputate ultricies neque. Non at mauris pharetra, ut. Ipsum commodo varius aliquet quis magna tristique in justo feugiat. Maecenas ultricies ullamcorper facilisis lacus bibendum. Auctor eu feugiat est ornare nullam libero lacus adipiscing. Euismod et leo nam elementum eros mauris egestas.</p>
      </HStack>
    </div>
  )
}
