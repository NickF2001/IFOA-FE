import React, {Component} from 'react';

class SingleAppointment extends Component {
    render() {
        const {item, removeAppointment} = this.props;

        return(
            <article>
                <img src={item.img} alt={item.nome} className='person-img' />
                <div className="person-info">
                    <div className="person-action">
                        <h4>{item.nome}</h4>
                        <button className='btn' onClick={() => removeAppointment(item.id)}>
                            Delete
                        </button>
                    </div>
                    <p>{item.stato}</p>
                </div>
            </article>
        )
    }
}

export default SingleAppointment