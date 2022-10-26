import React, { useState } from 'react'

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
import CardNavigation from 'src/views/ui/cards/basic/CarsTable3'
import CardWithCollapse from 'src/views/ui/cards/basic/CardWithCollapse'
import CardVerticalRatings from 'src/views/ui/cards/basic/CardVerticalRatings'
import CardNavigationCenter from 'src/views/ui/cards/basic/CardNavigationCenter'
import TableSearchRanking from 'src/views/table/data-grid/TableSearchRanking'
import CardHorizontalRatings from 'src/views/ui/cards/basic/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <TableSearchRanking />
      </Grid>
    </Grid>
  )
}

export default CardBasic
