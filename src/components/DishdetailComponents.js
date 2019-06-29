import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: this.props.selectedDish
        };
        // console.log('DishDetail Component constructor is invoked');
    }
    render() {
        //console.log('DishDetail Component render is invoked');
        return this.renderDish(this.state.selectedDish);
    }

    renderDish(selectedDish) {
        if (selectedDish != null) {
            return (
                <div className="row">
                    <div key={selectedDish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                                <CardTitle>{selectedDish.name}</CardTitle>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div key={selectedDish.id + "_comments"} className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {

        if (comments) {
            const commmentsView = comments.map((currComment) => {
                return (
                    <li className="list-group-item" key={currComment.id}>
                        <h4>{currComment.comment}</h4>
                        <h6>{"--" + currComment.author + " - " + (new Date(currComment.date).toLocaleString('en-US'))}</h6>
                    </li>
                )
            });
            return (
                <div>
                    <h2>Comments</h2>
                    <ul className="list-group">
                        {commmentsView}
                    </ul>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default DishDetail;