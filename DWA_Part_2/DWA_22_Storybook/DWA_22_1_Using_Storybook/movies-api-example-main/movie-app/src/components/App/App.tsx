import { Button, Paper, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";

import { Global, css } from "@emotion/react";

const StyledButton = styled(Button)`
  background: red;
`;

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

const mockPreviews = new Array(30).fill(undefined).map(
  (_, index): Preview => ({
    actors: faker.number.int({ min: 1, max: 12 }),
    id: index + 1,
    image: faker.image.urlPicsumPhotos(),
    release: faker.date.past().toString(),
    title: faker.datatype.boolean()
      ? faker.lorem.words(4)
      : faker.lorem.words(7),
  }),
);

const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Card = styled(Paper)<{ as: string }>`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Title = styled(Typography)<{ as: string }>`
  line-height: 1.2rem;
`;

const Info = styled.div`
  padding-left: 1rem;
`;

export const App = () => {
  return (
    <>
      <CssBaseline />

      <Global styles={global} />

      <List>
        {mockPreviews.map(({ actors, id, image, release, title }) => {
          const year = new Date(release).getFullYear();

          return (
            <Card key={id} as="li">
              <Image src={image} />

              <Info>
                <Title variant="h6" as="h2">
                  {title}
                </Title>
                <dl>
                  <dt>Release</dt>
                  <dd>{year}</dd>
                </dl>
                <Typography>{year}</Typography>
              </Info>

              {/*<ul>*/}
              {/*  <li>{title}</li>*/}
              {/*  <li>{actors}</li>*/}
              {/*  <li>{release}</li>*/}
              {/*  <li>*/}
              {/*    <Image src={image} />*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </Card>
          );
        })}
      </List>
    </>
  );
};
// <div>
//   {/*<StyledButton>{faker.commerce.productName()}</StyledButton>*/}
// </div>
