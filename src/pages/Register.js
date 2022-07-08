import React from 'react'
import {Link as RouteLink, useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react'
import { 
  FaRegEye,
  FaRegEyeSlash,
 } from "react-icons/fa";

function Register() {

  const [name, setName] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [creatingAccount, setCreatingAccount] = React.useState(false)
  const toast = useToast()
  const navigate = useNavigate()


  function register (event) {
    event.preventDefault()

    setCreatingAccount(true)

    setTimeout( () => {
      setCreatingAccount(false)

      toast({
        title: 'Welcome!',
        description: "We've created your account for you.",
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-right',
      })

      setTimeout( () => {
        navigate('/dashboard')
      },2000)
      
    }, 4000)

  }

  return (
    <Box w='100vw' h='100vh' display='flex' style={{backgroundImage: 'linear-gradient(160deg, #0c669a 0%, #26e6d1 100%)'}}>

      <Box maxWidth='2xl' maxH='4xl' m='auto' borderWidth={1} borderRadius={10} shadow='md' px={'10'} py={'16'} bg='white' >
        <Text color='gray.500' casing='uppercase'>Start for free</Text>
        
        <Heading fontSize='4xl'>
          Create a new account
          <Text as={'span'} color='cyan.400' fontSize='5xl' fontWeight='extrabold' ml='1'>
            .
          </Text>
        </Heading>

        <form onSubmit={register}>
        <Box display='flex' w={'100%'} mt={'6'}>
          <Box mt={3} mr={'6%'} w={'47%'} >
            <Text mb={'-3'} opacity={0.5} fontSize={'10'} >Name</Text>
            <Input variant={'flushed'} value={name} onChange={(e)=>{setName(e.target.value)}} type={'text'} isRequired />
          </Box>
          <Box mt={3} w={'47%'} >
            <Text mb={'-3'} opacity={0.5} fontSize={'10'}  >Lastname</Text>
            <Input variant={'flushed'} value={lastname} onChange={(e)=>{setLastname(e.target.value)}} type={'text'} isRequired/>
          </Box>
        </Box>
        <Box mt={3} w={'100%'} >
            <Text mb={'-3'} opacity={0.5} fontSize={'10'}  >Email</Text>
            <Input variant={'flushed'} value={email} onChange={(e)=>{setEmail(e.target.value)}} type={'email'} isRequired/>
        </Box>
        <Box mt={3} w={'100%'} >
          <Text mb={'-3'} opacity={0.5} fontSize={'10'}  >Password</Text>
          <InputGroup>
          <Input variant={'flushed'} value={password} onChange={(e)=>{setPassword(e.target.value)}} type={showPassword ? 'text' : 'password'} isRequired/>
          <InputRightElement>
          <IconButton variant={'unstyled'} color={'cyan.400'} icon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />} onClick={()=>{setShowPassword(!showPassword)}} />
          </InputRightElement>
          </InputGroup>
        </Box>
        <Box w={'100%'} mt={'8'}>
        <Button w={'47%'} colorScheme='gray' mr={'6%'}  shadow={'base'} >Cancel</Button>
        <Button w={'47%'} colorScheme='cyan' shadow={'base'} color={'gray.900'} isLoading={creatingAccount ? true : false} type='submit'>Create Account</Button>
        </Box>
        <Text textAlign={'center'} mt={'5'}>Already a member? <Link color='cyan.400'> <RouteLink to='/login'>Log In</RouteLink></Link></Text>
        </form>
      </Box>
      
    </Box>
  )
}

export default Register