// ** React Imports
import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import Grid from '@mui/material/Grid'
import { DataGridPro } from '@mui/x-data-grid-pro'
import Rating from '@mui/material/Rating'
import SwiperLoop from 'src/views/components/swiper/SwiperLoop'
import CardSnippet from 'src/@core/components/card-snippet'
import { useKeenSlider } from 'keen-slider/react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import CarDetailInfo from 'src/views/table/data-grid/TableCarDetailInfo'
import axios from 'axios'

// ** Global Values
import { SEARCH_RANKING_POST_URL, ASCOUT_KEYVALUE } from 'src/globalValues'

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
  if (row.carId) {
    const carImage = '1.png'

    // carImage = getCarImage(row.carId)
    // console.log('carImage = ' + carImage)

    return <CustomAvatar src={`/images/cars/${carImage}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.carMake ? row.carMake : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const getCarImage = carId => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  console.log('carId = ' + carId)

  fetch(`http://localhost:9118/getcarimage/?carMake=kia`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log('result : ' + result)

      return result
    })
    .catch(error => console.log('error', error))
}

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

function DetailPanelContent({ row: rowProp }) {
  const [ref] = useKeenSlider({
    loop: true,
    rtl: 'rtl'
  })

  var detailImages = [rowProp.carPhoto1, rowProp.carPhoto2, rowProp.carPhoto3, rowProp.carPhoto4, rowProp.carPhoto5]

  var detailInfo = [
    { id: 1, carFuelType: rowProp.carFuelType, carDoors: rowProp.carDoors, carDescription: rowProp.carDescription }
  ]

  return (
    <KeenSliderWrapper>
      <Grid container className='match-height'>
        <Grid item xs={12} sm={6}>
          <SwiperLoop direction='rtl' images={detailImages} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CarDetailInfo info={detailInfo} />
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

const TableSearchRanking = () => {
  // ** States
  const [pageSize, setPageSize] = useState(50)
  const [hideNameColumn, setHideNameColumn] = useState(false)
  const [dataFromAPI, setDataFromAPI] = useState([])

  const getDetailPanelContent = React.useCallback(({ row }) => <DetailPanelContent row={row} />, [])

  const getDetailPanelHeight = React.useCallback(() => 'auto', [])

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

    fetch('http://161.35.118.186/mkulima/gari/mkaguzi', requestOptions)
      .then(response => response.json())
      .then(result => {
        setDataFromAPI(result.data)
      })
      .catch(error => console.log('error', error))
  }

  const columns = [
    {
      flex: 0.15,
      minWidth: 150,
      field: 'CarName',
      headerName: '',
      hide: hideNameColumn,
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.carMake + ', ' + row.carModel}
              </Typography>
              <Typography noWrap variant='caption'>
                {row.carYear}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'Price',
      headerName: 'Price',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.carCurrency + ' ' + params.row.carPrice}
        </Typography>
      )
    },
    {
      flex: 0.05,
      field: 'Trips',
      minWidth: 80,
      headerName: 'Trips',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.carTrips}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'Rating',
      minWidth: 80,
      headerName: 'Rating',
      renderCell: params => (
        <Rating
          sx={{ color: '#593CFB' }}
          defaultValue={Number(params.row.carRating)}
          precision={0.1}
          name='half-rating'
          readOnly
        />
      )
    },
    {
      flex: 0.1,
      minWidth: 140,
      field: 'InspecturoScore',
      headerName: 'Inspecturo Score',
      renderCell: params => {
        let color = 'primany'
        if (params.row.carInspecturoScore <= 30) color = 'error'
        else if (params.row.carInspecturoScore <= 50) color = 'warning'
        else color = 'success'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.carInspecturoScore.toFixed(2)}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.05,
      field: 'Owner',
      minWidth: 80,
      headerName: 'Owner',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.DriverName}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'OwnerTrips',
      minWidth: 80,
      headerName: 'Owner Trips',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.DriverTrips}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'OwnerRating',
      minWidth: 80,
      headerName: 'Owner Rating',
      renderCell: params => (
        <Rating
          sx={{ color: '#593CFB' }}
          defaultValue={params.row.DriverRating}
          precision={0.1}
          name='half-rating'
          readOnly
        />
      )
    }
  ]

  return (
    <Card>
      <CardHeader title='SEARCH RANKING' />
      <DataGridPro
        autoHeight
        rows={dataFromAPI}
        columns={columns}
        getRowId={row => row.carId}
        rowThreshold={0}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight} // Optional, default is 500px.
        pageSize={pageSize}
        pagination
      />
    </Card>
  )
}

export default TableSearchRanking
