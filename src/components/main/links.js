import { Button, Container } from "@mui/material";
import React from "react";
import Logo from "../../img/logo.jpeg";
import HomeIcon from "@mui/icons-material/Home";
import Esraiel from "../../img/اسرائيل.jpeg";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MapIcon from "@mui/icons-material/Map";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="parent">
      <Container
        sx={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
      >
        <Link to={"/التبرعات"}>
          
          <Button
            sx={{ flexDirection: "row-reverse" }}
            variant="outlined"
            startIcon={<VolunteerActivismIcon />}
          >
            التبرعات
          </Button>
        </Link>
        <Link to={"/احتياجات المواطنين"}>
          
          <Button
            sx={{ flexDirection: "row-reverse" }}
            variant="outlined"
            startIcon={<FastfoodIcon />}
          >
            احتياجات المواطنين
          </Button>
        </Link>
        <Link to={"/خريطه فلسطين"}>
          
          <Button
            sx={{ flexDirection: "row-reverse" }}
            variant="outlined"
            startIcon={<MapIcon />}
          >
            خريطة فلسطين
          </Button>
        </Link>
        <Link to={"/الاخبار العاجله"}>
          
          <Button
            sx={{ flexDirection: "row-reverse" }}
            variant="outlined"
            startIcon={<NewspaperIcon />}
          >
            الاخبار العاجلة
          </Button>
        </Link>
        <Link to={"/"}>
          <Button
            sx={{ flexDirection: "row-reverse" }}
            variant="outlined"
            startIcon={<HomeIcon />}
          >
            الرئيسية
          </Button>
        </Link>
      </Container>
    </div>
  );
}
