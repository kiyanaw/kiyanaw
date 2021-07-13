/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
    id
    createdAt
    text
    extra
    languageIndex
    warriorId
    link
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
export const updateQuestion = `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
    id
    createdAt
    text
    extra
    languageIndex
    warriorId
    link
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
export const deleteQuestion = `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
    id
    createdAt
    text
    extra
    languageIndex
    warriorId
    link
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    createdAt
    text
    targetId
    warriorId
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    createdAt
    text
    targetId
    warriorId
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    createdAt
    text
    targetId
    warriorId
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
export const createWarrior = `mutation CreateWarrior(
  $input: CreateWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  createWarrior(input: $input, condition: $condition) {
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
export const updateWarrior = `mutation UpdateWarrior(
  $input: UpdateWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  updateWarrior(input: $input, condition: $condition) {
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
export const deleteWarrior = `mutation DeleteWarrior(
  $input: DeleteWarriorInput!
  $condition: ModelWarriorConditionInput
) {
  deleteWarrior(input: $input, condition: $condition) {
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
