import { Preview } from "./Preview.tsx";
import { faker } from "@faker-js/faker";
export const mocks = {
  basic: (): Preview => ({
    actors: faker.number.int({ min: 1, max: 12 }),
    id: index + 1,
    image: faker.image.urlPicsumPhotos(),
    release: faker.date.past().toString(),
    title: faker.datatype.boolean()
      ? faker.lorem.words(4)
      : faker.lorem.words(7),
  }),
};
