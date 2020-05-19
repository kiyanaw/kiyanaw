/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnquiry = `mutation CreateEnquiry(
  $input: CreateEnquiryInput!
  $condition: ModelEnquiryConditionInput
) {
  createEnquiry(input: $input, condition: $condition) {
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
        languageIndex
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
export const updateEnquiry = `mutation UpdateEnquiry(
  $input: UpdateEnquiryInput!
  $condition: ModelEnquiryConditionInput
) {
  updateEnquiry(input: $input, condition: $condition) {
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
        languageIndex
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
export const deleteEnquiry = `mutation DeleteEnquiry(
  $input: DeleteEnquiryInput!
  $condition: ModelEnquiryConditionInput
) {
  deleteEnquiry(input: $input, condition: $condition) {
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
        languageIndex
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
export const createResponse = `mutation CreateResponse(
  $input: CreateResponseInput!
  $condition: ModelResponseConditionInput
) {
  createResponse(input: $input, condition: $condition) {
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const updateResponse = `mutation UpdateResponse(
  $input: UpdateResponseInput!
  $condition: ModelResponseConditionInput
) {
  updateResponse(input: $input, condition: $condition) {
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const deleteResponse = `mutation DeleteResponse(
  $input: DeleteResponseInput!
  $condition: ModelResponseConditionInput
) {
  deleteResponse(input: $input, condition: $condition) {
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const createMedia = `mutation CreateMedia(
  $input: CreateMediaInput!
  $condition: ModelMediaConditionInput
) {
  createMedia(input: $input, condition: $condition) {
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
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        username
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const updateMedia = `mutation UpdateMedia(
  $input: UpdateMediaInput!
  $condition: ModelMediaConditionInput
) {
  updateMedia(input: $input, condition: $condition) {
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
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        username
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const deleteMedia = `mutation DeleteMedia(
  $input: DeleteMediaInput!
  $condition: ModelMediaConditionInput
) {
  deleteMedia(input: $input, condition: $condition) {
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
        table
        owner
      }
      owner
      media {
        nextToken
      }
      warrior {
        id
        username
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
      username
      language
      dialect
      region
      favorites
      playlist
      isWarrior
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
export const createWarrior = `mutation CreateWarrior(
  $input: CreateWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  createWarrior(input: $input, condition: $condition) {
    id
    username
    language
    dialect
    region
    favorites
    playlist
    isWarrior
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
export const updateWarrior = `mutation UpdateWarrior(
  $input: UpdateWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  updateWarrior(input: $input, condition: $condition) {
    id
    username
    language
    dialect
    region
    favorites
    playlist
    isWarrior
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
export const deleteWarrior = `mutation DeleteWarrior(
  $input: DeleteWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  deleteWarrior(input: $input, condition: $condition) {
    id
    username
    language
    dialect
    region
    favorites
    playlist
    isWarrior
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
