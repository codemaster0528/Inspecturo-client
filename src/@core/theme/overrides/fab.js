const Button = theme => {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[5]
        }
      }
    }
  }
}

export default Button
