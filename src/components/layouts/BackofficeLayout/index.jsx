// /components/Layout/Layout.jsx
import { Box, Stack } from "@mui/material";
import "./style.css";

const BackofficeLayout = ({ children }) => {
  const { Sidebar, Navbar, Content, Footer } = children;

  return (
    <Box className="flex ">
      {/* Sidebar */}
      {Sidebar}

      {/* Main Content Area */}
      <Box component="main" className="main-content">
        {/* Navbar */}
        {Navbar}

        {/* Content */}
        <Stack className="content-area">{Content}</Stack>

        {/* Footer */}
        {Footer}
      </Box>
    </Box>
  );
};

export default BackofficeLayout;
