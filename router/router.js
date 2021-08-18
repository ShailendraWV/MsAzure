module.exports = (router) => {
    let {apiPath} = require('./../constant')
    let {
        CountryApis,
        CityApis,
        InterestCategoryApis,
        InterestThemeApis,
        ActivitiesApis,
        UserRoleApis,
        UsersApis,
        ClubsApis
    } = require('./../api');

    /**************************************************Country***************************************************/
    router.post(apiPath.country.add, CountryApis.add)
    router.post(apiPath.country.update, CountryApis.update)
    router.post(apiPath.country.delete, CountryApis.delete)
    router.get(apiPath.country.list, CountryApis.get)
    router.get(apiPath.country.details, CountryApis.details)
    /**************************************************************************************************************/
    /**************************************************City***************************************************/
    router.post(apiPath.city.add, CityApis.add)
    router.post(apiPath.city.update, CityApis.update)
    router.post(apiPath.city.delete, CityApis.delete)
    router.get(apiPath.city.list, CityApis.get)
    router.get(apiPath.city.details, CityApis.details)
    /**************************************************************************************************************/
    /**************************************************Interest Category***************************************************/
    router.post(apiPath.interestCategory.add, InterestCategoryApis.add)
    router.post(apiPath.interestCategory.update, InterestCategoryApis.update)
    router.post(apiPath.interestCategory.delete, InterestCategoryApis.delete)
    router.get(apiPath.interestCategory.list, InterestCategoryApis.get)
    router.get(apiPath.interestCategory.details, InterestCategoryApis.details)
    /**************************************************************************************************************/
    /**************************************************Interest Theme***************************************************/
    router.post(apiPath.interestTheme.add, InterestThemeApis.add)
    router.post(apiPath.interestTheme.update, InterestThemeApis.update)
    router.post(apiPath.interestTheme.delete, InterestThemeApis.delete)
    router.get(apiPath.interestTheme.list, InterestThemeApis.get)
    router.get(apiPath.interestTheme.details, InterestThemeApis.details)
    /**************************************************************************************************************/
    /**************************************************Activities***************************************************/
    router.post(apiPath.activities.add, ActivitiesApis.add)
    router.post(apiPath.activities.update, ActivitiesApis.update)
    router.post(apiPath.activities.delete, ActivitiesApis.delete)
    router.get(apiPath.activities.list, ActivitiesApis.get)
    router.get(apiPath.activities.details, ActivitiesApis.details)
    /**************************************************************************************************************/
    /**************************************************User Role***************************************************/
    router.post(apiPath.userRole.add, UserRoleApis.add)
    router.post(apiPath.userRole.update, UserRoleApis.update)
    router.post(apiPath.userRole.delete, UserRoleApis.delete)
    router.get(apiPath.userRole.list, UserRoleApis.get)
    router.get(apiPath.userRole.details, UserRoleApis.details)
    /**************************************************************************************************************/
    /**************************************************CLubs***************************************************/
    router.post(apiPath.clubs.add, ClubsApis.add)
    router.post(apiPath.clubs.update, ClubsApis.update)
    router.post(apiPath.clubs.delete, ClubsApis.delete)
    router.get(apiPath.clubs.list, ClubsApis.get)
    router.get(apiPath.clubs.details, ClubsApis.details)
    /**************************************************************************************************************/
    /**************************************************Users***************************************************/
    router.post(apiPath.users.add, UsersApis.add)
    router.post(apiPath.users.update, UsersApis.update)
    router.post(apiPath.users.delete, UsersApis.delete)
    router.get(apiPath.users.list, UsersApis.get)
    router.get(apiPath.users.details, UsersApis.details)
    /**************************************************************************************************************/
    return router
}
