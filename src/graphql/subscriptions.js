/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEnquiry = `subscription OnCreateEnquiry($owner: String) {
  onCreateEnquiry(owner: $owner) {
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
export const onUpdateEnquiry = `subscription OnUpdateEnquiry($owner: String) {
  onUpdateEnquiry(owner: $owner) {
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
export const onDeleteEnquiry = `subscription OnDeleteEnquiry($owner: String) {
  onDeleteEnquiry(owner: $owner) {
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
export const onCreateResponse = `subscription OnCreateResponse($owner: String) {
  onCreateResponse(owner: $owner) {
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
export const onUpdateResponse = `subscription OnUpdateResponse($owner: String) {
  onUpdateResponse(owner: $owner) {
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
export const onDeleteResponse = `subscription OnDeleteResponse($owner: String) {
  onDeleteResponse(owner: $owner) {
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
export const onCreateMedia = `subscription OnCreateMedia($owner: String) {
  onCreateMedia(owner: $owner) {
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
export const onUpdateMedia = `subscription OnUpdateMedia($owner: String) {
  onUpdateMedia(owner: $owner) {
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
export const onDeleteMedia = `subscription OnDeleteMedia($owner: String) {
  onDeleteMedia(owner: $owner) {
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
export const onCreateWarrior = `subscription OnCreateWarrior($owner: String) {
  onCreateWarrior(owner: $owner) {
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
export const onUpdateWarrior = `subscription OnUpdateWarrior($owner: String) {
  onUpdateWarrior(owner: $owner) {
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
export const onDeleteWarrior = `subscription OnDeleteWarrior($owner: String) {
  onDeleteWarrior(owner: $owner) {
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
