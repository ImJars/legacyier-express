import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    width: 40px;
    height: 3px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10px;
    transition: all .1s ease-in-out;
    :hover {
        background-color: #3399FF;
        
    }
`
const MenuBar = ({ classnames, handleClick, classnames2, classnames3, classnames4}) => {
    return ( 
        <>
            <div

            >
                <div
                    className='space-y-4'
                >
                    <Bar
                        className={ classnames }
                        onClick={ handleClick }    
                    />
                    <Bar className={ classnames2 }/>
                    <Bar className={ classnames3 }/>
                    <Bar className={ classnames4 }/>
                </div>
            </div>
        </>
     );
}
 
export default MenuBar;