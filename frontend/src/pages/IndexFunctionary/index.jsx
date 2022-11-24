import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import { Layout } from "../../components";

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
        <Grid
          container
          sx={{ height: "auto", marginTop: "2%", marginBottom: "2%" }}
        >
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
                  marginTop: "normal",
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
                    <ListItemText
                      primary={functionary.name}
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
                    />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Layout>
    );
  }
}
