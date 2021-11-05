import styled from "styled-components";

const THEME = {

    important: {

        bg: '#A300FF',
        color: '#fff',
        onHover: `
        
        box-shadow: 0 3px 6px rgba(0, 0, 0, .1)
        
        `
    },

    urgent: {

        bg: '#FE00D6',
        color: '#fff',
        onHover: `
        
        box-shadow: 0 3px 6px rgba(0, 0, 0, .1)
        
        `
    },
    
    noImportant: {

        bg: '#02E627',
        color: '#fff',
        onHover: `
        
        box-shadow: 0 3px 6px rgba(0, 0, 0, .1)
        
        `
    },

    noUrgent: {

        bg: '#03BDFE',
        color: '#fff',
        onHover: `
        
        box-shadow: 0 2px 4px rgba(0, 0, 0, .1)
        
        `
    }

}

export const Wrapper = styled.div`

    text-align: left;
    display: flex;
    align-items: flex-start;

    width: auto;

`


export const ContainerThemes = styled.div <{classification: 'important' | 'urgent' | 'noImportant' | 'noUrgent'}>` 

    //text-align: center;
    //float: left;
    //clear: both;

    padding: 5px 25px;
    border-radius: 24px;

    //color: ${p => THEME[ p.classification ].color};
    background-color: ${p => THEME[ p.classification ].bg};

    &:hover, &:focus {

        ${p => THEME[ p.classification ].onHover};

    }

`



