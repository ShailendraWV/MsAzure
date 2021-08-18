/**
 * @description - This file contains the constants used in the application
 * */

exports.status = {
    success: 200,
    successCreated: 201,
    accepted: 202,
    successNoRecords: 204,
    badRequest: 400, // if parameter missing
    unauthenticated: 401, // if token is invalid
    unauthorized: 403, // if token is invalid
    conflict: 409,
    unsupportedMediaType: 422,
    sessionExpired: 440, // if the token is expired
    internalServerError: 500
}

exports.message = {
    success: "SUCCESS",
    failure: "FAILURE",
    internalServerError: "INTERNAL SERVER ERROR",
    sessionExpired: "SESSION EXPIRED",
    parameterMissing: "PARAMETER MISSING",
    unauthenticated: "You are not authenticated user.",
    unauthorized: "You are not authorized to perform this action",
    tokenMissing: "TOKEN MISSING",
    conflict: "CONFLICT",
    unsupportedMediaType: "UNSUPPORTED MEDIA TYPE",
    organizationExist: "Organization with following email is already exist",
    engagementExist: "This engagement is already exist and cannot be created again.",
    onBoardingSuccess: "Onboarded successfully",
    promoteSuccess: "Promoted successfully",
    storySavedSuccess: "Story saved successfully!",
    companySavedSuccess: "Company saved successfully!",
    founderSavedSuccess: "Founder saved successfully!",
    storyFetchedSuccess: "Story fetched successfully!",
    noDataFound: "No data found!"
}

exports.accessApis = {
    // public api route
    read: 'read',
    play: 'play',
    learn: 'learn',

    // logged in user api route
    user: 'user',
    founder: 'founder',
    admin: 'admin',
    masterAdmin: 'masterAdmin',

    // admin / founder only apis route
    story: 'story',
    company: 'company',
    complexity: 'complexity',
    game: 'game',
    utbt: 'utbt',
}

exports.accessRights = {
    read: 'read',
    create: 'create',
    update: 'update',
    delete: 'delete'
}

// if adding any more role please also update the roles object in 8infinity-sso project
exports.roles = {
    user: 'user',
    founder: 'founder',
    admin: 'admin',
    masterAdmin: 'masterAdmin'
}

exports.storyStatus = {
    interview: 'INTERVIEW',
    transcript: 'TRANSCRIPT',
    editing: 'EDITING',
    design: 'DESIGN',
    publish: 'PUBLISH',
    draft: 'DRAFT'
}

exports.storyReadType = {
    story: 'offounder',
    complexity: 'byfounder'
}

exports.storyCategories = {
    courage: 'COURAGE',
    honesty: 'HONESTY',
    empathy: 'EMPATHY',
    observe: 'OBSERVE',
    listen: 'LISTEN',
    questions: 'QUESTIONS',
    beAraew: 'BEARAEW',
    accept: 'ACCEPT',
    act: 'ACT'
}

