import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './overview-card.css';

class OverviewCard extends Component {
    state = {  } 
    render() { 
        return  <>
                    <div className="card">
                        <img src={"/assets/img/"+this.props.image} className="card-img-top" alt={this.props.imageAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>
                          <NavLink to={"/angebote-leistungen/"+this.props.path} className="btn btn-primary">Weitere Infos</NavLink>
                        </div>
                    </div>
                </>;
    }
}
 
export default OverviewCard;