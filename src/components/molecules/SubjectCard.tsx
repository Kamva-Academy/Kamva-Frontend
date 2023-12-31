import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

type SubjectCardPropsType = {
  picture: any;
  title: string;
  backgroundColor: string;
}

const SubjectCard = ({ picture, title, backgroundColor }: SubjectCardPropsType) => {
  return (
    <Stack sx={{ userSelect: 'none', pointerEvents: 'none' }} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
      <Box sx={{ background: backgroundColor, display: "flex", alignItems: "center", justifyContent: "center", width: 110, height: 110, boxShadow: "2px 1px 4px 1px #00000040", borderRadius: 4 }}>
        <Image alt="" src={picture} />
      </Box>
      <Typography noWrap fontSize={{ xs: 18, md: 24 }} color={'black'} sx={{ paddingBottom: 4 }}>
        {title}
      </Typography>
    </Stack>
  )
}

export default SubjectCard;