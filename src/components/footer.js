import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
export default function Footer() {
  return (
    <div className="container my-5">
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography style={{maxWidth:"300px"}} variant="h6" color="text.primary" gutterBottom>
                معلومات عنا
              </Typography>
              <Typography style={{maxWidth:"300px"}} variant="body2" color="text.secondary">
                أنا{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0288d1",
                    fontSize: "20px",
                    maxWidth:"300px"

                  }}
                >
                  عبدالرحمن عيد
                </span>{" "}
                اتمني ان اقدم أفضل الخدمات لعملائنا الكرام .{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography style={{maxWidth:"300px"}} variant="h6" color="text.primary" gutterBottom>
                اتصل بنا
              </Typography>
              <Typography style={{maxWidth:"300px"}} variant="body2" color="text.secondary">
                Egypt, Kafr El Sheikh El Hamoul{" "}
              </Typography>
              <Typography style={{maxWidth:"300px"}} variant="body2" color="text.secondary">
                Email: aeid38858@gmail.com
              </Typography>
              <Typography style={{maxWidth:"300px"}} variant="body2" color="text.secondary">
                Phone: +20 1093273116
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography style={{maxWidth:"300px"}} variant="h6" color="text.primary" gutterBottom>
                تابعنا
              </Typography>
              <Link
                href="https://www.facebook.com/abdelrahmn.eid"
                color="inherit"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/abdelrahman_eid_94/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
