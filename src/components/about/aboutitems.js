 /*import React from 'react';
import {Grid, Cell } from 'react-mdl';
import './about.css';




    export default function Aboutitems() {
return (
     <div className="AboutItem-container" style={{width: '80%', margin: 'auto'}}>
      <Grid>
        <Cell col={12}>
          
         <h2 style={{paddingTop: '1em'}} >PERSONALIZACION</h2>
         <p> Nos encargamos del desarrollo y diseño de los Energy corners en cada una de las empresas.
         Nuestros Energy corners son estaciones de reposición de hábitos saludables, energía y felicidad
         </p>
        
        </Cell>

      </Grid>
    </div>
    )

} */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: theme.palette.background.paper,
    padding: 15,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Aboutitems() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="PERSONALIZACIÓN"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Claro que si!
              </Typography>
              {"Nos encargamos del desarrollo y diseño de los Energy corners en cada una de las empresas."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SALUD"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                En Tu Empresa
              </Typography>
              {" Nuestros Energy corners son estaciones de reposición de hábitos saludables, energía y felicidad."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Bienestar"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                ¿Que buscamos?
              </Typography>
              {' — Nuestro objetivo es crear un oasis de bienestar para proporcionar una inyección de vitaminas, salud y vitalidad a los empleados.'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
