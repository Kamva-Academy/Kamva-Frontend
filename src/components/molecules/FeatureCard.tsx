import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type FeatureCardPropsType = {
	iconImage: any;
	backgroundColor: string;
	description: string;
}

const FeatureCard = ({ iconImage, backgroundColor, description }: FeatureCardPropsType) => {

	const descriptionFontSizes = { xs: 16, sm: 18, md: 22 };

	return (
		<Stack
			width={{ xs: '80%', sm: '60%', md: "30%", lg: "30%" }}
			minHeight={{ xs: 280, md: 320 }} alignItems="center" justifyContent="space-evenly"
			sx={{ padding: 2, background: backgroundColor, boxShadow: "6px 6	px 4px 0px #00000040", borderRadius: 12 }}>
			<Image style={{ userSelect: 'none', pointerEvents: 'none' }} src={iconImage} alt="" />
			<Typography sx={{ color: "#000000", textAlign: "center", fontSize: descriptionFontSizes, padding: "1rem", fontWeight: "400" }}>
				{description}
			</Typography>
		</Stack >
	)
}
export default FeatureCard;