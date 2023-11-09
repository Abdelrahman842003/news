import React, { useEffect } from "react";
import { Container, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/slice";
import "../main/main.css";
import Animations from "../main/Skeleton";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import RecipeReviewCard from "./newsDetails";
import { addCard, clear } from "../../redux/cardSlice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Section2() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.news.slice(0, 1));
  const filteredData = data.filter((item) => item.image !== undefined);
  const data2 = useSelector((state) => state.news);
  const filteredData2 = data2.filter((item) => item.image !== undefined);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      {filteredData.length === 0 ? (
        <Animations />
      ) : (
        <div
          className="parantSection1"
          style={{
            marginTop: 20,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                gap: 20,
                marginBottom: 30,
              }}
            >
              {filteredData.map((news, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      maxHeight: "350px",
                      display: "flex",
                      flexWrap: "nowrap",
                      flexDirection: "row",
                    }}
                  >
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <RecipeReviewCard />
                    </Dialog>
                    <img
                      alt={news.title}
                      style={{
                        width: "100%",
                        height: "350px",
                        borderRadius: "8px",
                      }}
                      src={news.image}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "20px",
                        maxWidth:"440px",
                        overflow:"auto"
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          maxWidth: "100%",
                        }}
                      >
                        {news.headline}
                      </h3>
                      <p>{news.content}</p>
                    
                    </div>
                  </div>
                );
              })}
            </div>

            <Divider />
            <Divider />
            <Divider />

            {filteredData2.map((news, index) => {
              return (
                <div
                  key={index}
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Container>
                    <div
                      onClick={handleClickOpen}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        onClick={() => {
                          dispatch(addCard(news));
                        }}
                      >
                        <img
                          style={{ borderRadius: "8px" }}
                          width={"240px"}
                          height={"160px"}
                          alt={news.title}
                          src={news.image}
                        />
                        <h3
                          style={{
                            height: "160px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            maxWidth: "240px",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {news.headline}
                        </h3>
                      </div>
                    </div>
                  </Container>
                </div>
              );
            })}
          </Container>
          <Divider />
          <Divider />
        </div>
      )}
    </>
  );
}
