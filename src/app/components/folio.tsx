import * as React from 'react';
import { Component } from 'react';


class Folio extends Component{
    
    constructor(props?: any, context?: any){
        super(props,context);
    }
    
    state:any = {
        posts: []
    };
    
    componentDidMount(){
        let Url = "http://amirtvkli.ir/wordpress/index.php/wp-json/wp/v2/posts"
        fetch(Url)
        .then(response => response.json())
        .then(response =>{
            this.setState({
                posts:response
            })
        })
    }
    
    render(){   
        let posts = this.state.posts.map((post:any,index:any)=>{
            return (
                <div key={index}>
                <h1>{post.title.rendered}</h1>
                <p>{post.content.rendered}</p>
                </div>
                )
            })
        return (
            <div className="App">
                {posts}
            </div>
        )
    }
}

export default Folio;