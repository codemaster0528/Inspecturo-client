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

import TableMostPopularOwners from 'src/views/table/data-grid/TableMostPopularOwners'
import TableHighestEarningOwners from 'src/views/table/data-grid/TableHighestEarningOwners'
import TableHighestInspecturoScoreOwners from 'src/views/table/data-grid/TableHighestInspecturoScoreOwners'

const OwnersTable3 = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Most Popular Owners' />
          <Tab value='2' label='Highest Earning Owners' />
          <Tab value='3' label='Highest Inspecturo Score' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <TableMostPopularOwners />
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <TableHighestEarningOwners />
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <TableHighestInspecturoScoreOwners />
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default OwnersTable3
