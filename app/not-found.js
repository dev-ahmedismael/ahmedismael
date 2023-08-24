import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img
          src="/images/notfound.png"
          alt="Not Found"
          width={150}
          height={150}
        />
        <Typography
          variant="h4"
          color={"primary"}
          textAlign={"center"}
          mt={5}
          mb={2}
        >
          Oops!
        </Typography>
        <Typography variant="h6" textAlign={"center"} mb={5}>
          Could not find requested resource
        </Typography>
        <Link href="/">
          <Button variant="contained">Return Home</Button>
        </Link>
      </Box>
    </Section>
  );
}
