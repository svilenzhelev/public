import React from 'react';

import { formatCount, formatPercentage } from '../Util';

export default props => {

    let displayParties = [];

    for(var i = 0; i < props.results.length; i += 3) {
        displayParties.push({
            number: props.results[i],
            validVotes: props.results[i+1],
            invalidVotes: props.results[i+2],
            ...props.parties[props.results[i]]
        });
    }

    let displayPartiesTotal = 0;
    let displayPartiesTotalInvalid = 0;
    
    displayParties = displayParties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    displayParties.forEach(party => {displayPartiesTotal += party.validVotes; displayPartiesTotalInvalid += party.invalidVotes});

    const generateTooltip = (color, partyName, percentage, validVotes, invalidVotes) => {
        return (
            '<div>' +
                `<h2 style=\"margin: 5px; color: ${color}\">` +
                    `${partyName} <span style=\"float: right;\">${formatPercentage(percentage)}%</span>` +
                `</h2>` +
                '<hr style=\"border-color: #aaa; border-top: none;\"/>' +
                '<table style=\"width: 100%;\"><tbody>' +
                    '<tr>' +
                        '<td>Действителни</td>' +
                        `<td style=\"text-align: right;\">${formatCount(validVotes)}</td>`+ 
                    '</tr>' +
                    '<tr>' +
                        '<td>Недействителни</td>' +
                        `<td style=\"text-align: right;\">${formatCount(invalidVotes)}</td>`+ 
                    '</tr>' +
                '</tbody></table>'+
            '</div>'
        )
    };

    return(
        <div className='results-line'>
            {
                displayParties.map(party => {
                    const percentage = party.validVotes / props.totalValid;
                    return(
                        <div 
                            className={props.thin? 'result-line-segment thin' : 'result-line-segment'}
                            style={{
                                backgroundColor: party.color,
                                width: `${percentage * 100}%`
                            }}
                            data-tip={generateTooltip(party.color, party.name, percentage, party.validVotes, party.invalidVotes)}
                        />
                    )  
                })
            }
            <div 
                className={props.thin? 'result-line-segment thin' : 'result-line-segment'}
                style={{width: `${(props.totalValid - displayPartiesTotal) / props.totalValid * 100}%`}}
                data-tip={generateTooltip('#ddd', 'Други', (props.totalValid - displayPartiesTotal) / props.totalValid, props.totalValid - displayPartiesTotal, props.totalInvalid - displayPartiesTotalInvalid)}
            />
            {!props.showLegend? null :
                <div className='legend'>
                {
                    displayParties.map(party => 
                        <div className={'legend-item'}> 
                            <div className='legend-item-color' style={{backgroundColor: party.color}}/>
                            {party.name}            
                        </div>
                    )
                }
                </div>
            }
        </div>
    )
}