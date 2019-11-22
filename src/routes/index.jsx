import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/screens/Home'
import Jobs from '../components/screens/Jobs'
import Search from '../components/screens/Search'
import DetailedJobs from '../components/screens/DetailedJobs'
import CreateJobs from '../components/screens/EditJobs'
import EditJobs from '../components/screens/CreateJobs'

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} props={props} />
            <Route exact path='/Jobs' component={props => <Jobs {...props.props} props={props.props}/>}/>
            <Route exact path='/Jobs/create' component={CreateJobs} />
            <Route exact path='/Jobs/edit' component={EditJobs} />
            <Route exact path='/Search' component={Search} />
            <Route exact path='/Jobs:job_id' component={DetailedJobs} />
        </Switch>
    )
}