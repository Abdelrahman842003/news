import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { useState } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const details = useSelector((state) => state.card);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {details.slice(-1).map((news, item) => {
        return (
          <Card key={item} sx={{ widows: 345 }}>
            <CardHeader
              sx={{ }}
              avatar={
                <Avatar sx={{ marginLeft: "20px" }} aria-label="recipe">
                  <img style={{ width: "50px" }} alt="" src={news.image} />
                </Avatar>
              }
              title ={<Typography
              
              sx={{
                fontSize: "20px",
                fontWeight:"800px"
              }}>
{                news.headline
}              </Typography>}
            />
            <CardMedia
              component="img"
              height="194"
              image={news.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: "550px", overflow: "hidden",fontSize:"17px",fontWeight:"500px" }}
              >
                {news.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              ></ExpandMore>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
