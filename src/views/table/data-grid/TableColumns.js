// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

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
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
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
          {params.row.full_name}
        </Typography>
      </Box>
    </Box>
  )

const TableColumns = () => {
  // ** States
  const [pageSize, setPageSize] = useState(3)
  const [hideNameColumn, setHideNameColumn] = useState(false)

  const columns = [
    {
      flex: 0.25,
      minWidth: 290,
      field: 'full_name',
      headerName: 'State',
      hide: hideNameColumn,
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.full_name}
              </Typography>
              <Typography noWrap variant='caption'>
                {row.email}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.175,
      minWidth: 120,
      headerName: 'Previous Tips',
      field: 'Date',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.start_date}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 110,
      field: 'salary',
      headerName: 'New Tips',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.salary}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'age',
      minWidth: 80,
      headerName: 'Growth',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    }
  ]

  return (
    <Card>
      <CardHeader title='State-by-State Growth' />
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[3, 7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default TableColumns
