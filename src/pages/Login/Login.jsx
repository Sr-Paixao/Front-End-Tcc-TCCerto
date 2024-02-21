import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../img/logo.svg'

const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <Avatar
            alt="User Image"
            src={Logo}
            sx={{ width: 196.11, height: 184, marginBottom: 5  }}
            variant="square"
            
        />
          <Typography component="h1" variant="h5" style={{color :"#07382E" , marginBottom: 4, fontWeight: 'bold' }}>
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                '& label.Mui-focused': {
                  color: '#07382E',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#07382E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07382E',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& label.Mui-focused': {
                  color: '#07382E',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#07382E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07382E',
                  },
                },
              }}
            />
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: 'right' }}>
                <Link href="#" variant="body2" sx={{color: "#07382E", '&:hover': {color: '#07382E'}}}>
                  Esqueci minha senha
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',}, }}
            >
              Entrar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: -1, mb: 2, backgroundColor:"#fff", color: "#07382E",  borderColor: '#07382E', '&:hover': {borderColor: '#07382E', backgroundColor: 'transparent',}, }}
            >
              Cadastrar
            </Button>
          </Box>
        </Paper>
    </ThemeProvider>
  );
}
