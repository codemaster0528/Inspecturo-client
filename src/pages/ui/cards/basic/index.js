// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/ui/cards/basic/CardUser'
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'
import CardMobile from 'src/views/ui/cards/basic/CardMobile'
import CardSupport from 'src/views/ui/cards/basic/CardSupport'
import CardTwitter from 'src/views/ui/cards/basic/CardTwitter'
import CardFacebook from 'src/views/ui/cards/basic/CardFacebook'
import CardLinkedIn from 'src/views/ui/cards/basic/CardLinkedIn'
import CardAppleWatch from 'src/views/ui/cards/basic/CardAppleWatch'
import CardMembership from 'src/views/ui/cards/basic/CardMembership'
import CardInfluencer from 'src/views/ui/cards/basic/CardInfluencer'
import CardNavigation from 'src/views/ui/cards/basic/CardNavigation'
import CardWithCollapse from 'src/views/ui/cards/basic/CardWithCollapse'
import CardVerticalRatings from 'src/views/ui/cards/basic/CardVerticalRatings'
import CardNavigationCenter from 'src/views/ui/cards/basic/CardNavigationCenter'
import TableColumns1 from 'src/views/table/data-grid/TableColumns1'
import CardHorizontalRatings from 'src/views/ui/cards/basic/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <TableColumns1 />
    </Grid>
  )
}

export default CardBasic
