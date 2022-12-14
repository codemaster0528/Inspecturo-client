import React, { useState, useEffect } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import Paperclip from 'mdi-material-ui/Paperclip'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import PiggyBank from 'mdi-material-ui/PiggyBank'
import Star from 'mdi-material-ui/Star'
import Calendar from 'mdi-material-ui/Calendar'
import Account from 'mdi-material-ui/Account'

import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `0px solid ${theme.palette.divider}`
  }
}))

const CardMostPopularCar = () => {
  const [dataFromAPI, setDataFromAPI] = useState([
    {
      driverId: 2519,
      regionId: 1,
      driverKey: '722440',
      driverName: 'András S.',
      driverLat: '33.94457886026851',
      driverLong: '-118.37280606827956',
      driverState: 'CA',
      driverTrips: 13911,
      driverJoinDate: '2015-01-07',
      driverRating: '4.80',
      driverListingUrl: 'https://turo.com/drivers/722440',
      dateTimeModified: '2022-09-26 14:28:17',
      dateTimeAdded: '2022-09-12 12:48:34',
      driverInspecturoScore: 96.53320967443882,
      driverRevenue: '4740.12'
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

    fetch('http://161.35.118.186/mkulima/gari/safari', requestOptions)
      .then(response => response.json())
      .then(result => {
        result.data.sort(function (b, a) {
          return a.carTrips - b.carTrips
        })
        setDataFromAPI(result.data)
      })
      .catch(error => console.log('error', error))
  }

  return (
    <Card sx={{ height: 500 }}>
      <CardMedia sx={{ height: 150, width: 150, borderRadius: 40, margin: 'auto', mt: 5 }} image='/images/cars/1.png' />
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {dataFromAPI[0].carMake} {dataFromAPI[0].carModel} {dataFromAPI[0].carYear}
        </Typography>
        <Typography variant='body2' sx={{ mb: 4, fontWeight: 600 }}>
          Most Popular Car
        </Typography>
        <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
          {dataFromAPI[0].carTrips}
        </Typography>
        <Typography variant='body2' sx={{ mb: 4, fontWeight: 600 }}>
          Total Trips
        </Typography>
        <Typography variant='h6' sx={{ mb: 1 }}>
          <p style={{ visibility: 'hidden', height: 0, marginTop: 0 }}>CarMake CarModel CarYear</p>
          <Box sx={{ py: 1.25, mb: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <PiggyBank sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
            <Typography variant='body2'>
              {dataFromAPI[0].carCurrency} {dataFromAPI[0].carRevenue}
            </Typography>
          </Box>
          <Box sx={{ py: 1.25, mb: 1, display: 'flex' }}>
            <Star sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
            <Typography variant='body2'>{dataFromAPI[0].carRating}</Typography>
          </Box>
          <Box sx={{ py: 1.25, mb: 1, display: 'flex' }}>
            <Account sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
            <Typography variant='body2'>{dataFromAPI[0].DriverName}</Typography>
          </Box>
          <Box sx={{ py: 1.25, mb: 1, display: 'flex' }}>
            <Star sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
            <Typography variant='body2'>{dataFromAPI[0].DriverRating}</Typography>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardMostPopularCar
