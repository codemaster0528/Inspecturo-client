// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import Paperclip from 'mdi-material-ui/Paperclip'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import PiggyBank from 'mdi-material-ui/PiggyBank'
import LibraryOutline from 'mdi-material-ui/Library'
import LogOut from 'mdi-material-ui/ExitToApp'
import Car from 'mdi-material-ui/Car'
import Star from 'mdi-material-ui/Star'
import Calendar from 'mdi-material-ui/Calendar'
import ChartLine from 'mdi-material-ui/ChartLine'
import Account from 'mdi-material-ui/Account'
import AccountCircleOutline from 'mdi-material-ui/AccountCircleOutline'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'
import LightbulbOutLine from 'mdi-material-ui/LightbulbOutline'

// ** Context
import { useAuth } from 'src/hooks/useAuth'

const navigation = () => {
  return [
    {
      title: 'Select States',
      icon: MapMarkerOutline,
      children: [
        {
          title: '1',
          path: '/dashboards/crm'
        },
        {
          title: '2',
          path: '/dashboards/analytics'
        },
        {
          title: '3',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/ui/cards/widgets'
    },
    {
      title: 'Cars',
      icon: Car,
      path: '/ui/cards/statistics'
    },
    {
      title: 'Owners',
      icon: AccountCircleOutline,
      path: '/ui/cards/advanced'
    },
    {
      title: 'Search Rankings',
      icon: ChartLine,
      path: '/ui/cards/basic'
    },
    {
      title: 'Opportunities',
      icon: LightbulbOutLine,
      path: '/ui/cards/gamification'
    },
    {
      title: 'Learn',
      icon: LibraryOutline,
      path: '/ui/cards/actions'
    },

    {
      title: 'LogOut',
      icon: LogOut,
      path: '/'
    }
  ]
}

export default navigation
