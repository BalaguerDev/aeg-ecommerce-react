import React, { Component } from 'react'

function fetchData() {
    const url = 'http://localhost:3000/users'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({ users: data})

         })
    .catch(error => console.log('oops run to the hills!!!!', error))
}


export default fetchData;