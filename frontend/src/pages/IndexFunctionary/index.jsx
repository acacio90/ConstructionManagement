import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Layout } from "../../components";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import { SHOWFUNCTIONARY } from "../../routes/routes";

const theme = createTheme();
export class IndexFunctionary extends React.Component {
  constructor(props) {
    super(props);
    this.functionary = [
      {
        name: "Teste1",
        contact: "Teste1",
      },
      {
        name: "Teste2",
        contact: "Teste2",
      },
      {
        name: "Teste3",
        contact: "Teste3",
      },
      {
        name: "Teste4",
        contact: "Teste4",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste5",
      },
      {
        name: "Teste4444",
        contact: "Teste5",
      },
      {
        name: "Teste5",
        contact: "Teste15555",
      },
    ];
  }
  render() {
    return (
      <Layout>
        <Grid container sx={{ height: "auto", marginBottom: "2%" }}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <div
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                display: "flex",
                backgroundColor: "#262842",
              }}
            >
              <Typography
                component="h5"
                variant="h2"
                sx={{
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Funcionários
              </Typography>
            </div>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {this.functionary.map((functionary) => (
                <>
                  <ListItem>
                    <Grid container>
                      <Grid
                        item
                        xs={11}
                        component={Link}
                        to={SHOWFUNCTIONARY}
                        style={{ textDecoration: "none" }}
                      >
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                variant="h6"
                                color="text.primary"
                              >
                                {functionary.name}
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {functionary.contact}
                              </Typography>
                            </React.Fragment>
                          }
                          sx={{ paddingLeft: "1vw" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Button sx={{ margin: "auto" }}>
                          <Avatar
                            sx={{
                              bgcolor: "#262842",
                            }}
                          >
                            <DeleteIcon />
                          </Avatar>
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}>
            <Button>
              <Avatar
                sx={{
                  bottom: "12vh",
                  bgcolor: "#262842",
                  position: "fixed",
                }}
              >
                <AddIcon />
              </Avatar>
            </Button>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
