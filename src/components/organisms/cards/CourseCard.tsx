import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import iconpic from "assets/View All.png"
import lighpic from "assets/lightbulb.png"
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import cardPic from "assets/Rectangle 52.png";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface cartProps {
	rate: string, state: string, text: string, title: string
}

const CourseCard = ({ rate, state, text, title }: cartProps): any => {
	let changeThem = function (x: number): string {
		if (x % 3 === 2) {
			return "rgb(255, 232, 171)"
		}
		else {
			return "rgb(168, 211, 240)"
		}
	};
	return (
		<Grid item key={title} lg={4} md={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
			<Box sx={{ background: state, width: { md: "24rem", xs: "90%" }, height: "38rem", borderRadius: "40px", display: "flex", margin: "1rem", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
				<Box sx={{ width: "100%", height: "22rem", background: "#D9D9D9", borderRadius: "2.5rem 2.5rem 0 0" }}></Box>
				<Typography sx={{ color: "#000000", paddingInline: "1.8rem", fontSize: "36px", fontWeight: "400", alignSelf: "flex-start" }}>{title}</Typography>
				<Typography sx={{ color: "#000000", paddingInline: "1.8rem", fontSize: "20px", fontWeight: "400", alignSelf: "flex-start" }}>{text}</Typography>
				<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "flex-start", paddingInline: "1.8rem" }}>
					<StarIcon sx={{ color: "gold", width: "3rem", height: "3rem" }} />
					<Typography sx={{ color: "#00000075", fontSize: "20px", fontWeight: "400", paddingTop: "0.5rem" }}>{rate}</Typography>
				</Box>
				<Box sx={{ display: "flex", paddingInline: "1rem", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", width: "100%", paddingBottom: "1.4rem" }}>
					<Box sx={{ background: "#00376F9E !important", width: "3rem", height: "3rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Link href={""}>
							<Button sx={{}}>
								<KeyboardBackspaceIcon sx={{ color: "white" }} />
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Grid>

	);
}

export default CourseCard;