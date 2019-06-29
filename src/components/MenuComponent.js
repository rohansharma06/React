import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponents';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
        //console.log('Menu Component constructor is invoked')
    }
    onDishSelect(dish) {
      this.setState({ selectedDish: dish });
      //this.renderDish(dish);
  }

  renderDish(dish) {
      if (dish != null) {
          return (
              <DishDetail key={dish.id} selectedDish={dish} />
          )
      } else {
          return (
              <div></div>
          )
      }
  }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

    
}

export default Menu;