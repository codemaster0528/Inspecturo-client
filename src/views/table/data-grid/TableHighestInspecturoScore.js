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
import CarDetailInfo from 'src/views/table/data-grid/TableCarDetailInfo'

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
    return <CustomAvatar src={`/images/cars/${row.carImage}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
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

function DetailPanelContent() {
  const [ref] = useKeenSlider({
    loop: true,
    rtl: 'rtl'
  })

  return (
    <KeenSliderWrapper>
      <Grid container className='match-height'>
        <Grid item xs={12} sm={6}>
          <SwiperLoop direction='rtl' />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CarDetailInfo />
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

const TableHighestInspecturoScore = () => {
  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)

  const getDetailPanelContent = React.useCallback(({ row }) => <DetailPanelContent row={row} />, [])

  const getDetailPanelHeight = React.useCallback(() => 'auto', [])

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
                {row.carName}
              </Typography>
              <Typography noWrap variant='caption'>
                {row.carMake}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'Revenue',
      headerName: 'Revenue',
      renderCell: params => {
        let color = 'success'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.carRevenue}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
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
          {params.row.trips}
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
          defaultValue={params.row.rating}
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
        if (params.row.inspecturoScore <= 30) color = 'error'
        else if (params.row.inspecturoScore <= 50) color = 'warning'
        else color = 'success'

        return (
          <CustomChip
            size='small'
            skin='light'
            color={color}
            label={params.row.inspecturoScore}
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
          {params.row.owner}
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
          {params.row.ownerTrips}
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
          defaultValue={params.row.ownerRating}
          precision={0.1}
          name='half-rating'
          readOnly
        />
      )
    }
  ]

  return (
    <Card>
      <DataGridPro
        autoHeight
        rows={rows}
        columns={columns}
        rowThreshold={0}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight} // Optional, default is 500px.
        pageSize={pageSize}
        hideFooter
      />
    </Card>
  )
}

export default TableHighestInspecturoScore
