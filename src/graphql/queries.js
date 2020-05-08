/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listEnquirys = `query ListEnquirys(
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnquirys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      languageIndex
      type
      table
      owner
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEnquiry = `query GetEnquiry($id: ID!) {
  getEnquiry(id: $id) {
    id
    createdAt
    updatedAt
    text
    extra
    languageIndex
    type
    table
    owner
    responses {
      items {
        id
        createdAt
        updatedAt
        text
        extra
        type
        enquiryId
        warriorId
        table
        owner
      }
      nextToken
    }
  }
}
`;
export const getResponse = `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    createdAt
    updatedAt
    text
    extra
    type
    enquiryId
    warriorId
    table
    enquiry {
      id
      createdAt
      updatedAt
      text
      extra
      languageIndex
      type
      table
      owner
      responses {
        nextToken
      }
    }
    owner
    media {
      items {
        responseId
        warriorId
        url
        owner
      }
      nextToken
    }
    warrior {
      id
      name
      language
      dialect
      region
      responses {
        nextToken
      }
      media {
        nextToken
      }
      owner
    }
  }
}
`;
export const listResponses = `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      type
      enquiryId
      warriorId
      table
      enquiry {
        id
        createdAt
        updatedAt
        text
        extra
        languageIndex
        type
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    nextToken
  }
}
`;
export const byCreatedAt = `query ByCreatedAt(
  $table: EnquiryType
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  byCreatedAt(
    table: $table
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      languageIndex
      type
      table
      owner
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const byUpdatedAt = `query ByUpdatedAt(
  $table: EnquiryType
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  byUpdatedAt(
    table: $table
    updatedAt: $updatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      languageIndex
      type
      table
      owner
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const byEnquiry = `query ByEnquiry(
  $enquiryId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  byEnquiry(
    enquiryId: $enquiryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      type
      enquiryId
      warriorId
      table
      enquiry {
        id
        createdAt
        updatedAt
        text
        extra
        languageIndex
        type
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    nextToken
  }
}
`;
export const getMedia = `query GetMedia($id: ID!) {
  getMedia(id: $id) {
    responseId
    warriorId
    url
    response {
      id
      createdAt
      updatedAt
      text
      extra
      type
      enquiryId
      warriorId
      table
      enquiry {
        id
        createdAt
        updatedAt
        text
        extra
        languageIndex
        type
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    owner
    warrior {
      id
      name
      language
      dialect
      region
      responses {
        nextToken
      }
      media {
        nextToken
      }
      owner
    }
  }
}
`;
export const listMedias = `query ListMedias(
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      responseId
      warriorId
      url
      response {
        id
        createdAt
        updatedAt
        text
        extra
        type
        enquiryId
        warriorId
        table
        owner
      }
      owner
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    nextToken
  }
}
`;
export const byResponse = `query ByResponse(
  $responseId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  byResponse(
    responseId: $responseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      responseId
      warriorId
      url
      response {
        id
        createdAt
        updatedAt
        text
        extra
        type
        enquiryId
        warriorId
        table
        owner
      }
      owner
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    nextToken
  }
}
`;
export const byWarrior = `query ByWarrior(
  $warriorId: String
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  byWarrior(
    warriorId: $warriorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      text
      extra
      type
      enquiryId
      warriorId
      table
      enquiry {
        id
        createdAt
        updatedAt
        text
        extra
        languageIndex
        type
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        owner
      }
    }
    nextToken
  }
}
`;
export const listWarriors = `query ListWarriors(
  $id: String
  $filter: ModelWarriorFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listWarriors(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      language
      dialect
      region
      responses {
        nextToken
      }
      media {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getWarrior = `query GetWarrior($id: String!) {
  getWarrior(id: $id) {
    id
    name
    language
    dialect
    region
    responses {
      items {
        id
        createdAt
        updatedAt
        text
        extra
        type
        enquiryId
        warriorId
        table
        owner
      }
      nextToken
    }
    media {
      items {
        responseId
        warriorId
        url
        owner
      }
      nextToken
    }
    owner
  }
}
`;
