import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React, { FC, useEffect, useState } from "react";
import { toPersianNumber } from "../../utils/translateNumber";
import { ProgramType } from "../../types/models";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const EventButton: FC<{ to?: string; text: string; disabled?: boolean }> = ({
  to,
  text,
  disabled = false,
}) => {
  return (
    <Button
      href={to}
      size="small"
      variant="outlined"
      fullWidth
      sx={{ borderColor: "rgb(19, 97, 164)", color: "rgb(19, 97, 164)" }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

type EventCardPropsType = {
  event: ProgramType;
};

const EventCard: FC<EventCardPropsType> = ({ event }) => {
  const [eventButtonObj, setEventButtonObj] = useState(
    event ? (
      <EventButton to={`https://platform.kamva.academy/program/${event.id}/registration/`} text={"ورود"} />
    ) : null
  );

  useEffect(() => {
    if (!event) return;
    if (event.user_registration_status === "NotStarted") {
      setEventButtonObj(<EventButton text={"ثبت‌نام شروع نشده"} disabled />);
    }
    if (event.user_registration_status === "DeadlineMissed") {
      setEventButtonObj(<EventButton text={"ثبت‌نام تمام شده"} disabled />);
    }
    if (
      ["Waiting", "Rejected", "Accepted"].includes(
        event.user_registration_status
      )
    ) {
      setEventButtonObj(
        <EventButton
          to={`/program/${event.id}/status/`}
          text={"مشاهده وضعیت ثبت‌نام"}
        />
      );
    }
    if (event.is_user_participating) {
      setEventButtonObj(
        <EventButton to={`/program/${event.id}/`} text={"ورود"} />
      );
    }
  }, [event]);

  if (!event) return <></>;

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        padding: "0px !important",
        backgroundColor: "rgb(255, 255, 255, 0.94)",
        fontSize: "1rem",
        textDecoration: "none",
        overflow: "hidden",
        boxShadow: "0 0 1px 0rem rgba(0, 0, 0, 0.5)",
        transition: "transform 0.1s ease-in-out",
        "&:hover": {
          transform: "translateY(-0.1rem) scale(1.01)",
          boxShadow: "0 0.5em 1rem -1rem rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Grid
        container
        alignItems="stretch"
        sx={(theme) => ({
          height: "100%",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
          },
        })}
      >
        <Grid
          sx={{ padding: 0 }}
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={5}
        >
          <img
            src={event.cover_page}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          xs={12}
          md={7}
          item
          container
          sx={{
            padding: 2,
            paddingLeft: 2,
          }}
        >
          <Stack
            justifyContent="space-between"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#4d4a70",
              }}
            >
              {event.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {event.description}
            </Typography>
            <Stack spacing={1}>
              <Grid container direction={"row"} spacing={1}>
                <Grid item margin={"0px"}>
                  <Chip
                    color="info"
                    sx={{
                      userSelect: "none",
                      padding: "12px",
                      paddingLeft: "3px",
                    }}
                    icon={<PeopleAltIcon />}
                    label={
                      event.event_type === "Individual"
                        ? "انفرادی"
                        : `${toPersianNumber(event.team_size)} ${"نفره"}`
                    }
                  />
                </Grid>
                {(!event.merchandise || event.merchandise.price === 0) && (
                  <Grid item>
                    <Chip
                      color="success"
                      sx={{
                        userSelect: "none",
                        padding: "12px",
                        paddingLeft: "3px",
                      }}
                      icon={<InsertEmoticonIcon />}
                      label={"رایگان"}
                    />
                  </Grid>
                )}
              </Grid>
              {eventButtonObj}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCard;
