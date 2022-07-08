import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {
  Link,
} from "@chakra-ui/react"

function Home() {
  return (
    <>
    <div>Home</div>
    <RouterLink to="/register"><Link>Register </Link></RouterLink>
    <RouterLink to="/dashboard"><Link>Dashboard </Link></RouterLink>
    <RouterLink to="/login"><Link>Login </Link></RouterLink>
    </>
  )
}

export default Home