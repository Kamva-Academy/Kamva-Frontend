import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import studentpic from "assets/graduated student showing her diploma.png";
import teacherpic from "assets/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png 1.png"
import DescriptionCard from "components/molecules/DescriptionCard";

function Descriptions() {
  return (
    <Box sx={{ background: "#3498DB33" }}>
      <Container maxWidth='lg' sx={{ paddingY: 20 }}>
        <Grid container>
          <Grid container item justifyContent={'center'} alignItems={'center'}>
            <Grid container item md={6} xs={12} justifyContent={'center'} >
              <DescriptionCard
                title="فقط فیلم ضبط‌شده نبین. از یادگیری لذت بیشتری ببر"
                subTitle="برای یادگیرندگان"
                description="نیازی نیست که برای یادگیری یک موضوع فقط فیلم آموزشی ببینی. در کاموا با وجود درس‌نامه‌های تعاملی، انواع سوالات مختلف، بازی‌های آموزشی، تصویر، ویدئو و ... از یادگیری لذت بیشتری ببر!"
                buttonHref="https://platform.kamva.academy/programs/"
                buttonTitle="مشاهده دوره‌ها"
              />
            </Grid>
            <Grid container item md={6} xs={12} justifyContent={'center'} sx={{ paddingX: { xs: 0, md: 0 }, paddingY: { xs: 8, md: 0 } }}>
              <Image style={{ userSelect: 'none', pointerEvents: 'none' }} layout="responsive" alt="" src={studentpic} loading="lazy" unoptimized></Image>
            </Grid>
          </Grid>
          <Grid container item justifyContent={'center'} alignItems={'center'} sx={{ marginTop: { xs: 0, md: 16 } }}>
            <Grid container item md={6} xs={12} justifyContent={'center'} sx={{ display: { xs: 'none', md: 'inherit' } }}>
              <Image style={{ userSelect: 'none', pointerEvents: 'none' }} layout="responsive" alt="" src={teacherpic} loading="lazy" unoptimized></Image>
            </Grid>
            <Grid container item md={6} xs={12} justifyContent={'center'}>
              <DescriptionCard
                title="مطالب آموزشی خود را ماندگار و تعاملی‌تر کنید"
                subTitle="برای یاددهندگان"
                description="با یک‌بار قراردادن محتوای خود روی کاموا، آن را برای همیشه حفظ کنید و در اختیار دیگران قرار دهید. با افزودن قابلیت‌های تکمیلی از جمله بازی‌های آموزشی، تصویر، ویدئو و سوالات مختلف، یادگیرندگان را با مطالب بیشتر درگیر کنید."
                buttonHref="https://docs.google.com/forms/d/e/1FAIpQLSfFyiu4MlNxKHvm2xTqDkrnNZBvoBB6OePd6iKgjdfjmDkKMw/viewform?usp=sf_link"
                buttonTitle="اولین دوره را بسازید"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Descriptions;