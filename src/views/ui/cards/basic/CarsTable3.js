// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import TableMostPopularCars from 'src/views/table/data-grid/TableMostPopularCars'
import TableHighestEarningCars from 'src/views/table/data-grid/TableHighestEarningCars'
import TableHighestInspecturoScore from 'src/views/table/data-grid/TableHighestInspecturoScore'

const CarsTable3 = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Most Popular Cars' />
          <Tab value='2' label='Highest Earning Cars' />
          <Tab value='3' label='Highest Inspecturo Score' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <TableMostPopularCars />
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <TableHighestEarningCars />
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <TableHighestInspecturoScore />
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CarsTable3
