import sanityClient from './sanity';
let sanityQuery = (query, params) => sanityClient.fetch(query, params);


// get Featured Restaurants
export const getFeaturedRestaurants = () => {
    return sanityQuery(`
        *[_type=='featured']{
            ..., 
            restaurants[]->{
                ...,dishes[]->{
                ...
                },
                type->{
                name
                }
            }
            }
        `)
}

// Get all Categories
export const getCategories= ()=>{
    return sanityQuery(`
        *[_type=='category']
        `)
}


// get Featured Restaurant by id
export const getFeaturedRestaurantById = (id) => {
    return sanityQuery(`
        *[_type=='featured' && _id== $id]{
            ..., 
            restaurants[]->{
                ...,dishes[]->{
                ...
                },
                type->{
                name
                }
            }
            }[0]
        `,{id})
}