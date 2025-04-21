import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import iconpic from "assets/View All.png"
// import lighpic from "assets/lightbulb.png"
import lighpic from "assets/Vector_9.svg"

import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import cardPic from "assets/Rectangle 52.png";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CourseCard from "./cards/CourseCard";

function Courses() {
	const [cardInfo, setCardInfo] = useState([
		{ "id": 1, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" },
		{ "id": 2, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" },
		{ "id": 3, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" },
		{ "id": 4, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" },
		{ "id": 5, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" },
		{ "id": 6, "src": cardPic, "title": "سلام علیکم", "text": "تینلنتلتاملتنمرذکدنمد", "rate": "4,9", "time": "5h 45min" }
	])
	let changeThem = function (x: number): string {
		if (x % 3 === 2) {
			return "rgb(255, 232, 171)"
		}
		else {
			return "rgb(168, 211, 240)"
		}
	};
	return (
		<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", marginTop: "4rem", marginBottom: "7rem" }}>
			{/* <Box sx={{ width: { md: "85%", xs: "100%" }, border: " 1px solid #00000073" }}></Box> */}
			<Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: { md: "center", sm: "center" }, marginTop: "2rem", width: { xs: "14rem", md: "85%" } }}>
				<Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: { md: "center", xs: "center" } }}>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Link href={""}>
							<Button sx={{ width: { sm: "10rem", md: "15rem" }, height: "4rem", border: "3px solid hsla(204, 70%, 53%, 1)", background: "#FFE08B !important", color: "", borderRadius: "20px", boxShadow: "7px 5px 4px 0px #00000040" }}>
								<Typography sx={{ color: "#3498DB", fontWeight: "400", fontSize: { sm: "14px", md: "22px" } }}>مشاهده همه
								</Typography>
								<Image alt="" src={iconpic}></Image></Button>
						</Link>
					</Box>
					<Box sx={{ width: { xs: "14rem", sm: "17rem" }, height: "7rem", border: "5px solid hsla(204, 70%, 53%, 1)", background: "rgb(229, 215, 151)", color: "", borderRadius: "40px", display: { xs: "flex", md: "none" }, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
						<Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "32px", textAlign: "center" }}>دوره‌های فعلی</Typography>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", flexDirection: "row", justifyContent: "center", background: "rgb(127, 181, 199)", borderRadius: "40px", width: { md: "38rem", lg: "45rem" }, height: "14rem", marginRight: "4rem" }}>
						<Box sx={{ width: "23rem", height: "7rem", border: "5px solid hsla(204, 70%, 53%, 1)", background: "rgb(229, 215, 151)", color: "", borderRadius: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
							<Typography sx={{ color: "#000000", fontWeight: "700", fontSize: "50px", textAlign: "center" }}>دوره‌های فعلی</Typography>
						</Box>
						<Image alt="" src={lighpic}></Image>
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: { md: "flex-start", sm: "center" }, marginTop: "2rem", width: "90%" }}>
				<Grid container sx={{ justifyContent: { md: "center", sm: "center" } }}>
					{
						cardInfo.map(element => {
							let state: string = changeThem(element.id)
							return (
								<CourseCard key={element.id} title={element.title} text={element.text} rate={element.rate} state={state} />
							)
						})
					}
				</Grid>
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<Link href={""}>
						<Button sx={{ width: { sm: "10rem", md: "15rem" }, height: "4rem", border: "3px solid hsla(204, 70%, 53%, 1)", background: "#FFE08B !important", color: "", borderRadius: "20px", boxShadow: "7px 5px 4px 0px #00000040" }}>
							<Typography sx={{ color: "#3498DB", fontWeight: "400", fontSize: { sm: "14px", md: "22px" } }}>مشاهده همه
							</Typography>
							<Image alt="" src={iconpic}></Image></Button>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}

export default Courses;