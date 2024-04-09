import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
me {
   _id
   username
   trails {
      trailId
      name
      description
      image
   }
   completedTrails {
      trailName
      dateCompleted
      trailComment
   }
   }
}
`;

export const ALL_TRAILS = gql`
{
allTrails {
   _id
   trailId
   name
   description
   image
   comments {
      commentText
      likes
   }
   
   }
}
`;