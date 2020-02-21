import React, { Component } from 'react';
import { connect } from 'react-redux';
import { blogList, removeBlog, addBlog } from '../actions';
import { image_path } from "../common";
class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "img": "blog/1.png",
            "title": "",
            "description": ""
        }
    }
    componentWillMount() {
        this.props.blogList()
    }
    blogItemFun = (data) => {
        console.log(data);
        if (data && data.length > 0) {
            return data.map((single_item, i) => {
                return (
                    <div className="col-lg-4 col-md-4" key={single_item.id}>
                        <div className="list_item">
                            <img src={`${image_path}${single_item.img}`} alt="" />
                            <h4>{single_item.title}</h4>
                            <p>{single_item.description}</p>
                            <button onClick={() => { this.props.removeBlog(single_item) }}>Remove</button>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className="App pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        {this.blogItemFun(this.props.blogs)}
                    </div>
                    <div className="row pt-4 pb-4">

                        <div className="add_form">
                            <h3>Add Item</h3>
                            <form action="#" onSubmit={(e) => {
                                e.preventDefault();
                                console.log(this.state);
                                this.props.addBlog({
                                    "id": Math.random(Math.random),
                                    "img": this.state.img,
                                    "title": this.state.title,
                                    "description": this.state.description
                                })
                            }}>

                                <div className="form-group">
                                    <input type="text" name="title" onChange={(e) => { this.setState({ title: e.target.value }) }} id="" className="form-control" placeholder="blog title" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="title" id="" onChange={(e) => { this.setState({ description: e.target.value }) }} className="form-control" placeholder="blog content" />
                                </div>

                                <div className="form-group">
                                    <input type="submit" className="form-control" value="submit" />
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({ blogs: state.blogs })
export default connect(mapStateToProps, { blogList, removeBlog, addBlog })(BlogList);
