import { faker } from '@faker-js/faker';

export const fakeUsers = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

// Fake function mocking an api
export const fetchUsers = async (searchedUsers) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fakeUsers.filter((user) =>
    user.name.includes(searchedUsers),
  );
};