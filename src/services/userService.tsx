import User from '../interfaces/user';
import apolloClient from '../plugins/apollo';
import { gql } from '@apollo/client';

export const userService = {
  fetchUsers: async (query: string) => {
    let users: Array<User> = [];
    if (!query) return users;
    await apolloClient
      .query({
        query: gql`
            {
            search(query: "${query}", type: USER, first: 10) {
                nodes {
                    ... on User {
                    avatarUrl
                    id
                    login
                    url
                    }
                }
            }
            }
        `,
      })
      .then((result) => {
        users = result.data.search.nodes;
      });
    return users;
  },
};
