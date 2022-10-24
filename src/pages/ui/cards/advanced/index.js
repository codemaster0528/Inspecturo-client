// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CardWidgetsVisitsByDay from 'src/views/ui/cards/widgets/CardWidgetsVisitsByDay'
import CardWidgetsWeeklySales from 'src/views/ui/cards/widgets/CardWidgetsWeeklySales'
import CardWidgetsPerformance from 'src/views/ui/cards/widgets/CardWidgetsPerformance'
import CardWidgetsSalesCountry from 'src/views/ui/cards/widgets/CardWidgetsSalesCountry'
import CardWidgetsMonthlyBudget from 'src/views/ui/cards/widgets/CardWidgetsMonthlyBudget'
import CardWidgetsExternalLinks from 'src/views/ui/cards/widgets/CardWidgetsExternalLinks'
import CardWidgetsWeeklyOverview from 'src/views/ui/cards/widgets/CardWidgetsWeeklyOverview'
import CardWidgetsOrganicSessions from 'src/views/ui/cards/widgets/CardWidgetsOrganicSessions'
import CardWidgetsProjectTimeline from 'src/views/ui/cards/widgets/CardWidgetsProjectTimeline'
import CardWidgetsActivityTimeline from 'src/views/ui/cards/widgets/CardWidgetsActivityTimeline'
import CardWidgetsTotalTransactions from 'src/views/ui/cards/widgets/CardWidgetsTotalTransactions'

import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'
import CardUser from 'src/views/ui/cards/basic/CardUser'
import TableColumns from 'src/views/table/data-grid/TableColumns'

import CardMostPopular from 'src/views/ui/cards/advanced/CardMostPopularCar'
import CardHighestRevenueCar from 'src/views/ui/cards/advanced/CardHighestRevenueCar'
import CardHighestInspecturoScoreOwner from 'src/views/ui/cards/advanced/CardHighestInspecturoScoreOwner'
import CardMostPopularOwner from 'src/views/ui/cards/advanced/CardMostPopularOwner'
import CardHighestEarningOwner from 'src/views/ui/cards/advanced/CardHighestEarningOwner'
import OwnersTable3 from 'src/views/ui/cards/basic/OwnersTable3'
import CardWidgetsPerformanceOverview from 'src/views/ui/cards/widgets/CardWidgetsPerformanceOverview'

const CardWidgets = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4}>
          <CardMostPopularOwner />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardHighestEarningOwner />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardHighestInspecturoScoreOwner />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <OwnersTable3 />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CardWidgets
