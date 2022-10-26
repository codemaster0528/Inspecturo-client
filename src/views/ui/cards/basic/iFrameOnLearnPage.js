import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const FrameOnLearn = () => {
  const [dataFromAPI, setDataFromAPI] = useState([])

  useEffect(() => {
    if (dataFromAPI.length != 0) return
    getDataFromAPI()
  })

  const getDataFromAPI = async () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('ascout_keyValue', 'zD3BVPtyimdhrNBX5')
    urlencoded.append('regionId', '1')

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }

    fetch('http://161.35.118.186/mkulima/fursa', requestOptions)
      .then(response => response.json())
      .then(result => {
        setDataFromAPI(result.data)
      })
      .catch(error => console.log('error', error))
  }

  return (
    <Card sx={{ position: 'relative', height: 650 }}>
      <CardContent>
        <Box>
          <Box sx={{ mr: 2, mb: 6, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'> LEARN HOW TO MAKE MORE MONEY ON TURO</Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <iframe src='https://example.com/' height='570' frameBorder='0' />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FrameOnLearn
