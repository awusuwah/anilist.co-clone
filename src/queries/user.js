/**
 * Prepare the user string with all the variables filled in and retrun it.
 *
 * @param { string } username - The username used in the query.
 */
export const userQuery = (username) => {
  return `
    query {
      User(name: "${username}") {
        id
        name
        avatar {
          medium
          large
        }
        bannerImage
        donatorBadge
        favourites {
          anime {
            nodes {
              id
              coverImage {
                large
              }
              title {
                userPreferred
              }
            }
          }
          characters {
            nodes {
              id
              image {
                large
              }
              name {
                userPreferred
              }
            }
          }
        }
        statistics {
          anime {
            genres (limit: 6, sort: COUNT_DESC) {
              genre
              count
            }
          }
        }
      }
    }
  `;
};
