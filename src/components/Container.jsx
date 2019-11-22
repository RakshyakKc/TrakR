import React from 'react'
import { Routes } from '../routes'
import Nav from './Nav'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            srarch: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addDefaultSrc = ev => {

    }

    render() {
        return (
            <>
                <Nav addSrc={ (e) => this.addDefaultSrc(e)} isLogged={this.props.isLogged} onChange={this.handleChange} data={this.state} />
                <main>
                    <Routes data={this.state} />
                </main>
            </>
        )
    }
}

export default Container