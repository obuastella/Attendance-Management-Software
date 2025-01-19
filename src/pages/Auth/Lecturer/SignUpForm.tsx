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
  Alert,
  Collapse,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// Define types for the form data and errors
type FormField = "fullName" | "email" | "lecturerId" | "password";

interface FormData {
  fullName: string;
  email: string;
  lecturerId: string;
  password: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  lecturerId: string;
  password: string;
}

interface ErrorTimers {
  fullName: NodeJS.Timeout | null;
  email: NodeJS.Timeout | null;
  lecturerId: NodeJS.Timeout | null;
  password: NodeJS.Timeout | null;
}

export default function LecturerSignUpForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    lecturerId: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    lecturerId: "",
    password: "",
  });

  const [errorTimers, setErrorTimers] = useState<ErrorTimers>({
    fullName: null,
    email: null,
    lecturerId: null,
    password: null,
  });

  const setErrorWithTimer = (field: FormField, message: string): void => {
    if (errorTimers[field]) {
      clearTimeout(errorTimers[field] as NodeJS.Timeout);
    }

    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }));

    const timerId = setTimeout(() => {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }, 5000);

    setErrorTimers((prev) => ({
      ...prev,
      [field]: timerId,
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(errorTimers).forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [errorTimers]);

  const clearForm = (): void => {
    setFormData({
      fullName: "",
      email: "",
      lecturerId: "",
      password: "",
    });
  };

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const validateForm = (): boolean => {
    let isValid = true;

    if (!formData.fullName.trim()) {
      setErrorWithTimer("fullName", "Full Name is required.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorWithTimer("email", "Please enter a valid email address.");
      isValid = false;
    }

    const idRegex = /^LEC-[A-Z]{2}-\d{5}$/;
    if (!idRegex.test(formData.lecturerId)) {
      setErrorWithTimer(
        "lecturerId",
        "Lecturer ID must follow the format LEC-XX-12345 (e.g., LEC-CS-12345)."
      );
      isValid = false;
    }

    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]:;"'<>,.?/])[A-Za-z\d!@#$%^&*()\-_=+{}[\]:;"'<>,.?/]{8,}$/.test(
        formData.password
      )
    ) {
      setErrorWithTimer(
        "password",
        "Password must be 8+ chars, include an uppercase, a number, and a special character (e.g., !, @, #)."
      );
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      clearForm();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;

    if (id === "lecturerId") {
      setFormData((prev) => ({
        ...prev,
        [id]: value.toUpperCase(),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const commonTextFieldStyles = {
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "80%" },
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      height: "50px",
    },
    "& .MuiFormLabel-root": { color: "#A0A4A8" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Collapse in={showAlert} sx={{ width: "80%", mb: 2 }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Form submitted successfully!
        </Alert>
      </Collapse>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={commonTextFieldStyles}
            required
            focused
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={commonTextFieldStyles}
            required
            focused
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="lecturerId"
            label="Lecturer ID"
            value={formData.lecturerId}
            onChange={handleChange}
            error={!!errors.lecturerId}
            helperText={errors.lecturerId}
            sx={commonTextFieldStyles}
            required
            focused
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl
            sx={{
              ...commonTextFieldStyles,
              m: 0,
            }}
            variant="outlined"
            required
            focused
            error={!!errors.password}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
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
            <Box
              sx={{ color: "error.main", fontSize: "0.75rem", fontWeight: 400 }}
            >
              {errors.password}
            </Box>
          </FormControl>

          <Box
            sx={{
              width: "100%",
              [theme.breakpoints.up("md")]: { width: "80%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              sx={{
                color: "#A0A4A8",
                "& .MuiFormControlLabel-label": {
                  fontSize: "14px",
                  color: "#A0A4A8",
                },
              }}
            />
          </Box>

          <Button
            className="w-[80%] rounded-[16px] text-[20px] p-[24px] text-white bg-primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Box>

        <div className="text-secondary">
          Already have an account?{" "}
          <Link className="text-primary hover:underline" to="/lecturer/login">
            Sign in
          </Link>
        </div>
      </form>
    </Box>
  );
}
