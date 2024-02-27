import { Paper, Typography, ButtonBase, Skeleton } from "@mui/material";
import styled from "@emotion/styled";

import { ArrowForwardIos } from "@mui/icons-material";

const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Card = styled(Paper)<{ as: string }>`
  margin: 1rem 0;
  list-style: none;
  min-height: 12rem;
`;
const StyledButtonBase = styled(ButtonBase)`
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: left;
  min-height: 8rem;

  &:hover {
    background: #007fff10;
  }
`;

const Title = styled(Typography)<{ as: string }>`
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Info = styled.div`
  padding-left: 1rem;
  flex-grow: 1;
`;

const Values = styled.dd`
  margin: 0;
`;

const Line = styled.div`
  display: flex;
`;

const Icon = styled(ArrowForwardIos)`
  opacity: 0.4;
  height: 1rem;
  width: 1rem;
`;

type Preview = {
  title: string;
  actors: number;
  release: Date;
  image: string;
};

export const Preview = (props: Preview) => {
  const { actors, image, release, title } = props;

  const year = new Date(release).getFullYear();
  return (
    <Card as="li">
      <StyledButtonBase>
        <Image src={image} />

        <Info>
          <Title variant="h6" as="h2">
            {title}
          </Title>
          <dl>
            <Line>
              <dt>Release:&nbsp;</dt>
              <dd>{year}</dd>
            </Line>
          </dl>
          <dl>
            <Line>
              <dt>Actors:&nbsp;</dt>
              <dd>{actors}</dd>
            </Line>
          </dl>
          <Typography>{year}</Typography>
        </Info>

        <ArrowForwardIos />
      </StyledButtonBase>
    </Card>
  );
};
