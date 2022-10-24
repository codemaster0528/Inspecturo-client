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
import TableColumns2 from 'src/views/table/data-grid/TableColumns2'

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/most-popular-owners-data'

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
          More Detail
        </Grid>

        <Grid item xs={12} sm={6}>
          No Exist
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

const TableMostPopularOwners = () => {
  // ** States
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)

  const getDetailPanelContent = React.useCallback(({ row }) => <DetailPanelContent row={row} />, [])

  const getDetailPanelHeight = React.useCallback(() => 'auto', [])

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
      field: 'Rating',
      minWidth: 80,
      headerName: 'Rating',
      renderCell: params => (
        <Rating
          sx={{ color: '#fff' }}
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
      <DataGridPro
        autoHeight
        rows={rows}
        columns={columns}
        rowThreshold={0}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight} // Optional, default is 500px.
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default TableMostPopularOwners
