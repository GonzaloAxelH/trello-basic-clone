import { CardHeader, Grid, Typography, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";
import EntryList from "../context/ui/EntryList";
import { Layout } from "./components/layouts/Layout";
import { EntryStatus } from "../interfaces";
import NewEntry from "../context/ui/NewEntry";
const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              {/* agregar nueva entrada */}
              {/* Listado de las entradas  */}
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso" />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completados" />
            <CardContent>
              <EntryList status="finish" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
