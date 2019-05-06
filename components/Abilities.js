import React from 'react'
import data from '../data/abilities';

const Abilities = (props) => (
<div className="abilities">
    <h2>Abilities</h2>
    {data[props.raid][props.boss].map(ability => {
        return (
            <div className="ability">
                <div className="ability-icon">
                    <img src={ability.iconUrl} alt={ability.name}/>
                </div>
                <div className="ability-info">
                    <h3>
                    {ability.name}
                    </h3>
                    {ability.description}
                </div>
            </div>
        )
    })}
    
</div>
)

export default Abilities
