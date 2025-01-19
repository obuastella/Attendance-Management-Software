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

type FormField = "lecturerId" | "password";

interface FormData {
  lecturerId: string;
  password: string;
}

interface FormErrors {
  lecturerId: string;
  password: string;
}

interface ErrorTimers {
  lecturerId: NodeJS.Timeout | null;
  password: NodeJS.Timeout | null;
}

export default function LecturerLoginForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    lecturerId: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    lecturerId: "",
    password: "",
  });

  const [errorTimers, setErrorTimers] = useState<ErrorTimers>({
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

    // LecturerID validation (format: LEC-XX-12345)
    const idRegex = /^LEC-[A-Z]{2}-\d{5}$/;
    if (!formData.lecturerId) {
      setErrorWithTimer("lecturerId", "Lecturer ID is required.");
      isValid = false;
    } else if (!idRegex.test(formData.lecturerId)) {
      setErrorWithTimer(
        "lecturerId",
        "Invalid Lecturer ID format. Format: LEC-XX-12345 (e.g., LEC-CS-12345)."
      );
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      setErrorWithTimer("password", "Password is required.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login attempt with:", formData);
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
      height: "56px",
    },
    "& .MuiFormLabel-root": { color: "#A0A4A8" },
    "& .MuiFormHelperText-root": {
      margin: "4px 0",
    },
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
          Login successful!
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
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <TextField
            id="lecturerId"
            label="Lecturer ID"
            value={formData.lecturerId}
            onChange={handleChange}
            error={!!errors.lecturerId}
            helperText={
              errors.lecturerId || "Format: LEC-XX-12345 (e.g., LEC-CS-12345)."
            }
            sx={commonTextFieldStyles}
            required
            focused
          />
        </Box>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
            {errors.password && (
              <Box
                sx={{
                  color: "error.main",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  mt: 1,
                }}
              >
                {errors.password}
              </Box>
            )}
          </FormControl>
        </Box>

        <Box
          sx={{
            width: "100%",
            [theme.breakpoints.up("md")]: { width: "80%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 1,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={{
              color: "#A0A4A8",
              "& .MuiTypography-root": { fontSize: "14px" },
            }}
          />
          <Link
            to="/forgot-password"
            className="text-primary hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          className="w-[80%] rounded-[16px] text-[20px] p-[24px] text-white bg-primary"
          type="submit"
        >
          Login
        </Button>

        <div className="text-secondary">
          Don't have an account?{" "}
          <Link className="text-primary hover:underline" to="/lecturer/signup">
            Sign up
          </Link>
        </div>
      </form>
    </Box>
  );
}
