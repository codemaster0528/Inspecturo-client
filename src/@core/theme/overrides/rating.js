const Rating = theme => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main
        },
        iconEmpty: {
          color: `rgba(${theme.palette.customColors.main}, 0.22)`
        }
      }
    }
  }
}

export default Rating
