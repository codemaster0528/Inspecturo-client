// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperLoop = ({ direction, images }) => {
  // ** Hook
  const [ref] = useKeenSlider({
    loop: true,
    rtl: direction === 'rtl'
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src={images[0]} alt='swiper 7' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src={images[1]} alt='swiper 8' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src={images[2]} alt='swiper 9' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src={images[3]} alt='swiper 10' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src={images[4]} alt='swiper 10' />
      </Box>
    </Box>
  )
}

export default SwiperLoop
