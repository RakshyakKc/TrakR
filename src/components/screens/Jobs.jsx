import React from 'react'
import '../css/Jobs.css'
import { getData, createData, getJobId, getRelatedJobs } from '../../services/ApiCalls';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            position: '',
            company: '',
            notes: '',
            link: '',
            createdAt: new Date().toLocaleString(),
            errorMsg: '',
            jobSearchApi: '',
            relatedJobs: [],
            autofillJobs: [],
            colors: ['black', 'blue', 'dg', 'gold', 'grey', 'lg', 'orange', 'pink', 'red', 'violet'],

        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const jobsData = await getData()
        this.setState((state) => ({
            jobs: jobsData.data[0].jobs
        }))
    }
    addSrc = (e) => {
        e.target.src = "http://lorempixel.com/640/480/nature";
        e.target.onerror = null;
    }
    displayData = () => {
        return this.state.jobs.map((job, index) => {
            return (
                <div className='job' key={index}>
                    <div className='image'>
                    <img src={`http://icons.iconarchive.com/icons/hydrattz/multipurpose-alphabet/128/Letter-${job.company[0].toUpperCase()}-${ this.state.colors[ parseInt((Math.floor(Math.random() * 9) )) ] }-icon.png`} alt="company logo" onError={(e) => { this.addSrc(e) }} />
                    </div>
                    <div className='job-description'>
                        <h3>{job.position}</h3>
                        <p><span>Company: </span>{job.company}</p>
                        <p><span>Notes: </span>{job.notes}</p>
                        <p><span>Added on: </span>{job.createdAt}</p>
                        <p><a href={job.link}>Link to job</a></p>
                    </div>
                </div>
            )
        })
    }
    showJobs = () => {
        const dataList = this.state.autofillJobs.map((job, index) => {
            return (
                <option key={index} value={job.suggestion}></option>
            )
        })
        return (
            <datalist id='jobAuto'>
                {dataList}
            </datalist>
        )
    }
    handlePosition = async (event) => {
        this.handleChange(event)
        let userInput = this.state.position
        if (userInput.length > 3) {
            const jobs = await getJobId(userInput)
            const filteredJobs = jobs.data.filter((job) => {
                if (userInput) {
                    return job.suggestion
                }
                else return false
            })
            this.setState((state) => ({ autofillJobs: [...filteredJobs, ] }))
        }
        this.showJobs()
    }

    createPost = () => {

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add a job posting</h2>
                <input list='jobAuto' name='position' placeholder='Job position' autoComplete='off' value={this.state.position} onChange={(e) => this.handlePosition(e)} />
                <input list='company' name='company' placeholder='Company Name' autoComplete='off' value={this.state.company} onChange={(e) => this.handleChange(e)} />
                {this.showJobs()}
                <input name='notes' placeholder='Notes' autoComplete='off' value={this.state.notes} onChange={(e) => this.handleChange(e)} />
                <input name='link' placeholder='Job Link' autoComplete='off' value={this.state.link} onChange={(e) => this.handleChange(e)} />
                <input type="submit" value="Add Post" />
            </form>
        )
    }

    searchJobsFromApi = () => {
        return (
            <form onSubmit={(e) => this.handleSubmitApi(e)}>
                <h2>Search simillar jobs</h2>
                <input name='jobSearchApi' autoComplete='off' value={this.state.jobSearchApi} onChange={this.handleChange} />
                <input type="submit" value="Search" />
            </form>
        )
    }
    handleSubmitApi = async (event) => {
        event.preventDefault()
        const resp = await getJobId(this.state.jobSearchApi)
        const related = await getRelatedJobs(resp.data[0].uuid)
        const relatedJobNames = related.data.related_job_titles.map((title, index) => {
            return title.title
        })
        this.setState( (state) => ({ relatedJobs: [...relatedJobNames] }))
        this.displaySimillarJobs()
    }

    displaySimillarJobs = () => {
        return this.state.relatedJobs.splice(0,10).map( (job) => {
            return <p>{job}</p>
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { position, company, notes, link, createdAt } = this.state
        const data = {
            position,
            company,
            notes,
            link,
            createdAt
        }
        if (data.position && data.company) {
            createData(data)
                .then(response => response.status === 201 ? this.props.history.push('/jobs') : null)
                .catch(() => this.setState({ errorMsg: 'there was an error' }))
                alert('Job has been posted!')
        }
    }
    render() {

        return (
            <div className='job-main'>
                <aside>
                    {this.searchJobsFromApi()}
                    {this.displaySimillarJobs()}
                </aside>
                <div className='jobs-container'>
                    {this.createPost()}
                    <div className='jobs'>
                        {this.displayData()}
                    </div>
                </div>
            </div>
        )
    }

}
export default Jobs