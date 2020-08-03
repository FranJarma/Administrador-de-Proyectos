import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {EstilosComun} from './EstilosComun.js';

const Cabecera = () => {
  const estilos = EstilosComun();
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={estilos.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={estilos.title}>
        Bienvenido: <span>usuario</span>
      </Typography>
      <Button color="inherit">Cerrar sesión</Button>
    </Toolbar>
  </AppBar>
  );}
 
export default Cabecera;
