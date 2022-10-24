// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card sx={{ height: 350 }}>
      <CardContent sx={{ pt: 4 }}>
        <Typography variant='h6'>Heatmap of Turo Cars in Your State</Typography>
      </CardContent>
      <CardMedia sx={{ height: 280 }} image='/images/cars/cars.png' />
    </Card>
  )
}

export default CardImgTop
