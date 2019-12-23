import React from 'react';
import './PartySlot.css';

export interface Pokemon {
    Name: string,
    Type: string
}

class PartySlot extends React.Component<{Poke:Pokemon, Level: number, Route: string, Nickname: string}> {
    render(){
        return (
            <div className="party-slot">
                <h2 className="party-slot-title">{this.props.Poke.Name}</h2>
                <span>{this.props.Poke.Type}</span>
                <p className="party-slot-level">Lvl. {this.props.Level}</p>
                <p className="party-slot-level">Route: {this.props.Route}</p>
                <p className="party-slot-level">Nickname: {this.props.Nickname}</p>
            </div>
        );
  }
}

export default PartySlot;