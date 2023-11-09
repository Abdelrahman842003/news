import React, { useEffect } from "react";
import { Container, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/slice";
import Mahmoud from "../../vedio/mahmoud.mp4";
import "./main.css";

import Footer from "../footer";
import YouTube from "./Skeleton";
export default function Section1() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.news.slice(1, 9));
  const filteredData = data.filter((item) => item.image !== undefined);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <div
        classNameName="parantSection1"
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
            <video
              style={{
                width: "100%",
                height: "350px",
                marginLeft: 60,
                borderRadius: "8px",
              }}
              src={Mahmoud}
              typeof="video/mp4"
              controls
              muted
              autoPlay
            />

            <div style={{ maxHeight: "350px" }}>
              <h3
                style={{ fontSize: "25px", fontWeight: "bold", width: "340px" }}
              >
                {" "}
                استشهاد عائلة الداعية محمود الحسنات في الحرب على غزة..
              </h3>
              <p
                style={{
                  maxHeight: "180px",
                  textOverflow: "ellipsis",
                  overflow: "auto",
                  maxWidth: "340px",
                }}
              >
                وكان الداعية محمود الحسنات أكد يوم الخميس، استشهاد 14 فردا من
                عائلته في قطاع غزة، ويتعلق الأمر من بينهم 4 من أخواله، عمه
                وحفيده البالغ من العمر 9 أشهر، إضافة إلى ابن عمه وأطفاله الخمس،
                من ناحية أخرى أكد الداعية إصابة شقيقته وبقية أفراد عائلته بجروح.
              </p>
            </div>
          </div>
          <Divider />
          <Divider />
          <Divider />
          {filteredData.length === 0 ? (
            <YouTube />
          ) : (
            filteredData.map((news) => {
              return (
                <>
                  <div
                    key={news}
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <Container>
                      <div style={{ overflow: "hidden" }}>
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
                    </Container>
                  </div>{" "}
                </>
              );
            })
          )}
        </Container>
        <Divider />
        <Divider />
      </div>
    </>
  );
}
{
  /* <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: 20,
            }}
          >
            <img
              style={{ width: "50%", height: "350px", marginLeft: 60 }}
              alt=""
              src={Logo}
            />
            <div style={{ maxHeight: "350px", overflow: "auto" }}>
              <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>
                البيت الأبيض يتراجع عن تصريح بايدن بشأن "قطع رؤوس الأطفال"
              </h3>
              <p>
                تراجع البيت الأبيض في وقت متأخر من الأربعاء، عن التصريحات
                الصادرة عن الرئيس جو بايدن بشأن رؤيته صور أطفال إسرائيليين "قطعت
                رؤوسهم على يد حماس". ونقلت شبكة "سي إن إن" الإخبارية عن مسؤول في
                الإدارة الأميركية، قوله إن هذه التصريحات كانت مبنية على "مزاعم"
                مسؤولين إسرائيليين وتقارير إعلامية محلية. وأوضح المسؤول أن بايدن
                والمسؤولين الأميركيين "لم يروا هذه الصور، ولم يتحققوا بشكل مستقل
                من أن حماس تقف خلف هذه المزاعم". وجاء توضيح البيت الأبيض بعد
                ساعات قليلة من الكلمة التي ألقاها الرئيس الأميركي خلال اجتماع
                لقادة الطائفة اليهودية، وقال فيها إن على الأميركيين رؤية ما
                يحدث، وإنه "لم يتخيل رؤية إرهابيين يقطعون رؤوس أطفال".
              </p>
            </div>
          </div>
          <Divider sx={{ marginTop: "30px" }} />
          <div style={{ marginTop: 30 }}>
            <Container
              sx={{
                marginLeft: 36,
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <div>
                <img alt="" src={Logo} />
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    maxWidth: "350px",
                  }}
                >
                  العنوان
                </h3>
              </div>
            </Container>
          </div>
        </Container> */
}
