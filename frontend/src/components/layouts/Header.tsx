import React from 'react';

import {
  Flex,
  chakra,
  useColorMode,
  useColorModeValue,
  IconButton,
  Heading,
  Link,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      color="current"
      fontSize="lg"
      icon={<SwitchIcon />}
      marginLeft="2"
      size="md"
      variant="ghost"
      onClick={toggleColorMode}
    />
  );
};

const HeaderContent = () => {
  return (
    <>
      <Flex align="center" h="100%" justify="space-between" px="6" w="100%">
        <Flex align="center">
          <Link href="/">
            <Heading size="xl">Comsociety</Heading>
          </Link>
        </Flex>
        <Flex justify="flex-end">
          <ToggleColorModeButton />
        </Flex>
      </Flex>
    </>
  );
};

const Header: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const ref = React.useRef<HTMLHeadingElement>(null);
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      bg={bg}
      left="0"
      pos="sticky"
      right="0"
      shadow={y > height ? 'sm' : undefined}
      top="0"
      transition="box-shadow 0.2s, background-color 0.2s"
      width="full"
      zIndex="3"
    >
      <chakra.div height="4.5rem" maxW="1200px" mx="auto">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;
