import { Button } from "@/components/ui/button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function StudentSignUpForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle functions and route to students dashboard here
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <TextField
          sx={{
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "80%",
            },
            margin: "auto",
            border: "1",
            borderColor: "#2D45FF",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              borderColor: "#2D45FF",
              color: "black",
            },
            "& .MuiFormLabel-root": {
              color: "#A0A4A8",
            },
          }}
          required
          id="outlined-required"
          label="Matric no"
          focused
        />
        <TextField
          sx={{
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "80%",
            },
            margin: "auto",
            border: "1",
            borderColor: "#2D45FF",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              borderColor: "#2D45FF",
              color: "black",
            },
            "& .MuiFormLabel-root": {
              color: "#A0A4A8",
            },
          }}
          required
          id="outlined-required"
          label="Email"
          focused
        />
        <FormControl
          sx={{
            m: 1,
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "80%",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              borderColor: "#2D45FF",
            },
            "& .MuiFormControl-root": {
              borderColor: "#2D45FF",
            },
            "& .MuiFormLabel-root": {
              color: "#A0A4A8",
            },
          }}
          variant="outlined"
          required
          focused
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility sx={{ color: "#292D32" }} />
                  ) : (
                    <VisibilityOff sx={{ color: "#292D32" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box
          sx={{
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "80%",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me "
            sx={{
              color: "#A0A4A8",
              "& .MuiTypography-root": {
                fontSize: "14px",
              },
            }}
          />
        </Box>
        <Button
          className="w-[80%] rounded-[16px] text-[20px] p-[24px] text-white"
          type="submit"
        >
          Continue
        </Button>
        <div className="text-secondary">
          Already have an account?{" "}
          <Link className="text-primary hover:underline" to="/">
            Sign in
          </Link>
        </div>
      </form>
    </>
  );
}
