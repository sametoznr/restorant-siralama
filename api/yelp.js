import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer OfbYEOzUwb8qMHNiQZ7lxXLK1A7ecIX7bBwHKPyqScW3iapSU494fGMyXzjy0W62kOV1U4-3fWH-MdZuVQhYunwCufZcsFwlm6ULwYOV01h5IAhNbz1jb4rdRY5laHYx',

    },
});