import * as React from 'react';
import { Component } from 'react';


class About extends Component{
    
    constructor(props?: any, context?: any){
        super(props,context);
    }
    
    state:any = {
        posts: [],
        media:''
    };
    
    componentDidMount(){
        let Url = "http://amirtvkli.ir/wordpress/index.php/wp-json/wp/v2/pages?slug='about'&type='page'"
        fetch(Url)
        .then(response => response.json())
        .then(response =>{
            this.setState({
                posts:response
            })
        })
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
        let aboutPageContents = this.state.posts.map((post:any,index:any)=>{
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
                        <img src={this.state.media}></img>
                    </div>
                    {aboutPageContents}
                </div>
            </div>
        )
    }
}

export default About;