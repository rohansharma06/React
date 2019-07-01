import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <div>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </div>   
            )
        })
        return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

    

    render() {
        const dish = this.props.dish
        if (dish != null) {
            const dishItem = this.renderDish(dish)
            const commentItem = this.renderComments(dish.comments)
            return (
                <div className="container">
                    <div  className="row">
                        {dishItem}
                        {/* {commentItem} */}
                    </div>
                </div>
            )
        }
        else{
            return (<div></div>)
        }
    }
}

export default Dishdetail