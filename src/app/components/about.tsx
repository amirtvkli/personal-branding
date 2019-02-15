import * as React from 'react';
import { Component } from 'react';
declare var require: any;
let loadingGif = require('assets/images/loading-gif.gif');


class About extends Component{
    state:any;
    constructor(props?: any, context?: any){
        super(props,context);
         this.state = {
            posts: [],
            media:'',
            isLoading: false,
            error:null
        };
    }
    
   
    
    componentDidMount(){
        this.setState({isLoading:true});
        let Url = "http://amirtvkli.ir/wordpress/index.php/wp-json/wp/v2/pages?slug='about'&type='page'";
        
        fetch(Url)
        .then(response => response.json())
        .then(response =>{
            this.setState({
                posts:response,
                isLoading:false
            })
        })
        .catch(error => this.setState({
            error,
            isLoading: false
        }));
     
    }
    
    getImageUrlfromPost(post:any){
        return post["_links"]['wp:featuredmedia'][0]['href'];
    }
    getImageSrcfromUrl(imgSrc:string){
        fetch(imgSrc) 
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                media: response['source_url']
            })
        })
    }
    render(){   
        const { posts, media, isLoading, error } = this.state;

        if (error) {
            return (
                <div className="row justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center col-md-9 page__container page__content">
                        <p>{error.message}</p>
                    </div>
                </div>  
                );
        }

        if (isLoading) {
            return  (
                <div className="row justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center col-md-9 page__container page__content">
                        <img src={loadingGif}></img>
                    </div>
                </div>  
            )
        }

        let aboutPageContents = posts.map((post:any,index:any)=>{
            let img = this.getImageUrlfromPost(post);
            this.getImageSrcfromUrl(img);
            return (
                <div className="col-md-6 page__content" key={index}>
                    <h1>{post.title.rendered}</h1>
                    <p>{post.content.rendered}</p>
                </div>
                )
            })
        return (
            <div className="row justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center col-md-9 page__container">
                    <div className="col-md-3">
                        <img src={media}></img>
                    </div>
                    {aboutPageContents}
                </div>
            </div>
        )
    }
}

export default About;