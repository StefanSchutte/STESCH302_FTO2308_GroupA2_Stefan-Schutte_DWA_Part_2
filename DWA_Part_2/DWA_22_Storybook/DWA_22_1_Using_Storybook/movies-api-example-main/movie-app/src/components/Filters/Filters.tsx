import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Alert,
} from "@mui/material";
import { useSpring } from "@react-spring/web";
import { FormEvent, useState, useRef, useEffect } from "react";
import z from "zod";
import styled from "@emotion/styled";

const response = z.object({
  search: z
    .string()
    .min(3, {
      message: "Search needs to be empty or atleast 3 charactes.",
    })
    .optional()
    .or(z.literal("")),
});

type Response = z.infer<typeof response>;

export type Filters = {
  onSubmit: (response: Response) => void;
};

const StyledAlert = styled(Alert)<{ error: string | null }>`
  margin-top: 1rem;
  height: ${(props) => (props.error ? auto : "0.1rem")};
`;

const useFilters = (props: Filters) => {
  const [error, setError] = useState<string | null>(null);

  const isStarting = useRef(true);

  const style = useSpring({
    from: { opacity: isStarting || error ? 0 : 1 },
    to: { opacity: error ? 1 : 0 },
  });

  useEffect(() => {
    isStarting.current = false;
  }, []);

  const { onSubmit } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const entries = new FormData(event.target as any);
    const transformed = Object.fromEntries(entries);
    const validation = response.safeParse(transformed);

    if (!validation.success) {
      const { error } = validation;
      return setError(error.issues[0].message);
      console.log(error.issues[0].message);
    }

    setError(null);
    const { data } = validation;
    onSubmit(data);
  };
  return {
    error,
    style,
    handleSubmit,
  };
};

const Content = styled.div`
  width: 100%;
  width: 20rem;
  max-width: 20rem;
`;

export const Filters = (props: Filters) => {
  const { error, handleSubmit, style } = useFilters(props);

  return (
    <Dialog open>
      <Content>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <form id="filters" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="Search"
              label="search"
              variant="filled"
              placeholder="Any"
            />
          </form>

          <animated.div style={style}>
            <StyledAlert error={error} severity="warning"></StyledAlert>
          </animated.div>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" type="submit" form="filters">
            Apply
          </Button>
        </DialogActions>
      </Content>
    </Dialog>
  );
};
