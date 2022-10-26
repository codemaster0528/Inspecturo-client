import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const FrameOnLocation = () => {
  const [dataFromAPI, setDataFromAPI] = useState([
    {
      locationOpportunitiesId: 1,
      regionId: 1,
      locationOpportunitiesStatus: 'ACTIVE',
      locationOpportunitiesUrl: 'https://example.com',
      dateTimeAdded: '2022-09-15 17:41:43'
    }
  ])

  useEffect(() => {
    if (dataFromAPI.length != 1) return
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
            <Typography variant='h6'>POTENTIAL OPPORTUNITIES & QUICK WINS</Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <iframe src={dataFromAPI[0].locationOpportunitiesUrl} height='570' frameBorder='0' />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FrameOnLocation
