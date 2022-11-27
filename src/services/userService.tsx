import User from '../interfaces/user';
import apolloClient from '../plugins/apollo';
import { gql } from '@apollo/client';
import Repository from '../interfaces/repository';

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
        users = users.filter((item) => item.avatarUrl && item.login);
      });
    return users;
  },
  fetchUserRepositories: async (userName: string, query: string) => {
    let repositories: Array<Repository> = [];
    await apolloClient
      .query({
        query: gql`
            {
                search(query: "user:${userName} ${query}", type: REPOSITORY, first: 10) {
                    pageInfo {
                        endCursor
                        startCursor
                        hasPreviousPage
                        hasNextPage
                    }
                    nodes {
                    ... on Repository {
                        name
                        description
                        forkCount
                        licenseInfo {
                        id
                        name
                        }
                        updatedAt
                        languages(first: 1) {
                        edges {
                            node {
                            name
                            color
                            }
                        }
                        }
                    }
                    }
                }
            }
        `,
      })
      .then((result) => {
        const searchResults = result.data.search;
        repositories = searchResults.nodes;
      });
    return repositories;
  },
  fetchUserByLogin: async (userName: string) => {
    let user: User = {
      login: userName,
    };
    await apolloClient
      .query({
        query: gql`{
          user(login: "${userName}") {
              login
              name
              avatarUrl
              bio
              followers{
                totalCount
              }
              following{
                totalCount
              }
              email
              company
          }
        }`,
      })
      .then((result) => {
        user = result.data.user;
      });
    return user;
  },
};
