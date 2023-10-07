import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} py={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={"center"} >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email here...."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />

            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={' 0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white ']}
          borderRight={['none', '1px solid white ']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text> All rights recieved </Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={"blank"} href="https://youtube.com/mdsohailahmed4720">Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={"blank"}  href="https://instagram.com/sohailpatel_09_">Instagarm</a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={"blank"}  href="https://github.com/sohailahmed53">Github</a>
          </Button>



        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
