import { FC, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps, useTheme } from "@mui/material";
import { StyledInput } from "../../styles";
import { Dayjs } from "dayjs";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

interface IDataPicker {
  date: Date;
  setDate: (value: Date) => void;
}

export const DataPicker: FC<IDataPicker> = ({ date, setDate }) => {
  const [dateOpen, setDateOpen] = useState(false);
  const theme = useTheme();

  const handleChange = (newValue: any) => {
    setDate(newValue["_d"]);
  };

  const popperSx: SxProps = {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.white,
    },
    "& .MuiCalendarPicker-root": {
      backgroundColor: theme.palette.white,
    },
    "& .MuiPickersFadeTransitionGroup-root": {
      fontSize: "16px",
      lineHeight: "24.7px",
      color: theme.palette.black,
    },
    "& .MuiButtonBase-root": {
      fontSize: "14px",
      lineHeight: "21.7px",
      color: theme.palette.darkBlack,
      backgroundColor: theme.palette.white,
      width: "30px",
      height: "30px",
      "&:hover": {
        backgroundColor: theme.palette.green.lighter,
      },
      "&.Mui-selected": {
        color: theme.palette.white,
        backgroundColor: `${theme.palette.green.datePicker} !important`,
        boxShadow: "0px 4px 4px rgba(82, 81, 110, 0.2)",
      },
      "& .MuiPickersDay-root": {
        "&.Mui-selected": {
          color: theme.palette.white,
          backgroundColor: theme.palette.green.datePicker,
          boxShadow: "0px 4px 4px rgba(82, 81, 110, 0.2)",
        },
      },
    },
    "& .PrivatePickersSlideTransition-root": {
      minHeight: "210px",
    },
    "& .MuiTypography-caption": {
      fontSize: "14px",
      lineHeight: "21.7px",
      textAlign: "center",
    },
    "& .MuiTabs-root": { backgroundColor: "rgba(120, 120, 120, 0.4)" },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        showDaysOutsideCurrentMonth
        label="Date"
        inputFormat="MM/DD/YYYY"
        value={date}
        open={dateOpen}
        onClose={() => setDateOpen(false)}
        PopperProps={{ sx: popperSx }}
        disableHighlightToday
        onChange={handleChange}
        disableOpenPicker
        renderInput={(params) => (
          <StyledInput
            weight={600}
            sx={{ width: "129px" }}
            isBlack
            variant="standard"
            onClick={() => setDateOpen(true)}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
