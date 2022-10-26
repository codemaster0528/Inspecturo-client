// ** React Imports
import React, { useState } from 'react'

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
  if (row.carImage.length) {
    return (
      <CustomAvatar src={`/images/avatars/${row.carImage}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
    )
  } else {
    return (
      <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.carName ? row.carName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

// ** Full Name Getter
const getFullName = params =>
  toast(
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {renderClient(params)}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {params.row.carName}
        </Typography>
      </Box>
    </Box>
  )

const CarDetailInfo = ({ info }) => {
  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)

  const columns = [
    {
      flex: 0.03,
      minWidth: 100,
      field: 'FuelType',
      headerName: 'Fuel Type',
      renderCell: params => {
        let color = 'primany'
        if (params.row.carFuelType == 'DIESEL') color = 'primary'
        else if (params.row.carFuelType == 'GASOLINE') color = 'warning'
        else color = 'success'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.carFuelType}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.02,
      minWidth: 50,
      headerName: 'Door',
      field: 'Doors',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.carDoors}
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'Description',
      headerName: 'Description',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.carDescription}
        </Typography>
      )
    }
  ]

  return (
    <Card>
      <DataGrid rows={info} columns={columns} pageSize={pageSize} hideFooter />
    </Card>
  )
}

export default CarDetailInfo
