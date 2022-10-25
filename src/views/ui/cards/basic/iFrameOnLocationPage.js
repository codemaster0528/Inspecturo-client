// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const FrameOnLocation = () => {
  return (
    <Card sx={{ position: 'relative', height: 650 }}>
      <CardContent>
        <Box>
          <Box sx={{ mr: 2, mb: 6, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>POTENTIAL OPPORTUNITIES & QUICK WINS</Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <iframe src='https://www.zenergist.com/' height='570' frameBorder='0' />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FrameOnLocation
