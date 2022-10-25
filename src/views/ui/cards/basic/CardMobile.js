// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Twitter from 'mdi-material-ui/Twitter'
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import ShareVariant from 'mdi-material-ui/ShareVariant'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMobile = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={2} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width={90} height={90} src={`/images/pages/ask-inspecturo.svg`} alt='mySvgImage' />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          md={10}
          xs={12}
          sx={{
            pt: theme => ['0 !important', '0 !important', `${theme.spacing(6)} !important`],
            pl: theme => [`${theme.spacing(6)} !important`, `${theme.spacing(6)} !important`, '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              ASK INSPECTURO
            </Typography>
            <Typography variant='body2' sx={{ mb: 0 }}>
              <FormControl sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <Select
                  sx={{ width: '100%', height: '40px' }}
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
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
