import { Box } from '@mui/material'
import React from 'react'

console.log(import.meta.env.VITE_API_KEY)

const Weather = () => {
  return (
    <>
      <Box sx={{
          marginTop: "64px", // 64px cada barra
        }}>Weather</Box>
    </>
  )
}

export default Weather
