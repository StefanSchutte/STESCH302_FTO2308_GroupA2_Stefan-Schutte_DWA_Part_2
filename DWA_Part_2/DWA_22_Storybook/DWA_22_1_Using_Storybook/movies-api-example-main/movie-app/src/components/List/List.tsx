import {
  Button,
  // Button,
  // Paper,
  CssBaseline,
  Typography,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  // Typography,
  // ButtonBase,
} from "@mui/material";
import styled from "@emotion/styled";
//import { faker } from "@faker-js/faker";

import { Global, css } from "@emotion/react";
// import { ArrowForwardIos } from "@mui/icons-material";
//
// @ts-ignore
import { Preview } from "../Preview/Preview.tsx";

import { store } from "../../model";
import { useStore } from "zustand";

// const StyledButton = styled(Button)`
//   background: red;
// `;

const global = css`
  body {
    background: #eee;
  }
`;

const InnerList = styled.ul`
  padding: 0;
  list-style: none;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem;
`;

export type List = {
  movies: (Preview & { id: number })[];
};
export const List = (props: List) => {
  const { movies } = props;

  return (
    <Wrapper>
      <CssBaseline />
      <Global styles={global} />

      <Row>
        <Typography>
          <strong>Movies App</strong>
        </Typography>
        <Button variant="contained">Filter List</Button>
      </Row>
      <List>
        {movies.map(({ id, release: releaseString, ...innerProps }) => {
          const release = new Date(releaseString);

          return <Preview {...innerProps} release={release} key={id} />;
        })}
      </List>
    </Wrapper>
  );
};
