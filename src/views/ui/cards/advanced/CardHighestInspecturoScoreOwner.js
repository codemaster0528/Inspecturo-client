// ** MUI Import
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import Paperclip from 'mdi-material-ui/Paperclip'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import PiggyBank from 'mdi-material-ui/PiggyBank'
import Car from 'mdi-material-ui/Car'
import Star from 'mdi-material-ui/Star'
import Calendar from 'mdi-material-ui/Calendar'
import Account from 'mdi-material-ui/Account'

import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `0px solid ${theme.palette.divider}`
  }
}))

const CardHighestInspecturoScoreOwner = () => {
  return (
    <Card sx={{ height: 500 }}>
      <CardMedia
        sx={{ height: 150, width: 150, borderRadius: 40, margin: 'auto', mt: 5, border: 1, borderColor: 'white' }}
        image='/images/svgs/highest-inspecturo-score.svg'
      />
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          Driver Name
        </Typography>
        <Typography variant='body2' sx={{ mb: 4, fontWeight: 600 }}>
          Highest Inspecturo Score
        </Typography>
        <Typography variant='body2' sx={{ mb: 4, fontWeight: 600 }}>
          Value
        </Typography>
        <Typography variant='body2' sx={{ mb: 4, fontWeight: 600 }}>
          Most Trips
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <StyledBox>
              <Box sx={{ py: 1.25, mb: 1, display: 'flex', alignItems: 'center' }}>
                <Car sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                <Typography variant='body2'>Driver Trips</Typography>
              </Box>
              <Box sx={{ py: 1.25, mb: 1, display: 'flex', alignItems: 'center' }}>
                <PiggyBank sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                <Typography variant='body2'>Driver Revenue</Typography>
              </Box>
              <Box sx={{ py: 1.25, mb: 1, display: 'flex', alignItems: 'center' }}>
                <Star sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                <Typography variant='body2'>Driver Rating</Typography>
              </Box>
              <Box sx={{ py: 1.25, mb: 1, display: 'flex', alignItems: 'center' }}>
                <Star sx={{ color: 'primary.main', mr: 2.5 }} fontSize='small' />
                <Typography variant='body2'>Driver Inspecturo Score</Typography>
              </Box>
            </StyledBox>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardHighestInspecturoScoreOwner
