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

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/highest-earning-owners-data'

const TableHighestEarningOwners = () => {
  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)

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

    fetch('http://161.35.118.186/mkulima/dereva/pesa', requestOptions)
      .then(response => response.json())
      .then(result => {
        setDataFromAPI(result.data)
      })
      .catch(error => console.log('error', error))
  }

  const columns = [
    {
      flex: 0.18,
      minWidth: 120,
      headerName: 'Name',
      field: 'Name',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.driverName}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 140,
      field: 'Revenue',
      headerName: 'Revenue',
      renderCell: params => {
        let color = 'success'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.driverRevenue}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'Trips',
      headerName: 'Trips',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.driverTrips}
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
          defaultValue={params.row.driverRating}
          precision={0.1}
          name='half-rating'
          readOnly
        />
      )
    },
    {
      flex: 0.1,
      field: 'InspecturoScore',
      minWidth: 80,
      headerName: 'Inspecturo Score',
      renderCell: params => {
        let color = 'success'
        if (params.row.driverInspecturoScore < 30) color = 'error'
        else if (params.row.driverInspecturoScore < 50) color = 'warning'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.driverInspecturoScore}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    }
  ]

  return (
    <Card>
      <DataGrid
        autoHeight
        rows={dataFromAPI}
        getRowId={row => row.driverId}
        columns={columns}
        rowThreshold={0}
        pageSize={pageSize}
        pagination
      />
    </Card>
  )
}

export default TableHighestEarningOwners
