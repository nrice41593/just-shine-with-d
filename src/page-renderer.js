import React from 'react';
import {useMatch} from 'react-router-dom'


const generatePage = page => {
    const component = () => require(`./pages/${page}.js`).default

    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error)
        return React.createElement(() => 404)
    }
}

export default function PageRenderer () {
    const {
        params: { page }
    } = useMatch()

    return generatePage(page)
}
