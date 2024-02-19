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

// const StyledButton = styled(Button)`
//   background: red;
// `;

type Preview = {
  id: number;
  title: string;
  actors: number;
  release: string;
  image: string;
};

type Actor = {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
};

type Movie = {
  id: number;
  name: string;
  image: string;
  description: string;
  release: string;
  duration: string;
  genres: number[];
  actors: Actor[];
};

const global = css`
  body {
    background: #eee;
  }
`;

// const mockPreviews = new Array(30).fill(undefined).map(
//   (_, index): Filters => ({
//     actors: faker.number.int({ min: 1, max: 12 }),
//     id: index + 1,
//     image: faker.image.urlPicsumPhotos(),
//     release: faker.date.past().toString(),
//     title: faker.datatype.boolean()
//       ? faker.lorem.words(4)
//       : faker.lorem.words(7),
//   }),
// );
//
// const Image = styled.img`
//   width: 5rem;
//   height: 5rem;
// `;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

// const Card = styled(Paper)<{ as: string }>`
//   margin: 1rem 0;
// `;
// const StyledButtonBase = styled(ButtonBase)`
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   text-align: left;
//
//   &:hover {
//     background: #007fff10;
//   }
// `;
//
// const Title = styled(Typography)<{ as: string }>`
//   line-height: 1.2rem;
// `;
//
// const Info = styled.div`
//   padding-left: 1rem;
//   flex-grow: 1;
// `;
//
// const Values = styled.dd`
//   margin: 0;
// `;
//
// const Line = styled.div`
//   display: flex;
// `;
//
// const Icon = styled(ArrowForwardIos)`
//   opacity: 0.4;
//   height: 1rem;
//   width: 1rem;
// `;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export type App = {
  list: (Preview & { id: number })[];
};
export const App = (props: App) => {
  const { list } = props;

  return (
    <>
      <CssBaseline />

      <Global styles={global} />

      <Row>
        <Typography>
          <strong>Movies App</strong>
        </Typography>
        <Button variant="contained">Filter List</Button>
      </Row>
      <List>
        {list.map(({ id, release: releaseString, ...innerProps }) => {
          const release = new Date(releaseString);

          return <Preview {...innerProps} release={release} key={id} />;
        })}
      </List>
    </>
  );
};
// <div>
//   {/*<StyledButton>{faker.commerce.productName()}</StyledButton>*/}
// </div>

// return (
//   <Card key={id} as="li">
//     <StyledButtonBase>
//       <Image src={image} />
//
//       <Info>
//         <Title variant="h6" as="h2">
//           {title}
//         </Title>
//         <dl>
//           <Line>
//             <dt>Release:&nbsp;</dt>
//             <dd>{year}</dd>
//           </Line>
//         </dl>
//         <dl>
//           <Line>
//             <dt>Actors:&nbsp;</dt>
//             <dd>{actors}</dd>
//           </Line>
//         </dl>
//         <Typography>{year}</Typography>
//       </Info>
//
//       <ArrowForwardIos />
//     </StyledButtonBase>
//
//     {/*<ul>*/}
//     {/*  <li>{title}</li>*/}
//     {/*  <li>{actors}</li>*/}
//     {/*  <li>{release}</li>*/}
//     {/*  <li>*/}
//     {/*    <Image src={image} />*/}
//     {/*  </li>*/}
//     {/*</ul>*/}
//   </Card>
// );
