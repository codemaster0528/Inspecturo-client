// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { ListItemText } from '@mui/material'

const CardInfluencer = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Ask Inspecturo
        </Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          <FormControl sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <Select
              sx={{ width: '100%' }}
              defaultValue=''
              id='demo-simple-select-autoWidth'
              labelId='demo-simple-select-autoWidth-label'
            >
              <MenuItem value={10}>What are the most popular cars in my State?</MenuItem>
              <MenuItem value={20}>What are the highest earning cars in my State?</MenuItem>
              <MenuItem value={30}>Which Owners have the most trips in my State?</MenuItem>
              <MenuItem value={40}>What Owners make the most money in my State? </MenuItem>
              <MenuItem value={50}>Where are all the Turo cars in my State?</MenuItem>
              <MenuItem value={60}>What are the most popular States for Turo?</MenuItem>
              <MenuItem value={70}>What locations would be ideal for a new Turo car in my State?</MenuItem>
              <MenuItem value={80}>What car should I buy for Turo in my State?</MenuItem>
              <MenuItem value={90}>What is the most popular car fuel type in my State?</MenuItem>
              <MenuItem value={100}>What are the search positions of cars in my State?</MenuItem>
            </Select>
          </FormControl>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfluencer
