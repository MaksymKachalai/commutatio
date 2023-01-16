import { Container, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function HomePage() {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Container component="header">
				<Typography
					variant="subtitle1"
					color="initial">
					Commutatio
				</Typography>
			</Container>
			<Container
				maxWidth="xl"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Typography
					variant="h1"
					color="initial">
					Share your files fast and easy
				</Typography>
				<Button
					to="/personalroom"
					variant="contained"
					color="primary"
					component={NavLink}>
					Create room
				</Button>
				<Button
					to="/enter"
					variant="contained"
					color="secondary"
					component={NavLink}>
					Enter room
				</Button>
			</Container>
		</Container>
	);
}
