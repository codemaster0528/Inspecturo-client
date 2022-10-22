// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const LoginIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const Logo = styled('img')(({ theme }) => ({
  maxWidth: '15rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '11rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '7rem'
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@materialize.com'
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginErrorMsg, setLoginErrorMsg] = useState('Email and Password are incorrect!') // Error Text When Login Failed
  const [loginValidateError, setLoginValidateError] = useState(false) // State about Login Success or Failed
  const [loginBtnDisable, setLoginBtnDisable] = useState(false) // Disable & grey out login button after each request to stop the user from clicking

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    setLoginBtnDisable(true)
    const { email, password } = data

    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
    setLoginBtnDisable(false)
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'
  const logoSource = 'inspecturo-turo-owner-software-logo'

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <LoginIllustrationWrapper>
            <LoginIllustration
              alt='login-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
          </LoginIllustrationWrapper>
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Link href='http://inspecturo.com'>
                <Logo alt='login-title' src={`/images/pages/${logoSource}-${theme.palette.mode}.png`} />
              </Link>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant='body2'>
                {' '}
                Please sign-in to your account and open up a world of opportunities and data
              </Typography>
            </Box>
            <Alert icon={false} sx={{ py: 3, mb: 6, ...bgClasses.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: 'primary.main' }}>
                Admin: <strong>admin@materialize.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: 'primary.main' }}>
                Client: <strong>client@materialize.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder='admin@materialize.com'
                    />
                  )}
                />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Password
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox />}
                  sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
                />
                <Link passHref href='/forgot-password'>
                  <Typography component={MuiLink} variant='body2' sx={{ color: 'primary.main' }}>
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Login
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
                <Typography>
                  <Link passHref href='/register'>
                    <Typography component={MuiLink} sx={{ color: 'primary.main' }}>
                      Create an account
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ mt: 5, mb: 7.5, '& .MuiDivider-wrapper': { px: 4 } }}>or</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Github
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                    />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Google sx={{ color: '#db4437' }} />
                  </IconButton>
                </Link>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
