import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EmiOption = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>EMI Available</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your order qualifies for EMI with valid credit cards (not available
            on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top
            up).{" "}
            <a
              className="hover:underline text-green-600 hover:text-red-500 "
              href="https://www.amazon.in/gp/help/customer/display.html?pop-up=1&nodeId=201439140"
              target="_blank"
            >
              Learn more
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EmiOption;
