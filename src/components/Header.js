import React from 'react'
import { Stack, HStack, Link, Image, Box } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <HStack as="nav" mt="41" ml="20" spacing={8} justifyContent="space-between">
        <Image src="Rectangle.png" alt="Raid Guild" />
        <Link>Manifesto</Link>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>Join</Link>
        <Link>Hire</Link>
      </HStack>
      <Stack>
        <Image src="01_header.jpg" alt="Header Image" />
      </Stack>
      <Stack mt="118.11" mb="40">
        <h1>SUBHEAD EXPLAINING THE PROJECT LORUM IPSUM ETSI DOLOR</h1>
      </Stack>
      <HStack color='#FFFFFF'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus facilisis diam at donec feugiat. Et elementum tristique risus, ut arcu. Nibh scelerisque turpis scelerisque ultrices non. Duis sem arcu bibendum pellentesque quis tincidunt eget. Porttitor eget vulputate ultricies neque. Non at mauris pharetra, ut. Ipsum commodo varius aliquet quis magna tristique in justo feugiat. Maecenas ultricies ullamcorper facilisis lacus bibendum. Auctor eu feugiat est ornare nullam libero lacus adipiscing. Euismod et leo nam elementum eros mauris egestas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus facilisis diam at donec feugiat. Et elementum tristique risus, ut arcu. Nibh scelerisque turpis scelerisque ultrices non. Duis sem arcu bibendum pellentesque quis tincidunt eget. Porttitor eget vulputate ultricies neque. Non at mauris pharetra, ut. Ipsum commodo varius aliquet quis magna tristique in justo feugiat. Maecenas ultricies ullamcorper facilisis lacus bibendum. Auctor eu feugiat est ornare nullam libero lacus adipiscing. Euismod et leo nam elementum eros mauris egestas.</p>
      </HStack>

      <HStack justifyContent="space-between">
        <Image boxSize="355px" src="01.png" alt="01" />
        <Image boxSize="355px" src="02.png" alt="02" />
        <Image boxSize="355px" src="03.png" alt="03" />
      </HStack>
        <HStack justifyContent="space-between">
        <Image boxSize="355px" src="04.png" alt="04" />
        <Image boxSize="355px" src="05.png" alt="05" />
        <Image boxSize="355px" src="06.png" alt="06" />
      </HStack>
        <HStack justifyContent="space-between">
        <Image boxSize="355px" src="07.png" alt="07" />
        <Image boxSize="355px" src="08.png" alt="08" />
        <Image boxSize="355px" src="09.png" alt="09" />
      </HStack>
    </>
  )
}
