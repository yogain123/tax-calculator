import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import NewRegimeCalculator from "./views/NewRegime";
import OldRegimeCalculator from "./views/OldRegime";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography
              onClick={() => {
                window.location.href = "/tax-calculator/new-regime";
              }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Salary Calculator
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/tax-calculator/new-regime"
            >
              New Regime
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/tax-calculator/old-regime"
            >
              Old Regime
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/tax-calculator/new-regime" replace />}
          />
          <Route
            path="/tax-calculator"
            element={<Navigate to="/tax-calculator/new-regime" replace />}
          />
          <Route
            path="/tax-calculator/new-regime"
            element={<NewRegimeCalculator />}
          />
          <Route
            path="/tax-calculator/old-regime"
            element={<OldRegimeCalculator />}
          />
        </Routes>

        <Box
          component="footer"
          sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: "auto" }}
        >
          <Container>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              Made by Yogendra for all Indian ❤️
            </Typography>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
