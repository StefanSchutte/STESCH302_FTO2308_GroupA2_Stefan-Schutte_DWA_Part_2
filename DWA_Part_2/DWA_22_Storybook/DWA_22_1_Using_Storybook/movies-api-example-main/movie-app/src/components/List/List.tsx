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
  Skeleton,
  Alert,
} from "@mui/material";
import styled from "@emotion/styled";
//import { faker } from "@faker-js/faker";

import { Global, css } from "@emotion/react";
// import { ArrowForwardIos } from "@mui/icons-material";
//
// @ts-ignore
import { Preview } from "../Preview/Preview.tsx";

//import { store } from "../../model";
//import { useStore } from "zustand";

import { Filters } from "../Filters";

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

const StyledSkeleton = styled(Skeleton)`
  margin: 1rem 0;
  height: 8rem;
  width: 100%;
  border-radius: 4px;
`;

export type List = {
  phase: "IDLE" | "LOADING" | "ERROR" | "CONFIGURING";
  movies: (Preview & { id: number })[];
  filter: string;
  configuration: JSX.Element;
  onFilter: (newValue: string) => void,
    onConfigure () => void;

};
export const List = (props: List) => {
  const {
    movies,
    phase,
    filter: filterString,
    configuration,
      onFilter,
    toggleConfigure,
  } = props;

  return (
    <Wrapper>
      <CssBaseline />
      <Global styles={global} />

      {phase === "CONFIGURING" && <Filters onSubmit={onFilter} toggleConfigure={toggleConfigure}/>}

      <Row>
        <Typography>
          <strong>Movies App</strong>
        </Typography>
        <Button disabled={phase !== "LISTING"} variant="contained" onClick={toggleConfigure}>
          Filter List
        </Button>
      </Row>
      <InnerList>
        {phase === "LISTING" &&
          movies
            .filter((item) => {
              if (filterString.trim() === "") return true;
              return item.title
                .toLowerCase()
                .includes(filterString.toLowerCase());
            })

            .map(({ id, release: releaseString, ...innerProps }) => {
              const release = new Date(releaseString);

              return <Preview {...innerProps} release={release} key={id} />;
            })}
        {phase === "LOADING" && (
          <>
            {new Array(20).fill(null).map((_, index) => (
              <StyledSkeleton variant="rectangular" />
            ))}
          </>
        )}
        {phase === "ERROR" && (
          <Alert severity="error">Something went wrong</Alert>
        )}
      </InnerList>
    </Wrapper>
  );
};
