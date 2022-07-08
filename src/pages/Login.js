import React from 'react'
import {Link as ReachLink, useNavigate} from 'react-router-dom'
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

function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [login, setLogin] = React.useState(false)
  const toast = useToast()
  const navigate = useNavigate()


  function register (event) {
    event.preventDefault()

    setLogin(true)


    // Replace the logic with the Backend Validation.
    setTimeout( () => {
      setLogin(false)

      toast({
        title: 'Welcome Back!',
        description: "We're happy to see you again.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })

      setTimeout( () => {
        navigate('/dashboard')
      },4000)
      
    }, 4000)

  }

  return (
    <Box w='100vw' h='100vh' display='flex' style={{backgroundImage: 'linear-gradient(160deg, #0c669a 0%, #26e6d1 100%)'}}>

      <Box maxWidth='2xl' maxH='4xl' m='auto' borderWidth={1} borderRadius={10} shadow='dark-lg' px={'10'} py={'16'} bg='white' >
        <Text color='gray.500' casing='uppercase'>Welcome Back</Text>
        
        <Heading fontSize='4xl'>
          Enter your account
          <Text as={'span'} color='cyan.400' fontSize='5xl' fontWeight='extrabold' ml='1'>
            .
          </Text>
        </Heading>

        <form onSubmit={register}>
        <Box mt={3} w={'100%'} >
            <Text mb={'-3'} opacity={0.5} fontSize={'10'}>Email</Text>
            <Input variant={'flushed'} value={email} onChange={(e)=>{setEmail(e.target.value)}} type={'email'} isRequired _focus={{borderColor: 'cyan.400'}} color='cyan.800'/>
        </Box>
        <Box mt={3} w={'100%'} >
          <Text mb={'-3'} opacity={0.5} fontSize={'10'}>Password</Text>
          <InputGroup>
          <Input variant={'flushed'} value={password} onChange={(e)=>{setPassword(e.target.value)}} type={showPassword ? 'text' : 'password'} isRequired  _focus={{borderColor: 'cyan.400'}} color='cyan.800'/>
          <InputRightElement>
          <IconButton variant={'unstyled'} color={'cyan.800'} icon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />} onClick={()=>{setShowPassword(!showPassword)}} />
          </InputRightElement>
          </InputGroup>
        </Box>
        <Box w={'100%'} mt={'8'}>
        <Button w={'47%'} colorScheme='gray' mr={'6%'}  shadow={'base'} >Go back</Button>
        <Button w={'47%'} colorScheme='cyan' shadow={'base'} color={'gray.900'} isLoading={login ? true : false} type='submit'>Continue</Button>
        </Box>
        <Text textAlign={'center'} mt={'5'}>Are you new? <Link color='cyan.400' as={ReachLink} to={'/register'}>Create Account</Link></Text>
        </form>
      </Box>
      
    </Box>
  )
}

export default Login