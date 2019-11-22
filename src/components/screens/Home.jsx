import React from 'react'
import Header from '../Header'
import '../css/Home.css'

function Home(props) {

    const addSrc = (ev) => {
        ev.target.src = "http://lorempixel.com/640/480/nature"
        ev.target.onerror = null;
    }
    return (
        <>
            <Header isLogged={props.isLogged} />
            <div className='mainBody'>
                <div className='color'>

                    <div className='demobox'>
                        <img src="https://i.imgur.com/kbtLCIE.png" onError={(e) => addSrc(e)} alt="demo 1" />
                        <div className='description'>
                            <h3>Create a list of Jobs</h3>
                            <p>Organize your job hunt in one place. A place you can update and manage the list of jobs you hve applied to.</p>
                        </div>
                    </div>

                    <div className='demobox'>
                        <img className='middleImg' src="https://i.imgur.com/DORv8S6.png" onError={(e) => addSrc(e)} alt="demo 2" />
                        <div className='description'>
                            <h3>Organize your search</h3>
                            <p>Searh for jobs you hve added. With a detailed job description to add more notes if needed </p>
                        </div>
                    </div>

                    <div className='demobox'>
                        <img src="https://i.imgur.com/FuLX2eF.png" alt="demo 3" onError={(e) => addSrc(e)} />
                        <div className='description'>
                            <h3>Get similar jobs to help you search for jobs.</h3>
                            <p>Get a list of jobs related to the search to find other jobs you may be interested in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home