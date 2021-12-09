import React, { Component } from 'react'

import axios from 'axios';
 class LatestPhotos extends Component {

    state = {
        photos: [],
        page : 1,
        loading : true
    }

    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=VTrrCICH55fFhct5cDODnu-a4PHup69YD88KzpNwiqE&per_page=16&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data,
                loading : false,
                page: this.state.page + 1
            })
        )

    }

    LoadNextPage = (e) => {
        this.setState({page: this.state.page + 1});
        axios.get('https://api.unsplash.com/photos/?client_id=VTrrCICH55fFhct5cDODnu-a4PHup69YD88KzpNwiqE&per_page=16&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data,
                loading : false,
                page: this.state.page + 1,
            })
        )

        // akhane amra axios k trigger kore dilam

        
       
    }

    render() {
        console.log(this.state.photos);
        
            // return this.state.photos.map((photo) => (
            //     <div key={photo.id} className="col-lg-3">
            //         <div className="single-photo-item">
            //             <a href="/" className="d-block">
            //                 <div className="photo-wrapper">
            //                     <img src={photo.urls.small} alt={photo.description}/>
            //                 </div>
            //                 <h5>{photo.description}</h5>
            //                 <p className="cat-name">{photo.user.first_name} {photo.user.last_name}</p>
            //             </a>
            //         </div>
            //     </div>
            // ))

        if(this.state.loading === true){
            return (
                <div className="col text-center">Loading</div>
            )
        }

        return (
            <React.Fragment>
                {
                    this.state.photos.map((photo) => (
                        <div key={photo.id} className="col-lg-3">
                            <div className="single-photo-item">
                                <a href="/" className="d-block">
                                    <div className="photo-wrapper">
                                        <img src={photo.urls.small} alt={photo.description}/>
                                    </div>
                                    <h5>{photo.description}</h5>
                                    <p className="cat-name">{photo.user.first_name} {photo.user.last_name}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }

                <div className="col-lg-12">
                    <div className="load-more-btn">
                        <button onClick={this.LoadNextPage}>Load More {this.state.page}</button>
                    </div>
                </div>
            </React.Fragment>
        )
           
            
            
       
    }
}

export default LatestPhotos;