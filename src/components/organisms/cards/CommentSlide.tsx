import { Box, Typography } from "@mui/material";
import Image from "next/image";
import appMusic from "assets/Apple Music Lyrics.png"

const SliderCard = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box sx={{ width: { sm: "22rem", xs: "80%" }, height: "35rem", borderRadius: "1.25rem", border: "5px solid #00376F", background: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
				<Box sx={{ width: { sm: "13.9375rem", xs: "11rem" }, height: { sm: "13.375rem", xs: "11rem" }, borderRadius: "13.9rem", position: "absolute", top: "-19%", border: "5px solid #002256" }}></Box>
				<Typography sx={{ fontWeight: "400", fontSize: { lg: "36px", xs: "20px" }, textAlign: "center" }}>
					آرین سالمی
				</Typography>
				<Typography sx={{ ontWeight: "400", fontSize: { lg: "24px", xs: "14px" }, textAlign: "center" }}>
					دانش‌آموز
				</Typography>
				<Box>
					<Image alt="" src={appMusic} />
				</Box>
				<Typography sx={{ paddingInline: "2rem", fontWeight: "400", fontSize: { lg: "24px", xs: "14px" }, textAlign: "center", fontFamily: "" }}>
					به نظر من دوره خیلی خوبی بود و خیلی چیز‌ها یاد گرفتم.
				</Typography>
			</Box>
		</Box>
	);
}

export default SliderCard;




