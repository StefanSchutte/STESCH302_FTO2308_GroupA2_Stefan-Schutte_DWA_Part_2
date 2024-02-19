import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { FormEvent } from "react";
import z from "zod";

const response = z.object({
  search: z.string(),
});

type Response = z.infer<typeof response>

export type Filters = {
  onSubmit: (response: Response) => void;
};

export const Filters = (props: Filters) => {
  const { onSubmit } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    };
  };

  return (
    <Dialog open>
      <DialogTitle>Filters</DialogTitle>
      <DialogContent>
        <form id="filters" onSubmit={handleSubmit}>
          <TextField label="search" variant="filled" />
        </form>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained" type="submit" form="filters">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
