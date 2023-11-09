import { Container, Divider } from "@mui/material";
import React from "react";
import Maber from "../../img/معبر.png";

export default function Needed() {
  return (
    <div>
      <Container>
        <h1>احتياجات المواطنين في غزه ...</h1>
        <p>
          أولاً، أود أن أشير إلى أن الوضع الإنساني في قطاع غزة يعاني من العديد
          من التحديات. وفقًا لتقرير للأمم المتحدة، يعتبر 80% من سكان القطاع
          معتمدين على المساعدات الإنسانية². وفي ظل الهدنة الحالية، تم توزيع
          المساعدات الإنسانية في قطاع غزة، والتي تشمل المواد الغذائية والأدوية
          والمستلزمات الطبية والمياه والصرف الصحي¹. غزة: خمسة عشر عاما من الحصار
          دفعت بـ80 بالمائة من سكان القطاع إلى .... غزة: عودة تدريجية للحياة إلى
          القطاع مع وصول مساعدات إنسانية في ظل .... غول الفقر ينهش جيوب
          المواطنين في غزة
        </p>
        <Divider />
        <h3>
          مصر تشترط دخول المساعدات إلى غزة مقابل خروج الرعايا الأجانب «تفاصيل»
        </h3>
        <img style={{ margin: "25px 0", width: "50%" }} alt="" src={Maber} />
        <p>
          رفضت السلطات المصرية، اليوم السبت، السماح للرعايا الأجانب المتواجدين
          في قطاع غزة بالمرور من معبر رفح البري، بحسب ما علمت قناة «القاهرة
          الإخبارية» من مصادرها بقطاع غزة.
          <br />
          وانتظر الرعايا الأجانب عدة ساعات أمام معبر رفح البري دون استجابة من
          قبل السلطات المصرية، ليغادروا من حيث أتوا، بحسب شهود عيان
          <br />
          وقالت مصادر مصرية مطلعة لقناة «القاهرة الإخبارية»، إن الموقف المصري
          واضح وهو اشتراط تسهيل وصول وعبور المساعدات لقطاع غزة، إذ رفضت السلطات
          المصرية أن يكون المعبر مخصصًا لعبور الأجانب فقط.
          <br />
          يذكر أنه يتواجد ما بين 500 إلى 600 مواطن أمريكي معظمهم من أصول
          فلسطينية في قطاع غزة، والذين تواصلوا مع السلطات الأمريكية للحصول على
          معلومات بشأن مغادرة القطاع، بحسب شبكة سي إن إن.
          <br />
          ووجهت إسرائيل أمس، إنذارًا حثت فيه أكثر من مليون شخص على النزوح من
          شمال قطاع غزة المحاصر، بينما تستعد لغزو بري في أعقاب هجوم «طوفان
          الأقصى».
        </p>
        <Divider />

      </Container>
    </div>
  );
}