// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TableContainer from '@mui/material/TableContainer'
import LinearProgress from '@mui/material/LinearProgress'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Demo Component Imports
import UsersInvoiceListTable from './UsersInvoiceListTable'

const projectListDate = [
  {
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// Styled Timeline component
const Timeline = styled(MuiTimeline)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

// Styled component for images
const Img = styled('img')(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: '50%',
  marginRight: theme.spacing(3)
}))

const UserViewOverview = ({ invoiceData }) => {
  return (
    <Fragment>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Project List' titleTypographyProps={{ variant: 'h6' }} />

        <Divider sx={{ m: 0 }} />

        <TableContainer>
          <Table size='small' sx={{ minWidth: 500 }}>
            <TableHead sx={{ backgroundColor: 'customColors.tableHeaderBg' }}>
              <TableRow>
                <TableCell sx={{ height: '3.375rem' }}>Project</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Total Task</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Progress</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Hours</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {projectListDate.map((item, index) => (
                <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Img src={item.img} alt={`project-${index + 1}`} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                          {item.projectTitle}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          {item.projectType}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{item.totalTask}</TableCell>
                  <TableCell>
                    <Typography variant='body2' sx={{ color: 'text.primary' }}>
                      {item.progressValue}%
                    </Typography>
                    <LinearProgress
                      variant='determinate'
                      value={item.progressValue}
                      color={item.progressColor}
                      sx={{ height: 6, mt: 1, borderRadius: '5px' }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{item.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card sx={{ mb: 6 }}>
        <CardHeader title='User Activity Timeline' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='error' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={{ mr: 2, mb: 1, fontWeight: 600 }}>12 Invoices have been paid</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    12 min ago
                  </Typography>
                </Box>
                <Typography variant='body2'>Invoices have been paid to the company</Typography>
                <Box sx={{ mt: 2, display: 'flex' }}>
                  <Box sx={{ width: 28, height: 'auto' }}>
                    <img alt='invoice.pdf' src='/images/icons/file-icons/pdf-2.png' />
                  </Box>
                  <Typography variant='body2' sx={{ ml: 2, fontWeight: 600, color: 'text.primary' }}>
                    invoice.pdf
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={{ mr: 2, mb: 1, fontWeight: 600 }}>Meeting with John</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    45 min ago
                  </Typography>
                </Box>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  React Project meeting with John @10:15am
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt='Avatar' src='/images/avatars/1.png' sx={{ width: 34, height: 34, mr: 4 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      John Doe (Client)
                    </Typography>
                    <Typography variant='body2'>Project meeting with John @10:15am</Typography>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='warning' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={{ mr: 2, mb: 1, fontWeight: 600 }}>Create a new react project for client</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    2 days ago
                  </Typography>
                </Box>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Add 5 team members in the project
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AvatarGroup max={4}>
                    <Avatar src='/images/avatars/1.png' alt='John Doe' />
                    <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                    <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
                    <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                    <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                    <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                  </AvatarGroup>
                  <Box sx={{ ml: 4, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Create a new project for client
                    </Typography>
                    <Typography variant='body2'> 5 team members in the project</Typography>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography sx={{ mr: 2, mb: 1, fontWeight: 600 }}>Create invoices for client</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    5 days ago
                  </Typography>
                </Box>
                <Typography variant='body2'>Weekly review of freshly prepared design for our new app.</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>

      <UsersInvoiceListTable invoiceData={invoiceData} />
    </Fragment>
  )
}

export default UserViewOverview
