// import {
//   Button,
//   // Button,
//   // Paper,
//   CssBaseline,
//   Typography,
//   Dialog,
//   TextField,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   // Typography,
//   // ButtonBase,
// } from "@mui/material";
// import styled from "@emotion/styled";
// //import { faker } from "@faker-js/faker";
//
// import { Global, css } from "@emotion/react";
// // import { ArrowForwardIos } from "@mui/icons-material";
// //
// // @ts-ignore
// import { Preview } from "./components/Preview/Preview.tsx";
//
// import { store } from "./model";
// import { useStore } from "zustand";
//
// // const StyledButton = styled(Button)`
// //   background: red;
// // `;
//
// type Preview = {
//   id: number;
//   title: string;
//   actors: number;
//   release: string;
//   image: string;
// };
//
// type Actor = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   image: string;
// };
//
// type Movie = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   release: string;
//   duration: string;
//   genres: number[];
//   actors: Actor[];
// };
//
// const global = css`
//   body {
//     background: #eee;
//   }
// `;
//
// // const mockPreviews = new Array(30).fill(undefined).map(
// //   (_, index): FiltersPresentation => ({
// //     actors: faker.number.int({ min: 1, max: 12 }),
// //     id: index + 1,
// //     image: faker.image.urlPicsumPhotos(),
// //     release: faker.date.past().toString(),
// //     title: faker.datatype.boolean()
// //       ? faker.lorem.words(4)
// //       : faker.lorem.words(7),
// //   }),
// // );
// //
// // const Image = styled.img`
// //   width: 5rem;
// //   height: 5rem;
// // `;
//
// const List = styled.ul`
//   padding: 0;
//   list-style: none;
// `;
//
// // const Card = styled(Paper)<{ as: string }>`
// //   margin: 1rem 0;
// // `;
// // const StyledButtonBase = styled(ButtonBase)`
// //   padding: 1rem;
// //   display: flex;
// //   align-items: center;
// //   text-align: left;
// //
// //   &:hover {
// //     background: #007fff10;
// //   }
// // `;
// //
// // const Title = styled(Typography)<{ as: string }>`
// //   line-height: 1.2rem;
// // `;
// //
// // const Info = styled.div`
// //   padding-left: 1rem;
// //   flex-grow: 1;
// // `;
// //
// // const Values = styled.dd`
// //   margin: 0;
// // `;
// //
// // const Line = styled.div`
// //   display: flex;
// // `;
// //
// // const Icon = styled(ArrowForwardIos)`
// //   opacity: 0.4;
// //   height: 1rem;
// //   width: 1rem;
// // `;
//
// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
//
// const Wrapper = styled.div`
//   max-width: 30rem;
//   margin: 0 auto;
//   padding: 1rem;
// `;
//
// export const Container;
//
// export type App = {
//   list: (Preview & { id: number })[];
// };
// export const App = (props: App) => {
//   const { list } = props;
//
//   return (
//     <Wrapper>
//       <CssBaseline />
//
//       <Global styles={global} />
//
//       <Row>
//         <Typography>
//           <strong>Movies App</strong>
//         </Typography>
//         <Button variant="contained">Filter List</Button>
//       </Row>
//       <List>
//         {list.map(({ id, release: releaseString, ...innerProps }) => {
//           const release = new Date(releaseString);
//
//           return <Preview {...innerProps} release={release} key={id} />;
//         })}
//       </List>
//     </Wrapper>
//   );
// };
// // <div>
// //   {/*<StyledButton>{faker.commerce.productName()}</StyledButton>*/}
// // </div>
//
// // return (
// //   <Card key={id} as="li">
// //     <StyledButtonBase>
// //       <Image src={image} />
// //
// //       <Info>
// //         <Title variant="h6" as="h2">
// //           {title}
// //         </Title>
// //         <dl>
// //           <Line>
// //             <dt>Release:&nbsp;</dt>
// //             <dd>{year}</dd>
// //           </Line>
// //         </dl>
// //         <dl>
// //           <Line>
// //             <dt>Actors:&nbsp;</dt>
// //             <dd>{actors}</dd>
// //           </Line>
// //         </dl>
// //         <Typography>{year}</Typography>
// //       </Info>
// //
// //       <ArrowForwardIos />
// //     </StyledButtonBase>
// //
// //     {/*<ul>*/}
// //     {/*  <li>{title}</li>*/}
// //     {/*  <li>{actors}</li>*/}
// //     {/*  <li>{release}</li>*/}
// //     {/*  <li>*/}
// //     {/*    <Image src={image} />*/}
// //     {/*  </li>*/}
// //     {/*</ul>*/}
// //   </Card>
// // );

//---------------------------------------------------------

import { createStore } from "./model";
import { List } from "./components/List";
import { useStore } from "zustand";
import { createApi } from "./api";

const api = createApi();
const store = createStore(api);

export const App = () => {
  // const store = createStore();
  const phase = useStore(store, (state) => state.phase);
  const movies = useStore(store, (state) => state.list);

  const toggleConfiguration = useStore(
    store,
    (state) => state.toggleConfiguration,
  );
  const updateSearch = useStore(store, (state) => state.updateSearch);
  const filter = useStore(store, (state) => state.filter);

  //if (phase === "Loading") return <div>Loading...</div>;
  return (
    <List
      movies={movies}
      phase={phase}
      filter={filter}
      toggleConfigure={toggleConfiguration}
      onFilter={({ search }) => {
        updateSearch(search || "");
      }}
    />
  );
};
//-------------------------------------async----------------------------------------
// setInterval(() => {
//   console.log(new Date());
// }, 2000);
//
// setTimeout(() => {
//   prompt("what u name?");
// }, 3000);
//
// const logDelay = (value: string, success: () => void, error: () => void) => {
//   setTimeout(() => {
//     console.log(value);
//
//     if (value === "l") return error();
//     success();
//   }, 2000);
// };
//
// //logDelay("hi", () => console.log("done"));
// logDelay(
//   "hi",
//   () => {
//     logDelay(
//       "l",
//       () => {
//         logDelay(
//           "lo",
//           () => {
//             console.log("done");
//           },
//           () => console.log("error"),
//         );
//       },
//       () => console.log("error"),
//     );
//   },
//   () => console.log("error"),
// );
//
// const createLogDelayPromise = (value: string, time: number): Promise<void> =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(value);
//
//       if (value === "l") return reject();
//       resolve();
//     }, time);
//   });
// createLogDelayPromise("h", 1000)
//   .then(() => createLogDelayPromise("e", 2000))
//   .then(() => createLogDelayPromise("l", 2000))
//   .then(() => createLogDelayPromise("o", 2000))
//   .catch(() => console.log("error"));
//
// const response = fetch("https://movies-example-api.netlify.app/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("something went wrong try again");
//     }
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//
// export const App = () => {
//   return <div>123</div>;
// };
