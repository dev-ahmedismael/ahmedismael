"use client";
import Section from "@/templates/Section";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { certificates } from "@/public/data/certificates.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
register();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#fff",
  border: "2px solid #fff",
  boxShadow: 24,
};

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (certificate) => {
    setOpen(true);
    setActiveCertificate(certificate);
  };
  const handleClose = () => setOpen(false);

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      autoplay: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        100: { slidesPerView: 1 },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h3" color={"primary"}>
          My Certificates
        </Typography>
      </Box>
      <Box>
        <Box display={"flex"} justifyContent={"flex-end"} mb={3}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "100%", width: 50, height: 60 }}
            className="prev-btn"
          >
            <ArrowBackIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "100%", width: 50, height: 60, ml: 2 }}
            className="next-btn"
          >
            <ArrowForwardIcon />
          </Button>
        </Box>
        <swiper-container ref={swiperRef} init="false">
          {certificates.map((certificate) => (
            <swiper-slide key={certificate.id}>
              <Box>
                <img
                  src={certificate.certificate}
                  alt={certificate.title}
                  width={"100%"}
                  height={300}
                  style={{ borderRadius: "10px", cursor: "pointer" }}
                  onClick={() => {
                    handleOpen(certificate.certificate);
                  }}
                />
                <Typography variant="h5" color={"primary"} textAlign={"center"}>
                  {certificate.title}
                </Typography>
              </Box>
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <img
              src={activeCertificate}
              alt="Certificate"
              width={"100%"}
              height={500}
            />
          </Typography>
        </Box>
      </Modal>
    </Section>
  );
};

export default Certificates;
