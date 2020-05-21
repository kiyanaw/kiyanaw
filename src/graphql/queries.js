/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnquiry = `query GetEnquiry($id: ID!) {
  getEnquiry(id: $id) {
    id
    createdAt
    updatedAt
    text
    extra
    languageIndex
    type
    warriorId
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
        languageIndex
        enquiryId
        warriorId
        table
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
      favorites
      playlist
      isWarrior
      enquiries {
        nextToken
      }
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
      warriorId
      table
      owner
      responses {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const byEnquiryCreatedAt = `query ByEnquiryCreatedAt(
  $table: EnquiryType
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  byEnquiryCreatedAt(
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
      warriorId
      table
      owner
      responses {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const byEnquiryUpdatedAt = `query ByEnquiryUpdatedAt(
  $table: EnquiryType
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  byEnquiryUpdatedAt(
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
      warriorId
      table
      owner
      responses {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const enquiryByWarrior = `query EnquiryByWarrior(
  $warriorId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelEnquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  enquiryByWarrior(
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
      languageIndex
      type
      warriorId
      table
      owner
      responses {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
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
    languageIndex
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
      warriorId
      table
      owner
      responses {
        nextToken
      }
      warrior {
        id
        name
        language
        dialect
        region
        favorites
        playlist
        isWarrior
        owner
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
      favorites
      playlist
      isWarrior
      enquiries {
        nextToken
      }
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
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const byResponseCreatedAt = `query ByResponseCreatedAt(
  $table: ResponseType
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  byResponseCreatedAt(
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
      type
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const byResponseUpdatedAt = `query ByResponseUpdatedAt(
  $table: ResponseType
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  byResponseUpdatedAt(
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
      type
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const responseByEnquiry = `query ResponseByEnquiry(
  $enquiryId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responseByEnquiry(
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
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const responseByWarrior = `query ResponseByWarrior(
  $warriorId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responseByWarrior(
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
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
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
      languageIndex
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
        warriorId
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
        favorites
        playlist
        isWarrior
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
      favorites
      playlist
      isWarrior
      enquiries {
        nextToken
      }
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
        languageIndex
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const mediaByResponse = `query MediaByResponse(
  $responseId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  mediaByResponse(
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
        languageIndex
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const mediaByWarrior = `query MediaByWarrior(
  $warriorId: ID
  $sortDirection: ModelSortDirection
  $filter: ModelMediaFilterInput
  $limit: Int
  $nextToken: String
) {
  mediaByWarrior(
    warriorId: $warriorId
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
        languageIndex
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
        favorites
        playlist
        isWarrior
        owner
      }
    }
    nextToken
  }
}
`;
export const listWarriors = `query ListWarriors(
  $id: ID
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
      favorites
      playlist
      isWarrior
      enquiries {
        nextToken
      }
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
export const getWarrior = `query GetWarrior($id: ID!) {
  getWarrior(id: $id) {
    id
    name
    language
    dialect
    region
    favorites
    playlist
    isWarrior
    enquiries {
      items {
        id
        createdAt
        updatedAt
        text
        extra
        languageIndex
        type
        warriorId
        table
        owner
      }
      nextToken
    }
    responses {
      items {
        id
        createdAt
        updatedAt
        text
        extra
        type
        languageIndex
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
export const warriorByName = `query WarriorByName(
  $name: String
  $sortDirection: ModelSortDirection
  $filter: ModelWarriorFilterInput
  $limit: Int
  $nextToken: String
) {
  warriorByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      language
      dialect
      region
      favorites
      playlist
      isWarrior
      enquiries {
        nextToken
      }
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
