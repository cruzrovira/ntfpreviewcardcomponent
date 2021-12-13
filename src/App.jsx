import { Flex, VStack, Image, Text, Divider, Link, Box } from "@chakra-ui/react"
import equilibrium from "./source/images/image-equilibrium.jpg"
import avatar from "./source/images/image-avatar.png"
import eth from "./source/images/icon-ethereum.svg"
import clock from "./source/images/icon-clock.svg"
import view from "./source/images/icon-view.svg"

function App() {
  return (
    <Flex
      bg="gray.900"
      w="100vw"
      minH="100vh"
      justifyContent="center"
      alignItems="flex-start"
      pt={5}
    >
      <VStack
        spacing={4}
        p={4}
        w="360px"
        boxShadow="md"
        rounded={4}
        alignItems="flex-start"
        bg="gray.800"
      >
        <Box position="relative">
          <Image src={equilibrium} rounded={4} />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            _hover={{
              backgroundColor: "rgba(0,255,247,0.1)",
              backgroundImage: view,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Box>
        </Box>

        <Text
          fontSize="lg"
          fontWeight="bold"
          color="hsl(178, 100%, 50%)"
          as="h1"
          cursor="pointer"
        >
          Equilibrium #3429
        </Text>
        <Text> Our Equilibrium collection promotes balance and calm.</Text>
        <Flex justifyContent="space-between" w="100%">
          <Flex alignItems="center">
            <Image src={eth} w={3} h={4} mr={2} />
            <Link href="https://es.wikipedia.org/wiki/Ethereum" target="_blank">
              <Text color="hsl(178, 100%, 50%)" cursor="pointer">
                0.041 ETH
              </Text>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Image src={clock} w={4} h={4} mr={2} />
            <Text>3 days left</Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex alignItems="center">
          <Image
            src={avatar}
            h={10}
            w={10}
            mr={2}
            borderColor="white"
            border="1px solid"
            rounded="full"
          />
          <Text>
            Creation of
            <Text as="span" color="hsl(178, 100%, 50%)" cursor="pointer">
              &nbsp; Jules Wyvern
            </Text>
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default App
